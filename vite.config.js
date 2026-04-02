import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    headers: {
      'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
    },
  },
  // Opcional: Redirección en el build (para SSR o pre-render)
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
})
