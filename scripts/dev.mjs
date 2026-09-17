import { createServer } from 'vite'
import react from '@vitejs/plugin-react'

const server = await createServer({
  root: process.cwd(),
  configFile: false,
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5174,
    strictPort: true,
    allowedHosts: true,
    fs: {
      strict: true,
      allow: [process.cwd()],
    },
  },
})

await server.listen()
server.printUrls()
