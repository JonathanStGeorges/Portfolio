# Editing Guide

## Where content lives

- `src/content/site.ts` holds the site copy, project data, leadership framing, and contact links.
- `src/app/page.tsx` defines the homepage composition.
- `src/app/about/page.tsx`, `src/app/projects/page.tsx`, `src/app/leadership/page.tsx`, and `src/app/contact/page.tsx` define the route pages.

## What to edit first

1. Update `src/content/site.ts` if you want to change project descriptions, links, or the public narrative.
2. Update `src/app/*` if you want to change page layout or the order of sections.
3. Update `docs/content-strategy.md` and `docs/design-rationale.md` if you want to revise the site direction.

## Placeholder items to replace

- Personal email address in `src/content/site.ts`
- Resume link in `src/content/site.ts`
- Any project links marked as `Add repo link`
- Any project links or notes that explicitly say `User-fill placeholder`

## Local run

```bash
npm install
npm run dev
```

## Verification

```bash
npm run lint
npm run build
```
