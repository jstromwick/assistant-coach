# Documents the MVP scope of our app


## Functional Requirements
* User is able to sign in to the app using a social login (start with Google)
* New users are shown a dashboard with any existing teams and a button to add teams
* Users can create a team. A team has a team name, and an associated sport (dropdown with ability to add any value not already present)
* Users are able to see the team on their dashboard. Clicking on the team takes the user to a team specific view.
* The team specific view displays all previous and future sessions for that team as well as allows the user to create a new session.
* When a user creates a new session it should have a goal, date and content (No AI for now)


## Technical Requirements
* We will use next.js for the build and deploy to vercel
* We will use mongoDB as our backing database