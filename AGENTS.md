# AGENTS.md — instructions for coding agents

This is Jefferson Rodas's personal portfolio site (IS218). Read the plan before writing code; Jefferson makes the decisions.

## Current task
Work on **`docs/tasks/review-2-draft.md`** — it lists exactly what to build now and what to leave for later.

## Read first
1. `docs/reader.md` – who the site is for and the one-sentence promise
2. `docs/user-stories.md` – stories with acceptance checks (definition of done)
3. `docs/brand-directions.md` – Field Notes layout, voice (dependable, precise, accountable), Caregiver character, persuasion choices
4. `docs/frontend.md` – stack, pages, colors, fonts, mockup link
5. `docs/career-comparison.md`, `research/job-sources.md` – the research behind the "requirements → proof" strip

## Hard rules
- Next.js with static export (`output: 'export'`), deployed to GitHub Pages by GitHub Actions. Set `basePath` for the repo name.
- Pages: Home, one page per case study, About, résumé PDF. Header and footer on every page with LinkedIn, GitHub, email, résumé.
- Case studies always use these headings in this order: Problem → Who it was for → What I built → How I checked it → What's next. Each links to the live app, code and checks, and has a "Not checked yet" line.
- Never invent numbers, testimonials, employers, dates or results. Copy statuses from the project records. Use `[ADD]` where a real link is missing.
- Skills in the proof strip link to evidence or are labeled "Learning".
- Keep copy in Jefferson's own words; do not rewrite his text into marketing language. No em dashes in body copy.
- Content lives in data files (`content/*.ts` or Markdown), not hard-coded in components, so Jefferson can edit it.

## Animation (required, but never in the way)
The site should feel crafted and alive, like a well-made corporate site, not a template. Use Framer Motion (or CSS where simpler).
- **Page load:** headline lines rise and fade in one after another (about 60–80 ms apart, 500–600 ms each, ease-out `cubic-bezier(0.22, 1, 0.36, 1)`). The blue "Right now" panel slides in from the right after the headline.
- **Scroll reveals:** each section fades up 16–24 px when 20% of it enters the viewport, once only. Cards and table rows in a section stagger by 50 ms.
- **Blue rule lines:** section divider lines draw from left to right (scaleX 0 → 1, 600 ms) as the section appears.
- **Hover/focus:** project rows and cards lift 2–4 px with a slightly deeper shadow and the arrow moves 4 px right; buttons darken their blue and show a visible focus ring for keyboard users. Same feedback on `:focus-visible` as on hover.
- **Page transitions:** a short cross-fade with a 12 px slide between Home, case studies and About (Framer Motion `AnimatePresence`), under 300 ms.
- **Case study:** the section number (01–05) and heading slide in together; the "How I checked it" table rows reveal one by one; status tags pop in with a small scale (0.9 → 1).
- **Restraint:** no parallax backgrounds, no bouncing, no infinite loops, no animated counters, nothing that delays reading the text by more than 600 ms. Animate only `transform` and `opacity` so it stays smooth at 60 fps.
- **Accessibility:** wrap everything in a `prefers-reduced-motion` check. With reduced motion on, content appears immediately with at most a 150 ms opacity fade. Never hide content from screen readers while it animates.

## Checks
- Lighthouse (or equivalent) on Home and one case study: accessibility 95+, no layout shift from animations.
- Keyboard-only walk-through: every link and button reachable with a visible focus ring.
- Phone check at 375 px: no sideways scrolling.
- Link check: no broken links; `[ADD]` placeholders listed in the PR description until filled.

## Record
After each working session add an entry to `docs/project-record.md` (Changed / Checked / Next). Write NOT RUN for any check that was not actually run. Note that the work was AI-assisted.
