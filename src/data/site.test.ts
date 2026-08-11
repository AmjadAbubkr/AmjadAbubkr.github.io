import { describe, expect, it } from "vitest";
import { siteContent } from "./site";
import { locales, projectSlugs } from "./types";

function collectEmptyPaths(value: unknown, path = "root"): string[] {
  if (typeof value === "string") return value.trim() ? [] : [path];
  if (Array.isArray(value)) {
    return value.flatMap((item, index) => collectEmptyPaths(item, `${path}[${index}]`));
  }
  if (value && typeof value === "object") {
    return Object.entries(value).flatMap(([key, item]) => collectEmptyPaths(item, `${path}.${key}`));
  }
  return [];
}

describe("localized site content", () => {
  it("contains a complete non-empty content tree for every locale", () => {
    for (const locale of locales) {
      expect(collectEmptyPaths(siteContent[locale]), locale).toEqual([]);
    }
  });

  it("contains every approved case study in every locale", () => {
    for (const locale of locales) {
      expect(Object.keys(siteContent[locale].projects)).toEqual(projectSlugs);
    }
  });

  it("uses conservative public statuses", () => {
    for (const locale of locales) {
      for (const slug of projectSlugs) {
        const status = siteContent[locale].projects[slug].status.toLowerCase();
        if (slug === "hamid") {
          expect(status).toContain("hamidazaz.com");
          continue;
        }
        expect(status).not.toMatch(/launched|production|live|publié|مُطلق/);
      }
    }
  });
});
