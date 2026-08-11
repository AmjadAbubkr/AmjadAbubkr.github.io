import { ar } from "./ar";
import { en } from "./en";
import { fr } from "./fr";
import type { Locale, SiteContent } from "./types";

export const siteContent: Record<Locale, SiteContent> = { fr, ar, en };

export function getContent(locale: Locale): SiteContent {
  return siteContent[locale];
}

export const publicEmail = "amjadalrachdy60@gmail.com";
export const githubUrl = "https://github.com/AmjadAbubkr";
