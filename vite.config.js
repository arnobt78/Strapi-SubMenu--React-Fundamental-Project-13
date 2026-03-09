/**
 * Vite config. Enables React Fast Refresh via @vitejs/plugin-react.
 * For env variables, use VITE_* prefix and import.meta.env in source.
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        if (warning.code === 'MODULE_LEVEL_DIRECTIVE' || (warning.message && String(warning.message).includes('use client'))) {
          return
        }
        warn(warning)
      },
    },
  },
})
