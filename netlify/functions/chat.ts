import { processChatMessage } from '../../server/chatHandler'

interface NetlifyHandlerEvent {
  httpMethod: string
  headers: Record<string, string | undefined>
  body: string | null
  isBase64Encoded?: boolean
}

interface NetlifyHandlerResponse {
  statusCode: number
  headers?: Record<string, string>
  body: string
}

/**
 * Netlify Serverless Function Adapter for RagReon AI Assistant.
 * Preserves the exact same API contract, response codes, and headers
 * as the Vercel handler (api/assistant/chat.ts) and local Express server.
 */
export const handler = async (
  event: NetlifyHandlerEvent,
): Promise<NetlifyHandlerResponse> => {
  // 1. CORS Preflight & Base Response Headers
  const corsHeaders: Record<string, string> = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, X-Client-Timestamp',
  }

  // Handle preflight OPTIONS request
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 204,
      headers: corsHeaders,
      body: '',
    }
  }

  // Enforce POST method
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        success: false,
        error: 'Method not allowed. Use POST.',
      }),
    }
  }

  try {
    // 2. Safe JSON Body Parsing (handles base64 or raw string)
    let body: any = {}
    if (event.body) {
      if (typeof event.body === 'string') {
        const payloadStr = event.isBase64Encoded
          ? Buffer.from(event.body, 'base64').toString('utf8')
          : event.body
        try {
          body = JSON.parse(payloadStr)
        } catch {
          return {
            statusCode: 400,
            headers: {
              ...corsHeaders,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              success: false,
              error: 'Malformed or invalid JSON payload.',
            }),
          }
        }
      } else {
        body = event.body
      }
    }

    // 3. Extract Client IP for Sliding-Window Rate Limiting (case-insensitive headers)
    const headers = event.headers || {}
    const getHeader = (name: string): string | undefined => {
      const lower = name.toLowerCase()
      for (const [k, v] of Object.entries(headers)) {
        if (k.toLowerCase() === lower && typeof v === 'string') {
          return v
        }
      }
      return undefined
    }

    const clientIp =
      (
        getHeader('x-forwarded-for') ||
        getHeader('client-ip') ||
        getHeader('x-nf-client-connection-ip') ||
        getHeader('x-real-ip') ||
        '127.0.0.1'
      )
        .split(',')[0]
        .trim()

    // 4. Delegate to Core RagReon AI Handler
    // Preserves: Gemini SDK, system prompts, 21 projects, 7 service domains,
    // founder info, rate limiting, AbortController, and candidate fallbacks
    const result = await processChatMessage(
      body.message,
      body.conversationHistory,
      clientIp,
      body.clientTimestamp,
    )

    // 5. Return Preserved Status, Rate Limit Headers, and Response Body
    return {
      statusCode: result.status,
      headers: {
        ...corsHeaders,
        ...result.headers,
      },
      body: JSON.stringify(result.body),
    }
  } catch {
    return {
      statusCode: 500,
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        success: false,
        error: 'An internal server error occurred while processing your request.',
      }),
    }
  }
}
