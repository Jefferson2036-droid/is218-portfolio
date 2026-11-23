# Task: Review 2 — First Working Slice (portfolio draft)

Read `AGENTS.md` first; its rules (including animations) apply. This file says exactly what to build **now**.

## Goal (from Canvas)
A **readable portfolio draft** that shows **two small ways to lay out the same content**, with current case studies, a résumé draft and real GitHub/LinkedIn links. Unfinished work is labeled honestly. Two full websites are not needed.

## Work on a branch
Create a GitHub issue "Review 2: portfolio draft" and a branch `review-2-draft`; small commits; a pull request that closes the issue.

## Where the code goes
This repository already publishes the **career research site** (Jekyll, root `index.md` and `docs/`) with `.github/workflows/jekyll-gh-pages.yml`. Keep it working.
- Put the Next.js portfolio in a new folder **`site/`**.
- Next.js static export (`output: 'export'`), `basePath: '/is218-portfolio/site'`, `trailingSlash: true`, `images.unoptimized: true`.
- Update the Pages workflow so one deployment contains both: build Jekyll into `_site/`, then build `site/` and copy its `out/` into `_site/site/`, then upload `_site`. Result: research site at `/is218-portfolio/`, portfolio at `/is218-portfolio/site/`.
- Add a link to the portfolio from the research site's `index.md`, and from the portfolio footer back to the research site.

## Pages to build (match `docs/mockups/` and its design tokens)
1. **Home, option B "Two areas"** at `/` — the current preference.
2. **Home, option A "Featured story"** at `/option-a/` — same content and components, different layout. Add a small, clearly labeled switcher ("Layout: Two areas | Featured story") at the top of both, for reviewers.
3. **Case study: Arena Climb** at `/work/arena-climb/` — Field Notes headings. Status and checks must match `is218-individual-game/docs/project-record.md` at build time; "What I built" must say which parts are built and which are in progress.
4. **Case study: Customer Studio (team)** at `/work/customer-studio/` — placeholder page labeled "In progress"; headings present, content `[ADD]`.
5. **About** at `/about/` — from `docs/mockups/about.html`. Keep the `[Write the rest in your own words.]` placeholder; do not write Jefferson's personal story for him.
6. **Résumé:** link to `/resume.pdf` (file in `site/public/resume.pdf`). If the file is missing, show the link with "[ADD résumé PDF]". Jefferson will add a PDF **without his phone number or street address**.

## Content
- Keep all copy in `site/content/` (TypeScript or Markdown), not inside components.
- Real links: GitHub https://github.com/Jefferson2036-droid, LinkedIn https://www.linkedin.com/in/jefferson-rodas, email rodas5@outlook.com.
- Proof strip rows and statuses exactly as in the mockup; nothing invented.

## Checks
- `npm run build` succeeds with no errors; both layouts render from the same content files.
- Keyboard-only walk-through and 375 px phone check of Home B, Home A and the case study (record results).
- A link check of all internal and external links (list any `[ADD]` placeholders).
- Reader check for the record: "Can a reader find my work, résumé and profile links?" — note who tried it and the result, or NOT RUN.

## Definition of done
- [ ] Draft deployed at `https://jefferson2036-droid.github.io/is218-portfolio/site/` (needs GitHub Pages Source set to "GitHub Actions" in repo settings).
- [ ] Both layout options reachable and labeled.
- [ ] `docs/project-record.md` entry: Changed / Checked / Next, with both layout options described and linked. Unrun checks say NOT RUN.
- [ ] Pull request merged into `main`; issue closed.

## Out of scope
The de-AI design fixes in `docs/frontend.md` (wait for Jefferson's headshot and own copy), analytics, extra pages.
