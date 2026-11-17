# ArithmeTick website

The family-facing site for ArithmeTick, built with [Astro](https://astro.build) from the Figma "Website" wireframes, with content matched to the app.

Pages: Home (for families), How It Works, Privacy Policy, Terms of Use, Delete Your Account, Contact, and a 404 page. No cookies, analytics or tracking.

## Run it

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
```

## Deploy (Cloudflare Workers)

`wrangler.jsonc` tells Cloudflare to serve the built `dist/` folder as static files.

1. In Cloudflare: Workers & Pages → Create → Import a repository, and pick this repository.
2. Build command `npm run build`; deploy command `npx wrangler deploy`. Leave the path as `/` and add no variables.
3. Under the Worker's **Settings → Domains & Routes**, add the custom domain `arithmetick.rachelkenyani.com`.

Every push to `main` then rebuilds and redeploys the site.

## Content notes

- `src/data/levels.json` is exported from the app's level list. Re-export it when levels change.
- `public/images/app/` are real screenshots of the app; `public/images/figma/` are assets from the wireframes.
- The privacy policy here mirrors the in-app policy; keep them in step.
