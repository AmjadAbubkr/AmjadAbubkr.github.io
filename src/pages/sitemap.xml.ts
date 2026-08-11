import { locales, projectSlugs } from "@/data/types";
import type { APIRoute } from "astro";

export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL("http://localhost:4321");
  const paths = locales.flatMap((locale) => [
    `/${locale}/`,
    ...projectSlugs.map((slug) => `/${locale}/work/${slug}/`),
  ]);
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths
    .map((path) => `  <url><loc>${new URL(path, base).href}</loc></url>`)
    .join("\n")}\n</urlset>`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
