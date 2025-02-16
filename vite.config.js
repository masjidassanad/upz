import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

import fs from "fs";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  server: {
    https: {
      key: fs.readFileSync(path.resolve(__dirname, "./.dev/localhost-ssl-key.pem")),
      cert: fs.readFileSync(path.resolve(__dirname, "./.dev/localhost-ssl.pem")),
    },
  },
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@assanad": path.resolve(__dirname, "./src"),
      "@qmdz": path.resolve(__dirname, "./src/qmdz"),
    },
  },
  base: '/upz/', // build output assets path: /upz/assets/
  build: {
    outDir: path.resolve(__dirname, "./docs"), // Github pages "www" folder
  },
})
