import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  root: './src',
  server: {
    host: true,
  },
  build: {
    outDir: '../dist',
    minify: false,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});