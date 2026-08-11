# Implementation Plan: Amdjad Aboubakar Portfolio

## Overview

Build the approved multilingual reputation portfolio as a statically generated Astro site. Verify locally, then publish through GitHub Pages when the repository is approved. Keep the custom-domain step separate until the GitHub URL is reviewed.

## Architecture decisions

- Astro + TypeScript static output with repository-managed typed content.
- Complete `/fr/`, `/ar/`, and `/en/` routes; root performs client language selection with a French fallback link.
- CSS-first editorial interface with minimal JavaScript and no UI framework dependency.
- No backend, database, authentication, form submission, tracking, or hosting runtime.

## Task list

### Phase 1: Foundation

#### Task 1: Scaffold the static Astro project

**Acceptance criteria:**
- Package scripts support local development, checks, tests, and production build.
- Astro is configured for static localized routes and sitemap generation.
- Shared TypeScript and accessibility-aware document foundations exist.

**Verification:** `npm run check` and `npm run build`

**Dependencies:** None

#### Task 2: Establish typed localized content

**Acceptance criteria:**
- French, Arabic, and English share one validated content shape.
- Navigation, hero, capabilities, purpose, case studies, and common labels are complete in all locales.
- No missing translation silently falls back to another language.

**Verification:** focused localization tests

**Dependencies:** Task 1

### Checkpoint: Foundation

- Type checks pass.
- All locale page paths generate.

### Phase 2: Product slices

#### Task 3: Build the localized editorial homepage

**Acceptance criteria:**
- Hero, Selected Work, Capabilities, Journey, Purpose, optional-content absence states, and personal close follow the approved sequence.
- Navigation and language selection are keyboard accessible.
- Arabic uses correct document direction and mirrored layout behavior.

**Verification:** static build plus rendered desktop/mobile inspection

**Dependencies:** Tasks 1-2

#### Task 4: Build localized case-study detail pages

**Acceptance criteria:**
- Khidme, Khalawat, Meeting App, and Hamid each generate in all three locales.
- Every page states conservative status, accurate attribution, problem, decisions, evidence, and limits.
- Previous/next navigation remains within the active locale.

**Verification:** route inventory test and rendered page inspection

**Dependencies:** Tasks 1-2

### Checkpoint: Core experience

- Homepage and all twelve localized case-study pages build.
- Navigation works without cross-language leakage.

### Phase 3: Polish and release readiness

#### Task 5: Add project-bound imagery and restrained interaction

**Acceptance criteria:**
- Authentic edited portrait is stored in the repository and rendered responsively.
- Project visuals use code-native editorial compositions rather than fabricated product screenshots.
- Hover, focus, reveal, menu, and language interactions respect reduced motion and explicit transition properties.

**Verification:** visual inspection and CSS policy scans

**Dependencies:** Tasks 3-4

#### Task 6: Complete discovery, privacy, and quality gates

**Acceptance criteria:**
- Localized metadata, canonical and alternate URLs, sitemap, robots, social preview, and structured data are present.
- No form, tracker, cookie, secret, database client, Supabase, or hosting runtime is introduced.
- A GitHub Actions workflow tests, checks, builds, and deploys the static output to GitHub Pages.
- Automated tests, Astro checks, production build, and responsive rendered-page review pass.

**Verification:** `npm test`, `npm run check`, `npm run build`, static scans, and screenshots

**Dependencies:** Tasks 3-5

## Risks and mitigations

| Risk | Impact | Mitigation |
| --- | --- | --- |
| Missing résumé facts | Journey could overclaim or look unfinished | Use a concise verified project-led Journey and clearly isolate facts that still require owner input |
| Three-language drift | Visitors see inconsistent claims | Use a single typed content contract and route inventory tests |
| Arabic layout regressions | Core audience receives a degraded experience | Set `dir` at document level and verify representative mobile/desktop RTL renders |
| Project imagery is incomplete | Case studies feel generic | Use honest code-native visual systems and real portrait imagery; never fabricate product screens |
| Accidental hosting activity | An unfinished site could become public | Keep remote creation and the first push behind explicit repository approval |

## Open content inputs

- Final email and social URLs.
- Résumé-derived dates, formal education, and employment milestones.
- Approved project screenshots or public demo links.
- Optional Perspectives and Endorsements.

These inputs do not block building the complete site structure; sections with unavailable content remain intentionally absent rather than showing placeholders.
