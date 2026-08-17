# MVP setup & build tasks

Scoped to `docs/mvp.md` only (Google login → dashboard → teams → training sessions with goal/date/content).
Drill library, sport-specific templates, and AI generation from `ideas.md` are explicitly deferred to a later phase.

Sequencing note: Milestones are a hard dependency chain (auth before dashboard, team model before training sessions) — 0 → 1 → 2 → 3.

## Milestone 0 — Project scaffolding

1. Init Next.js app (App Router, TypeScript) in repo root, base folder structure
2. Connect MongoDB Atlas — driver/ORM choice (e.g. Mongoose vs native driver), wire up `MONGO_USERNAME`/`MONGO_PASSWORD` already in `.env`
3. Add Google social login (Auth.js/NextAuth), session/auth middleware for protected routes
4. Deploy skeleton to Vercel, mirror env vars there
5. Commit `docs/mvp.md`

## Milestone 1 — Data model

6. Define `User`, `TeamMembership`, `Team`, `Sport` schemas (`TrainingSession` schema comes with Milestone 3)
7. Seed/support "sport" as a dropdown with ability to add a new value not already present

## Milestone 2 — Dashboard & team creation

8. Dashboard page: list current user's teams, "Add team" button
9. Create-team flow: name + sport dropdown (with add-new)
10. Wire dashboard team list → team-specific view on click

## Milestone 3 — Team view & training sessions

11. `TrainingSession` schema: goal, date, content, belongs to `Team`
12. Team-specific view: list past + future training sessions for that team
13. Create-training-session flow (goal, date, content — no AI, no drills)

## Explicitly deferred (not in scope for these tasks)

- Drill library
- Sport-specific session template fields
- AI-assisted session generation
- Roster/attendance tracking
- Progress/stat tracking
