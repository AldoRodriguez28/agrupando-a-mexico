import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  build: {
    rollupOptions: {
      external: ['virtual:astro-icon'],
    },
  },
});