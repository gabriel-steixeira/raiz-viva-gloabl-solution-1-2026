import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react()],
  base: '/raiz-viva-gloabl-solution-1-2026/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
