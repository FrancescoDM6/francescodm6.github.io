import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://francescodm6.github.io',
  base: '/',
  output: 'static',
  integrations: [sitemap(), mdx()],
  build: {
    assets: '_astro'
  }
});