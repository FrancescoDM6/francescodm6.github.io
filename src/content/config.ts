import { defineCollection, z } from 'astro:content';

const caseStudiesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    company: z.string(),
    role: z.string(),
    timeline: z.string(),
    tags: z.array(z.string()),
    outcomes: z.array(z.string()).optional(),
    order: z.number().default(99),
  })
});

export const collections = {
  'case-studies': caseStudiesCollection,
};