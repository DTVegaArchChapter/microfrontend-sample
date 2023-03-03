import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'increment-text',
      filename: 'increment-text.js',
      exposes: {
        './IncrementText': './src/components/IncrementText.vue',
      },
      shared: ['vue', 'pinia']
    })
  ],
  build: {
    minify: false,
    target: ["chrome89", "edge89", "firefox89", "safari15"]
  }
})
