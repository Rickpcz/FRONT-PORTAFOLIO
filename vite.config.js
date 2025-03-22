import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(), // Incluyendo ambos plugins
  ],
  base: '/',
  define: {
    API_URL: JSON.stringify('http://localhost:3030/api'),
  },
  resolve: {
    alias: {
      '@': '/src', // Alias para el directorio src
    },
  },
})
