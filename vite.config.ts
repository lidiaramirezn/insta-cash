import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from "node:path";

export default defineConfig({
  resolve: {
    alias: {
      '@styles': path.resolve(__dirname, './src/styles')
    }
  },
  plugins: [react()]
})
