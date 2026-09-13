# Baha Turk Construction Company — Website

## Getting Started

```bash
git clone <repo-url>
git switch develop
pnpm install
pnpm dev
```

`pnpm dev` runs the React app and the mock API together:

- App: http://localhost:5173
- API: http://localhost:3001

> First time only: run `pnpm approve-builds`, select `esbuild`, and commit the resulting `package.json` change — otherwise the build script may be skipped.

## Environment Variables

Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

| Variable       | Description                                                        |
| -------------- | ------------------------------------------------------------------ |
| `VITE_API_URL` | Base URL for the API. Defaults to `http://localhost:3001` locally. |

## Project Structure

```
src/
├── api/client.js       # all fetch/POST/PATCH/DELETE calls go through here
├── store/               # Zustand stores, one per domain
│   ├── useCompanyStore.js
│   ├── useProjectsStore.js
│   └── useContactStore.js
├── hooks/useFetch.js    # generic one-off fetch hook (non-shared data)
├── components/
│   ├── layout/          # Navbar, Footer
│   └── ui/               # reusable UI primitives (Button, etc.)
└── pages/                # route-level pages (Home, About, Projects, Contact)
```

## State Management

Global/shared data goes through Zustand stores — don't fetch the same data separately in multiple components. Use an existing store if it fits, or create a new one following the same pattern if it genuinely doesn't.

## Available Scripts

| Command           | What it does                     |
| ----------------- | -------------------------------- |
| `pnpm dev`        | Runs the app + mock API together |
| `pnpm dev:client` | Runs only the Vite dev server    |
| `pnpm dev:server` | Runs only json-server            |
| `pnpm build`      | Production build to `dist/`      |
| `pnpm lint`       | Runs ESLint                      |

## Git Workflow

- **Never push directly to `main` or `develop`.**
- Create a feature branch off `develop`:
  ```bash
  git checkout -b feature/your-feature-name
  ```
- Open a **Pull Request into `develop`** once your feature is ready. GitHub Actions will build-check it automatically.
- Keep PRs scoped to one feature/issue.
- If your change touches `db.json`, mention it in the PR description — it's a shared file.
