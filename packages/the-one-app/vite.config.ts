import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'the-one-app',
      remotes: {
        // "book-list": "http://localhost:7001/assets/remoteEntry.js",
        // "book-chapter-list": "http://localhost:7002/assets/remoteEntry.js",
        "book-list": "https://microfrontend-lotr-book-list.netlify.app/assets/remoteEntry.js",
        "book-chapter-list": "https://microfrontend-lotr-book-chapter-list.netlify.app/assets/remoteEntry.js",
      },
      shared: ['vue', 'pinia']
    })
  ],
  build: {
    minify: false,
    target: ["chrome89", "edge89", "firefox89", "safari15"]
  }
})
