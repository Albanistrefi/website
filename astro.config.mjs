// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
const site = process.env.SITE_URL || 'https://www.albanistrefi.me';

export default defineConfig({
  site,
  integrations: [
    react(),
    mdx(),
    sitemap()
  ],
  vite: {
    plugins: [tailwindcss()]
  },
  output: 'static'
});
