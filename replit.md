# Abhishek Datta Personal Site

Static personal landing page built with React and Vite.

## Run & Operate

- `pnpm run dev` - run the Vite dev server locally
- `pnpm run typecheck` - full typecheck across all packages
- `pnpm run build` - typecheck and build the static site
- `pnpm run preview` - preview the production build locally
- No required runtime environment variables

## Stack

- pnpm workspaces, Node.js, TypeScript
- Frontend: React, Vite, Tailwind CSS
- Hosting: GitHub Pages through GitHub Actions

## Where things live

- `artifacts/personal-site` - deployable landing page
- `.github/workflows/deploy-pages.yml` - GitHub Pages deployment workflow

## Architecture decisions

- Static-only site: no API server, database, or serverless runtime.
- `BASE_PATH` controls the Vite asset base for GitHub Pages; local development defaults to `/`.

## Product

Personal portfolio landing page for Abhishek Datta.

## User preferences

- Keep this repository static-only.

## Gotchas

- In GitHub Pages settings, use **GitHub Actions** as the Pages source.
- Set repository variable `PAGES_BASE_PATH=/` when deploying to a custom domain or a user Pages repo.

## Pointers

- See `README.md` for local and deployment commands.
