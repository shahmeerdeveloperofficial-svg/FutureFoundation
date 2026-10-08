import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    assetsDir: 'website-assets',
    cssCodeSplit: true,
    minify: 'esbuild',
    target: 'es2020',
    sourcemap: false,
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
              return 'vendor-react'
            }
            if (id.includes('react-icons')) {
              return 'vendor-icons'
            }
            if (id.includes('bootstrap') || id.includes('react-bootstrap')) {
              return 'vendor-bootstrap'
            }
            if (id.includes('framer-motion') || id.includes('aos')) {
              return 'vendor-animations'
            }
            if (id.includes('slick') || id.includes('react-slick')) {
              return 'vendor-carousel'
            }
            return 'vendor-other'
          }
        },
      },
    },
  },
})
