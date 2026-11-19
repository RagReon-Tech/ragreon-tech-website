import { processChatMessage } from '../../server/chatHandler'

export default async function handler(req: any, res: any) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Client-Timestamp')

  if (req.method === 'OPTIONS') {
    res.status(204).end()
    return
  }

  if (req.method !== 'POST') {
    res.status(405).json({ success: false, error: 'Method not allowed. Use POST.' })
    return
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body || {}
    const clientIp =
      req.headers['x-forwarded-for']?.toString().split(',')[0].trim() ||
      req.headers['x-real-ip']?.toString() ||
      req.socket?.remoteAddress ||
      '127.0.0.1'

    const result = await processChatMessage(
      body.message,
      body.conversationHistory,
      clientIp,
      body.clientTimestamp,
    )

    for (const [key, value] of Object.entries(result.headers)) {
      res.setHeader(key, value)
    }

    res.status(result.status).json(result.body)
  } catch {
    res.status(500).json({
      success: false,
      error: 'An internal server error occurred while processing your request.',
    })
  }
}
