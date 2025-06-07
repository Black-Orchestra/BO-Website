// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),
    pageTitle: z.string(),
    description: z.string().optional(),
    img: z.string().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
