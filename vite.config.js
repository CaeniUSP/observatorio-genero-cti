import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/observatorio-genero-cti/', // nome do repositório
  plugins: [vue()],
})
