import build from '@hono/vite-cloudflare-pages'
import honox from 'honox/vite'
import { defineConfig } from '../../node_modules/vite'

export default defineConfig(({ mode }) => {
  if (mode === 'client') {
    return {
      build: {
        rollupOptions: {
          input: ['./app/client.ts'],
          output: {
            entryFileNames: 'static/client.js',
            chunkFileNames: 'static/assets/[name]-[hash].js',
            assetFileNames: 'static/assets/[name].[ext]',
          },
        },
        emptyOutDir: false,
        copyPublicDir: false,
      },
    }
  } else {
    return {
      plugins: [honox(), build()],
    }
  }
})