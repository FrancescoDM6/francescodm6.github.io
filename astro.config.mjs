import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://francescodm6.github.io',
  base: '/',
  output: 'static',
  integrations: [sitemap()],
  build: {
    assets: '_astro'
  }
});
