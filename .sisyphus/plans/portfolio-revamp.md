# Portfolio Revamp — Visual Identity & Motion System

## TL;DR

> **Quick Summary**: Transform a "boring" portfolio into a premium, memorable showcase with a reactive hero, scroll-based motion, and a visual content system for case studies.
> 
> **Deliverables**:
> - Interactive hero with reactive gradient mesh/node network
> - Scroll reveal animations throughout
> - Micro-interactions (hover, buttons, cards)
> - Astro View Transitions for smooth page navigation
> - Visual content system for case studies (diagrams, callouts, screenshots)
> - Refined color palette and typography system
> 
> **Estimated Effort**: Medium (phased)
> **Parallel Execution**: YES — Phase 1 has 5+ parallel tasks per wave
> **Critical Path**: Hero Design → Hero Implementation → Case Study System

---

## Context

### Original Request
User wants to revamp their portfolio because it feels "boring and generally unhappy." Four pain points: visual identity, content pride, structure/flow, and engagement.

### Interview Summary
**Key Discussions**:
- **Aesthetic**: Linear × Bento hybrid — dark, premium, subtle gradients, grid-based
- **Hero**: Reactive gradient mesh/node network representing "disparate parts connected in unusual ways" — visual metaphor for Product Ops work
- **Case Studies**: Editorial + visual documentation — process diagrams, callouts, screenshots, pull quotes
- **Approach**: Phased — quick wins first, layer deeper investments over time
- **Focus**: Visual system first → content assets later
- **QA**: Specific scenarios per task

**Current State**:
- Astro 5.8 with content collections
- 3 case studies (Agentforce complete, BI Dashboard + Family AI "coming soon")
- IBM Plex Sans + Mono typography
- `.reveal` class exists but no JS implementation
- No motion, no visuals, text-heavy

### Gap Analysis (Self-Review)
**Identified Gaps** (addressed in plan):
- Mobile performance for canvas/WebGL hero → Added performance thresholds in QA
- Accessibility for animated elements → Added reduced-motion fallbacks
- Content creation scope → Explicitly scoped to visual system, not content writing
- Browser compatibility → Added cross-browser QA scenarios

---

## Work Objectives

### Core Objective
Transform the portfolio from "boring and dead" to "premium and alive" through motion, interactivity, and a distinctive visual identity — while maintaining the professional positioning for recruiters.

### Concrete Deliverables
- Hero component with reactive gradient mesh/node network (canvas or SVG-based)
- Scroll reveal system (intersection observer + CSS animations)
- Micro-interactions library (hover states, button effects, card interactions)
- Astro View Transitions integration
- Case study visual components (diagrams, callouts, screenshot frames)
- Refined CSS custom properties for brand identity

### Definition of Done
- [ ] Hero animation runs at 60fps on desktop and 30fps minimum on mobile
- [ ] All scroll reveals work with reduced-motion fallback
- [ ] View transitions work across all pages
- [ ] Visual system documented in CSS custom properties
- [ ] Case study page has 3+ visual component types available

### Must Have
- Interactive hero that responds to cursor/scroll
- Scroll reveal animations
- Premium micro-interactions
- Visual brand identity (colors, spacing, effects)

### Must NOT Have (Guardrails)
- ❌ Heavy animations that tank performance
- ❌ Generic particle effects (user wants "more subtle/interesting than typical")
- ❌ Content writing for incomplete case studies (visual system only)
- ❌ Changes to existing case study text content
- ❌ Over-engineered solutions (keep it maintainable)

---

## Verification Strategy

### Test Decision
- **Infrastructure exists**: NO (no test framework)
- **Automated tests**: NO — visual QA via Playwright scenarios
- **Framework**: N/A
- **QA Method**: Agent-executed browser verification + performance audits

### QA Policy
Every task MUST include agent-executed QA scenarios with Playwright.
Evidence saved to `.sisyphus/evidence/task-{N}-{scenario-slug}.{ext}`.

| Deliverable Type | Verification Tool | Method |
|------------------|-------------------|--------|
| Frontend/UI | Playwright (playwright skill) | Navigate, interact, assert DOM, screenshot |
| Animations | Playwright + Chrome DevTools | Record timeline, check FPS, verify reduced-motion |
| Visual | Playwright | Screenshot comparison, visual regression |

---

## Execution Strategy

### Parallel Execution Waves

```
═══════════════════════════════════════════════════════════════════════════════
PHASE 1: QUICK WINS — Foundation & Motion (Start Immediately)
═══════════════════════════════════════════════════════════════════════════════

Wave 1A (Start Immediately — CSS foundation):
├── Task 1: CSS custom properties refactor [quick]
├── Task 2: Scroll reveal animation system [quick]
├── Task 3: View Transitions integration [quick]
└── Task 4: Micro-interactions library [quick]

Wave 1B (After 1A — enhanced effects):
├── Task 5: Card hover enhancements [quick]
├── Task 6: Button interaction system [quick]
├── Task 7: Focus states & accessibility [quick]
└── Task 8: Ambient background animations [visual-engineering]

═══════════════════════════════════════════════════════════════════════════════
PHASE 2: VISUAL IDENTITY — Hero & Brand
═══════════════════════════════════════════════════════════════════════════════

Wave 2A (Hero Design):
├── Task 9: Hero concept exploration [visual-engineering]
├── Task 10: Gradient mesh prototype [visual-engineering]
└── Task 11: Node network prototype [visual-engineering]

Wave 2B (Hero Implementation):
├── Task 12: Hero component architecture [visual-engineering]
├── Task 13: Cursor interactivity [visual-engineering]
├── Task 14: Scroll-based parallax [visual-engineering]
├── Task 15: Mobile hero fallback [quick]
└── Task 16: Reduced motion fallback [quick]

═══════════════════════════════════════════════════════════════════════════════
PHASE 3: CASE STUDY VISUAL SYSTEM
═══════════════════════════════════════════════════════════════════════════════

Wave 3A (Visual Components):
├── Task 17: Callout/pull-quote component [quick]
├── Task 18: Screenshot frame component [quick]
├── Task 19: Process diagram component [visual-engineering]
├── Task 20: Metrics callout component [quick]
└── Task 21: Section divider animations [quick]

Wave 3B (Integration):
├── Task 22: Case study page template update [quick]
└── Task 23: Component documentation [quick]

═══════════════════════════════════════════════════════════════════════════════
PHASE 4: PERFORMANCE & POLISH
═══════════════════════════════════════════════════════════════════════════════

Wave 4A (Optimization):
├── Task 24: Animation performance audit [quick]
├── Task 25: CSS bundle optimization [quick]
├── Task 26: Hero performance optimization [visual-engineering]
└── Task 27: Cross-browser testing [quick]

Wave FINAL (Verification):
├── Task F1: Visual regression check [unspecified-high]
├── Task F2: Performance audit (Lighthouse) [quick]
├── Task F3: Accessibility audit [quick]
└── Task F4: Mobile responsiveness check [quick]

═══════════════════════════════════════════════════════════════════════════════
```

