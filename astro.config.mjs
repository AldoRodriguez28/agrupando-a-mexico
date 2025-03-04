import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export default defineConfig({
  site: 'http://104.251.222.179',
  base: '/',
  integrations: [tailwind(), mdx(), sitemap(), icon()],
  vite: {
    optimizeDeps: {
      include: ['astro-icon'],
    },
  },
});

