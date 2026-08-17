# MVP setup & build tasks

Scoped to `docs/mvp/plan.md` only (Google login → dashboard → teams → training sessions with goal/date/plan).
Drill library, sport-specific templates, and AI generation from `ideas.md` are explicitly deferred to a later phase.

Domain model and terminology: see [`CONTEXT.md`](../../CONTEXT.md). Two schema decisions below are backed by ADRs: `TeamMembership` as a join table from day one ([0001](../adr/0001-team-membership-multi-user-from-day-one.md)), and `TrainingSession.plan` stored as markdown ([0002](../adr/0002-training-session-plan-stored-as-markdown.md)).

Sequencing note: Milestones are a hard dependency chain (auth before dashboard, team model before training sessions) — 0 → 1 → 2 → 3.

## Milestone 0 — Project scaffolding

1. Init Next.js app (App Router, TypeScript) in repo root, base folder structure
2. Connect MongoDB Atlas — driver/ORM choice (e.g. Mongoose vs native driver), wire up `MONGO_USERNAME`/`MONGO_PASSWORD` already in `.env`
3. Add Google social login (Auth.js/NextAuth), session/auth middleware for protected routes
4. Deploy skeleton to Vercel, mirror env vars there

## Milestone 1 — Data model

5. Define `User` schema
6. Define `TeamMembership` schema — links `User` ↔ `Team`. MVP creates exactly one per `Team` (the creator), no roles, no invite/sharing UI (see ADR 0001)
7. Define `Sport` schema — first-class collection, global and shared, freely addable by any User, case-insensitive uniqueness on name
8. Define `Team` schema — name, belongs to one `Sport`

## Milestone 2 — Dashboard & team creation

9. Dashboard page: list current user's teams (via `TeamMembership`), "Add team" button
10. Create-team flow: name + sport dropdown sourced from the `Sport` collection, with ability to add a new value not already present (case-insensitive)
11. Wire dashboard team list → team-specific view on click

## Milestone 3 — Team view & training sessions

12. `TrainingSession` schema: goal, date, `plan` (markdown text), belongs to `Team` (see ADR 0002)
13. Team-specific view: list past + future training sessions for that team (derived from `date`, no status field)
14. Create/edit-training-session flow: goal, date, `plan` edited as a plain textarea over markdown — no rich editor, no AI, no drills
15. Support editing and hard-deleting a `TrainingSession`

## Explicitly deferred (not in scope for these tasks)

- Drill library
- Sport-specific session template fields
- AI-assisted session generation
- Roster/attendance tracking
- Progress/stat tracking
