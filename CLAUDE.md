# CLAUDE.md

## Project Description

Minimal Node.js utility module exposing two functions: a greeting logger and an addition helper. Used as a test/demo app.

## Tech Stack

- **Runtime:** Node.js
- **Language:** JavaScript (CommonJS modules)
- **No dependencies** — no package.json, no build tooling

## Key Commands

No package.json is present. Run files directly:

```bash
node app.js
node -e "const {greet, add} = require('./app'); greet('World'); console.log(add(1,2));"
```

## Project Structure

```
app.js   # Main module — exports greet(name) and add(a, b)
```

## Key Patterns

- **Exports:** CommonJS (`module.exports = { greet, add }`)
- **greet(name):** logs `Hello <name>` to stdout, returns nothing
- **add(a, b):** returns `a + b`
