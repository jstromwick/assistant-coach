# assistant-coach
App that helps Sports coaches plan, track and review training sessions for their teams

## Development

```
npm run dev        # start the dev server
npm run build       # production build
npm run start       # run the production build
npm run test         # run the test suite (vitest)
npm run typecheck   # type-check without emitting
```

Requires `MONGO_CONNECTION_STRING` and `MONGO_PASSWORD` in `.env` (see `.env` for the expected shape — the connection string is Atlas's own template with `<db_password>` as a literal placeholder, substituted at runtime).

## Folder structure

- `app/` — Next.js App Router: pages and route handlers (e.g. `app/api/health/route.ts`)
- `lib/` — server-side modules shared across routes (e.g. `lib/mongodb.ts`, the cached MongoDB client)
- `tests/` — Vitest tests, run against a real running server (`tests/helpers/server.ts` starts/stops it), not mocks
