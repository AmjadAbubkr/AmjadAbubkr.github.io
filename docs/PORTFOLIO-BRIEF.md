# Amdjad Aboubakar Portfolio Brief

**Status:** Approved for implementation

## Product purpose

Create a reputation portfolio that demonstrates Amdjad Aboubakar's current software and product ability, verified achievements, character, and long-term intention to contribute to Chad through nonpartisan public service. The site does not ask visitors to hire, commission, follow, or contact him.

## Audience

Prioritize decision-makers and potential collaborators across technology, business, civil society, and public institutions in Chad and internationally. Technical visitors should find credible engineering evidence; nontechnical visitors should understand the human and national value of the work.

## Identity and voice

- Public name: **Amdjad Aboubakar** / **أمجد أبوبكر**.
- Present identity: **Software Engineer & Product Builder**.
- Governing personality: quiet confidence—ambitious, grounded, thoughtful, practical, curious, and service-minded.
- Current evidence appears before future ambition.
- Public-service language is explicit, nonpartisan, non-campaigning, and free of promises or unsupported leadership titles.

## Information architecture

Use one editorial homepage with separate detail pages only for case studies and Perspectives.

Homepage sequence:

1. Hero: public name, present identity, authentic portrait, and passive social icons.
2. Selected Work: the strongest evidence first.
3. Capabilities: strengths derived from the work.
4. Journey: roles, education, milestones, turning points, and verified achievements.
5. Purpose: the bridge from technology experience to long-term service to Chad.
6. Perspectives: evergreen writing, present only when genuine pieces exist.
7. Endorsements: permitted, specific external evidence, present only when available.
8. Personal close: a restrained human detail, email, and social links without a contact invitation.

Primary navigation:

- Work
- Journey
- Purpose
- Perspectives
- Language selector

The name or monogram returns to the top. Do not include Services, Blog, Contact, Hire Me, or a prominent résumé action.

## Selected Work

### 1. Khidme

- Attribution: **Creator & Lead Product Engineer**.
- Status: **In development**.
- Problem: make local worker discovery, expectations, trust signals, and communication clearer for clients and workers in N'Djamena.
- Implemented boundary: a French-and-Arabic cross-platform marketplace MVP covering discovery, applications, invitations, mutual agreements, portfolios, reviews, private communication, identity signals, safety controls, and offline resilience.
- Central theme: design for trust without pretending software can guarantee trust.
- Do not claim production adoption or achieved market impact.

### 2. Khalawat

- Attribution: **Creator & Lead Android Engineer**.
- Status: **Android MVP—in development**.
- Product: a voluntary digital self-discipline tool for Muslims that uses local DNS interception and staged spiritual interventions.
- Central theme: create meaningful behavioral friction without surveillance, remote reporting, or shame.
- Evidence may cover Kotlin, Compose, Android `VpnService`, DNS packet handling, offline content, state-machine behavior, Keystore protection, and deterministic testing.
- Do not claim guaranteed behavior change, complete protection, or public distribution.

### 3. Meeting App

- Attribution: **Lead Mobile Engineer**.
- Status: **Android application—in development**.
- Product: records meetings, transcribes audio, generates multilingual structured reports, stores history, and exports results.
- Central theme: turn a complex audio-and-AI pipeline into a usable mobile workflow while preserving local history, secure key storage, retryable processing, and honest external-service limitations.
- Do not imply unlimited AI availability, perfect transcription, or a public production release.

### 4. Hamid Azaz Portfolio

