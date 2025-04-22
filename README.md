<p align="center">
  <img src="https://chinmay29hub-haiku-readme.vercel.app/api?theme=catppuccin_mocha&type=vertical&border=true&t=1745305910"HaikuReadme SVG"/>
</p>

# HaikuReadme

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/chinmay29hub/haiku-readme/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)

> ✨ Generate beautiful, tech-themed haiku SVGs for your GitHub README!

HaikuReadme generates poetic, customizable haiku SVGs you can embed in your GitHub profile. Choose from themes, layouts, and border styles — perfect for developers with a love for code and creativity.

<p align="center">
  <img src="https://chinmay29hub-haiku-readme.vercel.app/api?theme=catppuccin_mocha&type=vertical&border=true&t=1745305910"Example Haiku" />
</p>

🔗 **Live demo**: [HaikuReadme Web](https://chinmay29hub-haiku-readme.vercel.app)

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
![HaikuReadme](https://chinmay29hub-haiku-readme.vercel.app/api?theme=catppuccin_mocha&type=vertical&border=true)
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
  ![HaikuReadme](https://chinmay29hub-haiku-readme.vercel.app/api?theme=dracula&type=horizontal&border=false)
  ```

- Cyberpunk theme, compact layout:
  ```markdown
  ![HaikuReadme](https://chinmay29hub-haiku-readme.vercel.app/api?theme=cyberpunk&type=compact&border=true)
  ```

---

## 🎨 Theme Previews

| Theme             | Preview |
|-------------------|---------|
| catppuccin_mocha  | ![catppuccin](https://chinmay29hub-haiku-readme.vercel.app/api?theme=catppuccin_mocha&type=horizontal&border=true) |
| dracula           | ![dracula](https://chinmay29hub-haiku-readme.vercel.app/api?theme=dracula&type=horizontal&border=true) |
| cyberpunk         | ![cyberpunk](https://chinmay29hub-haiku-readme.vercel.app/api?theme=cyberpunk&type=horizontal&border=true) |

Explore more themes at [HaikuReadme Web](https://chinmay29hub-haiku-readme.vercel.app)

---

## 🛠️ Installation & Deployment

...

## 🔁 Automated Updates (Optional)

The haiku SVG updates every hour using a GitHub Action.  
This ensures fresh content and bypasses Vercel's response caching.

### GitHub Action Workflow

```yaml
name: Update README with Random Haiku

on:
  schedule:
    - cron: '0 * * * *' # Every hour
  workflow_dispatch:

permissions:
  contents: write

jobs:
  update-readme:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Update README
        run: |
          TIMESTAMP=$(date +%s)
          sed -i "s|https://chinmay29hub-haiku-readme.vercel.app/api[^)]*t=[0-9]*|https://chinmay29hub-haiku-readme.vercel.app/api?theme=catppuccin_mocha&type=vertical&border=true&t=1745305910$TIMESTAMP|" test.md
          git config user.name "GitHub Action"
          git config user.email "action@github.com"
          git add test.md
          git commit -m "Update haiku timestamp" || echo "No changes to commit"
          git push
```

See the workflow file in [`.github/workflows/update-readme.yml`](.github/workflows/update-readme.yml).

---

## 🛠️ Installation & Deployment

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

# come back to root directory
cd ..

# Build the project
npm run build

# Deploy to Vercel
cd ..
vercel
```

> Update your README with your deployed URL.

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


### 💡 Contribution Ideas

- Add more themes/layouts
- New word sets or seasonal haikus
- Improve UI/UX (toggle dark/light, animations, etc.)

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
