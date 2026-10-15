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

### Custom-domain HTTPS

In the repository's **Settings > Pages**, set the custom domain to `coleton.dev`
and enable **Enforce HTTPS** after GitHub provisions its certificate. The DNS
records and TLS certificate are managed outside the Next.js application.

If browsers report `SSL_ERROR_BAD_CERT_DOMAIN` and show GitHub's default
certificate, first check the domain's DNS configuration. If it correctly points
to GitHub Pages, remove and re-add the custom domain in Pages settings to restart
certificate provisioning. This can briefly interrupt the site. Wait until
`https://coleton.dev` validates successfully, then enable **Enforce HTTPS** again.
Do not bypass certificate validation or disable HSTS.
