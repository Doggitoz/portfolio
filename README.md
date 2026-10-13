# Coleton Wheeler — Portfolio

Personal portfolio built with Next.js and exported as a static site for GitHub Pages.

## Local development

```bash
npm ci
npm run dev
```

## Checks

```bash
npm run lint
npm run build
```

The production build writes the static site to `out/`.

## Deployment

Pushing to `main` runs the GitHub Actions workflow in `.github/workflows/nextjs-gh-pages.yml`.
It lints the project, creates a static export, and deploys `out/` to GitHub Pages. The
`public/CNAME` file preserves the `coleton.dev` custom domain.
