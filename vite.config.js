import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcssNesting from 'tailwindcss/nesting'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        tailwindcssNesting(),
        tailwindcss(),
        autoprefixer(),
      ],
    },
  },
})