import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

/**
 * Custom Vite Dev Server plugin to serve the /api/assistant/chat endpoint
 * directly during development without requiring an external proxy or server.
 */
function assistantDevApiPlugin(): Plugin {
  return {
    name: 'ragreon-assistant-dev-api',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const url = req.url?.split('?')[0]
        if (url === '/api/assistant/chat' && req.method === 'POST') {
          let bodyText = ''
          req.on('data', (chunk) => {
            bodyText += chunk
          })
          req.on('end', async () => {
            try {
              const { processChatMessage } = await server.ssrLoadModule('./server/chatHandler.ts')
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

              for (const [key, value] of Object.entries(result.headers)) {
                res.setHeader(key, String(value))
              }
              res.statusCode = result.status
              res.end(JSON.stringify(result.body))
            } catch (err: unknown) {
              const message = err instanceof Error ? err.message : 'Internal dev server error'
              res.statusCode = 500
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify({ success: false, error: message }))
            }
          })
          return
        }
        next()
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    assistantDevApiPlugin(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
