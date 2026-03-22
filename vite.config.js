import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  host: '192.168.1.6',
  port: 5173,
  plugins: [
    tailwindcss()
  ],
})
