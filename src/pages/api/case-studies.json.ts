import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

const RESPONSE_VERSION = '1.0';

const toSummary = (subtitle: string | undefined, body: string): string => {
  if (subtitle && subtitle.trim().length > 0) {
    return subtitle.trim();
  }

  const plainText = body
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`[^`]*`/g, ' ')
    .replace(/\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/[>#*_~-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  return plainText.slice(0, 160);
};

export const GET: APIRoute = async () => {
  const caseStudies = await getCollection('case-studies');

  const records = caseStudies
    .sort((a, b) => a.data.order - b.data.order)
    .map((entry) => ({
      url: `/work/${entry.slug}/`,
      title: entry.data.title,
      summary: toSummary(entry.data.subtitle, entry.body),
      tags: [...entry.data.tags],
      role: entry.data.role,
      company: entry.data.company,
      timeline: entry.data.timeline,
      outcomes: entry.data.outcomes ?? [],
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
