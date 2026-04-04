# Deployment

## Recommended Hosting

Cloudflare Pages is the primary deployment target.

The site is configured for static export with:

- `output: 'export'`
- `images.unoptimized: true`
- `out/` as the build artifact
- optional `SITE_URL` support for absolute sitemap and metadata URLs

## Static export audit

The app is static-safe:

- no API routes
- no route handlers
- no `headers()`, `cookies()`, or request-bound logic
- no uncached runtime `fetch()` usage
- dynamic project pages are generated from local typed data via `generateStaticParams()`
- `next/image` is kept but configured for static export with `images.unoptimized: true`
- the old `ImageResponse` icon route was replaced with a plain static `app/icon.svg`

## Build reference

- install: `npm install`
- build: `npm run build`
- output: `out`

## Cloudflare Pages

### Cloudflare settings

- Framework preset: `None`
- Build command: `npm run build`
- Build output directory: `out`
- Optional environment variable: `SITE_URL=https://your-domain.example`

### Cloudflare steps

1. Push the repo to GitHub.
2. Open Cloudflare Pages.
3. Create a new project and connect the repository.
4. Set the build command to `npm run build`.
5. Set the output directory to `out`.
6. Deploy.

### Notes

- No `basePath` is required for root-domain deployment.
- Static assets resolve from root paths on Cloudflare Pages.
- `public/_headers` is included for basic security and cache behavior.
- No `_redirects` file is needed because this is not an SPA fallback deployment.
- Set `SITE_URL` in Cloudflare if you want absolute URLs in `sitemap.xml`, `robots.txt`, and metadata output.

## GitHub Pages

GitHub Pages is supported as an optional fallback.

### How it works

- The site is built with:
  - `GITHUB_PAGES=true`
  - `GITHUB_PAGES_REPOSITORY=Portfolio`
- The GitHub Pages workflow also sets `SITE_URL` automatically.
- In that mode, Next config applies a subpath-aware `basePath` and `assetPrefix`.
- The workflow deploys `out/` to the `gh-pages` branch.

### Workflow file

- `.github/workflows/deploy-github-pages.yml`

### Caveats

- The workflow assumes the repository path is `/Portfolio/`.
- If the repository name changes, update `GITHUB_PAGES_REPOSITORY` in the workflow.
- GitHub Pages subpath deployments are more fragile than Cloudflare root deployments, which is why Cloudflare remains the recommended target.

## Troubleshooting

### Images are not loading

- Confirm `images.unoptimized: true` is present in `next.config.ts`.

### Refreshing a page gives a 404

- On static hosts, this usually means the route path and exported file path do not match.
- This project uses `trailingSlash: true` to keep exported route directories predictable.

### Assets are broken on GitHub Pages

- Check the configured repo name in `GITHUB_PAGES_REPOSITORY`.
- A wrong repo name produces a wrong `basePath` and broken asset URLs.

### Missing project pages

- Ensure every dynamic project route is included in `generateStaticParams()` in `src/app/projects/[slug]/page.tsx`.

### Build succeeds but hosting is wrong

- Verify the hosting provider is serving the `out/` directory, not the repo root.
