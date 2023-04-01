import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function get() {
 const posts = await getCollection("dzho-i-charli");
 return rss({
  stylesheet: "/rss/styles.xsl",
  title: "Изучение БКАА с Джо и Чарли",
  description:
   "На сегодняшний день, материалы Джо и Чарли являются самыми известными и используемыми в мире материалами по Большой книге.",
  site: "https://12.netlify.app",
  items: posts.map((post) => ({
   title: post.data.title,
   pubDate: post.data.pubDate,
   description: post.data.desc,
   link: `/aa/dzho-i-charli/${post.slug}/`,
  })),
  customData: `<language>ru</language>`,
 });
}
