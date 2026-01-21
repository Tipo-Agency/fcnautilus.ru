import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
        proxy: {
          '/api/webhook': {
            target: 'https://cloud.1c.fitness',
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api\/webhook/, '/api/hs/lead/Webhook/6538ea95-c58a-45bf-a73d-844677185d8e'),
            secure: true,
            configure: (proxy, _options) => {
              proxy.on('proxyReq', (proxyReq, req, _res) => {
                console.log('[Vite Proxy] POST Request:', req.method, req.url, '->', proxyReq.path);
              });
              proxy.on('proxyRes', (proxyRes, req, _res) => {
                console.log('[Vite Proxy] Response:', proxyRes.statusCode, req.method, req.url);
                proxyRes.headers['access-control-allow-origin'] = '*';
                proxyRes.headers['access-control-allow-methods'] = 'POST, OPTIONS, GET';
                proxyRes.headers['access-control-allow-headers'] = 'Content-Type';
              });
            },
          }
        }
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
