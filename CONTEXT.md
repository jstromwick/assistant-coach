# Assistant Coach

A web app for coaches who work across multiple sports/teams to create teams, plan training sessions, and track progress over time.

## Language

**TrainingSession**:
A planned or completed training activity for a Team, with a goal, date, and Plan. Named explicitly (not "Session") to avoid confusion with auth/browser sessions.

**Plan**:
The markdown document describing what a TrainingSession covers — headers, bullet lists, links to images/video. MVP edits it via a plain textarea over the raw markdown; no rich editor yet.

**Team**:
A named group tied to a single Sport. Has many TrainingSessions and one or more Users via TeamMembership (MVP only ever populates one, with no role distinction and no invite/sharing).

**TeamMembership**:
The link between a User and a Team. MVP has exactly one per Team (the creator), no roles, no way to add more.

**Sport**:
A global, shared, first-class entity (own collection, not a plain string) selectable and freely addable by any User, with case-insensitive uniqueness on the name. Not private per-User.

**User**:
An authenticated coach who signs in via Google. Accesses one or more Teams via TeamMembership.
