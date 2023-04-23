import react from "@vitejs/plugin-react"
import path from "path"
import { defineConfig } from "vite"
import checker from "vite-plugin-checker"
import WindiCSS from "vite-plugin-windicss"
import tsconfigPaths from "vite-tsconfig-paths"

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },

  plugins: [
    checker({
      typescript: true,
      eslint: {
        lintCommand: 'eslint "./src/**/*.{ts,tsx}"',
      },
    }),
    tsconfigPaths(),
    WindiCSS({
      preflight: false,
    }),
    react(),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "src/theme/index.scss";',
      },
    },
  },
  build: {
    sourcemap: false,
  },
})
