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
    // For embedded content like games/animations
    embedType: z.enum(['game', 'animation', 'demo', 'none']).optional().default('none'),
    embedPath: z.string().optional(), // Path to the embedded content
  })
});

export const collections = {
  'projects': projectsCollection,
};