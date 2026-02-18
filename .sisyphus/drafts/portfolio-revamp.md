# Draft: Portfolio Revamp

## User Requirements (Confirmed)
- **Target Audience**: Recruiters + Personal showcase
- **Aesthetic Direction**: Minimalist + Future-modern
- **Maintenance**: Wants both low-maintenance AND enjoys building (iterative approach)
- **Must-haves**: None yet, exploring options
- **Pain Point**: "Boring, generally unhappy"

## Current Stack
- Astro 5.8
- Content collections (projects, blog)
- Dark theme with glassmorphism touches
- Categories: AI, Gaming, Research, Web Dev, Coding Misc

## Open Questions
- What specifically makes you "unhappy"? (Visuals? Content? Structure? Representation?)
- Any portfolios you admire? (Linear, Raycast, Vercel, etc.)
- Projects you're actually proud of vs. filler content?

## Current State Analysis

### What's Working
- Strong positioning (MS AI @ Northeastern → Product Ops/BI)
- Agentforce case study is well-written with good narrative structure
- Clean typography hierarchy (IBM Plex Sans + Mono)
- Personal touch: Beesekai webnovel shows consistency (166 chapters, 5 years)
- Status indicator ("Open to 2026 co-op")

### Pain Points Mapped

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Visual Identity (1)** | No signature visual element; muted palette; no hero graphic; forgettable at glance | Recruiters won't remember it |
| **Content Pride (2)** | 2/3 case studies incomplete; text-heavy; no visuals (screenshots, diagrams, flows); Agentforce wall-of-text | Projects undersold |
| **Structure/Flow (3)** | Structure is actually decent, but hero is text-only; no visual hierarchy anchor | Feels flat, not guided |
| **Engagement/Dead (5)** | No motion; no scroll reveals (`.reveal` class unused); static cards; zero interactivity | Feels like a PDF |

### Gap Analysis

**Missing:**
- `reveal` class is defined but has no JS implementation
- No images anywhere
- No hero visual/animation
- No process diagrams for case studies
- No metrics visualizations
- No micro-interactions beyond basic hover

**Content Incomplete:**
- `bi-dashboard.md` → "Details coming soon"
- `family-ai-platform.md` → "Details coming soon"

## Final Requirements (Confirmed)

### Aesthetic Direction
- **Style**: Linear × Bento hybrid — dark, premium, subtle gradients, grid-based with playful organization
- **Hero**: Reactive gradient mesh/node network — represents "disparate parts connected in unusual ways"
- **Case Studies**: Editorial + visual documentation — process diagrams, callouts, screenshots, pull quotes

### Technical Decisions
- **Skill Level**: Advanced JS/CSS (WebGL/canvas capable)
- **Approach**: Phased — quick wins first, layer deeper investments over time
- **Focus**: Visual system first → content assets later
- **QA**: Specific QA scenarios per task (performance, browser compatibility, mobile verification)
- **Plan Format**: Single plan with phases

### Priorities (User Selected)
1. Add motion/interactivity
2. Visual content system (diagrams, screenshots, callouts, process flows)
3. Define visual brand

### Pain Points Being Solved
1. **Visual Identity** — Create signature element (hero), distinctive palette, memorable brand
2. **Content Pride** — Visual content system to showcase work properly
3. **Structure/Flow** — Hero as anchor, guided visual hierarchy
5. **Engagement** — Motion, interactivity, scroll reveals, micro-interactions

### Hero Concept
"A more subtle/interesting reactive gradient mesh or node network than typical, something graphical that really represents disparate parts being connected in unusual ways"
→ This is a visual metaphor for Product Ops work (connecting technical ↔ business ↔ people)
