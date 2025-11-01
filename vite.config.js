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
        manualChunks: (id) => {
          // Split React into its own chunk
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'react-vendor';
          }
          // Split other node_modules into vendor chunk
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
        // Optimize chunk file names
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
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
    // Reduce chunk size
    chunkSizeWarningLimit: 600,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
})