- Attribution: **Lead Full-Stack Engineer for a client public-profile platform**.
- Status: **Live at [hamidazaz.com](https://hamidazaz.com/)**.
- Product: an Arabic-and-French public profile plus a private publishing Portal for a Chadian diplomat and politician.
- Central theme: build a secure, maintainable multilingual publishing system where one subject controls structured public information.
- Evidence may cover Next.js, Supabase, synchronized bilingual publishing, RTL-safe layouts, passkey-oriented access, content lifecycle rules, and Netlify deployment architecture.
- Clearly separate Hamid's identity, career, and political activity from Amdjad Aboubakar's own story; do not imply political endorsement.

## Capabilities

Use three evidence-linked capability groups instead of offered Services or technology-logo strips:

1. **Product engineering** — moving from a human problem to a coherent, tested product system.
2. **Mobile and systems engineering** — working across mobile UI, device APIs, local data, networking, background behavior, and release constraints.
3. **Responsible digital platforms** — building privacy, security, accessibility, localization, trust boundaries, and honest failure behavior into the product.

Technologies appear within the case studies that justify them. They are not standalone badges of competence.

## Language experience

- Ship complete French, Arabic, and English versions together.
- Use explicit `/fr/`, `/ar/`, and `/en/` URLs for every indexable page.
- At the unlocalized root, selection priority is: saved manual choice, supported device/browser language, then French.
- A manual language change persists and takes precedence on later visits.
- Arabic receives a genuine right-to-left layout and suitable typography.
- Do not publish partial, machine-only, or mixed-language pages. Missing translations block that content from publication.

## Visual direction

- Preserve the existing dark slate, deep charcoal, and amber editorial identity.
- Make it feel like a thoughtful personal publication, not an agency template, SaaS dashboard, or political campaign.
- Use large geometric typography, generous space, flat square-edged compositions, restrained motion, and strong project imagery.
- Use the supplied portrait with authenticity-preserving edits only: crop, background isolation, exposure, contrast, and color balance. Do not generate or alter the person's face, body, clothing, or expression.
- Social icons may appear in the hero and closing area, with accessible names and no invitation language.
- Remove the contact form, Services framing, technology-logo strip, fake counters, fake carousel, and placeholder content.

## Technical foundation

- Astro with TypeScript.
- Static generation and GitHub Pages deployment through GitHub Actions.
- Repository-managed typed content for projects, Journey, Perspectives, Endorsements, and translations.
- Minimal client JavaScript limited to language preference, navigation, and restrained interaction.
- No Supabase, database, authentication, administration dashboard, visitor accounts, or stored submissions in the first release.
- Domain purchase and DNS management remain with Amdjad Aboubakar.

## Privacy and measurement

- Collect no visitor personal data at launch.
- Use no contact form, cookies, behavioral trackers, session replay, advertising pixels, or cross-site analytics.
- Launch without analytics. Add privacy-preserving aggregate measurement later only if a concrete question justifies it.
- External email and social links are ordinary outbound links; they do not create an invitation or local visitor record.

## Accessibility, performance, and discovery

- Meet WCAG 2.2 AA for contrast, keyboard access, focus visibility, semantics, labels, reflow, and target sizing.
- Respect reduced-motion preferences and avoid motion required for understanding.
- Test both left-to-right and right-to-left layouts at mobile, tablet, and desktop sizes.
- Generate localized titles, descriptions, social cards, canonical URLs, `hreflang` alternates, sitemap entries, and structured person/project metadata.
- Optimize responsive images and fonts; ship no unnecessary application runtime.
- Treat Lighthouse scores as diagnostic evidence, not marketing claims.

## Content integrity gates

- Use only defensible roles, statuses, outcomes, dates, and metrics.
- Distinguish implemented functionality, current status, intended impact, and verified outcome.
- Show repositories or live demos only when public, secure, maintained, and representative.
- Keep Perspectives hidden until genuine writing is available.
- Keep Endorsements hidden until specific quotes, identities, relationships, and permissions are available.
- Turn résumé facts into the Journey; keep any downloadable PDF discreet and current.
- Human-review all three language versions, especially public-service language and Arabic terminology.

## Inputs still required before implementation can be considered content-complete

- Verified Journey facts from the supplied résumé: roles, education, dates, achievements, and turning points.
- Exact public email address and approved social-profile URLs.
- Final project screenshots and any approved public repository or demo links.
- At least one personal story or experience that explains the service-oriented ambition.
- Perspective manuscripts and endorsements only if they are ready; neither blocks the initial launch.
- Confirmation of any status that becomes stronger than the conservative labels in this brief.

## First-release acceptance criteria

- Every included page is complete and human-reviewed in French, Arabic, and English.
- The four case studies state accurate attribution and conservative status.
- Root language detection, saved preference, direct locale URLs, and French fallback work without language loops.
- Keyboard, screen-reader, reduced-motion, responsive, and RTL checks pass.
- No secrets, forms, trackers, databases, placeholder claims, fake endorsements, or untranslated fallbacks ship.
- Static build and automated checks pass, and the GitHub Pages deployment is reviewed before custom-domain publication.

## Explicit non-goals

- Soliciting employment, projects, followers, or messages.
- A CMS or private editing Portal.
- A database or Supabase integration.
- Accounts, comments, newsletters, or contact submissions.
- A political campaign, party platform, or claim of current public office.
- A posting schedule, empty blog, or fabricated thought leadership.
- Decorative technology logos, inflated project counts, or unverified impact statistics.
