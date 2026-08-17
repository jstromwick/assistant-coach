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

Requires `MONGODB_URI` in `.env` — provisioned by the Vercel MongoDB Atlas integration and mirrored into the Vercel project's Production/Preview environments.

## Folder structure

- `app/` — Next.js App Router: pages and route handlers (e.g. `app/api/health/route.ts`)
- `lib/` — server-side modules shared across routes (e.g. `lib/mongodb.ts`, the cached MongoDB client)
- `tests/` — Vitest tests, run against a real running server (`tests/helpers/server.ts` starts/stops it), not mocks
