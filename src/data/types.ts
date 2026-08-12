export const locales = ["fr", "ar", "en"] as const;
export const projectSlugs = ["khidme", "khalawat", "meeting-app", "hamid"] as const;

export type Locale = (typeof locales)[number];
export type ProjectSlug = (typeof projectSlugs)[number];

export type ProjectContent = {
  title: string;
  category: string;
  status: string;
  role: string;
  summary: string;
  theme: string;
  problemLabel: string;
  problem: string;
  responseLabel: string;
  response: string;
  decisionsLabel: string;
  decisions: Array<{ title: string; body: string }>;
  evidenceLabel: string;
  evidence: string[];
  limitsLabel: string;
  limits: string[];
  reflectionLabel: string;
  reflection: string;
};

export type SiteContent = {
  localeName: string;
  meta: {
    title: string;
    description: string;
  };
  nav: {
    work: string;
    experience: string;
    journey: string;
    purpose: string;
    perspectives: string;
    menu: string;
    close: string;
    language: string;
  };
  hero: {
    eyebrow: string;
    role: string;
    summary: string;
    location: string;
    portraitAlt: string;
    scroll: string;
  };
  work: {
    eyebrow: string;
    title: string;
    intro: string;
    read: string;
    viewAll: string;
  };
  capabilities: {
    eyebrow: string;
    title: string;
    intro: string;
    items: Array<{ number: string; title: string; body: string; evidence: string }>;
  };
  experience: {
    eyebrow: string;
    title: string;
    intro: string;
    items: Array<{
      period: string;
      organization: string;
      role: string;
      highlights: string[];
    }>;
  };
  journey: {
    eyebrow: string;
    title: string;
    intro: string;
    items: Array<{ marker: string; title: string; body: string }>;
    resumeNote: string;
  };
  purpose: {
    eyebrow: string;
    title: string;
    statement: string;
    body: string;
    principles: string[];
  };
  perspectives: {
    eyebrow: string;
    title: string;
    empty: string;
  };
  closing: {
    eyebrow: string;
    title: string;
    body: string;
    email: string;
    github: string;
    rights: string;
  };
  caseStudy: {
    back: string;
    next: string;
    visit: string;
    role: string;
    status: string;
    technologies: string;
    projectOf: string;
  };
  projects: Record<ProjectSlug, ProjectContent>;
  errors: {
    notFoundTitle: string;
    notFoundBody: string;
    home: string;
  };
};

export const projectTechnologies: Record<ProjectSlug, string[]> = {
  khidme: ["Expo", "React Native", "TypeScript", "Firebase", "Firestore"],
  khalawat: ["Kotlin", "Jetpack Compose", "VpnService", "Room", "Android Keystore"],
  "meeting-app": ["React Native", "TypeScript", "SQLite", "FFmpeg", "Gemini", "Groq"],
  hamid: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Netlify"],
};

export const projectMarks: Record<ProjectSlug, string> = {
  khidme: "KH",
  khalawat: "KL",
  "meeting-app": "MA",
  hamid: "HA",
};