### Dependency Matrix

| Task | Depends On | Blocks | Wave |
|------|------------|--------|------|
| 1-4 | — | 5-8 | 1A |
| 5-8 | 1, 2, 3 | 9-16 | 1B |
| 9 | 5-8 | 10-16 | 2A |
| 10-11 | 9 | 12-16 | 2A |
| 12 | 10 OR 11 | 13-16 | 2B |
| 13-16 | 12 | 17-23 | 2B |
| 17-21 | — | 22-23 | 3A |
| 22-23 | 17-21 | 24-27, F1-F4 | 3B |
| 24-27 | 22 | F1-F4 | 4A |
| F1-F4 | ALL | — | FINAL |

### Agent Dispatch Summary

| Wave | # Parallel | Tasks → Agent Category |
|------|------------|----------------------|
| 1A | **4** | T1-T4 → `quick` |
| 1B | **4** | T5-T7 → `quick`, T8 → `visual-engineering` |
| 2A | **3** | T9-T11 → `visual-engineering` |
| 2B | **5** | T12-T14 → `visual-engineering`, T15-T16 → `quick` |
| 3A | **5** | T17-T18, T20-T21 → `quick`, T19 → `visual-engineering` |
| 3B | **2** | T22-T23 → `quick` |
| 4A | **4** | T24-T25, T27 → `quick`, T26 → `visual-engineering` |
| FINAL | **4** | F1 → `unspecified-high`, F2-F4 → `quick` |

---

## TODOs

> Implementation + QA = ONE Task. Never separate.
> EVERY task MUST have: Recommended Agent Profile + Parallelization info + QA Scenarios.

---

## PHASE 1: QUICK WINS — Foundation & Motion

