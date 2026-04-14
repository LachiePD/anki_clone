# Sticky Brain

A full-stack flash-card app, built in the PERN stack.


## Live Demo
https://sticky-brain-ffxv.onrender.com/
-PLease note, these are running on free tiers via Render. Expect some delay when first spinning up the app, then again for the backend to wake up also.


## Features
- Create and manage decks
- Authentication with JWT
- Responsive UI

## Setup

git clone ...
In one terminal:
cd ./frontend
npm install
npm run dev
env variables:
NEXT_PUBLIC_API_URL=http://localhost:5000

In second:
cd ./backend
npm install
node /src/compositionRoot.js
env variables:
JWT_SECRET=<your own here>
NODE_ENV=developement
CONNECTION_STRING=<this is your specific postgres instance
ALLOWED_ORIGIN=http://localhost:3000
Note: you will have to have a postgres instance running for the backend to hook up to. I did this with a docker container.


## Architecture

This project follows a layered architecture:

- Routes → handle HTTP requests
- Services → business logic
- Repositories - database access

## Key Decisions

- Used HTTP-only cookies for auth to improve security
- Separated domain logic from controllers
- Chose PostgreSQL for relational data integrity



## Future Improvements

- Add spaced repetition algorithm 
- Add loading functionality
- Add offline support


## Developer Workflow

- Neovim + Ubuntu environment
- AI used as a learning tool and pair programmer
- Focus on understanding concepts, not just generating code
