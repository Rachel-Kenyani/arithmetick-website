// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://arithmetick.rachelkenyani.com",
  trailingSlash: "never",
  build: { format: "file" },
  /* Ship every script as a file, never inline, so the CSP can allow scripts from 'self' only. */
  vite: { build: { assetsInlineLimit: 0 } },
});
