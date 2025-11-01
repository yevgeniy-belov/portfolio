import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: '/portfolio/',
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Split React into its own chunk
          'react-vendor': ['react', 'react-dom'],
        },
      },
    },
    // Enable minification
    minify: 'esbuild',
    // Increase chunk size warning limit (optional)
    chunkSizeWarningLimit: 500,
  },
})

