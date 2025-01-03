import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  build: {
    rollupOptions: {
      external: ['virtual:astro-icon'],
    },
    site: 'https://AldoRodriguez28.github.io',
    base: 'agrupando-a-mexico',
  },
});