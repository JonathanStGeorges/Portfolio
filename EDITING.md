# Editing Guide

## Where content lives

- `src/content/site.ts` holds the site copy, project data, leadership framing, and contact links.
- `src/app/page.tsx` defines the homepage composition.
- `src/app/about/page.tsx`, `src/app/projects/page.tsx`, `src/app/leadership/page.tsx`, and `src/app/contact/page.tsx` define the route pages.

## What to edit first

1. Update `src/content/site.ts` if you want to change project descriptions, links, or the public narrative.
2. Update `src/app/*` if you want to change page layout or the order of sections.
3. Update `docs/content-strategy.md` and `docs/design-rationale.md` if you want to revise the site direction.

## Project model

Each main project entry in `src/content/site.ts` now supports:

- `bucket`
- `ownership`
- `status`
- `repository`
- `contributionContext`
- `sourceNote`
- `featured`
- `artifacts`

Use those fields to keep the distinction between personal work, team repositories, and research work clear.

### Ownership

- `personal`: personal GitHub repo or standalone project
- `team`: collaborative repository, usually under `FRC1884`
- `research`: research-led work that may still be hosted in a personal repo

### Featured projects

- Mark `featured: true` for projects that should appear in the homepage featured grid
- Projects still appear on the main projects page even if they are not featured

### Supporting repositories

- Use `supportingRepositories` in `src/content/site.ts` for GitHub repos that matter as evidence but do not need full case-study treatment
- This is the right place for supporting team software, operations tools, and overlap projects that would otherwise clutter the main portfolio

### Complete repository catalogs

- `personalRepositoryCatalog` holds the full verified public repo list for the personal account
- `teamRepositoryCatalog` holds the full verified public repo list for the `FRC1884` org
- The projects page now renders these as expandable “complete repository catalog” sections
- Keep these lists factual and close to verified GitHub metadata:
  - repo name
  - URL
  - language
  - description when one exists
  - last updated date

### FRC1884 and PathPlanner representation

- Use full `projects` entries for major team repos such as `Season2026`, `PathPlanA`, `GriffinSim`, and `FRCHeatmap`
- Use `supportingRepositories` for lower-weight team repos like scouting or operations tools
- Represent upstream PathPlanner as part of the credited team software stack
- Represent `PathPlanA` as the distinct team-authored planning repository
- Do not write copy that implies the team authored upstream PathPlanner itself

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
npm run typecheck
npm run build
```
