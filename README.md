# francescodm6.github.io

Personal portfolio built with Astro.

## LLM context files

The project generates two machine-readable files in `public/`:

- `public/llms.txt`: concise site index (purpose, key pages, canonical URLs)
- `public/llms-full.txt`: normalized content blocks for case studies

## Regenerating LLM files

Whenever content changes, run:

```sh
npm run generate:llms
```

This command regenerates **both** `llms.txt` and `llms-full.txt`, and it is also wired into `prebuild`, so `npm run build` keeps both files in sync automatically.

## Making it adaptable as you add more content

The generator is intentionally config-driven.

1. Open `scripts/generate-llms-full.mjs`.
2. Add a new object in `CONTENT_SOURCES` with:
   - `id`
   - `label`
   - `directory` (for example `src/content/articles`)
   - `output` (for example `public/llms-articles.txt`)
   - `routePrefix` (for example `/articles/`)
   - `itemLabel` (for example `Article`)
3. Run `npm run generate:llms`.

No parser changes are required as long as the markdown files use frontmatter fields like `title`, `subtitle`, `role`, `company`, `timeline`, optional `outcomes`, and optional `order`.
