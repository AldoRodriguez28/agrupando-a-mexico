import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";


export default defineConfig({
  site: 'https://AldoRodriguez28.github.io',
  base: '/agrupando-a-mexico/',
  integrations: [tailwind(), mdx(), sitemap(), icon()],
  vite: {
    optimizeDeps: {
      include: ['astro-icon'], // Precompila 'astro-icon'
    },
  },
});