import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://awningsmumbai.com', // Site URL for SEO and sitemap generation
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
