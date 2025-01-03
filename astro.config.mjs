import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://astroship.web3templates.com",
  integrations: [tailwind(), mdx(), sitemap(), icon()],
  output: 'static',
  adapter: github({
    repo: 'agrupando-a-mexico', // Reemplaza con el nombre de tu repositorio
  }),
  base: '/agrupando-a-mexico/', 
});
