import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://github.com/MudassarA10/TFT_Clone.git",
  plugins: [react()],
})
