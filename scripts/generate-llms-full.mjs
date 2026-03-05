import { existsSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '..');
const siteBase = 'https://francescodm6.github.io';

const CONTENT_SOURCES = [
  {
    id: 'case-studies',
    label: 'Case Studies',
    directory: 'src/content/case-studies',
    output: 'public/llms-full.txt',
    routePrefix: '/work/',
    emptyOutcomesFallback:
      'Outcomes will be published after the engagement wraps and details can be shared.',
    itemLabel: 'Case study',
    fieldMap: { role: 'role', company: 'company', timeline: 'timeline' },
  },
  {
    id: 'projects',
    label: 'Projects',
    directory: 'src/content/projects',
    output: 'public/llms-projects.txt',
    routePrefix: '/projects/',
    emptyOutcomesFallback:
      'Implementation notes are provided in the project writeup.',
    itemLabel: 'Project',
    fieldMap: { role: 'category', company: 'projectType', timeline: 'timeline' },
  },
  {
    id: 'blog',
    label: 'Blog Posts',
    directory: 'src/content/blog',
    output: 'public/llms-blog.txt',
    routePrefix: '/blog/',
    emptyOutcomesFallback:
      'This entry is a narrative note rather than an outcome list.',
    itemLabel: 'Blog post',
    fieldMap: { role: 'category', company: 'category', timeline: 'readTime' },
  },
];

const CORE_PAGES = [
  { label: 'Home', url: '/' },
  { label: 'Case studies', url: '/work' },
  { label: 'Projects', url: '/projects' },
  { label: 'Blog', url: '/blog' },
];

function collapseWhitespace(text) {
  return text.replace(/\s+/g, ' ').trim();
}

function toCanonicalUrl(routePath) {
  const normalized = routePath.startsWith('/') ? routePath : `/${routePath}`;
  return `${siteBase}${normalized}`;
}

function extractFirstParagraph(body) {
  const normalized = body.replace(/\r\n/g, '\n').trim();
  const paragraphs = normalized
    .split(/\n\s*\n/g)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)
    .filter((paragraph) => !paragraph.startsWith('#'))
    .filter((paragraph) => !paragraph.startsWith('import '))
    .filter((paragraph) => !paragraph.startsWith('<'))
    .map((paragraph) => paragraph.replace(/\*|_/g, ''))
    .map((paragraph) => paragraph.replace(/`/g, ''))
    .map((paragraph) => paragraph.replace(/\[(.*?)\]\(.*?\)/g, '$1'))
    .map(collapseWhitespace)
    .filter(Boolean);

  return paragraphs[0] || '';
}

function parseMarkdownEntry(filePath, source) {
  const raw = readFileSync(filePath, 'utf8');
  const { data, content: body } = matter(raw);
  const ext = path.extname(filePath);
  const slug = path.basename(filePath, ext);

  const paragraphFromBody = extractFirstParagraph(body);
  const subtitle = typeof data.subtitle === 'string' ? data.subtitle : '';
  const fallbackSummary = subtitle || 'Content details are being documented.';
  let summary =
    paragraphFromBody && paragraphFromBody !== 'Details coming soon.'
      ? paragraphFromBody
      : fallbackSummary;

  if (subtitle && !summary.includes(subtitle)) {
    summary = `${subtitle} ${summary}`;
  }

  const outcomes =
    Array.isArray(data.outcomes) && data.outcomes.length > 0
      ? data.outcomes
      : [source.emptyOutcomesFallback];

  const { role: roleField, company: companyField, timeline: timelineField } = source.fieldMap ?? {};
  const role = (roleField && data[roleField]) || 'Not specified';
  const company = (companyField && data[companyField]) || 'Not specified';
  const timeline = (timelineField && data[timelineField]) || 'Not specified';

  const sourcePath = `${source.routePrefix}${slug}`;

  return {
    id: source.id,
    title: data.title || slug,
    summary: collapseWhitespace(summary),
    role,
    company,
    timeline,
    outcomes,
    order: typeof data.order === 'number' ? data.order : Number.POSITIVE_INFINITY,
    slug,
    itemLabel: source.itemLabel || 'Content item',
    sourcePath,
    sourceUrl: toCanonicalUrl(sourcePath),
  };
}

function readEntries(source) {
  const absoluteDir = path.join(repoRoot, source.directory);
  if (!existsSync(absoluteDir)) {
    return [];
  }

  const files = readdirSync(absoluteDir)
    .filter((file) => file.endsWith('.md') || file.endsWith('.mdx'))
    .sort((a, b) => a.localeCompare(b));

  return files
    .map((file) => parseMarkdownEntry(path.join(absoluteDir, file), source))
    .sort((a, b) => a.order - b.order || a.slug.localeCompare(b.slug));
}

function buildFullContent(source, entries) {
  const lines = [
    `# LLM Full Context: ${source.label}`,
    '',
    `Canonical root: ${siteBase}`,
    '',
  ];

  for (const entry of entries) {
    lines.push(`## ${entry.title}`);
    lines.push(`title: ${entry.title}`);
    lines.push(`summary: ${entry.summary}`);
    lines.push(`role: ${entry.role}`);
    lines.push(`company: ${entry.company}`);
    lines.push(`timeline: ${entry.timeline}`);
    lines.push('key outcomes:');
    for (const outcome of entry.outcomes) {
      lines.push(`- ${outcome}`);
    }
    lines.push(`source URL: ${entry.sourceUrl}`);
    lines.push('');
  }

  return `${lines.join('\n').trimEnd()}\n`;
}

function buildIndex(allEntries) {
  const lines = [
    '# LLM Index',
    '',
    'Site purpose: Portfolio website for Francesco Di Mise focused on AI implementation, product operations, and business intelligence delivery.',
    '',
    `Canonical root: ${siteBase}`,
    '',
    'Key pages:',
    ...CORE_PAGES.map((page) => `- ${page.label}: ${toCanonicalUrl(page.url)}`),
    ...allEntries.map((entry) => `- ${entry.itemLabel}: ${entry.title} - ${entry.sourceUrl}`),
    '',
    'Machine-readable resources:',
    `- LLM index (this file): ${toCanonicalUrl('/llms.txt')}`,
    ...CONTENT_SOURCES.map((source) => {
      const filename = path.basename(source.output);
      return `- ${source.label}: ${toCanonicalUrl(`/${filename}`)}`;
    }),
    '',
  ];

  return lines.join('\n');
}

function main() {
  const allEntries = [];

  for (const source of CONTENT_SOURCES) {
    const entries = readEntries(source);
    allEntries.push(...entries);

    const outputPath = path.join(repoRoot, source.output);
    writeFileSync(outputPath, buildFullContent(source, entries), 'utf8');
    console.log(
      `Generated ${path.relative(repoRoot, outputPath)} from ${entries.length} ${source.id}.`,
    );
  }

  const indexPath = path.join(repoRoot, 'public/llms.txt');
  writeFileSync(indexPath, buildIndex(allEntries), 'utf8');
  console.log(`Generated ${path.relative(repoRoot, indexPath)}.`);
}

main();
