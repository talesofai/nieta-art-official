import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.talesofai.cn/nieta-art/',
  integrations: [tailwind(), react()],
  build: {
    assets: 'static',
  },
});
