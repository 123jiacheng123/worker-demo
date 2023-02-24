// import { fileURLToPath, URL } from 'node:url'
const path = require("path")

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        worker: 'src/workers/index.ts'
      },
      output: {
        entryFileNames: '[name].bundle.js'
      }
    }
  },
  plugins: [react()],
  resolve: {
    alias: {
      // "@": fileURLToPath(new URL('./src'), import.meta.url)
      "@": path.resolve(__dirname, "./src"),
    }
  }
})
