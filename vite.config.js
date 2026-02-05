import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    react(),
    svgr()
  ],
  server: {
    host: true,
    port: 5173,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {

          'react-vendor': ['react', 'react-dom'],

          'particles': ['@tsparticles/react', '@tsparticles/slim', 'tsparticles'],


          'animations': ['motion', 'aos'],


          'lucide': ['lucide-react'],

          'contact': ['@emailjs/browser', 'react-google-recaptcha'],
        }
      }
    }
  }
});