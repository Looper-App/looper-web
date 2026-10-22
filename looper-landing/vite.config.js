import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

// https://vite.dev/config/
export default defineConfig(({ isSsrBuild }) => ({
  plugins: [
    react(),
    // Losslessly-ish compresses every image (including the public/ folder)
    // at build time so the huge source photos don't ship to visitors as-is.
    ViteImageOptimizer({
      jpg: { quality: 75 },
      jpeg: { quality: 75 },
      png: { quality: 75 },
      webp: { lossless: false, quality: 75 },
    }),
  ],
  build: {
    rollupOptions: {
      output: isSsrBuild
        ? undefined
        : {
          // react/react-dom are externalized (not bundled) for the SSR
          // build, so manualChunks referencing them would error there —
          // this vendor split is a client-build-only optimization anyway.
          manualChunks: {
            'react-vendor': ['react', 'react-dom', 'react-router-dom'],
            'motion-vendor': ['framer-motion'],
          },
        },
    },
  },
}))
