import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias: [
      {
        find: '@', replacement: path.resolve(__dirname,'/src')
      }
    ]
  },
  plugins: [vue(), svgLoader()],
})
