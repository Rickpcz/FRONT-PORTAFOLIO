import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
<<<<<<< Updated upstream
  plugins: [vue()],
  base: '/',
  define: {
    
    
    API_URL: JSON.stringify('http://localhost:3030/api'),
    
  }
})
=======
  plugins: [
    vue(), 
    tailwindcss()
  ],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
>>>>>>> Stashed changes
