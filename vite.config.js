import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [react(), VitePWA({
    registerType: 'autoUpdate',
    includeAssets: ['icons/icon.svg', 'icons/icon-192.png', 'icons/icon-512.png', 'offline.html'],
    manifest: {
      name: 'BoldRush Media', short_name: 'BoldRush', description: 'Social-first digital marketing for ambitious brands.',
      theme_color: '#0965ff', background_color: '#f5f9ff', display: 'standalone', orientation: 'portrait-primary',
      start_url: '/', scope: '/',
      icons: [
        { src: '/icons/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
        { src: '/icons/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
        { src: '/icons/icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' }
      ]
    },
    workbox: { navigateFallback: '/offline.html', globPatterns: ['**/*.{js,css,html,ico,png,svg,webp,jpg,jpeg}'], cleanupOutdatedCaches: true },
    devOptions: { enabled: false }
  })]
});
