import type { SiteContent } from "./types";

export const en = {
  localeName: "English",
  meta: {
    title: "Amdjad Aboubakar — Software Engineer & Product Builder",
    description:
      "Selected work, engineering decisions, and the long-term public purpose of Amdjad Aboubakar.",
  },
  nav: {
    work: "Work",
    experience: "Experience",
    communities: "Communities",
    journey: "Journey",
    purpose: "Purpose",
    perspectives: "Perspectives",
    menu: "Open navigation",
    close: "Close navigation",
    language: "Change language",
  },
  hero: {
    eyebrow: "Software Engineer & Product Builder",
    role: "I build practical digital products with care for the people and systems around them.",
    summary:
      "Based in N'Djamena, I work across product thinking, mobile engineering, and responsible digital platforms. The goal is useful technology today—and experience that can serve Chad tomorrow.",
    location: "N'Djamena, Chad",
    portraitAlt: "Portrait of Amdjad Aboubakar wearing a blue traditional garment",
    scroll: "Explore selected work",
  },
  work: {
    eyebrow: "Selected work",
    title: "Five projects. Five different kinds of responsibility.",
    intro:
      "These case studies focus on the problem, the decisions, the evidence, and the limits—not on decorative technology lists.",
    read: "Read case study",
    viewAll: "Explore the work",
  },
  capabilities: {
    eyebrow: "Capabilities",
    title: "What the work demonstrates.",
    intro:
      "Capabilities are earned through decisions and outcomes. Each one below is supported by more than one project.",
    items: [
      {
        number: "01",
        title: "Product engineering",
        body: "Moving from a human problem to a coherent, tested product system with deliberate scope and trade-offs.",
        evidence: "Khidme · Meeting App · Hamid",
      },
      {
        number: "02",
        title: "Mobile & systems engineering",
        body: "Working across mobile UI, device APIs, local data, networking, background behavior, and release constraints.",
        evidence: "Khalawat · Meeting App · Khidme",
      },
      {
        number: "03",
        title: "Responsible digital platforms",
        body: "Designing privacy, security, localization, accessibility, and honest failure behavior into the product itself.",
        evidence: "All selected work",
      },
    ],
  },
  experience: {
    eyebrow: "Experience",
    title: "Responsibilities that grew with the work.",
    intro:
      "From hands-on delivery to leading a web-development team, these roles show how I contribute to people, projects, and communication.",
    items: [
      {
        period: "2024–2026",
        organization: "Académie Génies Numériques",
        role: "Team Member · Head of Web Development · Social Media Manager · Team Leader",
        highlights: [
          "Supported and guided the team in web development.",
          "Managed the team's social media, reaching 300,000 views and 2,000 TikTok followers.",
          "Became team leader in late 2025.",
        ],
      },
      {
        period: "2025–2026",
        organization: "V-Tech Albideynet Team",
        role: "CTO and Team Member",
        highlights: [
          "Built the V-Tech website.",
          "Helped plan the Albideynet mobile application.",
          "Managed the team's social media account.",
        ],
      },
      {
        period: "2026",
        organization: "Krach Institute for Tech Diplomacy at Purdue — Nuclear Energy Forum",
        role: "Invited Participant · via Smart Africa Youth Chapter Chad",
        highlights: [
          "Invited as a Smart Africa Youth Chapter Chad member to a forum on nuclear energy connected to the Krach Institute for Tech Diplomacy at Purdue.",
          "Joined the session at the American Center, U.S. Embassy N'Djamena, on 4 September 2026.",
          "Followed presentations and discussion on peaceful uses of nuclear energy, safety and trust, and what reliable energy means for Chad.",
        ],
      },
      {
        period: "2025",
        organization: "AI Training Program — 2,000 Chadian Youth Initiated to AI",
        role: "Coach Assistant",
        highlights: [
          "Served as a coach assistant during the free artificial-intelligence training held in N'Djamena from 4 to 14 August 2025, which initiated 2,000 young Chadians to AI.",
        ],
      },
      {
        period: "February 2025",
        organization: "Université Roi Fayçal — International Scientific Conference on Sustainable Development Prospects in Chad",
        role: "Participant · Scientific Committee",
        highlights: [
          "Took part in the international scientific conference on sustainable development prospects in Chad, organized by King Faisal University.",
        ],
      },
      {
        period: "2026",
        organization: "Alchazali Network",
        role: "Shop Assistant",
        highlights: ["Assisted with Word, PowerPoint, and Canva work."],
      },
      {
        period: "2025",
        organization: "Université Roi Fayçal",
        role: "Assistant to the Head of Studies Affairs",
        highlights: ["Assisted with extracting student-grade data using Excel and Word."],
      },
      {
        period: "2022–2023",
        organization: "SAS Agency",
        role: "Web Designer and Developer",
        highlights: ["Helped build the Adibebe website."],
      },
    ],
  },
  communities: {
    eyebrow: "Community collaborations",
    title: "Building with Chad's digital community.",
    intro:
      "Collaboration with local technology communities keeps the work connected to people, shared learning, and practical impact.",
    items: [
      {
        name: "Code For Chad",
        description: "Collaboration on locally developed technology projects, including Meeting and the open-source Khalawat project.",
        image: "/images/code-for-chad.jpg",
        imageAlt: "Code For Chad logo",
      },
      {
        name: "Smart Africa Youth Chapter Chad",
        description: "Community collaboration focused on youth participation, digital skills, and technology-led development in Chad.",
        image: "/images/smart-africa-youth-chapter-chad.jpg",
        imageAlt: "Smart Africa Youth Chapter Chad logo",
      },
    ],
  },
  media: {
    eyebrow: "Media & public forums",
    title: "Coverage, and showing up where technology is discussed.",
    features: [
      {
        outlet: "MRTV",
        date: "27 January 2026",
        body:
          "I was interviewed by MRTV about V-Tech, a team I was part of, and the work we were building together.",
        image: "/images/mrtv-v-tech-interview.jpg",
        imageAlt: "Amdjad Aboubakar speaking to an MRTV interviewer about V-Tech.",
        link: "https://www.facebook.com/share/v/17FwehLRKA/",
        linkLabel: "Watch the interview on Facebook",
      },
      {
        outlet: "U.S. Embassy N'Djamena · Krach Institute for Tech Diplomacy at Purdue",
        date: "4 September 2026",
        body:
          "Invited as a Smart Africa Youth Chapter Chad member to a forum on nuclear energy connected to the Krach Institute for Tech Diplomacy at Purdue, held at the American Center. Followed discussion on peaceful uses of nuclear energy, safety and trust, and reliable energy for Chad.",
        image: "/images/us-embassy-nuclear-forum.jpg",
        imageAlt: "Group photo of participants at the nuclear energy forum at the American Center, U.S. Embassy N'Djamena",
        link: "https://techdiplomacy.org/",
        linkLabel: "About the Krach Institute",
      },
      {
        outlet: "AI Training Program · Moov Africa",
        date: "4–14 August 2025",
        body:
          "Coach assistant in the free artificial-intelligence training that initiated 2,000 young Chadians to AI in N'Djamena.",
        image: "/images/ai-training-2000-jeunes.jpg",
        imageAlt: "Amdjad Aboubakar, in blue and wearing a participant badge, with a fellow participant at the AI training for 2,000 young Chadians",
      },
      {
        outlet: "Université Roi Fayçal",
        date: "February 2025",
        body:
          "Participant in the international scientific conference on sustainable development prospects in Chad, organized by King Faisal University.",
        image: "/images/conference-roi-faycal.jpg",
        imageAlt: "Amdjad Aboubakar with fellow participants at the King Faisal University scientific conference",
      },
    ],
  },
  journey: {
    eyebrow: "Journey",
    title: "Learning by carrying larger responsibility.",
    intro:
      "The thread is not a list of frameworks. It is a progression from making interfaces work to understanding the systems, trust, and people behind them.",
    items: [
      {
        marker: "Build",
        title: "Start with real problems",
        body: "I learned by turning concrete needs into working software: marketplaces, meeting tools, privacy systems, and public-information platforms.",
      },
      {
        marker: "Deepen",
        title: "Own the difficult edges",
        body: "Security rules, offline behavior, multilingual publishing, release gates, device services, and failure states became part of the product—not afterthoughts.",
      },
      {
        marker: "Serve",
        title: "Turn experience into public value",
        body: "My long-term direction is to bring practical technology judgment, accountability, and service-minded leadership into Chad's development.",
      },
    ],
    resumeNote: "This journey records verified work and direction, not every line of a résumé.",
  },
  purpose: {
    eyebrow: "Purpose",
    title: "Technology is the foundation. Service is the direction.",
    statement:
      "I want to grow from building useful systems into guiding people and institutions toward practical development in Chad.",
    body:
      "That ambition is not a claim to office and this site is not a campaign. It is a commitment to keep earning the judgment, discipline, and understanding required for responsible public service.",
    principles: ["Competence", "Integrity", "Inclusion", "Accountability", "Practical development"],
  },
  perspectives: {
    eyebrow: "Perspectives",
    title: "Ideas deserve more than a posting schedule.",
    empty: "Writing will appear only when there is something considered and useful to say.",
  },
  closing: {
    eyebrow: "Public details",
    title: "The work continues.",
    body: "Email and public profiles are listed here as reference points.",
    email: "Email",
    github: "GitHub",
    rights: "Built with care in N'Djamena.",
  },
  caseStudy: {
    back: "Back to selected work",
    next: "Next case study",
    visit: "Visit the live site",
    role: "Role",
    status: "Status",
    technologies: "Technology context",
    projectOf: "A project by Amdjad Aboubakar",
  },
  projects: {
    khidme: {
      title: "Khidme",
      category: "Local marketplace · Product engineering",
      status: "In development",
      role: "Creator & Lead Product Engineer",
      summary:
        "A French-and-Arabic marketplace MVP designed around how clients and local workers find, agree on, and document work in N'Djamena.",
      theme: "Design trust without pretending software can guarantee it.",
      problemLabel: "The problem",
      problem:
        "Finding dependable local workers and agreeing on terms can be fragmented and informal. The opportunity was not to replace those relationships, but to make discovery, expectations, trust signals, and communication clearer for both sides.",
      responseLabel: "The response",
      response:
        "I designed and built a cross-platform marketplace MVP covering worker and job discovery, applications and invitations, mutual agreements, portfolios and reviews, private communication, identity signals, safety controls, and offline resilience.",
      decisionsLabel: "Decisions that shaped the product",
      decisions: [
        {
          title: "Trust signals, not trust guarantees",
          body: "Identity verification is deliberately bounded. Reviews connect to real work relationships, and the product never treats a badge as proof of skill or safety.",
        },
        {
          title: "Mutual terms before private access",
          body: "Clients and workers accept an immutable agreement before exact addresses become available. Privacy follows the relationship state.",
        },
        {
          title: "Design for local constraints",
          body: "French and Arabic, XAF pricing, multiple workers per job, clear offline states, and retry-safe actions are part of the core model rather than localization added later.",
        },
      ],
      evidenceLabel: "Implemented evidence",
      evidence: [
        "Role-free client and worker participation with discovery, proposals, invitations, and agreements.",
        "Public and private data boundaries enforced through Firebase rules and trusted gateway contracts.",
        "Portfolio, review, safety, moderation, identity, account-deletion, notification, and offline-resilience flows.",
        "Automated unit, interface, emulator, and security-rule test infrastructure plus a release gate.",
      ],
      limitsLabel: "Current limits",
      limits: [
        "The product is still in development and has no claimed production adoption or market impact.",
        "Several production capabilities require trusted server adapters and final provider configuration.",
        "Device-level release validation must be completed before the MVP can be called release-ready.",
      ],
      reflectionLabel: "What this work taught me",
      reflection:
        "Responsible product leadership means defining what a system must never imply. In Khidme, the limits around identity, safety, privacy, and outcomes are as important as the visible features.",
    },
    khalawat: {
      title: "Khalawat",
      category: "Android VPN · Privacy-conscious behavior design",
      status: "Android MVP — in development",
      role: "Creator & Lead Android Engineer · Featured by Code For Chad",
      summary:
        "A voluntary digital self-discipline tool for Muslims that creates a private moment of friction before access to harmful content.",
      theme: "Create space for a different choice—without surveillance or shame.",
      problemLabel: "The problem",
      problem:
        "People trying to change private digital habits often face tools built for monitoring or punishment. Khalawat explores a different model: protection installed voluntarily, operating locally, and designed around the short window in which an interruption can help.",
      responseLabel: "The response",
      response:
        "I built an Android MVP that uses a local VPN and DNS interception to redirect blocked requests into staged spiritual interventions, while keeping browsing data on the device and avoiding remote reporting.",
      decisionsLabel: "Decisions that shaped the product",
      decisions: [
        {
          title: "DNS-only tunnel",
          body: "The VPN handles only DNS traffic. Clean queries use the device's resolver, limiting scope and avoiding unnecessary visibility into browsing traffic.",
        },
        {
          title: "Friction that escalates carefully",
          body: "A deterministic state machine moves from a pause to active deflection and a longer lock, creating time without turning the experience into punishment.",
        },
        {
          title: "Local privacy as a product promise",
          body: "Blocklists, spiritual content, intervention pages, state, and protected settings live locally. Sensitive PIN material uses Android Keystore protection.",
        },
      ],
      evidenceLabel: "Implemented evidence",
      evidence: [
        "Kotlin and Jetpack Compose application around Android VpnService and a testable DNS coordination core.",
        "Packet parsing, blocklist matching, resolver fallback, forwarding retries, and loopback-only interventions.",
        "Offline multilingual spiritual content and persistent escalation behavior.",
        "Automated unit tests, Android lint verification, and a successful release build in the latest hardening cycle.",
        "Code For Chad publicly featured Khalawat as an open-source project developed by Amdjad Aboubakar and invited contributors.",
      ],
      limitsLabel: "Current limits",
      limits: [
        "Khalawat is an in-development Android MVP, not a publicly distributed protection service.",
        "DNS filtering cannot guarantee that every harmful resource or bypass technique is blocked.",
        "No behavioral outcome or effectiveness claim is made without real-world evidence.",
      ],
      reflectionLabel: "What this work taught me",
      reflection:
        "Privacy is not only encryption or storage. It is deciding how little a product needs to know, and refusing features that would break the trust behind voluntary use.",
    },
    "meeting-app": {
      title: "Meeting App",
      category: "React Native · Audio and AI workflow",
      status: "Android application — in development",
      role: "Lead Mobile Engineer · Code For Chad collaboration",
      summary:
        "A mobile workflow for recording meetings, transcribing audio, generating structured multilingual reports, and keeping the results useful afterward.",
      theme: "Make a complex processing pipeline feel understandable and recoverable.",
      problemLabel: "The problem",
      problem:
        "Meeting knowledge is easily lost between raw recordings, incomplete notes, language needs, and disconnected files. An AI feature alone does not solve that—the complete workflow has to remain understandable when processing is slow or fails.",
      responseLabel: "The response",
      response:
        "I led the React Native implementation across recording, audio processing, transcription, structured report generation, local history, playback, retry, passcode protection, and document export.",
      decisionsLabel: "Decisions that shaped the product",
      decisions: [
        {
          title: "A visible, retryable pipeline",
          body: "Recording, transcription, cleanup, generation, and commit are explicit stages. The app retains enough state to retry from the failed step instead of starting over blindly.",
        },
        {
          title: "History is a product feature",
          body: "Audio, cleaned transcripts, language-specific reports, and metadata persist as one meeting record so generated knowledge remains usable beyond the first result screen.",
        },
        {
          title: "External AI limits stay visible",
          body: "Model fallback handles recoverable quota responses, but the product does not pretend it can overcome project-wide quota, billing, regional, or transcription-accuracy limits.",
        },
      ],
      evidenceLabel: "Implemented evidence",
      evidence: [
        "React Native Android application with local SQLite history and secure device key storage.",
        "Recording, chunking, transcription, report generation, audio playback, and PDF/DOCX export flows.",
        "Compatible parsing for multilingual report formats across historical and current records.",
        "Navigation, lock-state, safe-area, retry, and performance corrections backed by tests and CI checks.",
        "Code For Chad publicly presented Meeting as a locally developed solution, named Amdjad Aboubakar as its developer, and linked to the online demo.",
      ],
      limitsLabel: "Current limits",
      limits: [
        "The application is not presented as a public production release.",
        "Transcription and report quality depend on audio conditions and external services.",
        "Model fallback improves resilience but cannot manufacture unavailable provider quota.",
      ],
      reflectionLabel: "What this work taught me",
      reflection:
        "Reliable AI products are mostly about the system around the model: clear stages, saved state, compatible data, honest errors, and a useful path when an external service cannot continue.",
    },
    hamid: {
      title: "Hamid Azaz Portfolio",
      category: "Client platform · Multilingual publishing",
      status: "Live at hamidazaz.com",
      role: "Lead Full-Stack Engineer",
      summary:
        "An Arabic-and-French public profile and private publishing Portal built for a Chadian diplomat and politician.",
      theme: "Treat trustworthy public information as a structured system, not a collection of pages.",
      problemLabel: "The problem",
      problem:
        "A public figure needs an official profile that remains accurate across languages and can be updated without depending on a developer for every change. The editing path also carries unusual security and attribution risk.",
      responseLabel: "The response",
      response:
        "I led the full-stack implementation of a public Profile and private Portal for positions, education, participations, events, articles, gallery content, and biographical information in synchronized Arabic and French.",
      decisionsLabel: "Decisions that shaped the product",
      decisions: [
        {
          title: "Profile and Portal are different products",
          body: "Visitors receive a read-only, indexable public profile. The authenticated Editor receives a narrow publishing environment with explicit ownership and lifecycle rules.",
        },
        {
          title: "Languages publish together",
          body: "A content item cannot become public until required Arabic and French fields are complete. RTL-safe logical layout rules are enforced rather than reviewed by memory.",
        },
        {
          title: "Authentication follows the risk",
          body: "Editor provisioning, row-level access, passkey-oriented login, recovery boundaries, and server-only credentials are designed around the sensitivity of a political public profile.",
        },
      ],
      evidenceLabel: "Implemented evidence",
      evidence: [
        "Next.js public routes and a structured multilingual content Portal backed by Supabase and PostgreSQL.",
        "Draft and published lifecycles, synchronized locale validation, images, previews, and public detail pages.",
        "RTL document direction and logical CSS conventions protected by a custom lint rule.",
        "Schema, authorization, component, localization, and production-build verification across the project.",
      ],
      limitsLabel: "Current limits",
      limits: [
        "The public site is live at hamidazaz.com; this case study does not claim outcomes beyond deployment.",
        "Hamid's identity, career, views, and achievements belong to the client and are not Amdjad's claims.",
        "The product intentionally supports Arabic and French only; English was outside its approved scope.",
      ],
      reflectionLabel: "What this work taught me",
      reflection:
        "When software represents a real person in public life, content modeling, translation completeness, access control, and absence behavior become questions of trust—not just implementation details.",
    },
    "game-technologie": {
      title: "Game Technologie",
      category: "Mobile commerce · Expo / React Native",
      status: "Available on Google Play",
      role: "Creator & Mobile Engineer",
      summary:
        "An Android gaming store for browsing consoles, games, and accessories, with Firebase-backed authentication, catalog management, and WhatsApp checkout.",
      theme: "Make a real shopping flow feel focused, flexible, and ready for local operations.",
      problemLabel: "The problem",
      problem:
        "A gaming shop needs more than a product list: customers need a clear way to browse and review items, while the store needs a manageable catalog and order workflow behind the storefront.",
      responseLabel: "The response",
      response:
        "I built a cross-platform Expo application with customer authentication, category and product-detail flows, cart and WhatsApp checkout, plus an admin area for products and orders. The app also includes English, French, and Arabic support with an RTL-aware foundation.",
      decisionsLabel: "Decisions that shaped the product",
      decisions: [
        {
          title: "One app, two working surfaces",
          body: "The same codebase supports a customer storefront and an admin dashboard, keeping product and order operations close to the shopping experience.",
        },
        {
          title: "Cloud data with clear boundaries",
          body: "Firebase Auth, Firestore, and Storage provide the identity, catalog, media, and order foundations while state stays explicit in the app.",
        },
        {
          title: "Checkout that fits the business",
          body: "The cart leads to a WhatsApp-based order handoff instead of pretending the app includes a full payment system.",
        },
      ],
      evidenceLabel: "Implemented evidence",
      evidence: [
        "Android app built with Expo 55 and React Native 0.83, with React Navigation and Zustand.",
        "Customer flows for authentication, home, categories, product details, cart, checkout, and account controls.",
        "Admin flows for product management and order review, backed by Firebase services.",
        "English, French, and Arabic localization, RTL-aware layout, privacy policy, and account-deletion request screens.",
      ],
      limitsLabel: "Current limits",
      limits: [
        "The app is presented as available on Google Play; this portfolio does not claim sales, adoption, or revenue outcomes without verified data.",
        "The WhatsApp checkout handoff is not a native payment processor or fulfillment system.",
        "Catalog and order behavior depend on correctly configured Firebase services and store operations.",
      ],
      reflectionLabel: "What this work taught me",
      reflection:
        "A useful commerce product respects the reality behind the interface: the catalog, the order handoff, the person managing stock, and the customer who needs a simple path to purchase.",
    },
  },
  errors: {
    notFoundTitle: "This page is not part of the story.",
    notFoundBody: "The address may be incomplete or the page may have moved.",
    home: "Return home",
  },
} satisfies SiteContent;
