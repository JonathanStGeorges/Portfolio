# JJ / EXIBIST Portfolio

Personal portfolio site for JJ / EXIBIST, built as a custom dark technical portfolio rather than a template landing page.

The project is production-hardened for static deployment and exports to `out/`.

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- ESLint

## Routes

- `/` home
- `/about`
- `/projects`
- `/projects/[slug]`
- `/leadership`
- `/contact`

## Content organization

The main source of truth is:

- `src/content/site.ts`

That file holds:

- site identity and links
- focus areas
- principles
- project entries
- leadership / experience content

Reusable UI lives in:

- `src/components/site/`

Docs live in:

- `docs/phase-0-audit.md`
- `docs/content-strategy.md`
- `docs/design-rationale.md`
- `docs/progress-log.md`

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Verification

```bash
npm run lint
npm run typecheck
npm run build
```

## Deployment

Cloudflare Pages is the recommended host.

- Build command: `npm run build`
- Output directory: `out`

GitHub Pages is also supported through a dedicated workflow and subpath-aware config.

See [`DEPLOYMENT.md`](./DEPLOYMENT.md) for the full deployment guide.

## Editing content

See [`EDITING.md`](./EDITING.md).
