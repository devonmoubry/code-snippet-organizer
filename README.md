# Code Snippet Organizer

## What is it?

-An organizer for creating code snippets that can be saved for later use

- [Node.js](https://nodejs.org/api/)
- [Express.js](https://www.npmjs.com/package/express)
- [MongoDB](https://www.npmjs.com/package/mongodb)
- [Mongoose](https://www.npmjs.com/package/mongoose)
- [Bluebird](https://www.npmjs.com/package/bluebird)

## Build Steps:

- `mkdir <project-name>`
- `cd <project-name>`
- `gitignore node`
- `npm init --yes`
- `npm install`
- `npm install express body-parser mustache mustache-express mongodb mongoose@4.10.8 bluebird --save`


## Snippet Attributes:

- a title
- a body (the code)
- optional notes
- a language
- tags (user-defined words or phrases that classify the code, like "authentication", "front-end", "middleware", or "database")

## App Features:

- a comprehensive set of tests for all controllers and models
- registration and login
- allow user to create a snippet
- allow user to see a list of all snippets
- allow user to see a list of all snippets for a specific language
- allow user to see a list of all snippets for a specific tag
- allow user to look at an individual snippet
- have an API to allow for creating and viewing of snippets as listed above
