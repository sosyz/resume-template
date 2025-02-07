import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import yaml from '@rollup/plugin-yaml'
import path from 'path'
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        icon: true,
      },
    }),
    yaml({
      include: 'src/locales/**/*.yaml'
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
