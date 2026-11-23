# Portfolio site: front-end plan

Decided 2026-11-23.

| Question | Choice | Why |
|---|---|---|
| How it's built | Next.js (static export) on GitHub Pages | I used Next.js for the Digital Museum Exhibit project; static export keeps hosting free on GitHub Pages |
| Look | Swiss / International corporate: white background, deep navy text, one bold blue, pale-blue section backgrounds, bold sans-serif headings (Inter), monospace only for small evidence labels, visible grid and thin rules, sharp corners | Corporate and dependable; fits my voice words (dependable, precise, accountable); replaces the earlier paper-and-gold idea |
| Structure | Multi-page: Home, one page per case study, About/Experience, résumé PDF | Each case study gets its own link I can share |
| Two homepage options compared | A "Featured story" (one big case study first) vs B "Two areas" (Data & AI in business / Customer-facing builds side by side) | Brief asks for two lightweight presentation options from the same content; my current preference is B |

## Pages
| Page | Contents |
|---|---|
| Home | Headline, two areas or featured story, "what these roles ask for → my proof" strip, TD Bank responsibility section, contact |
| Case study | Problem → Who it was for → What I built → How I checked it → What's next; links to live app, code and checks; "Not checked yet" line |
| About / Experience | Union County College → NJIT; TD Bank; Dick's Sporting Goods; Spanish (fluent) |
| Résumé | PDF |
| Header/footer | LinkedIn, GitHub, email, résumé |

## Rules
- Every skill or claim links to evidence; skills I don't have yet are labeled "Learning".
- No invented counters, testimonials or metrics.
- Works at 375 px wide and with the keyboard only; visible focus; text contrast at least 4.5:1.

## Mockups
Design canvas (2026-11-23, made with Claude; private until shared): https://claude.ai/artifact/7p14Pg3obp36HqCKZMk1XE
- Home, option B "Two areas" (current preference) and option A "Featured story", built from the same content
- Arena Climb case study page with the fixed Field Notes headings
- About and experience page
- Home B at phone width
Colors: navy #0B1F3A text, blue #0A58E8 accent, pale blue #EEF4FF sections, rules #D5DEEC. Fonts: Inter (400–800), IBM Plex Mono for labels. Not yet reviewed by a classmate; option A vs B not yet chosen.

## Design review notes (2026-11-23)
**Decision:** keep the current mockups as the working design for now.

**My own review:** the mockups still look somewhat AI-generated. Improvements to make before launch (not done yet):
| Issue | Planned fix |
|---|---|
| No real person on the site | Add a real headshot and real images (Arena Climb screenshot, Bloomberg chart) |
| Copy sounds generated (long headline, em dashes, jargon like "forward-deployed style") | Rewrite the headline and About intro in my own words; shorter and specific |
| Inter is a default font | Consider Schibsted Grotesk, Archivo or Hanken Grotesk |
| Every card and label the same size; status tags and small labels everywhere | Stronger Swiss grid contrast: one oversized element per screen, unequal columns, fewer tags |
| No signature element | "JR" monogram in a blue square as the logo |

## Animation
Specified in `AGENTS.md` (page-load headline rise, scroll reveals, drawing divider lines, hover/focus lift, page cross-fades, case-study row reveals; reduced-motion fallback; no parallax, bouncing or counters).
