## Concept

The Adopt an Animal project is a pedagogical initiative that provides a virtual shelter for users to learn about different animals.

Users can explore different animal pages, view different categories, and even visit real-world websites to make donations or adopt animals from the shelter and help them find loving homes.

If you are inspired by this project and want to help animals in real life, please consider making a donation to a real association near your position. ❤️

## Stack:

- React with Vite.js
- Express
- MySQL

## Branches

- **main** : The main branch is the most recent branch.
- **dev** : Development branch.
- **starter**: The starter is the starter branch for the pedagogical purpose, only the frontend part is implemented here.

More to come...

## Database modeling

![image](https://github.com/ioayoub/Adopt-an-animal/assets/66207978/92a5ce13-177a-4b09-8b8a-9bc2177a48a9)

As you can see, we'll use 5 different tables with different kind of relations.

- user
- animal
- category
- favorites
- comment

> Feel free to challenge yourself and add as many tables as you want.

## Setup & Use

### Windows users

Be sure to run these commands in a git terminal to avoid [issues with newline formats](https://en.wikipedia.org/wiki/Newline#Issues_with_different_newline_formats):

```
git config --global core.eol lf
git config --global core.autocrlf false
```

### Project Initialization

- In VSCode, install plugins **Prettier - Code formatter** and **ESLint** and configure them
- Clone this repo, enter it
- If you are using `yarn` or `pnpm`, adapt the `config/cli` in `package.json`
- Run command `npm install` (or equivalent using `yarn` or `pnpm`)
- Create environment files (`.env`) in both `backend` and `frontend`: you can copy `.env.sample` files as starters (**don't** delete them)

### Before you start

- To ensure compatibility and prevent conflicts, please consistently employ a **single** package manager: `npm`, `yarn`, or `pnpm`.

### Available Commands

- `db:migrate` : Run the database migration script
- `db:seed` : Run the database seed script
- `dev` : Starts both servers (frontend + backend) in one terminal
- `dev-front` : Starts the React frontend server
- `dev-back` : Starts the Express backend server
- `lint` : Runs validation tools, and refuses unclean code (will be executed on every _commit_)
- `fix` : Fixes linter errors (run it if `lint` growls on your code !)

## FAQ

### Tools

- _Concurrently_ : Allows for several commands to run concurrently in the same CLI
- _Husky_ : Allows to execute specific commands that trigger on _git_ events
- _Vite_ : Alternative to _Create-React-App_, packaging less tools for a more fluid experience
- _ESLint_ : "Quality of code" tool, ensures chosen rules will be enforced
- _Prettier_ : "Quality of code" tool as well, focuses on the styleguide
- _ Airbnb Standard_ : One of the most known "standards", even though it's not officially linked to ES/JS
- _Nodemon_ : Allows to restart the server everytime a .js file is udated

### Deployment

For deployment, you have to go to `secrets` → app `actions` on the github repo to insert via `New repository secret` :

- CAPROVER_BACK_APPNAME : name app on caprover
- CAPROVER_FRONT_APPNAME : name app on caprover
- CAPROVER_PASSWORD : password caprover
- CAPROVER_SERVER : link of domain
