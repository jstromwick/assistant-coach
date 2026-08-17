# Team membership modeled as multi-user from day one

`Team` could have shipped as single-owner (`Team.ownerId`) since the MVP only ever has one User per Team. We modeled it as a `TeamMembership` join table instead, because `ideas.md` anticipates multiple coaches sharing a Team, and migrating an owner-id design to a join table later would touch every Team query. MVP creates exactly one `TeamMembership` per Team (the creator, no distinct role) and ships no invite/sharing UI — the schema is ready for multi-user, the feature isn't.
