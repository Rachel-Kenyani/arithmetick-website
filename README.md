# ArithmeTick website

The family-facing site for ArithmeTick, built with [Astro](https://astro.build) from the Figma "Website" wireframes, with content matched to the app.

Pages: Home (for families), How It Works, Privacy Policy, Terms of Use, Delete Your Account, Contact, and a 404 page. No cookies, analytics or tracking.

## Run it

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
```

## Deploy (Cloudflare Pages)

1. Push this folder to its own GitHub repository.
2. In Cloudflare: Workers & Pages → Create → Pages → Connect to Git, and pick the repository.
3. Framework preset **Astro**; build command `npm run build`; output directory `dist`.
4. Under the project's **Custom domains**, add `arithmetick.rachelkenyani.com`. Cloudflare shows the DNS record to add where `rachelkenyani.com` is managed.

Every push to `main` then redeploys the site.

## Content notes

- `src/data/levels.json` is exported from the app's level list. Re-export it when levels change.
- `public/images/app/` are real screenshots of the app; `public/images/figma/` are assets from the wireframes.
- The privacy policy here mirrors the in-app policy; keep them in step.
