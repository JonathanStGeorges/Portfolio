# Architecture Note

## Chosen Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4

## Why This Stack

- The repository started empty, so a greenfield Next.js build was the cleanest path.
- The App Router gives route-level composition and metadata without extra routing machinery.
- Tailwind keeps the visual system centralized while still allowing a custom, authored look.

## Final App Structure

- `src/app/`
  - route pages for home, about, projects, leadership, and contact
  - shared layout, metadata, and icon treatment
- `src/components/`
  - navigation, footer, section shells, cards, and reusable presentation primitives
- `src/content/site.ts`
  - source of truth for identity, links, focus areas, project content, and leadership content
- `docs/`
  - progress, design, content strategy, and setup notes

## Content Model Strategy

The site is designed so content editing happens primarily in one file. That keeps ongoing maintenance simple for a portfolio site and avoids a small CMS growing inside the repo.

## Assets Strategy

- Reuse grounded screenshots from local projects where present
- Use strong graphic surfaces and layout instead of stuffing every project with media
- Leave clear artifact placeholders for writeups, demos, or papers that are not yet public
