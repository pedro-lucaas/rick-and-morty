import react from '@vitejs/plugin-react'
import { defineConfig, mergeConfig } from 'vite'
import vitestConfig from './vite.config'

export default defineConfig({
  plugins: [react()],
})