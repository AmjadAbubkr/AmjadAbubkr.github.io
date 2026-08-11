import { locales, type Locale } from "../data/types";

export const defaultLocale: Locale = "fr";

export function isLocale(value: string | undefined): value is Locale {
  return locales.includes(value as Locale);
}

export function direction(locale: Locale): "rtl" | "ltr" {
  return locale === "ar" ? "rtl" : "ltr";
}

export function localePath(locale: Locale, path = ""): string {
  const cleanPath = path.replace(/^\/+|\/+$/g, "");
  return cleanPath ? `/${locale}/${cleanPath}/` : `/${locale}/`;
}

export function alternateLocalePath(currentPath: string, locale: Locale): string {
  const segments = currentPath.split("/").filter(Boolean);
  if (segments.length > 0 && isLocale(segments[0])) {
    segments[0] = locale;
  } else {
    segments.unshift(locale);
  }
  return `/${segments.join("/")}/`;
}

export function languageFromPreferences(
  saved: string | null,
  browserLanguages: readonly string[],
): Locale {
  const savedLocale = saved ?? undefined;
  if (isLocale(savedLocale)) return savedLocale;

  for (const language of browserLanguages) {
    const base = language.toLowerCase().split("-")[0];
    if (isLocale(base)) return base;
  }

  return defaultLocale;
}
