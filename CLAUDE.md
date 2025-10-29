# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with Astro 5.8.0, showcasing AI, gaming, and development projects. The site is statically generated and deployed to GitHub Pages.

## Development Commands

```bash
# Install dependencies
npm install

# Start dev server (localhost:4321)
npm run dev

# Build for production (output to ./dist/)
npm run build

# Preview production build locally
npm run preview

# Run Astro CLI commands
npm run astro [command]
```

## Architecture

### Content Collections System

The site uses Astro's content collections for managing structured content:

- **Projects** (`src/content/projects/`): Portfolio projects with metadata
- **Blog** (`src/content/blog/`): Blog posts and articles

Content schemas are defined in `src/content/config.ts` using Zod. When adding new content:
- Projects must include tags from: `['ai', 'gaming', 'research', 'coding-misc', 'web-dev']`
- Blog posts can have categories: `['ai', 'gaming', 'web-dev', 'research', 'thoughts', 'tutorials']`

### Routing Structure

The site uses Astro's file-based routing:

1. **Static Routes**: Direct page mappings in `src/pages/`
   - `index.astro` → Home page
   - `blog/index.astro` → Blog listing
   - `projects/ai.astro` → AI projects category page

2. **Dynamic Routes**: Use `[slug].astro` pattern
   - `blog/[slug].astro` → Individual blog posts
   - `projects/[slug].astro` → Individual project pages
   - `blog/[category].astro` → Blog category pages

3. **Category Pages**: All project category pages (ai, gaming, research, coding-misc, web-dev) use the `CategoryPage.astro` component for consistency

### Component Architecture

Key components in `src/components/`:

- **Layout.astro**: Base layout with navigation, footer, and global styles. Contains all CSS including navbar, dropdowns, and mobile menu logic.
- **CategoryPage.astro**: Reusable template for project category pages. Filters projects by tag and displays in a grid.
- **ProjectCard.astro**: Displays project summaries with tags, status, and action buttons
- **BlogCard.astro**: Displays blog post summaries
- **PageHeader.astro**: Consistent headers for category pages with icons and stats

### Styling Approach

- All global styles are in `Layout.astro` using scoped `<style>` tags
- Custom CSS variables defined in `:root`:
  - `--text`, `--background`, `--primary`, `--secondary`, `--accent`
  - `--card-bg`, `--card-hover`, `--border`
- Mobile-first responsive design with breakpoint at 768px
- Glassmorphism effects on navigation and cards

### Project Metadata Fields

Projects support rich metadata:
- `embedType`: 'game' | 'animation' | 'demo' | 'none' - for embedded content
- `embedPath`: URL to embedded content
- `featured`: Boolean to highlight on home page
- `status`: 'completed' | 'in-progress' | 'planned'
- `liveUrl`, `downloadUrl`, `githubUrl`: External links
- `images`: Array of image URLs for gallery
- `technologies`: Array of technology names

## Deployment

- Automatic deployment via GitHub Actions (`.github/workflows/deploy.yml`)
- Pushes to `main` branch trigger the build and deploy process
- Site deploys to: https://FrancescoDM6.github.io
- Uses `withastro/action@v3` for building and `actions/deploy-pages@v4` for deployment

## Adding New Content

### Adding a New Project

1. Create a markdown file in `src/content/projects/` with frontmatter:
```markdown
---
title: "Project Name"
description: "Brief description"
tags: ['ai', 'gaming']  # Must be from allowed list
featured: true
date: 2025-01-15
status: 'completed'
githubUrl: "https://github.com/..."
technologies: ['Python', 'TensorFlow']
---
Content here...
```

2. The project will automatically appear on:
   - Home page (if featured)
   - Category pages matching its tags
   - `/projects/all-projects` page

### Adding a New Blog Post

1. Create a markdown file in `src/content/blog/` with frontmatter:
```markdown
---
title: "Post Title"
description: "Brief description"
date: 2025-01-15
category: 'ai'  # Optional, from allowed list
tags: ['machine-learning', 'python']
draft: false
---
Content here...
```

2. Set `draft: true` to hide from production

### Creating a New Category Page

When adding a new project category:
1. Add the tag to the schema in `src/content/config.ts`
2. Create a new page in `src/pages/projects/[category-name].astro`
3. Use the `CategoryPage` component:
```astro
---
import CategoryPage from '../../components/CategoryPage.astro';
---
<CategoryPage
  category="your-category"
  title="Category Title"
  icon="🎯"
  description="Category description"
/>
```
4. Update navigation in `Layout.astro` if needed

## Key Implementation Details

### Mobile Navigation

The navbar uses JavaScript to toggle mobile menu visibility. The dropdown menu has enhanced hover logic with timeouts to prevent accidental closures. See `Layout.astro:363-425` for implementation.

### Related Content

Blog posts show related content based on matching categories. The logic filters out the current post and sorts by date. See `src/pages/blog/[slug].astro:16-21`.

### Static Path Generation

Dynamic routes use `getStaticPaths()` to generate all pages at build time. Projects and blog posts are queried from content collections and mapped to URL slugs.

## Common Patterns

When implementing new features:

1. **Adding a new page type**: Create in `src/pages/`, use Layout component, follow existing styling patterns
2. **Adding metadata to content**: Update schema in `src/content/config.ts` first
3. **Adding global navigation**: Edit `Layout.astro` navbar section (lines 331-347)
4. **Styling consistency**: Use CSS variables from `:root`, match existing card/button patterns
5. **Responsive design**: Always test at 768px breakpoint, follow mobile-first approach
