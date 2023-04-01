import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import robotsTxt from "astro-robots-txt";

export default defineConfig({
 site: "https://12.netlify.app",
 integrations: [
  sitemap(),
  robotsTxt(),
  tailwind(),
  compress({
   css: true,
   html: true,
   img: true,
   js: true,
   svg: true,
  }),
 ],
});
