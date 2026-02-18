import { promises as fs } from 'node:fs';
import { join } from 'node:path';

function normalizePathname(pathname = '/') {
  if (!pathname) return '/';
  return pathname.startsWith('/') ? pathname : `/${pathname}`;
}

function toAbsoluteUrl(site, pathname) {
  const normalized = normalizePathname(pathname);
  return new URL(normalized, site).toString();
}

function renderUrlSet(urls) {
  const items = urls
    .map((url) => `  <url>\n    <loc>${url}</loc>\n  </url>`)
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${items}\n</urlset>\n`;
}

function renderSitemapIndex(url) {
  return `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <sitemap>\n    <loc>${url}</loc>\n  </sitemap>\n</sitemapindex>\n`;
}

export default function sitemap() {
  let site;

  return {
    name: '@astrojs/sitemap',
    hooks: {
      'astro:config:done': ({ config }) => {
        site = config.site;
      },
      'astro:build:done': async ({ dir, pages = [] }) => {
        if (!site) {
          return;
        }

        const urls = pages
          .map((page) => (page.pathname === '' ? '/' : page.pathname))
          .filter((pathname) => pathname !== undefined && pathname !== null)
          .map((pathname) => toAbsoluteUrl(site, pathname));

        const uniqueUrls = [...new Set(urls)];

        const sitemapPath = join(dir.pathname, 'sitemap-0.xml');
        const indexPath = join(dir.pathname, 'sitemap-index.xml');

        await fs.writeFile(sitemapPath, renderUrlSet(uniqueUrls), 'utf8');
        await fs.writeFile(
          indexPath,
          renderSitemapIndex(toAbsoluteUrl(site, '/sitemap-0.xml')),
          'utf8'
        );
      }
    }
  };
}
