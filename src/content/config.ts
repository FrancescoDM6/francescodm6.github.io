import { defineCollection, z } from 'astro:content';

const screenshotSchema = z.object({
  src: z.string(),
  alt: z.string(),
  caption: z.string().optional(),
  href: z.string().optional(),
});

const baseContentSchema = z.object({
  id: z.string().optional(),
  slug: z.string().optional(),
  title: z.string(),
  subtitle: z.string(),
  summary: z.string().optional(),
  tags: z.array(z.string()).default([]),
  keywords: z.array(z.string()).optional(),
  locale: z.string().default('en-US'),
  status: z.enum(['draft', 'published', 'archived']).default('draft'),
  publishedAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  screenshots: z.array(screenshotSchema).optional(),
  order: z.number().default(99),
});

const caseStudiesCollection = defineCollection({
  type: 'content',
  schema: baseContentSchema.extend({
    company: z.string(),
    role: z.string(),
    timeline: z.string(),
    outcomes: z.array(z.string()).optional(),
  }),
});

const projectsCollection = defineCollection({
  type: 'content',
  schema: baseContentSchema.extend({
    timeline: z.string(),
    stack: z.array(z.string()).default([]),
    projectType: z
      .enum(['personal', 'professional', 'academic', 'open-source'])
      .default('personal'),
    links: z
      .object({
        repository: z.string().optional(),
        demo: z.string().optional(),
        documentation: z.string().optional(),
      })
      .optional(),
  }),
});

const blogCollection = defineCollection({
  type: 'content',
  schema: baseContentSchema.extend({
    excerpt: z.string().optional(),
    readTime: z.string().optional(),
    category: z.string().optional(),
    coverImage: z.string().optional(),
  }),
});

export const collections = {
  'case-studies': caseStudiesCollection,
  projects: projectsCollection,
  blog: blogCollection,
};
