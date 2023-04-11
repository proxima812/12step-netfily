import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import robotsTxt from "astro-robots-txt";
import { defineConfig } from "astro/config";
import serviceWorker from "astrojs-service-worker";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
 site: "https://12step.netlify.app",
 integrations: [
  serviceWorker({
   autoRegister: true,
  }),
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
  prefetch(),
  react(),
 ],
});
