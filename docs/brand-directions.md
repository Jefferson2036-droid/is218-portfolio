# Two brand/layout directions

| | Direction 1: Field Notes (case studies) | Direction 2: Spec Sheet (evidence board) |
|---|---|---|
| One-line feel | An engineer's field report: problem, what I built, how I checked it | A technical data sheet: requirements on the left, proof on the right |
| Home page layout (top to bottom) | Name and target role → one featured case study (Arena Climb) with "try it" and "code" links → two smaller project cards → "What these roles ask for, and my proof" strip → contact | Name and target role → table of skills from the postings, each linking to proof → grid of project tiles with stack and test counts → contact |
| Type and color | Light paper background, dark ink, one gold accent; serif headings, monospace for labels like "Checked:" | Dark background, monospace throughout, green and amber status colors |
| How projects are shown | Each project is a case study: Problem → Who it was for → What I built → How I checked it → What's next (the same Changed / Checked / Next habit from class) | Compact tiles: name, one line, stack badges, "tests passing" count, links |
| Works for the chosen reader because | Applied data/AI work is about owning someone's problem; a case study shows exactly that | Fast to scan against a posting's requirements |
| Risk | Longer to read; the first screen has to earn the scroll | Feels like a résumé table; less personality; dense on a phone |
| Reference sites looked at | Instructor examples: AI Career Atlas (https://kaw393939.github.io/ai-career-research/), Regional AI Career Field Guide (https://github.com/kaw393939/is117005-portfolio) | Same |

## Decision
**Chosen direction:** 1, Field Notes, plus one idea from Direction 2: the "requirements → proof" strip on the home page.

**Why:** The reader (see reader.md, re-done 2026-11-23) is judging whether I can build something that works for the people who use it, and a case study shows that better than a table. The strip from Direction 2 still lets a recruiter check fit against a posting in seconds.

## Voice and brand character (decided 2026-11-23)
**Voice words:** dependable, precise, accountable.
- *Dependable:* the work does what it says; links work; demos run.
- *Precise:* exact numbers, dates and checks; no vague claims.
- *Accountable:* I say what I did versus my team, and what I did not check (the NOT RUN habit from my project records).

**Brand character (archetype): Caregiver / Helper.** The site leads with the people my work helps — bank customers at TD Bank, players of Arena Climb, the customer in the Customer Studio project — and then shows the tool I built for them. This describes how the site presents me, not a qualification.

**Why these fit together:** a Caregiver who is also reliable is someone you trust with your data and your problem. That matches both areas of the portfolio: data work in regulated settings like banking, and building with the people who use the tool.

**Risk and how I handle it:** a Caregiver site can undersell technical skill. Each case study therefore keeps the Field Notes structure and ends with hard evidence: a working link, the code, and the checks that ran.

**Candidate options compared:** voice sets Grounded (clear, practical, honest), Curious, Reliable (chosen), Energetic, Approachable; characters Builder, Explorer, Caregiver (chosen), Sage, Everyman.

## Reasons to trust (persuasion choices)
1. **Proof you can inspect** (chosen 2026-11-23). Each case study links to the working app, the code and the checks that actually ran, plus a "Not checked yet" line. *Limit:* it shows I can build and check a class-sized project; it does not prove how I would do on a large production system.
2. **Real-world responsibility** (chosen 2026-11-23). A short section on my TD Bank work: handling customer accounts under regulatory compliance, fraud-mitigation and data-integrity rules, described in my own words with no confidential details. *Limit:* it shows I am trusted with sensitive work, not my technical skill, so it supports the projects rather than replacing them.

No invented testimonials, employment, metrics or expertise.

## Visual reference for Field Notes
- https://njp-2024.github.io/projects/portfolio-website (opened via search 2026-11-23): a student portfolio on Jekyll and GitHub Pages whose project pages are short technical briefs with Problem, Approach, Tradeoffs and Outcome sections. **Idea adapted:** the fixed section headings on every project page, so a reviewer knows where to look; I use Problem → Who it was for → What I built → How I checked it → What's next. It also uses the same Jekyll + GitHub Pages setup my repos already have.
## Visual reference for Spec Sheet (not chosen)
- https://kelvin482.github.io/MyPortfolio1/skills.html (opened 2026-11-23): a developer portfolio with a "Skills Matrix" page, a code-style `profile.json` card listing name, role, stack, focus and status, and big counters ("5+ years exp", "30+ projects", "12+ technologies"). **Idea noted:** presenting skills as a scannable spec. I kept only the "requirements → proof" strip from this direction, and every row must link to evidence, not just name a skill. **Avoided:** headline counters with no links behind them; a reviewer cannot check them.
