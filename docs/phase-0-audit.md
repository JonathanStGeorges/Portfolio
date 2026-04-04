# Phase 0 Audit

## Current stack

- Next.js 16 with the App Router
- TypeScript
- Tailwind CSS v4
- ESLint with the Next.js preset

## What to keep

- The App Router structure
- TypeScript as the primary implementation language
- Tailwind for fast, token-driven styling
- Static-first page rendering

## What to replace

- The default starter homepage
- The generic metadata and favicon treatment
- The stock layout, typography, and color palette
- Any placeholder content that reads like a template

## Final architecture

- Global shell in `src/app/layout.tsx`
- Shared data model in `src/content/site.ts`
- Reusable primitives in `src/components/`
- Route-level pages for `Home`, `About`, `Projects`, `Leadership`, and `Contact`
- Content-driven cards and sections instead of hardcoded repeated blocks

## Repository state

- The remote GitHub repository was empty at discovery time.
- This build is therefore a greenfield implementation rather than a refactor.
