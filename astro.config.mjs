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
    build: {
      rollupOptions: {
        output: {
          entryFileNames: 'entry.[hash].js',
          chunkFileNames: 'chunks/chunk.[hash].js',
          assetFileNames: 'assets/asset.[hash][extname]',
        },
      },
    }
  }
});
