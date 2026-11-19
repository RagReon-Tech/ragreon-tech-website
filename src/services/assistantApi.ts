import type {
  ChatHistoryItem,
  ChatRequestPayload,
  ChatResponsePayload,
} from '@/types/assistant.types'

const API_ENDPOINT =
  import.meta.env.VITE_ASSISTANT_API_URL || '/api/assistant/chat'

const SESSION_RATE_KEY = 'ragreon_ai_rate_timestamps'
const MAX_SESSION_REQUESTS = 20
const SESSION_WINDOW_MS = 5 * 60 * 1000 // 5 minutes

/**
 * Checks client-side rate limits in sessionStorage to protect against rapid spam.
 */
function checkClientRateLimit(): { allowed: boolean; waitSecs: number } {
  try {
    const raw = sessionStorage.getItem(SESSION_RATE_KEY)
    const timestamps: number[] = raw ? JSON.parse(raw) : []
    const now = Date.now()
    const active = timestamps.filter((t) => now - t < SESSION_WINDOW_MS)

    if (active.length >= MAX_SESSION_REQUESTS) {
      const oldest = active[0]
      const waitSecs = Math.max(1, Math.ceil((oldest + SESSION_WINDOW_MS - now) / 1000))
      return { allowed: false, waitSecs }
    }

    active.push(now)
    sessionStorage.setItem(SESSION_RATE_KEY, JSON.stringify(active))
    return { allowed: true, waitSecs: 0 }
  } catch {
    return { allowed: true, waitSecs: 0 }
  }
}

/**
 * Sends a message and conversation history to the backend chat API.
 */
export async function sendChatMessage(
  message: string,
  history: ChatHistoryItem[] = [],
  conversationId?: string,
): Promise<ChatResponsePayload> {
  // 1. Client-side throttle
  const rateCheck = checkClientRateLimit()
  if (!rateCheck.allowed) {
    return {
      success: false,
      reply: '',
      error: `You've sent several messages recently. Please wait ${rateCheck.waitSecs} seconds before asking again.`,
    }
  }

  // 2. Build payload
  const payload: ChatRequestPayload = {
    message: message.trim(),
    conversationHistory: history,
    conversationId,
    clientTimestamp: Date.now(),
  }

  // 3. Abort controller for 45s timeout (allows bounded model fallbacks to complete)
  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), 45000)

  try {
    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    })

    clearTimeout(timeoutId)

    const data: ChatResponsePayload = await response.json().catch(() => ({
      success: false,
      reply: '',
      error: 'Received an invalid response from the server.',
    }))

    if (!response.ok) {
      return {
        success: false,
        reply: '',
        error:
          data.error ||
          (response.status === 429
            ? 'Rate limit exceeded. Please wait a moment before trying again.'
            : `Server responded with status ${response.status}.`),
      }
    }

    return data
  } catch (err: unknown) {
    clearTimeout(timeoutId)

    if (err instanceof Error && err.name === 'AbortError') {
      return {
        success: false,
        reply: '',
        error: 'The request timed out. Please check your internet connection and try again.',
      }
    }

    return {
      success: false,
      reply: '',
      error:
        'Unable to reach RagReon AI service. Please ensure you are online and try again.',
    }
  }
}
