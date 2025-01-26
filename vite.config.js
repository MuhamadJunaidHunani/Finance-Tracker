import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
    minify: 'terser', // Use Terser minifier to control warnings
    chunkSizeWarningLimit: 1000, // Increase the chunk size limit to avoid the warning
  },
})
