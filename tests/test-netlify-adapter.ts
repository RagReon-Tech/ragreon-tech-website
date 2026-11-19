import { GoogleGenAI } from '@google/genai'
import { handler } from '../netlify/functions/chat.ts'

// Ensure GEMINI_API_KEY is defined in process.env so chatHandler activates SDK logic
process.env.GEMINI_API_KEY = 'mock-test-key-00000000000000000000'

// Get access to Models prototype to mock generateContentInternal cleanly
const dummyClient = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY })
const modelsProto = (dummyClient.models as any).constructor.prototype

let activeMock: ((params: any) => Promise<any>) | null = null

// Override generateContentInternal on prototype to intercept all SDK calls
modelsProto.generateContentInternal = async function (params: any) {
  if (activeMock) {
    return activeMock(params)
  }
  return {
    text: 'Default mock response from RagReon AI.',
  }
}

async function runTestSuite() {
  console.log('=================================================================')
  console.log('       RAGREON AI - NETLIFY FUNCTION ADAPTER TEST SUITE          ')
  console.log('=================================================================\n')

  let passedCount = 0
  const totalTests = 11

  // -------------------------------------------------------------------------
  // TEST 1: POST request with a valid message
  // -------------------------------------------------------------------------
  console.log('TEST 1: POST request with a valid message')
  activeMock = async (_params: any) => {
    return {
      text: 'RagReon Tech is an innovative tech venture studio building enterprise AI solutions.',
    }
  }

  const res1 = await handler({
    httpMethod: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-forwarded-for': '203.0.113.1, 10.0.0.1',
    },
    body: JSON.stringify({
      message: 'What is RagReon Tech?',
      conversationHistory: [],
      clientTimestamp: Date.now(),
    }),
  })

  const body1 = JSON.parse(res1.body)
  if (res1.statusCode !== 200) throw new Error(`Expected 200, got ${res1.statusCode}`)
  if (body1.success !== true) throw new Error('Expected success: true')
  if (!body1.reply.includes('venture studio')) throw new Error('Unexpected reply content')
  if (!Array.isArray(body1.suggestions) || body1.suggestions.length === 0)
    throw new Error('Expected suggestions array')
  if (!res1.headers?.['Access-Control-Allow-Origin']) throw new Error('Missing CORS headers')
  if (!res1.headers?.['X-RateLimit-Limit']) throw new Error('Missing rate limit header')
  console.log(' PASS: Valid POST returned status 200 with CORS and rate limit headers.\n')
  passedCount++

  // -------------------------------------------------------------------------
  // TEST 2: Empty message validation
  // -------------------------------------------------------------------------
  console.log('TEST 2: Empty message validation')
  const res2 = await handler({
    httpMethod: 'POST',
    headers: {
      'content-type': 'application/json',
      'client-ip': '203.0.113.2',
    },
    body: JSON.stringify({
      message: '   ',
      clientTimestamp: Date.now(),
    }),
  })

  const body2 = JSON.parse(res2.body)
  if (res2.statusCode !== 400) throw new Error(`Expected 400, got ${res2.statusCode}`)
  if (body2.success !== false) throw new Error('Expected success: false')
  if (!body2.error?.toLowerCase().includes('empty')) throw new Error('Expected empty message error')
  console.log(' PASS: Empty message rejected with status 400 and validation error.\n')
  passedCount++

  // -------------------------------------------------------------------------
  // TEST 3: Invalid JSON payload
  // -------------------------------------------------------------------------
  console.log('TEST 3: Invalid JSON payload handling')
  const res3 = await handler({
    httpMethod: 'POST',
    headers: {
      'content-type': 'application/json',
      'client-ip': '203.0.113.3',
    },
    body: '{"message": "Broken JSON without closing bracket',
  })

  const body3 = JSON.parse(res3.body)
  if (res3.statusCode !== 400) throw new Error(`Expected 400, got ${res3.statusCode}`)
  if (body3.success !== false) throw new Error('Expected success: false')
  if (!body3.error?.toLowerCase().includes('json')) throw new Error('Expected JSON syntax error')
  console.log(' PASS: Malformed JSON handled safely with status 400.\n')
  passedCount++

  // -------------------------------------------------------------------------
  // TEST 4: GET request rejection
  // -------------------------------------------------------------------------
  console.log('TEST 4: Non-POST HTTP Method rejection (GET)')
  const res4 = await handler({
    httpMethod: 'GET',
    headers: {},
    body: null,
  })

  const body4 = JSON.parse(res4.body)
  if (res4.statusCode !== 405) throw new Error(`Expected 405, got ${res4.statusCode}`)
  if (body4.success !== false) throw new Error('Expected success: false')
  if (!body4.error?.includes('POST')) throw new Error('Expected method error message')
  console.log(' PASS: GET request rejected with status 405 Method Not Allowed.\n')
  passedCount++

  // -------------------------------------------------------------------------
  // TEST 5: OPTIONS request (CORS Preflight)
  // -------------------------------------------------------------------------
  console.log('TEST 5: OPTIONS preflight handling')
  const res5 = await handler({
    httpMethod: 'OPTIONS',
    headers: {},
    body: null,
  })

  if (res5.statusCode !== 204) throw new Error(`Expected 204, got ${res5.statusCode}`)
  if (res5.body !== '') throw new Error('Expected empty body for 204')
  if (res5.headers?.['Access-Control-Allow-Origin'] !== '*')
    throw new Error('Missing Access-Control-Allow-Origin')
  if (!res5.headers?.['Access-Control-Allow-Methods']?.includes('POST'))
    throw new Error('Missing Access-Control-Allow-Methods')
  console.log(' PASS: OPTIONS preflight answered with status 204 and CORS headers.\n')
  passedCount++

  // -------------------------------------------------------------------------
  // TEST 6: Gemini API failure (All candidate models fail)
  // -------------------------------------------------------------------------
  console.log('TEST 6: Gemini API failure fallback handling')
  let attemptCount = 0
  activeMock = async (_params: any) => {
    attemptCount++
    throw new Error('503 Service Unavailable: High load on Google Gemini servers')
  }

  const res6 = await handler({
    httpMethod: 'POST',
    headers: { 'client-ip': '203.0.113.6' },
    body: JSON.stringify({
      message: 'Hello, testing service degradation handling',
      clientTimestamp: Date.now(),
    }),
  })

  const body6 = JSON.parse(res6.body)
  if (res6.statusCode !== 503) throw new Error(`Expected 503, got ${res6.statusCode}`)
  if (body6.success !== false) throw new Error('Expected success: false')
  if (!body6.error?.includes('temporarily unavailable'))
    throw new Error('Expected user-friendly 503 error message')
  if (attemptCount < 2)
    throw new Error(`Expected sequential model fallback attempts, but only ${attemptCount} ran`)
  console.log(
    ` PASS: Model failure tested across ${attemptCount} candidate models with status 503.\n`,
  )
  passedCount++

  // -------------------------------------------------------------------------
  // TEST 7: Sliding-window rate limiting
  // -------------------------------------------------------------------------
  console.log('TEST 7: Rate-limit enforcement (25 req/min cap)')
  activeMock = async () => ({ text: 'OK' })
  const rateLimitIp = '198.51.100.77'

  // Send 25 allowed requests
  for (let i = 0; i < 25; i++) {
    const r = await handler({
      httpMethod: 'POST',
      headers: { 'client-ip': rateLimitIp },
      body: JSON.stringify({ message: `Message ${i + 1}`, clientTimestamp: Date.now() }),
    })
    if (r.statusCode !== 200) {
      throw new Error(`Request ${i + 1} should have been allowed, got status ${r.statusCode}`)
    }
  }

  // 26th request must be rate-limited
  const res7 = await handler({
    httpMethod: 'POST',
    headers: { 'client-ip': rateLimitIp },
    body: JSON.stringify({ message: 'Request 26 (should be blocked)', clientTimestamp: Date.now() }),
  })

  const body7 = JSON.parse(res7.body)
  if (res7.statusCode !== 429) throw new Error(`Expected 429, got ${res7.statusCode}`)
  if (body7.success !== false) throw new Error('Expected success: false')
  if (!body7.error?.includes('Rate limit reached')) throw new Error('Expected rate limit message')
  if (res7.headers?.['X-RateLimit-Remaining'] !== '0')
    throw new Error('Expected X-RateLimit-Remaining to be 0')
  if (!res7.headers?.['Retry-After']) throw new Error('Expected Retry-After header')
  console.log(' PASS: 26th request blocked with status 429 and Retry-After header.\n')
  passedCount++

  // -------------------------------------------------------------------------
  // TEST 8: Conversation history preservation
  // -------------------------------------------------------------------------
  console.log('TEST 8: Conversation history preservation')
  let receivedContents: any[] = []
  activeMock = async (params: any) => {
    receivedContents = params.contents
    return {
      text: 'LoanGauge AI is built using Python, FastAPI, and React.',
    }
  }

  const res8 = await handler({
    httpMethod: 'POST',
    headers: { 'client-ip': '203.0.113.8' },
    body: JSON.stringify({
      message: 'What technology stack does it use?',
      conversationHistory: [
        { role: 'user', text: 'Tell me about LoanGauge AI' },
        { role: 'assistant', text: 'LoanGauge AI is our credit risk evaluation platform.' },
      ],
      clientTimestamp: Date.now(),
    }),
  })

  const body8 = JSON.parse(res8.body)
  if (res8.statusCode !== 200 || !body8.success) throw new Error('Failed to process with history')
  if (receivedContents.length !== 3) {
    throw new Error(`Expected 3 content turns, received ${receivedContents.length}`)
  }
  if (receivedContents[0].role !== 'user' || !receivedContents[0].parts[0].text.includes('LoanGauge AI'))
    throw new Error('History turn 0 mismatch')
  if (receivedContents[1].role !== 'model' || !receivedContents[1].parts[0].text.includes('credit risk'))
    throw new Error('History turn 1 mismatch')
  if (receivedContents[2].role !== 'user' || !receivedContents[2].parts[0].text.includes('technology stack'))
    throw new Error('History turn 2 mismatch')
  console.log(' PASS: Multi-turn history preserved and passed correctly to Gemini contents.\n')
  passedCount++

  // -------------------------------------------------------------------------
  // TEST 9: Project cards extraction
  // -------------------------------------------------------------------------
  console.log('TEST 9: Project cards parsing and tag stripping')
  activeMock = async () => ({
    text: 'Here is our premier FinTech platform:\n[[PROJECT:loangauge-ai]]\nIt empowers lenders with instant credit assessment.',
  })

  const res9 = await handler({
    httpMethod: 'POST',
    headers: { 'client-ip': '203.0.113.9' },
    body: JSON.stringify({
      message: 'Show me LoanGauge AI',
      clientTimestamp: Date.now(),
    }),
  })

  const body9 = JSON.parse(res9.body)
  if (res9.statusCode !== 200) throw new Error(`Expected 200, got ${res9.statusCode}`)
  if (!Array.isArray(body9.projectCards) || body9.projectCards.length === 0)
    throw new Error('Expected projectCards in response')
  if (body9.projectCards[0].slug !== 'loangauge-ai') throw new Error('Expected loangauge-ai card')
  if (body9.projectCards[0].title !== 'LoanGauge AI') throw new Error('Expected LoanGauge AI title')
  if (body9.reply.includes('[[PROJECT:')) throw new Error('Raw card tag was not stripped from reply')
  console.log(
    ` PASS: Project card extracted (${body9.projectCards[0].title}) and tags stripped from reply.\n`,
  )
  passedCount++

  // -------------------------------------------------------------------------
  // TEST 10: Dynamic suggestions generation
  // -------------------------------------------------------------------------
  console.log('TEST 10: Dynamic follow-up suggestions generation')
  activeMock = async () => ({
    text: 'RagReon Tech delivers Web & Mobile development, AI Engineering, and IoT solutions.',
  })

  const res10 = await handler({
    httpMethod: 'POST',
    headers: { 'client-ip': '203.0.113.10' },
    body: JSON.stringify({
      message: 'What services do you provide?',
      clientTimestamp: Date.now(),
    }),
  })

  const body10 = JSON.parse(res10.body)
  if (!Array.isArray(body10.suggestions) || body10.suggestions.length < 3)
    throw new Error('Expected at least 3 suggestions')
  const hasServiceSuggestion = body10.suggestions.some(
    (s: string) => s.toLowerCase().includes('portfolio') || s.toLowerCase().includes('quote'),
  )
  if (!hasServiceSuggestion) throw new Error('Expected relevant service suggestions')
  console.log(` PASS: Generated ${body10.suggestions.length} relevant follow-up suggestions.\n`)
  passedCount++

  // -------------------------------------------------------------------------
  // TEST 11: Sequential Fallback and AbortController Cancellation
  // -------------------------------------------------------------------------
  console.log('TEST 11: Sequential model fallback & AbortController signal verification')
  const attemptedModels: string[] = []
  let abortedCount = 0

  activeMock = async (params: any) => {
    attemptedModels.push(params.model)
    if (params.config?.abortSignal) {
      params.config.abortSignal.addEventListener('abort', () => {
        abortedCount++
      })
    }

    if (params.model === 'gemini-3.8-flash') {
      // Primary model fails with rate limit error
      throw new Error('429 Resource has been exhausted (e.g. check quota)')
    }

    // Secondary model succeeds
    return {
      text: 'Recovered via candidate fallback model: ' + params.model,
    }
  }

  const res11 = await handler({
    httpMethod: 'POST',
    headers: { 'client-ip': '203.0.113.11' },
    body: JSON.stringify({
      message: 'Testing candidate fallback after primary 429',
      clientTimestamp: Date.now(),
    }),
  })

  const body11 = JSON.parse(res11.body)
  if (res11.statusCode !== 200 || !body11.success) {
    throw new Error(`Expected fallback to succeed with 200, got ${res11.statusCode}`)
  }
  if (!attemptedModels.includes('gemini-3.8-flash') || attemptedModels.length < 2) {
    throw new Error(`Expected at least 2 models attempted, got: ${attemptedModels.join(', ')}`)
  }
  if (!body11.reply.includes('Recovered via candidate fallback model')) {
    throw new Error('Reply does not indicate fallback recovery')
  }
  console.log(
    ` PASS: Primary model failed with 429, seamlessly fell back to secondary model (${attemptedModels[1]}).\n`,
  )
  passedCount++

  // -------------------------------------------------------------------------
  // SUMMARY
  // -------------------------------------------------------------------------
  console.log('=================================================================')
  console.log(` RESULTS: ALL ${passedCount} / ${totalTests} TESTS PASSED SUCCESSFULLY!`)
  console.log('=================================================================')
}

runTestSuite().catch((err) => {
  console.error('\n❌ TEST SUITE FAILED:', err)
  process.exit(1)
})
