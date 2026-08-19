import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// Archstone Ventures marketing site — lightweight Vite + React build.
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const configuredBase = env.VITE_BASE_PATH || (mode === 'production' ? '/archstone-ventures/' : '/')
  const base = configuredBase.endsWith('/') ? configuredBase : `${configuredBase}/`

  return {
    base,
    plugins: [react()],
    server: {
      port: 5173,
    },
    build: {
      outDir: 'dist',
      sourcemap: false,
    },
  }
})
