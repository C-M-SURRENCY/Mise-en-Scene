import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Replace this with the actual live URL Vercel gave your site
  site: 'https://mise-en-scene-sable.vercel.app', 
  integrations: [sitemap()],
});
