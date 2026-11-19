import type { APIRoute } from "astro";

/** Every public page. The 404 page is left out on purpose. */
const PAGES = ["/", "/how-it-works", "/contact", "/privacy", "/terms", "/delete-account"];

export const GET: APIRoute = ({ site }) => {
  const origin = (site ?? new URL("https://arithmetick.rachelkenyani.com")).origin;
  const urls = PAGES.map((p) => `  <url><loc>${origin}${p === "/" ? "/" : p}</loc></url>`).join("\n");
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    { headers: { "Content-Type": "application/xml; charset=utf-8" } },
  );
};
