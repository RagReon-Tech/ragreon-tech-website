import { GoogleGenAI } from '@google/genai'
import {
  ragreonSystemInstruction,
  extractProjectCardsFromText,
  getProjectCardBySlug,
} from '../src/data/assistantKnowledge'
import type {
  ChatHistoryItem,
  ChatResponsePayload,
  ProjectCardData,
} from '../src/types/assistant.types'

import fs from 'node:fs'
import path from 'node:path'

// Safely attempt loading local environment files in local Node / Vite environments
try {
  if (typeof process.loadEnvFile === 'function') {
    process.loadEnvFile('.env')
    try {
      process.loadEnvFile('.env.local')
    } catch {}
  }
} catch {}

// Fallback loader if process.loadEnvFile is unavailable or didn't populate process.env
try {
  const envPath = path.resolve(process.cwd(), '.env')
  if (fs.existsSync(envPath)) {
    const content = fs.readFileSync(envPath, 'utf8')
    for (const line of content.split('\n')) {
      const trimmed = line.trim()
      if (trimmed && !trimmed.startsWith('#') && trimmed.includes('=')) {
        const eqIdx = trimmed.indexOf('=')
        const key = trimmed.slice(0, eqIdx).trim()
        const val = trimmed.slice(eqIdx + 1).trim()
        if (key && !process.env[key]) {
          process.env[key] = val
        }
      }
    }
  }
} catch {}

interface RateLimitRecord {
  timestamps: number[]
}

const rateLimitMap = new Map<string, RateLimitRecord>()
const WINDOW_MS = 60 * 1000 // 1 minute
const MAX_REQUESTS_PER_WINDOW = 25 // 25 requests per minute

/**
 * Checks in-memory sliding window rate limit for an IP address.
 */
function checkRateLimit(ip: string): { allowed: boolean; remaining: number; resetSecs: number } {
  const now = Date.now()
  const record = rateLimitMap.get(ip) || { timestamps: [] }

  // Filter timestamps within current window
  const activeTimestamps = record.timestamps.filter((ts) => now - ts < WINDOW_MS)

  if (activeTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    const oldest = activeTimestamps[0]
    const resetSecs = Math.max(1, Math.ceil((oldest + WINDOW_MS - now) / 1000))
    rateLimitMap.set(ip, { timestamps: activeTimestamps })
    return { allowed: false, remaining: 0, resetSecs }
  }

  activeTimestamps.push(now)
  rateLimitMap.set(ip, { timestamps: activeTimestamps })

  // Cleanup old IPs periodically if map grows large
  if (rateLimitMap.size > 2000) {
    for (const [key, val] of rateLimitMap.entries()) {
      const valid = val.timestamps.filter((ts) => now - ts < WINDOW_MS)
      if (valid.length === 0) rateLimitMap.delete(key)
    }
  }

  return {
    allowed: true,
    remaining: MAX_REQUESTS_PER_WINDOW - activeTimestamps.length,
    resetSecs: Math.ceil(WINDOW_MS / 1000),
  }
}

/**
 * Generates context-aware suggested follow-up questions based on user query and response.
 */
function generateDynamicSuggestions(userQuery: string, replyText: string): string[] {
  const lower = (userQuery + ' ' + replyText).toLowerCase()

  if (lower.includes('project') || lower.includes('portfolio') || lower.includes('loangauge')) {
    return [
      'Tell me about your AI projects',
      'Show me your Data Analytics projects',
      'Who worked on these projects?',
      'How can I start a project with you?',
    ]
  }

  if (lower.includes('sreeram') || lower.includes('raghuraman') || lower.includes('founder') || lower.includes('team')) {
    return [
      "Show me Sreeram's projects",
      "Show me Raghuraman's projects",
      'What services does RagReon Tech provide?',
      'How do you collaborate with clients?',
    ]
  }

  if (lower.includes('service') || lower.includes('iot') || lower.includes('analytics') || lower.includes('web')) {
    return [
      'Show me relevant portfolio projects',
      'Do you build custom AI applications?',
      'What is your working model?',
      'How do I request a quote or consultation?',
    ]
  }

  return [
    'What services do you offer?',
    'Show me your top portfolio projects',
    'Who are the co-founders?',
    'How can I start a project?',
  ]
}

