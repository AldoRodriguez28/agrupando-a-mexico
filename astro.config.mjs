import { defineConfig } from 'astro/config'

export default defineConfig({
  build: {
    rollupOptions: {
      external: ['virtual:astro-icon'], // Marca el módulo como externo
    },
  },
  site: 'https://AldoRodriguez28.github.io',
  base: 'agrupando-a-mexico',
})