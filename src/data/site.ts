import { ar } from "./ar";
import { en } from "./en";
import { fr } from "./fr";
import type { Locale, ProjectSlug, SiteContent } from "./types";

export const siteContent: Record<Locale, SiteContent> = { fr, ar, en };

export function getContent(locale: Locale): SiteContent {
  return siteContent[locale];
}

export const publicEmail = "amjadalrachdy60@gmail.com";
export const githubUrl = "https://github.com/AmjadAbubkr";
export const socialProfiles = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/amjad-abubkr-a88297238/" },
  { name: "Instagram", url: "https://www.instagram.com/_amjad_68/" },
  { name: "X", url: "https://x.com/AmjadAbubkr" },
  { name: "Facebook", url: "https://www.facebook.com/amjad.abubkr/" },
] as const;

export const projectLinks: Partial<Record<ProjectSlug, string>> = {
  hamid: "https://hamidazaz.com/",
};