/**
 * Primary chat processor handling input validation, rate limiting,
 * conversation memory, Gemini API generation, and project card extraction.
 */
export async function processChatMessage(
  message: unknown,
  history: unknown,
  clientIp = '127.0.0.1',
  clientTimestamp?: number,
): Promise<{ status: number; headers: Record<string, string>; body: ChatResponsePayload }> {
  const baseHeaders: Record<string, string> = {
    'Content-Type': 'application/json',
  }

  // 1. Client-Side Timestamp & Replay Validation
  if (typeof clientTimestamp === 'number') {
    const age = Math.abs(Date.now() - clientTimestamp)
    if (age > 5 * 60 * 1000) {
      return {
        status: 400,
        headers: baseHeaders,
        body: {
          success: false,
          reply: '',
          error: 'Request timestamp expired. Please check your system clock.',
        },
      }
    }
  }

  // 2. Rate Limiting Check
  const rateLimit = checkRateLimit(clientIp)
  baseHeaders['X-RateLimit-Limit'] = String(MAX_REQUESTS_PER_WINDOW)
  baseHeaders['X-RateLimit-Remaining'] = String(rateLimit.remaining)
  baseHeaders['X-RateLimit-Reset'] = String(rateLimit.resetSecs)

  if (!rateLimit.allowed) {
    baseHeaders['Retry-After'] = String(rateLimit.resetSecs)
    return {
      status: 429,
      headers: baseHeaders,
      body: {
        success: false,
        reply: '',
        error: `Rate limit reached. Please wait ${rateLimit.resetSecs} seconds before sending another message.`,
      },
    }
  }

  // 3. Input Validation
  if (!message || typeof message !== 'string') {
    return {
      status: 400,
      headers: baseHeaders,
      body: {
        success: false,
        reply: '',
        error: 'A valid text message string is required.',
      },
    }
  }

  const trimmedMessage = message.trim()
  if (trimmedMessage.length === 0) {
    return {
      status: 400,
      headers: baseHeaders,
      body: {
        success: false,
        reply: '',
        error: 'Message cannot be empty.',
      },
    }
  }

  if (trimmedMessage.length > 600) {
    return {
      status: 400,
      headers: baseHeaders,
      body: {
        success: false,
        reply: '',
        error: 'Message exceeds maximum allowed length of 600 characters.',
      },
    }
  }

  // Parse Conversation History for Multi-Turn Memory
  const parsedHistory: ChatHistoryItem[] = []
  if (Array.isArray(history)) {
    // Keep up to last 6 turns (3 exchanges) to keep prompt tokens lean and fast
    const slice = history.slice(-6)
    for (const item of slice) {
      if (
        item &&
        (item.role === 'user' || item.role === 'assistant') &&
        typeof item.text === 'string' &&
        item.text.trim().length > 0
      ) {
        parsedHistory.push({
          role: item.role,
          text: item.text.slice(0, 500), // Cap each turn length
        })
      }
    }
  }

  // 4. API Key Check & Friendly Fallback
  const apiKey = (process.env.GEMINI_API_KEY || '').trim()
  if (!apiKey) {
    const queryLower = trimmedMessage.toLowerCase()
    const demoCards: ProjectCardData[] = []
    const additionalSlugs = [
      { key: 'loangauge', slug: 'loangauge-ai' },
      { key: 'student information', slug: 'student-information-system' },
      { key: 'dementia', slug: 'cognitive-screening-system' },
      { key: 'cognitive', slug: 'cognitive-screening-system' },
      { key: 'uk transportation', slug: 'uk-transportation-analysis' },
      { key: 'voltrelay', slug: 'voltrelay' },
      { key: 'bloodchain', slug: 'bloodchain-ai' },
      { key: 'agrolink', slug: 'agrolink' },
      { key: 'esp data', slug: 'esp-data-transmission' },
      { key: 'plant disease', slug: 'plant-disease-prediction' },
    ]

    for (const item of additionalSlugs) {
      if (queryLower.includes(item.key) && !demoCards.some((c) => c.slug === item.slug)) {
        const extraCard = getProjectCardBySlug(item.slug)
        if (extraCard) demoCards.push(extraCard)
      }
    }

    return {
      status: 200,
      headers: baseHeaders,
      body: {
        success: true,
        reply:
          "Hello! RagReon AI is currently running in local demonstration mode (add your `GEMINI_API_KEY` to `.env` to enable full real-time Gemini reasoning).\n\nIn the meantime, you can explore all our **[7 Service Domains](/services)**, browse our **[21 Portfolio Projects](/portfolio)**, or discuss a project directly with our founders on our **[Contact Page](/contact)** or via **[WhatsApp](https://wa.me/916383309954)**!",
        suggestions: [
          'What services do you offer?',
          'Tell me about LoanGauge AI',
          'Who are the co-founders?',
          'How can I start a project with you?',
        ],
        projectCards: demoCards.length > 0 ? demoCards : undefined,
      },
    }
  }

  // 5. Configured Model & Verified Fallback Candidate Models
  const configuredModel = (process.env.GEMINI_MODEL || 'gemini-3.8-flash').trim()
  const candidateModels = Array.from(
    new Set([
      configuredModel,
      'gemini-3.5-flash-lite',
      'gemini-3.1-flash-lite',
      'gemini-3.8-flash',
    ]),
  )

  // 6. Build Multi-Turn Contents Payload
  const contents: { role: 'user' | 'model'; parts: { text: string }[] }[] = []
  for (const turn of parsedHistory) {
    contents.push({
      role: turn.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: turn.text }],
    })
  }
  contents.push({
    role: 'user',
    parts: [{ text: trimmedMessage }],
  })

  // 7. Invoke Gemini API with Model Fallback
  const ai = new GoogleGenAI({
    apiKey,
    httpOptions: { apiVersion: 'v1beta' },
  })
  let responseText = ''
  let lastError: Error | null = null

  const chainStartTime = Date.now()
  const MAX_CHAIN_DEADLINE_MS = 50000 // 50-second safety cutoff for serverless function execution

  for (const model of candidateModels) {
    const elapsed = Date.now() - chainStartTime
    const remainingTime = MAX_CHAIN_DEADLINE_MS - elapsed

    // If fewer than 4 seconds remain before serverless deadline, stop fallback chain
    // to return a clean, friendly 504 response instead of being abruptly terminated
    if (remainingTime < 4000) {
      console.warn(
        `[RagReon AI] Fallback chain approaching function execution deadline (${elapsed}ms elapsed). Halting remaining attempts.`,
      )
      if (!lastError) {
        lastError = new Error('Function execution deadline reached before candidate model could respond')
      }
      break
    }

    const perAttemptTimeout = Math.min(15000, remainingTime)
    let timeoutId: NodeJS.Timeout | undefined
    const attemptController = new AbortController()
    try {
      const timeoutPromise = new Promise<never>((_, reject) => {
        timeoutId = setTimeout(() => {
          attemptController.abort()
          reject(
            new Error(
              `Timeout: Model ${model} took longer than ${Math.round(perAttemptTimeout / 1000)} seconds to respond`,
            ),
          )
        }, perAttemptTimeout)
      })

      const callPromise = ai.models.generateContent({
        model,
        contents,
        config: {
          systemInstruction: ragreonSystemInstruction,
          temperature: 0.2,
          maxOutputTokens: 1000,
          abortSignal: attemptController.signal,
        },
      })

      const response = await Promise.race([callPromise, timeoutPromise])

      if (response && response.text) {
        responseText = response.text
        break
      }
    } catch (err: unknown) {
      lastError = err instanceof Error ? err : new Error(String(err))
      const errStr = String(err).toLowerCase()

      // If invalid API key (401 or 403), stop immediately as key is invalid for all models
      if (
        errStr.includes('401') ||
        errStr.includes('403') ||
        errStr.includes('api key not valid') ||
        errStr.includes('api_key_invalid')
      ) {
        return {
          status: 401,
          headers: baseHeaders,
          body: {
            success: false,
            reply: '',
            error:
              'The configured Google Gemini API key is invalid or unauthorized. Please verify your GEMINI_API_KEY.',
          },
        }
      }

      // If network failure (offline)
      if (
        errStr.includes('fetch failed') ||
        errStr.includes('enotfound') ||
        errStr.includes('econnrefused')
      ) {
        // Network might be down completely, but try next candidate just in case
      }

      // Log attempt error and continue to the next candidate model
      console.warn(
        `[RagReon AI] Candidate model '${model}' failed: ${lastError.message}. Trying next candidate...`,
      )
      continue
    } finally {
      if (timeoutId) clearTimeout(timeoutId)
    }
  }

  if (!responseText) {
    const lastErrMsg = (lastError?.message || '').toLowerCase()
    let statusCode = 503
    let userFriendlyMsg =
      'The AI assistant is temporarily unavailable due to high demand on Google Gemini servers. Please click Retry in a few moments.'

    if (
      lastErrMsg.includes('quota') ||
      lastErrMsg.includes('429') ||
      lastErrMsg.includes('resource exhausted')
    ) {
      statusCode = 429
      userFriendlyMsg =
        'The AI service is currently at maximum capacity. Please wait a few moments and click Retry, or contact us at ragreontechofficial@gmail.com.'
    } else if (
      lastErrMsg.includes('key') ||
      lastErrMsg.includes('401') ||
      lastErrMsg.includes('403')
    ) {
      statusCode = 401
      userFriendlyMsg =
        'The Google Gemini API key is invalid or unauthorized. Please check your GEMINI_API_KEY environment variable.'
    } else if (
      lastErrMsg.includes('timeout') ||
      lastErrMsg.includes('took longer than') ||
      lastErrMsg.includes('deadline')
    ) {
      statusCode = 504
      userFriendlyMsg =
        'The AI service took too long to respond. Please click Retry or try asking in fewer words.'
    } else if (
      lastErrMsg.includes('network') ||
      lastErrMsg.includes('fetch failed') ||
      lastErrMsg.includes('enotfound')
    ) {
      statusCode = 503
      userFriendlyMsg =
        'Unable to connect to Google Gemini service. Please check your network connection and click Retry.'
    }

    return {
      status: statusCode,
      headers: baseHeaders,
      body: {
        success: false,
        reply: '',
        error: userFriendlyMsg,
      },
    }
  }

  // 8. Extract Project Cards and Clean Message
  const { cleanedText, cards } = extractProjectCardsFromText(responseText)

  // Double-check: if user explicitly asked for a specific project like "loangauge" or "sis",
  // ensure that card is included even if the model omitted the exact tag format
  const queryLower = trimmedMessage.toLowerCase()
  const additionalSlugs = [
    { key: 'loangauge', slug: 'loangauge-ai' },
    { key: 'student information', slug: 'student-information-system' },
    { key: 'dementia', slug: 'cognitive-screening-system' },
    { key: 'cognitive', slug: 'cognitive-screening-system' },
    { key: 'uk transportation', slug: 'uk-transportation-analysis' },
    { key: 'voltrelay', slug: 'voltrelay' },
    { key: 'bloodchain', slug: 'bloodchain-ai' },
    { key: 'agrolink', slug: 'agrolink' },
    { key: 'esp data', slug: 'esp-data-transmission' },
    { key: 'plant disease', slug: 'plant-disease-prediction' },
  ]

  for (const item of additionalSlugs) {
    if (queryLower.includes(item.key) && !cards.some((c) => c.slug === item.slug)) {
      const extraCard = getProjectCardBySlug(item.slug)
      if (extraCard) cards.push(extraCard)
    }
  }

  const suggestions = generateDynamicSuggestions(trimmedMessage, cleanedText)

  return {
    status: 200,
    headers: baseHeaders,
    body: {
      success: true,
      reply: cleanedText,
      suggestions,
      projectCards: cards.length > 0 ? cards : undefined,
    },
  }
}
