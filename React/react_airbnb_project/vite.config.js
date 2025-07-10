import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import requireTransform from 'vite-plugin-require-transform' // 1. 引入插件
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // 2. 添加以下代码
    requireTransform({
      fileRegex: /.js$|.jsx$/,
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {},
      },
    },
  },
})
