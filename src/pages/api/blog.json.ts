import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { toSummary } from '../../utils/summary';

const RESPONSE_VERSION = '1.0';

export const GET: APIRoute = async () => {
  const posts = await getCollection('blog');

  const records = posts
    .filter((entry) => entry.data.status === 'published')
    .sort((a, b) => (b.data.publishedAt?.getTime() ?? 0) - (a.data.publishedAt?.getTime() ?? 0))
    .map((entry) => ({
      url: `/blog/${entry.slug}/`,
      title: entry.data.title,
      summary: toSummary(entry.data.subtitle, entry.body),
      tags: [...entry.data.tags],
      category: entry.data.category ?? null,
      readTime: entry.data.readTime ?? null,
      publishedTimestamp: entry.data.publishedAt?.toISOString() ?? null,
      updatedTimestamp: entry.data.updatedAt?.toISOString() ?? null,
    }));

  return new Response(
    JSON.stringify({
      version: RESPONSE_VERSION,
      records,
    }),
    {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Cache-Control': 'public, max-age=300',
      },
    },
  );
};
