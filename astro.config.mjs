import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Replace this with the actual live URL Vercel gave your site
  site: 'https://your-movie-journal.vercel.app', 
  integrations: [sitemap()],
});
