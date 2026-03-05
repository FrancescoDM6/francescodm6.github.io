import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

const RESPONSE_VERSION = '1.0';

const toSummary = (subtitle: string | undefined, body: string): string => {
  if (subtitle && subtitle.trim().length > 0) {
    return subtitle.trim();
  }

  return body
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`[^`]*`/g, ' ')
    .replace(/\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/[>#*_~-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 160);
};

export const GET: APIRoute = async () => {
  const projects = await getCollection('projects');

  const records = projects
    .filter((entry) => entry.data.status === 'published')
    .sort((a, b) => a.data.order - b.data.order)
    .map((entry) => ({
      url: `/projects/${entry.slug}/`,
      title: entry.data.title,
      summary: toSummary(entry.data.subtitle, entry.body),
      tags: [...entry.data.tags],
      stack: entry.data.stack ?? [],
      projectType: entry.data.projectType,
      timeline: entry.data.timeline,
      links: entry.data.links ?? {},
      screenshots: entry.data.screenshots ?? [],
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
