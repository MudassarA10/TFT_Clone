import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://mudassara10.github.io/TFT_Clone/",
  plugins: [react()],
})
