import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/',
  define: {
    
    
    API_URL: JSON.stringify('http://localhost:3030/api'),
    
  }
})
