<p align="center">
  <img src="https://chinmay29hub-haiku-readme.vercel.app/api?theme=catppuccin_mocha&type=horizontal&border=true&t=1751072853" alt="HaikuReadme SVG"/>
</p>

# HaikuReadme

<div align="center">

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/chinmay29hub/haiku-readme/actions)
[![Update README with Random Haiku](https://github.com/chinmay29hub/haiku-readme/actions/workflows/update-readme.yml/badge.svg)](https://github.com/chinmay29hub/haiku-readme/actions/workflows/update-readme.yml)
[![Lint and Format Check](https://github.com/chinmay29hub/haiku-readme/actions/workflows/lint_prettier.yml/badge.svg)](https://github.com/chinmay29hub/haiku-readme/actions/workflows/lint_prettier.yml)
[![Sync Rollback with Main](https://github.com/chinmay29hub/haiku-readme/actions/workflows/sync-rollback.yml/badge.svg)](https://github.com/chinmay29hub/haiku-readme/actions/workflows/sync-rollback.yml)
[![CodeQL](https://github.com/chinmay29hub/haiku-readme/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/chinmay29hub/haiku-readme/actions/workflows/github-code-scanning/codeql)
[![Dependabot Updates](https://github.com/chinmay29hub/haiku-readme/actions/workflows/dependabot/dependabot-updates/badge.svg)](https://github.com/chinmay29hub/haiku-readme/actions/workflows/dependabot/dependabot-updates)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)

</div>

> ✨ Generate beautiful, tech-themed haiku SVGs for your GitHub README!

HaikuReadme generates poetic, customizable haiku SVGs you can embed in your GitHub profile. Choose from themes, layouts, and border styles — perfect for developers with a love for code and creativity.

<p align="center">
  <img src="https://chinmay29hub-haiku-readme.vercel.app/api?theme=catppuccin_mocha&type=vertical&border=true&t=1751072853" alt="Example Haiku" />
</p>

🔗 **Live demo**: [HaikuReadme Web](https://chinmay29hub-haiku-readme.vercel.app)

---

## 📑 Table of Contents

- [HaikuReadme](#haikureadme)
  - [📑 Table of Contents](#-table-of-contents)
  - [🚀 Features](#-features)
  - [📦 Usage](#-usage)
    - [🔧 Query Parameters](#-query-parameters)
    - [✨ Examples](#-examples)
  - [🎨 Theme Previews](#-theme-previews)
  - [⚡ Quick Start](#-quick-start)
  - [🛠️ Installation \& Deployment](#️-installation--deployment)
    - [Prerequisites](#prerequisites)
    - [Steps](#steps)
  - [🔁 Automated Updates (Optional)](#-automated-updates-optional)
    - [GitHub Action Workflow](#github-action-workflow)
  - [🧪 Local Development](#-local-development)
  - [⚙️ Environment Variables](#️-environment-variables)
  - [🤝 Contributing](#-contributing)
    - [💡 Contribution Ideas](#-contribution-ideas)
  - [🌍 Community](#-community)
  - [Technologies Used in HaikuReadme](#technologies-used-in-haikureadme)
  - [Frontend](#frontend)
  - [Backend](#backend)
  - [Deployment](#deployment)
  - [Build Process](#build-process)
  - [📄 License](#-license)
  - [👏 Acknowledgments](#-acknowledgments)
  - [Contributors ✨](#contributors-)

---

## 🚀 Features

- 🎨 Customizable themes: `catppuccin_mocha`, `dracula`, `cyberpunk`, and more
- 🧱 Layouts: `vertical`, `horizontal`, and `compact`
- 🎁 Embeddable: Drop into any README with one line
- 💡 Automatically updated: Hourly haiku refresh (via GitHub Actions)
- 🌍 Mobile-friendly frontend for on-the-go customization
- 🤝 Open source: Add your own templates, themes, or words!

---

## 📦 Usage

Embed this in your GitHub README:

```markdown
![HaikuReadme](https://chinmay29hub-haiku-readme.vercel.app/api?theme=catppuccin_mocha&type=vertical&border=true&t=1751072853)
```

### 🔧 Query Parameters

| Parameter | Description  | Options                                                                                                     | Default            |
| --------- | ------------ | ----------------------------------------------------------------------------------------------------------- | ------------------ |
| `theme`   | Color scheme | `catppuccin_mocha`, `dark`, `dracula`, `nord`, `tokyo_night`, `gruvbox_dark`, `solarized_dark`, `cyberpunk` | `catppuccin_mocha` |
| `type`    | Layout style | `vertical`, `horizontal`, `compact`                                                                         | `vertical`         |
| `border`  | Show border  | `true`, `false`                                                                                             | `true`             |

### ✨ Examples

- Dracula theme, horizontal layout, no border:

  ```markdown
  ![HaikuReadme](https://chinmay29hub-haiku-readme.vercel.app/api?theme=dracula&type=horizontal&border=false&t=1751072853)
  ```

- Cyberpunk theme, compact layout:
  ```markdown
  ![HaikuReadme](https://chinmay29hub-haiku-readme.vercel.app/api?theme=cyberpunk&type=compact&border=true&t=1751072853)
  ```

## 🎨 Theme Previews

| Theme            | Preview                                                                                                                         |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| catppuccin_mocha | ![catppuccin](https://chinmay29hub-haiku-readme.vercel.app/api?theme=catppuccin_mocha&type=horizontal&border=true&t=1751072853) |
| dracula          | ![dracula](https://chinmay29hub-haiku-readme.vercel.app/api?theme=dracula&type=horizontal&border=true&t=1751072853)             |
| cyberpunk        | ![cyberpunk](https://chinmay29hub-haiku-readme.vercel.app/api?theme=cyberpunk&type=horizontal&border=true&t=1751072853)         |

Explore more themes at [HaikuReadme Web](https://chinmay29hub-haiku-readme.vercel.app)

---

## ⚡ Quick Start

Embed this in your GitHub README:

```markdown
![HaikuReadme](https://chinmay29hub-haiku-readme.vercel.app/api?theme=catppuccin_mocha&type=vertical&border=true&t=1751072853)
```

---

## 🛠️ Installation & Deployment

### Prerequisites

- Node.js (v16 or higher)
- npm (v8 or higher)
- Vercel CLI (for deployment)

### Steps

```bash
# Clone the repository
git clone https://github.com/chinmay29hub/haiku-readme.git

# Navigate to project
cd haiku-readme

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install

# Come back to root directory
cd ..

# Build the project
npm run build

# Deploy to Vercel
vercel
```

> Update your README with your deployed URL.

---

## 🔁 Automated Updates (Optional)

The haiku SVG updates every hour using a GitHub Action.  
This ensures fresh content and bypasses Vercel's response caching.

### GitHub Action Workflow

```yaml
name: Haiku Generator

on:
  push:
    branches:
      - main
  schedule:
    - cron: '0 * * * *' # Every hour
  workflow_dispatch:

permissions:
  contents: write

jobs:
  update-readme:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout the code
        uses: actions/checkout@v3

      - name: Update README with Random Haiku
        uses: chinmay29hub/haiku-readme@v1
```

See the workflow file in [`.github/workflows/update-readme.yml`](.github/workflows/update-readme.yml).

---

## 🧪 Local Development

```bash
# Start backend
cd backend
npm start

# Start frontend
cd ../frontend
npm run dev
```

Or use one command to run both:

```bash
npm run dev
```

API will be available at:  
`http://localhost:3000/api?theme=catppuccin_mocha&type=vertical&border=true`

---

## ⚙️ Environment Variables

Create a `.env` file in the `frontend` directory:

For local dev:

```
VITE_API_URL=http://localhost:3000
```

---

## 🤝 Contributing

We welcome contributions from everyone! Check out the [CONTRIBUTING.md](CONTRIBUTING.md) to get started.

### 💡 Contribution Ideas

- Add new themes or layouts
- Expand word sets and haiku templates
- Improve UI/UX (animations, responsiveness, accessibility)
- Refactor backend or add tests

Before contributing, please read our [Code of Conduct](CODE_OF_CONDUCT.md) to ensure a respectful community experience.

---

## 🌍 Community

- [Issues](https://github.com/chinmay29hub/haiku-readme/issues) – Bug reports & feature requests
- [Discussions](https://github.com/chinmay29hub/haiku-readme/discussions) – Ideas and feedback
- [Code of Conduct](CODE_OF_CONDUCT.md) – Be kind and inclusive

---

## Technologies Used in HaikuReadme

## Frontend

1. **React**

   - Description: A JavaScript library for building user interfaces using components.
   - Documentation: [https://react.dev/](https://react.dev/)

2. **Vite**
   - Description: A modern frontend build tool that provides fast development and optimized builds.
   - Documentation: [https://vitejs.dev/](https://vitejs.dev/)

## Backend

1. **Node.js**

   - Description: A JavaScript runtime for building scalable network applications.
   - Documentation: [https://nodejs.org/en/docs/](https://nodejs.org/en/docs/)

2. **Nodemon**
   - Description: A tool that helps develop Node.js applications by automatically restarting the server when file changes are detected.
   - Documentation: [https://nodemon.io/](https://nodemon.io/)

---

## Deployment

1. **Vercel**
   - Description: A platform for frontend developers to deploy websites and serverless functions.
   - Documentation: [https://vercel.com/docs](https://vercel.com/docs)

---

## Build Process

1. **npm**
   - Description: A package manager for JavaScript that allows you to install, share, and manage dependencies.
   - Documentation: [https://docs.npmjs.com/](https://docs.npmjs.com/)

---

## 📄 License

Licensed under the [MIT License](LICENSE).

---

## 👏 Acknowledgments

- Inspired by devs who mix poetry and code
- Color palettes from [Catppuccin](https://github.com/catppuccin)
- Powered by Vercel, React, Express

---

## Contributors ✨

Thanks goes to these wonderful people:

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://chinmay29hub-portfolio.netlify.app/"><img src="https://avatars.githubusercontent.com/u/69494946?v=4?s=100" width="100px;" alt="Chinmay Sonawane"/><br /><sub><b>Chinmay Sonawane</b></sub></a><br /><a href="https://github.com/chinmay29hub/haiku-readme/commits?author=chinmay29hub" title="Code">💻</a> <a href="#maintenance-chinmay29hub" title="Maintenance">🚧</a> <a href="#projectManagement-chinmay29hub" title="Project Management">📆</a> <a href="https://github.com/chinmay29hub/haiku-readme/pulls?q=is%3Apr+reviewed-by%3Achinmay29hub" title="Reviewed Pull Requests">👀</a> <a href="https://github.com/chinmay29hub/haiku-readme/commits?author=chinmay29hub" title="Tests">⚠️</a> <a href="https://github.com/chinmay29hub/haiku-readme/commits?author=chinmay29hub" title="Documentation">📖</a> <a href="#ideas-chinmay29hub" title="Ideas, Planning, & Feedback">🤔</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/actions"><img src="https://avatars.githubusercontent.com/u/65916846?v=4?s=100" width="100px;" alt="actions-user"/><br /><sub><b>actions-user</b></sub></a><br /><a href="https://github.com/chinmay29hub/haiku-readme/commits?author=actions-user" title="Code">💻</a> <a href="#maintenance-actions-user" title="Maintenance">🚧</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/ukihunter"><img src="https://avatars.githubusercontent.com/u/70638588?v=4?s=100" width="100px;" alt="UKI "/><br /><sub><b>UKI </b></sub></a><br /><a href="https://github.com/chinmay29hub/haiku-readme/commits?author=ukihunter" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/rajanarahul93"><img src="https://avatars.githubusercontent.com/u/123227543?v=4?s=100" width="100px;" alt="Vara Rahul Rajana"/><br /><sub><b>Vara Rahul Rajana</b></sub></a><br /><a href="https://github.com/chinmay29hub/haiku-readme/commits?author=rajanarahul93" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/bietkhonhungvandi212"><img src="https://avatars.githubusercontent.com/u/210964680?v=4?s=100" width="100px;" alt="Tuan Nguyen"/><br /><sub><b>Tuan Nguyen</b></sub></a><br /><a href="https://github.com/chinmay29hub/haiku-readme/commits?author=bietkhonhungvandi212" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/colinfrerichs"><img src="https://avatars.githubusercontent.com/u/9201416?v=4?s=100" width="100px;" alt="Colin Frerichs"/><br /><sub><b>Colin Frerichs</b></sub></a><br /><a href="https://github.com/chinmay29hub/haiku-readme/commits?author=colinfrerichs" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/miguelro20"><img src="https://avatars.githubusercontent.com/u/193288551?v=4?s=100" width="100px;" alt="miguelro20"/><br /><sub><b>miguelro20</b></sub></a><br /><a href="https://github.com/chinmay29hub/haiku-readme/commits?author=miguelro20" title="Code">💻</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/pr4j3sh"><img src="https://avatars.githubusercontent.com/u/75523737?v=4?s=100" width="100px;" alt="jesh"/><br /><sub><b>jesh</b></sub></a><br /><a href="https://github.com/chinmay29hub/haiku-readme/commits?author=pr4j3sh" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Binita-Sharma"><img src="https://avatars.githubusercontent.com/u/154619063?v=4?s=100" width="100px;" alt="Binita Sharma"/><br /><sub><b>Binita Sharma</b></sub></a><br /><a href="https://github.com/chinmay29hub/haiku-readme/commits?author=Binita-Sharma" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/shubhvj"><img src="https://avatars.githubusercontent.com/u/26573621?v=4?s=100" width="100px;" alt="Shubh Vrat Johri "/><br /><sub><b>Shubh Vrat Johri </b></sub></a><br /><a href="https://github.com/chinmay29hub/haiku-readme/commits?author=shubhvj" title="Code">💻</a> <a href="#ideas-shubhvj" title="Ideas, Planning, & Feedback">🤔</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/apps/allcontributors"><img src="https://avatars.githubusercontent.com/in/23186?v=4?s=100" width="100px;" alt="allcontributors[bot]"/><br /><sub><b>allcontributors[bot]</b></sub></a><br /><a href="https://github.com/chinmay29hub/haiku-readme/commits?author=allcontributors[bot]" title="Documentation">📖</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
