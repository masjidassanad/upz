import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import fs from "fs";
import path from "path";

const keyPath = path.resolve(__dirname, "./.dev/localhost-ssl-key.pem");
const certPath = path.resolve(__dirname, "./.dev/localhost-ssl.pem");

export default defineConfig({
  plugins: [
    react(),
  ],
  server: {
    https: fs.existsSync(keyPath) && fs.existsSync(certPath)
      ? {
          key: fs.readFileSync(keyPath),
          cert: fs.readFileSync(certPath),
        }
      : false, // Disable HTTPS if keys are missing
  },
  resolve: {
    alias: {
      "@assanad": path.resolve(__dirname, "./src"),
    },
  },
  base: '/upz/', // build output assets path: /upz/assets/
  build: {
    outDir: path.resolve(__dirname, "./dist"),
  },
})
