# Contributing to HaikuReadme

Thanks for your interest in contributing! 🚀 Whether it’s fixing bugs, improving documentation, or adding new features, your help is welcome.

## 🛠️ How to Contribute

1. **Fork** the repository
2. **Clone** your fork locally

   ```bash
   git clone https://github.com/YOUR_USERNAME/haiku-readme.git
   cd haiku-readme
   ```

3. **Create a new branch**

   ```bash
   git checkout -b feature/amazing-feature
   ```

4. **Create a `.env` file in the `backend/` directory** with the following variables:

   ```bash
   NODE_ENV=development
   ```

5. **Start the backend**

   ```bash
   cd backend
   npm install
   npm start
   ```

   Visit [http://localhost:3000/api?theme=catppuccin_mocha&type=vertical&border=true](http://localhost:3000/api?theme=catppuccin_mocha&type=vertical&border=true) to view the SVG directly.

6. **Create a `.env` file in the `frontend/` directory** with the following variables:

   ```bash
   VITE_API_URL=http://localhost:3000
   ```

7. **Start the frontend** (open a new terminal tab/window):

   ```bash
   cd frontend
   npm install
   npm run dev
   ```

   Visit [http://localhost:5173](http://localhost:5173) to view the app locally.

8. **Make your changes** and commit

   ```bash
   git add .
   git commit -m "Add: New haiku theme - galaxy"
   ```

9. **Push** to your fork

   ```bash
   git push origin feature/amazing-feature
   ```

10. **Open a Pull Request** with a clear title and description.

---

## ✨ Contribution Areas

- Add new tech-related words in `backend/lib/words.json`
- Create new haiku templates in `backend/lib/templates.json`
- Define new themes in `backend/lib/svg.js`
- Improve frontend UX/UI (design, responsiveness, animations)
- Write tests or refactor code

---

## ✅ Guidelines

- Follow [semantic commit messages](https://www.conventionalcommits.org/)
- Keep pull requests focused and atomic
- Ensure code passes linting and tests
- Preview haiku SVG before submitting

---

## 🙌 Need Help?

Open an [issue](https://github.com/chinmay29hub/haiku-readme/issues) or start a [discussion](https://github.com/chinmay29hub/haiku-readme/discussions).

Happy hacking! 💻
