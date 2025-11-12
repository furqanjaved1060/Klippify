import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, './src/assets'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@protected-routes': path.resolve(__dirname, './src/protected-routes'),
      '@store': path.resolve(__dirname, './src/store'),
      '@components': path.resolve(__dirname, './src/components'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
    },
  },
})
