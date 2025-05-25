import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Puerto preferido
    strictPort: false, // Permitir el uso de otro puerto si 5173 está ocupado
    proxy: {
      '/api': {
        target: 'http://localhost:8080', // Actualizado al puerto 8080 del backend
        changeOrigin: true,
        secure: false,
        headers: {
          'Origin': 'http://localhost:5173', // Simular origen local
          'Access-Control-Allow-Origin': '*'
        },
        configure: (proxy, _options) => {
          proxy.on('error', (err, _req, _res) => {
            console.log('proxy error', err);
          });
          proxy.on('proxyReq', (proxyReq, req, _res) => {
            console.log('Sending Request to the Target:', req.method, req.url);
          });
          proxy.on('proxyRes', (proxyRes, req, _res) => {
            console.log('Received Response from the Target:', proxyRes.statusCode, req.url);
          });
        }
      }
    }
  }
})
