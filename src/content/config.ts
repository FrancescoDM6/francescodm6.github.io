import { defineCollection, z } from 'astro:content';

const caseStudiesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.string().optional(),
    slug: z.string().optional(),
    title: z.string(),
    subtitle: z.string(),
    summary: z.string().optional(),
    company: z.string(),
    role: z.string(),
    timeline: z.string(),
    tags: z.array(z.string()),
    keywords: z.array(z.string()).optional(),
    locale: z.string().default('en-US'),
    status: z.enum(['draft', 'published', 'archived']).default('draft'),
    publishedAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    outcomes: z.array(z.string()).optional(),
    order: z.number().default(99),
  })
});

export const collections = {
  'case-studies': caseStudiesCollection,
};
