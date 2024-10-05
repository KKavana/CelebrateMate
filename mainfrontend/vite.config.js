import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',  // Optional: Shorten the import paths using @ as a base alias
    },
  },
  build: {
    outDir: 'dist',  // Output directory for build
  },
})
