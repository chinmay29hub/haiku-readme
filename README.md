<p align="center">
  <img src="https://chinmay29hub-haiku-readme.vercel.app/api?theme=catppuccin_mocha&type=horizontal&border=true&t=1746925852" alt="HaikuReadme SVG"/>
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
  <img src="https://chinmay29hub-haiku-readme.vercel.app/api?theme=catppuccin_mocha&type=vertical&border=true&t=1746925852" alt="Example Haiku" />
</p>

🔗 **Live demo**: [HaikuReadme Web](https://chinmay29hub-haiku-readme.vercel.app)

---

## 📑 Table of Contents

- [🚀 Features](#-features)
- [📦 Usage](#-usage)
- [🎨 Theme Previews](#-theme-previews)
- [🛠️ Installation & Deployment](#️-installation--deployment)
  - [Prerequisites](#prerequisites)
- [🔁 Automated Updates (Optional)](#-automated-updates-optional)
- [🧪 Local Development](#-local-development)
- [⚙️ Environment Variables](#️-environment-variables)
- [🤝 Contributing](#-contributing)
- [🌍 Community](#-community)
- [📄 License](#-license)
- [👏 Acknowledgments](#-acknowledgments)
- [✨ Contributors](#-contributors)

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
![HaikuReadme](https://chinmay29hub-haiku-readme.vercel.app/api?theme=catppuccin_mocha&type=vertical&border=true&t=1746925852)
```

### 🔧 Query Parameters

| Parameter | Description    | Options                                                                 | Default            |
|-----------|----------------|-------------------------------------------------------------------------|--------------------|
| `theme`   | Color scheme   | `catppuccin_mocha`, `dark`, `dracula`, `nord`, `tokyo_night`, `gruvbox_dark`, `solarized_dark`, `cyberpunk` | `catppuccin_mocha` |
| `type`    | Layout style   | `vertical`, `horizontal`, `compact`                                     | `vertical`         |
| `border`  | Show border    | `true`, `false`                                                         | `true`             |

### ✨ Examples

- Dracula theme, horizontal layout, no border:
  ```markdown
  ![HaikuReadme](https://chinmay29hub-haiku-readme.vercel.app/api?theme=dracula&type=horizontal&border=false&t=1746925852)
  ```

- Cyberpunk theme, compact layout:
  ```markdown
  ![HaikuReadme](https://chinmay29hub-haiku-readme.vercel.app/api?theme=cyberpunk&type=compact&border=true&t=1746925852)
  ```

## 🎨 Theme Previews

| Theme             | Preview |
|-------------------|---------|
| catppuccin_mocha  | ![catppuccin](https://chinmay29hub-haiku-readme.vercel.app/api?theme=catppuccin_mocha&type=horizontal&border=true&t=1746925852) |
| dracula           | ![dracula](https://chinmay29hub-haiku-readme.vercel.app/api?theme=dracula&type=horizontal&border=true&t=1746925852) |
| cyberpunk         | ![cyberpunk](https://chinmay29hub-haiku-readme.vercel.app/api?theme=cyberpunk&type=horizontal&border=true&t=1746925852) |

Explore more themes at [HaikuReadme Web](https://chinmay29hub-haiku-readme.vercel.app)

---

---
## ⚡ Quick Start

Embed this in your GitHub README:

```markdown
![HaikuReadme](https://chinmay29hub-haiku-readme.vercel.app/api?theme=catppuccin_mocha&type=vertical&border=true&t=1746925852)
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

## 📄 License

Licensed under the [MIT License](LICENSE).

---

## 👏 Acknowledgments

- Inspired by devs who mix poetry and code
- Color palettes from [Catppuccin](https://github.com/catppuccin)
- Powered by Vercel, React, Express

---

## ✨ Contributors

Thanks to everyone who contributes!

<a href="https://github.com/chinmay29hub/haiku-readme/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=chinmay29hub/haiku-readme" alt="Contributors" />
</a>

---

<p align="center">
  Made with 💻 and ☕ by <a href="https://github.com/chinmay29hub">Chinmay Sonawane</a>
</p>
