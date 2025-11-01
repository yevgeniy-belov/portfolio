import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { preloadCss } from './vite.plugin.preload-css.js'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    preloadCss(),
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
    // Optimize chunk sizes
    target: 'esnext',
    cssCodeSplit: true,
    // Generate source maps only for production debugging (optional)
    sourcemap: false,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
})

