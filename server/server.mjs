import http from 'node:http'
import { processChatMessage } from './chatHandler.ts'

const PORT = process.env.PORT || 3001

const server = http.createServer(async (req, res) => {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Client-Timestamp')

  if (req.method === 'OPTIONS') {
    res.writeHead(204)
    res.end()
    return
  }

  const url = req.url?.split('?')[0]
  if (url === '/api/assistant/chat' && req.method === 'POST') {
    let bodyText = ''
    req.on('data', (chunk) => {
      bodyText += chunk
      if (bodyText.length > 50000) {
        req.destroy()
      }
    })

    req.on('end', async () => {
      try {
        const body = JSON.parse(bodyText || '{}')
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

        res.writeHead(result.status, result.headers)
        res.end(JSON.stringify(result.body))
      } catch {
        res.writeHead(400, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ success: false, error: 'Malformed JSON payload' }))
      }
    })
    return
  }

  // Health check endpoint
  if (url === '/health' || url === '/api/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ status: 'ok', service: 'ragreon-ai-assistant' }))
    return
  }

  res.writeHead(404, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify({ error: 'Endpoint not found' }))
})

server.listen(PORT, () => {
  console.log(`[RagReon AI] Standalone Assistant Server running on http://localhost:${PORT}`)
})
