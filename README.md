# Abhishek Datta Personal Site

Static React/Vite landing page for GitHub Pages.

## Local Development

```sh
corepack enable
pnpm install
pnpm run dev
```

The dev server defaults to `http://localhost:5173`.

## Build And Preview

```sh
pnpm run typecheck
pnpm run build
pnpm run preview
```

The production build is written to `artifacts/personal-site/dist/public`.

## GitHub Pages Deployment

Deployments run automatically from `.github/workflows/deploy-pages.yml` whenever `main` is pushed. In GitHub, set the repository's Pages source to **GitHub Actions**.

For a project Pages URL such as `https://abdatta.github.io/abdatta-com/`, the workflow uses `/abdatta-com/` as the Vite base path automatically. For a custom domain or a user site such as `https://abdatta.github.io/`, add a repository variable named `PAGES_BASE_PATH` with the value `/`.

## Backend Status

This repo is intentionally static-only. The landing page does not require an API server, database, serverless functions, or runtime environment variables.
