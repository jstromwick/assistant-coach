# Assistant Coach — Multi-Sport Session Planner

**Pitch:** A web app for coaches who work across multiple sports/teams (e.g. Union Rugby, Touch Rugby, Wrestling) to create teams, plan training sessions from a drill library, and track progress over time — all in one place, without re-learning a new tool per sport.

**Stack:** Full TypeScript, Next.js-style (App Router, Server Components/Actions), single deployable app., MongoDB Atlas for the db

**Core concept:**
- A user can create multiple **teams**, each tied to a **sport**.
- Each sport has its own **templates/fields** (e.g. Union Rugby session might track phases/units like forwards/backs; Wrestling might track weight classes/positions; Touch Rugby might track attack/defense patterns) — sport-specific structure, not one-size-fits-all.
- Users can belong to / access multiple teams (multi-team, multi-sport from one account).

**MVP loop (build this first):**
1. Create a team → assign a sport.
2. Sport determines a session template with relevant fields/drill categories.
3. Build a session plan by selecting/sequencing drills from a library (filtered by sport).
4. Save and view past sessions for that team.

**Data model shape (rough):**
- `User` → has many `TeamMemberships`
- `Team` → belongs to a `Sport`, has many `TrainingSessions`
- `Sport` → defines available `DrillCategories` / session template fields
- `Drill` → tagged by sport + category (e.g. "defense", "conditioning", "technique")
- `TrainingSession` → belongs to a `Team`, has ordered list of `Drills` + notes/duration

**Sport-specific handling:** Sport-specific templates/fields per sport (not fully generic) — e.g. Union Rugby sessions have forwards/backs breakdown, Wrestling sessions have weight-class/position breakdown, Touch Rugby sessions have attack/defense phase breakdown. Drill library and session template both flex based on the sport attached to the team.

**Where AI comes in (first pass):** AI-assisted session plan generation — e.g. "build me a 60-minute defense-focused session for U16 Union Rugby forwards" pulls from the drill library and sequences a plan, which the coach can then edit/save.

**Deferred to later phases (not MVP):**
- Roster management / attendance tracking
- Progress/stat tracking and trend summaries over a season
- AI-generated progress summaries

**Why this project:** Domain expertise (coaches Union Rugby, background across combat/contact sports) means real intuition for what's useful when evaluating AI-assisted output. Multi-sport generalization forces non-trivial data modeling — good showcase for full-stack + schema design + applied AI feature work, and realistically deployable/usable app rather than a toy.

---

## Other ideas considered (not selected)
- **Rugby Team Manager** — roster/attendance/lineup builder. Passed over in favor of the more general coaching planner.
- **Match Stats Tracker** — live match event logging + stat trends. Could fold into "progress tracking" phase later.
- **Opposition Scouting Tool** — AI-assisted scouting reports/game plans from notes and stats. Possible future phase.