- [ ] 1. CSS Custom Properties Refactor

  **What to do**:
  - Consolidate existing CSS variables in `Layout.astro` into a design system
  - Add new variables for: animation timing, gradient colors, interaction states
  - Create spacing scale and motion tokens
  - Document the system in a CSS comment block

  **Must NOT do**:
  - Don't change existing color values (preserve brand)
  - Don't add new colors without purpose

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: CSS-only task, no complex logic
  - **Skills**: None needed

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 1A (with Tasks 2, 3, 4)
  - **Blocks**: Tasks 5-8
  - **Blocked By**: None

  **References**:
  - `src/components/Layout.astro:22-31` - Existing CSS custom properties

  **Acceptance Criteria**:
  - [ ] All CSS variables are in `:root` in one organized block
  - [ ] Animation timing variables exist (`--ease-out-expo`, `--duration-normal`, etc.)
  - [ ] No hardcoded colors outside the variable system

  **QA Scenarios**:
  ```
  Scenario: CSS variables are applied
    Tool: Playwright
    Steps:
      1. Navigate to homepage
      2. Get computed style of `--primary` from `:root`
      3. Verify it matches `#afcbcf`
    Expected Result: Variable value is `rgb(175, 203, 207)`
    Evidence: .sisyphus/evidence/task-01-css-vars.png
  ```

  **Commit**: YES
  - Message: `refactor(css): consolidate design system variables`
  - Files: `src/components/Layout.astro`

- [ ] 2. Scroll Reveal Animation System

  **What to do**:
  - Implement JS for the existing `.reveal` class
  - Use Intersection Observer for performance
  - Add staggered animation delays for lists/grids
  - Support `data-reveal-delay` attribute for custom timing

  **Must NOT do**:
  - Don't use scroll event listeners (use Intersection Observer)
  - Don't animate `height` or `width` (causes layout thrash)

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: Standard pattern, well-documented approach
  - **Skills**: None needed

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 1A (with Tasks 1, 3, 4)
  - **Blocks**: Tasks 5-8
  - **Blocked By**: None

  **References**:
  - `src/pages/index.astro:49,74,94` - Elements with `.reveal` class
  - `src/pages/work/[slug].astro:26,44,61,72` - Case study reveal elements

  **Acceptance Criteria**:
  - [ ] Elements with `.reveal` animate in when entering viewport
  - [ ] Animation is smooth (opacity + transform only)
  - [ ] `prefers-reduced-motion` disables animations

  **QA Scenarios**:
  ```
  Scenario: Scroll reveals work on homepage
    Tool: Playwright
    Steps:
      1. Navigate to homepage
      2. Scroll to "Selected work" section
      3. Wait 500ms
      4. Check case study cards have opacity: 1
    Expected Result: Cards animate in, opacity transitions from 0 to 1
    Evidence: .sisyphus/evidence/task-02-scroll-reveal.png

  Scenario: Reduced motion disables animations
    Tool: Playwright
    Steps:
      1. Emulate `prefers-reduced-motion: reduce`
      2. Navigate to homepage
      3. Scroll to reveal elements
      4. Check elements are immediately visible (no animation)
    Expected Result: Elements are visible without animation
    Evidence: .sisyphus/evidence/task-02-reduced-motion.png
  ```

  **Commit**: YES
  - Message: `feat(motion): add scroll reveal animation system`
  - Files: `src/scripts/reveal.ts`, `src/components/Layout.astro`

- [ ] 3. View Transitions Integration

  **What to do**:
  - Enable Astro View Transitions in `Layout.astro`
  - Add transition names to key elements (hero, cards, nav)
  - Configure fade/slide animations for page changes
  - Add loading state for slow transitions

  **Must NOT do**:
  - Don't over-complicate transitions (keep them subtle)
  - Don't break browser back button

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: Astro built-in feature, minimal code
  - **Skills**: None needed

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 1A (with Tasks 1, 2, 4)
  - **Blocks**: Tasks 5-8
  - **Blocked By**: None

  **References**:
  - `src/components/Layout.astro` - Add ViewTransitions component
  - Astro docs: https://docs.astro.build/en/guides/view-transitions/

  **Acceptance Criteria**:
  - [ ] Page navigations have smooth fade transition
  - [ ] No flash of unstyled content
  - [ ] Works on all major browsers

  **QA Scenarios**:
  ```
  Scenario: View transitions work on navigation
    Tool: Playwright
    Steps:
      1. Navigate to homepage
      2. Click "View my work" button
      3. Capture transition timing
      4. Verify URL changed to /work
    Expected Result: Smooth fade transition between pages
    Evidence: .sisyphus/evidence/task-03-view-transitions.png
  ```

  **Commit**: YES
  - Message: `feat(transitions): add Astro View Transitions`
  - Files: `src/components/Layout.astro`

- [ ] 4. Micro-Interactions Library

  **What to do**:
  - Create reusable interaction effects in CSS
  - Add scale-on-hover, glow-on-focus, slide-on-active
  - Define interaction timing variables
  - Add hover states for links, buttons, cards

  **Must NOT do**:
  - Don't use JavaScript for simple hover effects
  - Don't make animations longer than 300ms

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: CSS-only utilities
  - **Skills**: None needed

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 1A (with Tasks 1, 2, 3)
  - **Blocks**: Tasks 5-8
  - **Blocked By**: None

  **References**:
  - `src/components/CaseStudyCard.astro:65-70` - Existing hover effects
  - `src/pages/index.astro:198-203` - Button hover styles

  **Acceptance Criteria**:
  - [ ] All interactive elements have hover states
  - [ ] Transitions use consistent timing
  - [ ] Focus states are visible

  **QA Scenarios**:
  ```
  Scenario: Hover effects work on buttons
    Tool: Playwright
    Steps:
      1. Navigate to homepage
      2. Hover over "View my work" button
      3. Check transform and shadow applied
    Expected Result: Button lifts and glows on hover
    Evidence: .sisyphus/evidence/task-04-hover-buttons.png
  ```

  **Commit**: YES
  - Message: `feat(interactions): add micro-interactions library`
  - Files: `src/styles/interactions.css`

- [ ] 5. Card Hover Enhancements

  **What to do**:
  - Enhance CaseStudyCard hover with 3D tilt effect (optional)
  - Add shadow depth animation
  - Improve arrow animation on hover
  - Add subtle border glow

  **Must NOT do**:
  - Don't add 3D tilt if it hurts performance
  - Don't obscure content with effects

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: CSS enhancements to existing component
  - **Skills**: None needed

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 1B (with Tasks 6, 7, 8)
  - **Blocks**: Tasks 9-16
  - **Blocked By**: Tasks 1, 4

  **References**:
  - `src/components/CaseStudyCard.astro:50-70` - Current hover styles

  **Acceptance Criteria**:
  - [ ] Cards have smooth hover lift
  - [ ] Border color animates
  - [ ] Arrow slides right on hover

  **QA Scenarios**:
  ```
  Scenario: Card hover enhances visual
    Tool: Playwright
    Steps:
      1. Navigate to homepage
      2. Hover over first case study card
      3. Capture animation state
    Expected Result: Card lifts, border glows, arrow moves
    Evidence: .sisyphus/evidence/task-05-card-hover.png
  ```

  **Commit**: NO (groups with Task 8)

- [ ] 6. Button Interaction System

  **What to do**:
  - Add pressed/active states to all buttons
  - Create ripple effect on click (optional)
  - Add loading state animation
  - Ensure consistent timing across all buttons

  **Must NOT do**:
  - Don't break existing button functionality
  - Don't add JS unless necessary for ripple

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: CSS-focused enhancements
  - **Skills**: None needed

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 1B (with Tasks 5, 7, 8)
  - **Blocks**: Tasks 9-16
  - **Blocked By**: Tasks 1, 4

  **References**:
  - `src/pages/index.astro:184-223` - Button styles

  **Acceptance Criteria**:
  - [ ] All buttons have active state
  - [ ] Click feels responsive
  - [ ] Focus ring is visible

  **QA Scenarios**:
  ```
  Scenario: Button active state works
    Tool: Playwright
    Steps:
      1. Navigate to homepage
      2. Click and hold "View my work" button
      3. Check active state applied
    Expected Result: Button scales down slightly on press
    Evidence: .sisyphus/evidence/task-06-button-active.png
  ```

  **Commit**: NO (groups with Task 8)

- [ ] 7. Focus States & Accessibility

  **What to do**:
  - Add visible focus rings to all interactive elements
  - Ensure focus order is logical (tabindex)
  - Add skip-to-content link
  - Test keyboard navigation

  **Must NOT do**:
  - Don't remove focus outline without replacement
  - Don't change tab order arbitrarily

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: Standard accessibility improvements
  - **Skills**: None needed

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 1B (with Tasks 5, 6, 8)
  - **Blocks**: Tasks 9-16
  - **Blocked By**: Tasks 1, 4

  **References**:
  - `src/components/Layout.astro` - Add skip link

  **Acceptance Criteria**:
  - [ ] All focusable elements have visible focus ring
  - [ ] Tab order is logical
  - [ ] Skip link works

  **QA Scenarios**:
  ```
  Scenario: Keyboard navigation works
    Tool: Playwright
    Steps:
      1. Navigate to homepage
      2. Press Tab 5 times
      3. Check focus moves through logical elements
    Expected Result: Focus moves: skip link → logo → nav links → buttons
    Evidence: .sisyphus/evidence/task-07-keyboard.png

  Scenario: Focus ring is visible
    Tool: Playwright
    Steps:
      1. Navigate to homepage
      2. Press Tab to focus "View my work" button
      3. Check focus ring is visible
    Expected Result: Button has visible focus ring (outline or box-shadow)
    Evidence: .sisyphus/evidence/task-07-focus-ring.png
  ```

  **Commit**: NO (groups with Task 8)

- [ ] 8. Ambient Background Animations

  **What to do**:
  - Add subtle animated gradient background to hero area
  - Create floating particles or mesh pattern
  - Use CSS animations or minimal JS
  - Ensure low performance impact

  **Must NOT do**:
  - Don't make it distracting from content
  - Don't use heavy canvas effects (save for hero)

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
    - Reason: Requires visual design judgment + animation skills
  - **Skills**: [`frontend-ui-ux`]
    - `frontend-ui-ux`: Designing subtle, premium background effects

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 1B (with Tasks 5, 6, 7)
  - **Blocks**: Tasks 9-16
  - **Blocked By**: Tasks 1, 4

  **References**:
  - `src/pages/index.astro:119-152` - Hero section styles

  **Acceptance Criteria**:
  - [ ] Background has subtle animation
  - [ ] Animation respects reduced-motion
  - [ ] Performance impact < 5ms per frame

  **QA Scenarios**:
  ```
  Scenario: Background animation is subtle
    Tool: Playwright
    Steps:
      1. Navigate to homepage
      2. Wait 3 seconds
      3. Capture hero area
    Expected Result: Background shows gradual animation, not distracting
    Evidence: .sisyphus/evidence/task-08-ambient-bg.png

  Scenario: Background animation performance
    Tool: Playwright + DevTools
    Steps:
      1. Navigate to homepage
      2. Open DevTools performance panel
      3. Record 5 seconds
      4. Check frame rate
    Expected Result: Frame rate stays above 55fps
    Evidence: .sisyphus/evidence/task-08-performance.json
  ```

  **Commit**: YES
  - Message: `feat(motion): add Phase 1 quick wins`
  - Files: `src/components/CaseStudyCard.astro`, `src/pages/index.astro`, `src/components/Layout.astro`

---

## PHASE 2: VISUAL IDENTITY — Hero & Brand

- [ ] 9. Hero Concept Exploration

  **What to do**:
  - Research and sketch 3+ hero concepts
  - Focus on "reactive gradient mesh/node network representing disparate parts connected"
  - Consider: WebGL, SVG, Canvas, or CSS-only approaches
  - Document pros/cons of each approach
  - Get user feedback on direction

  **Must NOT do**:
  - Don't start coding before concept is approved
  - Don't make generic particle effects

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
    - Reason: Creative exploration with technical constraints
  - **Skills**: [`frontend-ui-ux`]
    - `frontend-ui-ux`: Visual design exploration

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 2A (with Tasks 10, 11)
  - **Blocks**: Tasks 12-16
  - **Blocked By**: Tasks 5-8

  **References**:
  - Linear.app hero (reference for premium feel)
  - Raycast.app (reference for subtle interactivity)

  **Acceptance Criteria**:
  - [ ] 3+ concept sketches/mocks documented
  - [ ] Technical feasibility assessed for each
  - [ ] User selects preferred direction

  **QA Scenarios**:
  ```
  Scenario: Concepts are documented
    Tool: Read
    Steps:
      1. Read concept documentation file
      2. Verify 3+ concepts described
    Expected Result: Document exists with clear concept descriptions
    Evidence: .sisyphus/evidence/task-09-concepts.md
  ```

  **Commit**: NO (research task)

- [ ] 10. Gradient Mesh Prototype

  **What to do**:
  - Build a working prototype of gradient mesh approach
  - Use CSS gradients or SVG with animation
  - Add cursor reactivity (mesh distorts near cursor)
  - Test performance

  **Must NOT do**:
  - Don't use WebGL unless CSS/SVG can't achieve the effect
  - Don't make it too heavy for mobile

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
    - Reason: Requires animation + performance optimization skills
  - **Skills**: [`frontend-ui-ux`]
    - `frontend-ui-ux`: Gradient mesh design and animation

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 2A (with Tasks 9, 11)
  - **Blocks**: Task 12
  - **Blocked By**: Tasks 5-8

  **References**:
  - CSS mesh gradient techniques (multiple layered radial gradients)
  - SVG filter turbulence for organic movement

  **Acceptance Criteria**:
  - [ ] Prototype runs at 60fps
  - [ ] Responds to cursor position
  - [ ] Works on mobile (simplified version ok)

  **QA Scenarios**:
  ```
  Scenario: Gradient mesh prototype works
    Tool: Playwright
    Steps:
      1. Open prototype in browser
      2. Move cursor around
      3. Check gradient responds to position
    Expected Result: Gradient distorts smoothly near cursor
    Evidence: .sisyphus/evidence/task-10-gradient-prototype.png

  Scenario: Gradient mesh performance
    Tool: Playwright + DevTools
    Steps:
      1. Open prototype
      2. Record 10 seconds of animation + interaction
      3. Check frame rate
    Expected Result: Avg FPS >= 55, Min FPS >= 45
    Evidence: .sisyphus/evidence/task-10-gradient-perf.json
  ```

  **Commit**: NO (prototype)

- [ ] 11. Node Network Prototype

  **What to do**:
  - Build a working prototype of node network approach
  - Use Canvas or SVG for nodes and connections
  - Animate connections between nodes
  - Add cursor reactivity (nodes attract/repel)
  - Test performance

  **Must NOT do**:
  - Don't create generic "constellation" effect
  - Don't use heavy physics simulation

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
    - Reason: Canvas/SVG animation + interaction logic
  - **Skills**: [`frontend-ui-ux`]
    - `frontend-ui-ux`: Network visualization design

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 2A (with Tasks 9, 10)
  - **Blocks**: Task 12
  - **Blocked By**: Tasks 5-8

  **References**:
  - D3.js force layout (reference, not required to use)
  - Canvas 2D rendering best practices

  **Acceptance Criteria**:
  - [ ] Prototype runs at 60fps
  - [ ] Nodes connect/disconnect dynamically
  - [ ] Responds to cursor

  **QA Scenarios**:
  ```
  Scenario: Node network prototype works
    Tool: Playwright
    Steps:
      1. Open prototype in browser
      2. Move cursor around
      3. Check nodes react to cursor
    Expected Result: Nodes move toward or away from cursor, connections animate
    Evidence: .sisyphus/evidence/task-11-node-prototype.png

  Scenario: Node network performance
    Tool: Playwright + DevTools
    Steps:
      1. Open prototype
      2. Record 10 seconds of animation
      3. Check frame rate
    Expected Result: Avg FPS >= 55, Min FPS >= 45
    Evidence: .sisyphus/evidence/task-11-node-perf.json
  ```

  **Commit**: NO (prototype)

- [ ] 12. Hero Component Architecture

  **What to do**:
  - Based on approved concept, build the hero component structure
  - Create `src/components/Hero.astro`
  - Set up the animation/rendering infrastructure
  - Add configuration options (intensity, colors, etc.)

  **Must NOT do**:
  - Don't hardcode values that should be configurable
  - Don't skip accessibility considerations

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
    - Reason: Component architecture with animation system
  - **Skills**: [`frontend-ui-ux`]
    - `frontend-ui-ux`: Component design and animation architecture

  **Parallelization**:
  - **Can Run In Parallel**: NO
  - **Parallel Group**: Sequential (after Tasks 10 OR 11)
  - **Blocks**: Tasks 13-16
  - **Blocked By**: Task 10 OR Task 11 (whichever concept chosen)

  **References**:
  - `src/pages/index.astro:13-46` - Current hero section
  - Selected prototype from Task 10 or 11

  **Acceptance Criteria**:
  - [ ] Hero component exists and renders
  - [ ] Configuration props documented
  - [ ] Works when dropped into index page

  **QA Scenarios**:
  ```
  Scenario: Hero component renders
    Tool: Playwright
    Steps:
      1. Navigate to homepage
      2. Check hero section exists
      3. Check animation element exists
    Expected Result: Hero component visible with animation container
    Evidence: .sisyphus/evidence/task-12-hero-render.png
  ```

  **Commit**: NO (groups with Task 16)

- [ ] 13. Cursor Interactivity

  **What to do**:
  - Add mouse position tracking
  - Connect cursor position to animation parameters
  - Add smooth interpolation for movement
  - Implement touch support for mobile (tap = center attract)

  **Must NOT do**:
  - Don't use mousemove without throttle/debounce
  - Don't break keyboard navigation

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
    - Reason: Interaction logic + performance considerations
  - **Skills**: [`frontend-ui-ux`]
    - `frontend-ui-ux`: Interaction design and implementation

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 2B (with Tasks 14, 15, 16)
  - **Blocks**: None
  - **Blocked By**: Task 12

  **References**:
  - Selected prototype animation code

  **Acceptance Criteria**:
  - [ ] Cursor position affects animation smoothly
  - [ ] No jank when moving cursor quickly
  - [ ] Touch position works on mobile

  **QA Scenarios**:
  ```
  Scenario: Cursor affects hero
    Tool: Playwright
    Steps:
      1. Navigate to homepage
      2. Move cursor across hero area
      3. Check animation responds
    Expected Result: Animation distorts/shifts based on cursor position
    Evidence: .sisyphus/evidence/task-13-cursor-interact.png

  Scenario: Touch affects hero on mobile
    Tool: Playwright (mobile viewport)
    Steps:
      1. Navigate to homepage on mobile
      2. Tap different areas of hero
      3. Check animation responds
    Expected Result: Animation responds to touch position
    Evidence: .sisyphus/evidence/task-13-touch-interact.png
  ```

  **Commit**: NO (groups with Task 16)

- [ ] 14. Scroll-Based Parallax

  **What to do**:
  - Add subtle parallax effect to hero as user scrolls
  - Hero fades/scales as content scrolls into view
  - Use Intersection Observer for performance
  - Keep effect subtle (not dizzying)

  **Must NOT do**:
  - Don't use scroll event listeners
  - Don't make parallax too aggressive

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
    - Reason: Scroll-based animation with performance requirements
  - **Skills**: [`frontend-ui-ux`]
    - `frontend-ui-ux`: Scroll animation design

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 2B (with Tasks 13, 15, 16)
  - **Blocks**: None
  - **Blocked By**: Task 12

  **References**:
  - `src/pages/index.astro` - Page structure for scroll distance

  **Acceptance Criteria**:
  - [ ] Hero has subtle parallax on scroll
  - [ ] Effect respects reduced-motion
  - [ ] Performance impact < 2ms per frame

  **QA Scenarios**:
  ```
  Scenario: Parallax works on scroll
    Tool: Playwright
    Steps:
      1. Navigate to homepage
      2. Scroll down slowly
      3. Check hero transforms
    Expected Result: Hero fades/scales as content scrolls in
    Evidence: .sisyphus/evidence/task-14-parallax.png

  Scenario: Parallax respects reduced motion
    Tool: Playwright
    Steps:
      1. Emulate prefers-reduced-motion: reduce
      2. Navigate to homepage
      3. Scroll down
      4. Check hero stays static
    Expected Result: No parallax effect when reduced motion enabled
    Evidence: .sisyphus/evidence/task-14-reduced-motion.png
  ```

  **Commit**: NO (groups with Task 16)

- [ ] 15. Mobile Hero Fallback

  **What to do**:
  - Create simplified version for mobile devices
  - Either: static gradient, simplified animation, or CSS-only version
  - Ensure 30fps minimum on low-end devices
  - Test on 3G connection simulation

  **Must NOT do**:
  - Don't load heavy canvas on mobile
  - Don't skip hero entirely on mobile

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: Mobile optimization of existing component
  - **Skills**: None needed

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 2B (with Tasks 13, 14, 16)
  - **Blocks**: None
  - **Blocked By**: Task 12

  **References**:
  - Hero component from Task 12

  **Acceptance Criteria**:
  - [ ] Hero loads in < 1s on 3G
  - [ ] Animation runs at 30fps minimum on mobile
  - [ ] Visual quality acceptable on small screens

  **QA Scenarios**:
  ```
  Scenario: Mobile hero loads fast
    Tool: Playwright (mobile + slow 3G)
    Steps:
      1. Throttle network to 3G
      2. Navigate to homepage on mobile viewport
      3. Measure hero load time
    Expected Result: Hero visible within 1 second
    Evidence: .sisyphus/evidence/task-15-mobile-load.png

  Scenario: Mobile hero performance
    Tool: Playwright (mobile)
    Steps:
      1. Navigate to homepage on mobile
      2. Record 5 seconds of hero animation
      3. Check frame rate
    Expected Result: FPS >= 30
    Evidence: .sisyphus/evidence/task-15-mobile-perf.json
  ```

  **Commit**: NO (groups with Task 16)

- [ ] 16. Reduced Motion Fallback

  **What to do**:
  - Create static or minimal-animation version for users with motion sensitivity
  - Use `prefers-reduced-motion` media query
  - Ensure hero still looks good without animation
  - Document the fallback behavior

  **Must NOT do**:
  - Don't leave users with empty/broken hero
  - Don't ignore the media query

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: Accessibility improvement, CSS-focused
  - **Skills**: None needed

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 2B (with Tasks 13, 14, 15)
  - **Blocks**: None
  - **Blocked By**: Task 12

  **References**:
  - Hero component from Task 12

  **Acceptance Criteria**:
  - [ ] Static fallback exists and looks good
  - [ ] Media query correctly disables animation
  - [ ] No animation when reduced motion preferred

  **QA Scenarios**:
  ```
  Scenario: Reduced motion fallback works
    Tool: Playwright
    Steps:
      1. Emulate prefers-reduced-motion: reduce
      2. Navigate to homepage
      3. Check hero shows static version
    Expected Result: Hero is static, no animation, looks intentional
    Evidence: .sisyphus/evidence/task-16-reduced-motion.png
  ```

  **Commit**: YES
  - Message: `feat(hero): add interactive gradient mesh hero with accessibility`
  - Files: `src/components/Hero.astro`, `src/pages/index.astro`

---

## PHASE 3: CASE STUDY VISUAL SYSTEM

- [ ] 17. Callout/Pull-Quote Component

  **What to do**:
  - Create `src/components/Callout.astro` for highlighted text blocks
  - Support types: quote, note, warning, success
  - Add icons for each type
  - Style with left border accent

  **Must NOT do**:
  - Don't over-style (keep it clean)
  - Don't use external icon library (use simple SVG)

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: Simple component with minimal logic
  - **Skills**: None needed

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 3A (with Tasks 18, 19, 20, 21)
  - **Blocks**: Tasks 22-23
  - **Blocked By**: None

  **References**:
  - `src/pages/work/[slug].astro:278-284` - Existing blockquote style

  **Acceptance Criteria**:
  - [ ] Component accepts type, title, and content props
  - [ ] 4 types supported (quote, note, warning, success)
  - [ ] Styles match site aesthetic

  **QA Scenarios**:
  ```
  Scenario: Callout renders correctly
    Tool: Playwright
    Steps:
      1. Add test callout to case study page
      2. Navigate to that page
      3. Check callout renders with correct type style
    Expected Result: Callout shows with icon, border accent, and content
    Evidence: .sisyphus/evidence/task-17-callout.png
  ```

  **Commit**: NO (groups with Task 21)

- [ ] 18. Screenshot Frame Component

  **What to do**:
  - Create `src/components/Screenshot.astro` for framed images
  - Add browser window frame option (tab bar, address bar)
  - Support caption and alt text
  - Add subtle shadow and border radius
  - Support lazy loading

  **Must NOT do**:
  - Don't use placeholder images (require actual src)
  - Don't over-complicate the frame design

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: Image wrapper component
  - **Skills**: None needed

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 3A (with Tasks 17, 19, 20, 21)
  - **Blocks**: Tasks 22-23
  - **Blocked By**: None

  **References**:
  - Astro Image component docs

  **Acceptance Criteria**:
  - [ ] Component accepts src, alt, caption, and frame style props
  - [ ] Browser frame option available
  - [ ] Lazy loading enabled by default

  **QA Scenarios**:
  ```
  Scenario: Screenshot renders with frame
    Tool: Playwright
    Steps:
      1. Add test screenshot to case study
      2. Navigate to that page
      3. Check image renders with frame
    Expected Result: Image shows in browser-style frame with shadow
    Evidence: .sisyphus/evidence/task-18-screenshot.png

  Scenario: Screenshot lazy loads
    Tool: Playwright
    Steps:
      1. Add screenshot below fold
      2. Navigate to page
      3. Check image not loaded initially
      4. Scroll to image
      5. Check image loads
    Expected Result: Image loads when scrolled into view
    Evidence: .sisyphus/evidence/task-18-lazy-load.png
  ```

  **Commit**: NO (groups with Task 21)

- [ ] 19. Process Diagram Component

  **What to do**:
  - Create `src/components/ProcessDiagram.astro` for step-by-step flows
  - Support horizontal and vertical layouts
  - Accept steps array with labels and optional icons
  - Add connecting lines between steps
  - Animate on scroll reveal

  **Must NOT do**:
  - Don't create complex flowchart (keep it linear)
  - Don't use heavy animation

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
    - Reason: Visual component with layout complexity
  - **Skills**: [`frontend-ui-ux`]
    - `frontend-ui-ux`: Diagram design and animation

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 3A (with Tasks 17, 18, 20, 21)
  - **Blocks**: Tasks 22-23
  - **Blocked By**: None

  **References**:
  - Linear.app process diagrams (reference)

  **Acceptance Criteria**:
  - [ ] Component accepts steps array
  - [ ] Horizontal and vertical layouts supported
  - [ ] Animated on scroll reveal

  **QA Scenarios**:
  ```
  Scenario: Process diagram renders
    Tool: Playwright
    Steps:
      1. Add test process diagram to case study
      2. Navigate to that page
      3. Check diagram shows with steps and connectors
    Expected Result: Steps shown with connecting lines
    Evidence: .sisyphus/evidence/task-19-diagram.png

  Scenario: Process diagram animates
    Tool: Playwright
    Steps:
      1. Add diagram below fold
      2. Navigate to page
      3. Scroll to diagram
      4. Check animation triggers
    Expected Result: Steps animate in sequence
    Evidence: .sisyphus/evidence/task-19-diagram-animate.png
  ```

  **Commit**: NO (groups with Task 21)

- [ ] 20. Metrics Callout Component

  **What to do**:
  - Create `src/components/MetricsCallout.astro` for highlighting numbers
  - Support big number with label
  - Support multiple metrics in a row
  - Add subtle accent styling
  - Optional trend indicator (up/down arrow)

  **Must NOT do**:
  - Don't make it flashy (keep it clean)
  - Don't require icons

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: Simple display component
  - **Skills**: None needed

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 3A (with Tasks 17, 18, 19, 21)
  - **Blocks**: Tasks 22-23
  - **Blocked By**: None

  **References**:
  - `src/pages/work/[slug].astro:44-57` - Existing stats row

  **Acceptance Criteria**:
  - [ ] Component accepts metrics array
  - [ ] Big number + label layout works
  - [ ] Optional trend arrow

  **QA Scenarios**:
  ```
  Scenario: Metrics callout renders
    Tool: Playwright
    Steps:
      1. Add metrics callout to case study
      2. Navigate to that page
      3. Check metrics display correctly
    Expected Result: Numbers prominent, labels below
    Evidence: .sisyphus/evidence/task-20-metrics.png
  ```

  **Commit**: NO (groups with Task 21)

- [ ] 21. Section Divider Animations

  **What to do**:
  - Create animated section dividers
  - Add subtle line animation or gradient fade
  - Keep it minimal (not distracting)
  - Trigger on scroll

  **Must NOT do**:
  - Don't over-animate (keep subtle)
  - Don't add to every section

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: CSS animation enhancement
  - **Skills**: None needed

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 3A (with Tasks 17, 18, 19, 20)
  - **Blocks**: Tasks 22-23
  - **Blocked By**: None

  **References**:
  - `src/pages/work/[slug].astro` - Section structure

  **Acceptance Criteria**:
  - [ ] Divider component exists
  - [ ] Subtle animation on reveal
  - [ ] Respects reduced-motion

  **QA Scenarios**:
  ```
  Scenario: Divider animates
    Tool: Playwright
    Steps:
      1. Add divider between sections
      2. Navigate to page
      3. Scroll to divider
      4. Check animation triggers
    Expected Result: Divider animates in (line grows or fades)
    Evidence: .sisyphus/evidence/task-21-divider.png
  ```

  **Commit**: YES
  - Message: `feat(case-studies): add visual content system components`
  - Files: `src/components/Callout.astro`, `src/components/Screenshot.astro`, `src/components/ProcessDiagram.astro`, `src/components/MetricsCallout.astro`, `src/components/SectionDivider.astro`

- [ ] 22. Case Study Page Template Update

  **What to do**:
  - Update `src/pages/work/[slug].astro` to use new components
  - Add example usage of callouts, screenshots, diagrams
  - Improve content spacing
  - Ensure all components render correctly in prose context

  **Must NOT do**:
  - Don't change existing text content
  - Don't remove existing functionality

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: Template updates with existing components
  - **Skills**: None needed

  **Parallelization**:
  - **Can Run In Parallel**: NO
  - **Parallel Group**: Sequential (after Tasks 17-21)
  - **Blocks**: Task 23
  - **Blocked By**: Tasks 17-21

  **References**:
  - `src/pages/work/[slug].astro` - Current template
  - New components from Tasks 17-21

  **Acceptance Criteria**:
  - [ ] Template imports all new components
  - [ ] Example usage in markdown renders correctly
  - [ ] No visual regressions

  **QA Scenarios**:
  ```
  Scenario: Case study page renders with new components
    Tool: Playwright
    Steps:
      1. Navigate to Agentforce case study
      2. Check page loads without errors
      3. Check all sections render correctly
    Expected Result: Page loads with all components rendering
    Evidence: .sisyphus/evidence/task-22-template.png
  ```

  **Commit**: NO (groups with Task 23)

- [ ] 23. Component Documentation

  **What to do**:
  - Create documentation for all new visual components
  - Document props, usage examples, and design decisions
  - Add to README or separate docs file
  - Include code examples

  **Must NOT do**:
  - Don't create external docs site
  - Don't over-document (keep practical)

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: Documentation writing
  - **Skills**: None needed

  **Parallelization**:
  - **Can Run In Parallel**: NO
  - **Parallel Group**: Sequential (after Task 22)
  - **Blocks**: Tasks 24-27
  - **Blocked By**: Task 22

  **References**:
  - New components from Tasks 17-22

  **Acceptance Criteria**:
  - [ ] All components documented
  - [ ] Props and examples included
  - [ ] Document accessible in repo

  **QA Scenarios**:
  ```
  Scenario: Documentation exists
    Tool: Read
    Steps:
      1. Read docs file
      2. Verify all components mentioned
    Expected Result: Document exists with all components
    Evidence: .sisyphus/evidence/task-23-docs.md
  ```

  **Commit**: YES
  - Message: `docs: add visual component documentation`
  - Files: `src/components/README.md`, `src/pages/work/[slug].astro`

---

## PHASE 4: PERFORMANCE & POLISH

- [ ] 24. Animation Performance Audit

  **What to do**:
  - Audit all animations for performance
  - Check for layout thrashing, paint storms, excessive JS
  - Verify 60fps target on desktop, 30fps on mobile
  - Document any issues found

  **Must NOT do**:
  - Don't skip mobile testing
  - Don't ignore performance issues

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: Audit task, no implementation
  - **Skills**: None needed

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 4A (with Tasks 25, 26, 27)
  - **Blocks**: Tasks F1-F4
  - **Blocked By**: Tasks 22-23

  **References**:
  - Chrome DevTools Performance panel
  - All animation code from previous tasks

  **Acceptance Criteria**:
  - [ ] Performance report created
  - [ ] Issues identified and prioritized
  - [ ] Recommendations documented

  **QA Scenarios**:
  ```
  Scenario: Performance audit completes
    Tool: Playwright + DevTools
    Steps:
      1. Navigate to homepage
      2. Record 10 seconds of interaction
      3. Analyze performance trace
    Expected Result: Report generated with FPS, CPU, memory metrics
    Evidence: .sisyphus/evidence/task-24-perf-audit.json
  ```

  **Commit**: NO (audit task)

- [ ] 25. CSS Bundle Optimization

  **What to do**:
  - Audit CSS for unused styles
  - Consolidate duplicate declarations
  - Ensure critical CSS is inline
  - Check final bundle size

  **Must NOT do**:
  - Don't break existing styles
  - Don't use aggressive minification that removes needed styles

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: CSS optimization
  - **Skills**: None needed

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 4A (with Tasks 24, 26, 27)
  - **Blocks**: Tasks F1-F4
  - **Blocked By**: Tasks 22-23

  **References**:
  - All CSS files in project
  - Astro CSS handling

  **Acceptance Criteria**:
  - [ ] No unused styles detected
  - [ ] CSS bundle size < 50KB
  - [ ] Critical CSS inline

  **QA Scenarios**:
  ```
  Scenario: CSS bundle is optimized
    Tool: Bash
    Steps:
      1. Run build
      2. Check CSS bundle size
      3. Run unused CSS audit
    Expected Result: Bundle < 50KB, unused styles < 5%
    Evidence: .sisyphus/evidence/task-25-css-size.txt
  ```

  **Commit**: YES
  - Message: `perf(css): optimize CSS bundle`
  - Files: `src/**/*.css`

- [ ] 26. Hero Performance Optimization

  **What to do**:
  - Optimize hero animation for smooth performance
  - Reduce redraws where possible
  - Use requestAnimationFrame correctly
  - Test on low-end devices
  - Implement progressive enhancement

  **Must NOT do**:
  - Don't sacrifice visual quality unnecessarily
  - Don't remove interactivity

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
    - Reason: Performance optimization of complex animation
  - **Skills**: [`frontend-ui-ux`]
    - `frontend-ui-ux`: Animation performance tuning

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 4A (with Tasks 24, 25, 27)
  - **Blocks**: Tasks F1-F4
  - **Blocked By**: Tasks 22-23

  **References**:
  - `src/components/Hero.astro`
  - Performance report from Task 24

  **Acceptance Criteria**:
  - [ ] Hero runs at 60fps on desktop
  - [ ] Hero runs at 30fps on mobile
  - [ ] No jank during interaction

  **QA Scenarios**:
  ```
  Scenario: Hero performance optimized
    Tool: Playwright + DevTools
    Steps:
      1. Navigate to homepage
      2. Interact with hero for 10 seconds
      3. Check FPS stays above 55
    Expected Result: Avg FPS >= 58, Min FPS >= 50
    Evidence: .sisyphus/evidence/task-26-hero-perf.json

  Scenario: Hero mobile performance
    Tool: Playwright (mobile) + DevTools
    Steps:
      1. Navigate to homepage on mobile
      2. Interact with hero for 10 seconds
      3. Check FPS stays above 28
    Expected Result: Avg FPS >= 30, Min FPS >= 25
    Evidence: .sisyphus/evidence/task-26-hero-mobile-perf.json
  ```

  **Commit**: YES
  - Message: `perf(hero): optimize animation performance`
  - Files: `src/components/Hero.astro`

- [ ] 27. Cross-Browser Testing

  **What to do**:
  - Test site on Chrome, Firefox, Safari, Edge
  - Check animations work on all browsers
  - Fix any browser-specific issues
  - Document browser support

  **Must NOT do**:
  - Don't support IE11
  - Don't add excessive browser prefixes

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: Testing task
  - **Skills**: None needed

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 4A (with Tasks 24, 25, 26)
  - **Blocks**: Tasks F1-F4
  - **Blocked By**: Tasks 22-23

  **References**:
  - BrowserStack or local browser testing

  **Acceptance Criteria**:
  - [ ] Site works on Chrome, Firefox, Safari, Edge (latest 2 versions)
  - [ ] Animations work on all tested browsers
  - [ ] No console errors

  **QA Scenarios**:
  ```
  Scenario: Cross-browser compatibility
    Tool: Playwright (multi-browser)
    Steps:
      1. Test homepage on Chrome, Firefox, Safari, Edge
      2. Check hero animation works
      3. Check scroll reveals work
    Expected Result: All features work on all browsers
    Evidence: .sisyphus/evidence/task-27-cross-browser.png
  ```

  **Commit**: YES (if fixes needed)
  - Message: `fix: cross-browser compatibility issues`
  - Files: Various CSS/JS files (MANDATORY — after ALL implementation tasks)

> 4 review agents run in PARALLEL. ALL must APPROVE. Rejection → fix → re-run.

- [ ] F1. **Visual Regression Check** — `unspecified-high`
  Run Playwright visual regression tests across all pages. Compare before/after screenshots. Check hero animation doesn't cause layout shift. Verify all components render correctly.
  Output: `Screenshots [N/N match] | Layout Shift [NONE/N pixels] | VERDICT: APPROVE/REJECT`

- [ ] F2. **Performance Audit** — `quick`
  Run Lighthouse on all pages. Check Core Web Vitals (LCP, FID, CLS). Verify hero animation doesn't block main thread. Check animation frame rates.
  Output: `Lighthouse [score] | LCP [time] | FID [time] | CLS [score] | FPS [avg/min] | VERDICT`

- [ ] F3. **Accessibility Audit** — `quick`
  Run axe-core accessibility tests. Check color contrast ratios. Verify keyboard navigation. Check reduced-motion media query works. Verify ARIA labels on interactive elements.
  Output: `Violations [N] | Contrast [PASS/FAIL] | Keyboard [PASS/FAIL] | Motion [PASS/FAIL] | VERDICT`

- [ ] F4. **Mobile Responsiveness Check** — `quick`
  Test all pages on mobile viewport (375px). Check hero fallback works. Verify touch interactions. Check no horizontal scroll. Verify font sizes readable.
  Output: `Hero Mobile [PASS/FAIL] | Touch [PASS/FAIL] | No Scroll [PASS/FAIL] | Readable [PASS/FAIL] | VERDICT`

---

## Commit Strategy

| After Phase | Message | Files | Verification |
|-------------|---------|-------|--------------|
| Phase 1 | `feat(motion): add scroll reveals, view transitions, micro-interactions` | `src/**/*.{astro,css}` | Visual QA |
| Phase 2 | `feat(hero): add interactive gradient mesh hero` | `src/components/Hero.astro` | Performance audit |
| Phase 3 | `feat(case-studies): add visual content system` | `src/components/**/*.{astro,css}` | Visual QA |
| Phase 4 | `perf: optimize animations and cross-browser fixes` | `src/**/*` | Full audit |

---

## Success Criteria

### Verification Commands
```bash
npm run build     # Build succeeds
npm run preview   # Preview works
# Playwright tests pass
# Lighthouse score > 90
```

### Final Checklist
- [ ] Hero responds to cursor/scroll at 60fps
- [ ] All scroll reveals animate smoothly
- [ ] View transitions work on all page navigations
- [ ] Micro-interactions feel premium, not janky
- [ ] Case study pages have visual component options
- [ ] Mobile experience is smooth (30fps minimum)
- [ ] Reduced-motion users get static fallback
- [ ] Lighthouse score > 90 on all pages
- [ ] Zero accessibility violations
