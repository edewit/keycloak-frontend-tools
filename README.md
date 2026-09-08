# Keycloak Frontend Tools

A promotional website for open source projects that make frontend development with Keycloak easier. Built with [Quarkus Roq](https://iamroq.dev).

## Projects featured

- **[keycloak-headless](https://github.com/edewit/keycloak-headless)** — Lit web components and framework helpers for React, Vue, Svelte, and Solid
- **[keycloak-react](https://github.com/edewit/keycloak-react)** — Clerk-style React components for Next.js with SSR and server-side tokens
- **[login-ui-base](https://github.com/edewit/login-ui-base)** — Modern login themes with client-side or Qute server-side rendering
- **[Backend-for-Frontend](https://github.com/edewit/Backend-for-Frontend)** — Keycloak BFF extension with secure session cookies

## Getting started

Install the [Roq CLI](https://iamroq.dev/docs/getting-started/):

```bash
curl -Ls https://sh.jbang.dev | bash -s - app install --fresh --force roq@quarkiverse/quarkus-roq
```

Then:

```bash
# Start dev mode with live-reload
roq start

# Build the static site
roq generate

# Preview the generated site
roq serve
```

Dev mode runs on http://localhost:8080.

## Project structure

```
content/           Pages (index.html)
data/              Project metadata (projects.yaml)
templates/         Qute layouts
web/               Tailwind CSS (bundled automatically)
config/            Site configuration
public/            Static assets
```

## Deployment

A GitHub Actions workflow in `.github/workflows/deploy.yml` builds and deploys to GitHub Pages using the official [quarkus-roq action](https://github.com/quarkiverse/quarkus-roq).
