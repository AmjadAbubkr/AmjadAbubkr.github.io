import { describe, expect, it } from "vitest";
import {
  alternateLocalePath,
  direction,
  languageFromPreferences,
  localePath,
} from "./i18n";

describe("locale routing", () => {
  it("uses a saved supported language before browser preferences", () => {
    expect(languageFromPreferences("ar", ["en-US", "fr-FR"])).toBe("ar");
  });

  it("uses the first supported browser language", () => {
    expect(languageFromPreferences(null, ["de-DE", "en-GB", "fr-FR"])).toBe("en");
  });

  it("falls back to French", () => {
    expect(languageFromPreferences("de", ["es-ES"])).toBe("fr");
  });

  it("builds stable localized paths", () => {
    expect(localePath("fr", "work/khidme")).toBe("/fr/work/khidme/");
    expect(alternateLocalePath("/en/work/khidme/", "ar")).toBe("/ar/work/khidme/");
  });

  it("sets Arabic to right-to-left only", () => {
    expect(direction("ar")).toBe("rtl");
    expect(direction("fr")).toBe("ltr");
  });
});
