import { defineCollection, z } from "astro:content";

export const collections = {
 "Bill-W": defineCollection({
  schema: z.object({
   title: z.string(),
   desc: z.string(),
   img: z.string(),
   id: z.string(),
   poster: z.string(),
  }),
 }),
 "young-people": defineCollection({
  schema: z.object({
   title: z.string(),
   desc: z.string(),
   img: z.string(),
   id: z.string(),
   poster: z.string(),
  }),
 }),
 "dzho-i-charli": defineCollection({
  schema: z.object({
   title: z.string(),
   desc: z.string(),
   img: z.string(),
   id: z.string(),
   head: z.string(),
   poster: z.string(),
   pubDate: z.date(),
  }),
 }),
 "skat-li": defineCollection({
  schema: z.object({
   title: z.string(),
   desc: z.string(),
   img: z.string(),
   id: z.string(),
   poster: z.string(),
   pubDate: z.date(),
  }),
 }),
};
