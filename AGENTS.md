# AGENTS.md

## Cursor Cloud specific instructions

This is a **frontend-only React SPA** (HR Analytics Dashboard) with no backend, no database, and no external service dependencies. All data is mock/client-side generated.

### Running the app

- **Dev server**: `npm run dev` starts Vite on `http://localhost:5173`. Use `-- --host 0.0.0.0` if you need external access.
- **Login**: The app uses fake auth — any non-empty email and password will work (e.g., `demo@example.com` / `password123`). Auth state is stored in `localStorage` under `hr-dashboard-auth` with 24h expiry.

### Available scripts

See `package.json` for all scripts. Key ones:

| Command | Purpose |
|---|---|
| `npm run dev` | Start Vite dev server (port 5173) |
| `npm run build` | Production build to `dist/` |
| `npm run lint` | ESLint check |
| `npm run lint:fix` | ESLint with auto-fix |

### Caveats

- `npm run lint` produces 2 warnings about `react-refresh/only-export-components` in `ThemeContext.jsx` and `main.jsx` — these are expected and not errors.
- There are no automated tests (no test framework configured). Validation is done via lint, build, and manual testing.
- The project uses **npm** (not yarn/pnpm) — the lockfile is `package-lock.json`.
