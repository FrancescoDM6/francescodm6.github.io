import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.enum(['ai', 'gaming', 'research', 'coding-misc', 'web-dev'])),
    featured: z.boolean().optional().default(false),
    date: z.date(),
    status: z.enum(['completed', 'in-progress', 'planned']).optional().default('completed'),
    liveUrl: z.string().url().optional(),
    downloadUrl: z.string().url().optional(),
    githubUrl: z.string().url().optional(),
    images: z.array(z.string()).optional(),
    technologies: z.array(z.string()).optional(),
    embedType: z.enum(['game', 'animation', 'demo', 'none']).optional().default('none'),
    embedPath: z.string().optional(),
  })
});

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    updated: z.date().optional(),
    draft: z.boolean().optional().default(false),
    featured: z.boolean().optional().default(false),
    category: z.enum(['ai', 'gaming', 'web-dev', 'research', 'thoughts', 'tutorials']).optional(),
    tags: z.array(z.string()).optional(),
    coverImage: z.string().optional(),
    readTime: z.number().optional(),
  })
});

export const collections = {
  'projects': projectsCollection,
  'blog': blogCollection,
};