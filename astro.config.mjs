import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://official.talesofai.cn/',
  integrations: [tailwind(), react()],
  output: 'static',
  build: {
    assets: 'assets',
    assetsPrefix: 'https://oss.talesofai.cn/static/official/',
  },
  vite: {
    plugins: [
      copy({
        targets: [
          {
            src: './node_modules/libpag/lib/libpag.wasm',
            dest: process.env.NODE_ENV === 'production' ? 'dist/' : 'public/',
          },
        ],
        hook: process.env.NODE_ENV === 'production' ? 'writeBundle' : 'buildStart',
      }),
    ],
    build: {
      rollupOptions: {
        output: {
          entryFileNames: 'entry.[hash].js',
          chunkFileNames: 'chunks/chunk.[hash].js',
          assetFileNames: 'assets/asset.[hash][extname]',
        },
      },
    },
  },
});
