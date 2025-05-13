---
name: 🐞 Bug Report
about: Report a bug to improve HaikuReadme
title: '[BUG] '
labels: bug, good first issue
assignees: ''
---

# 🐛 Bug Report

## 📋 Describe the Bug

A clear description of the bug.  
**Example:**

> "The theme selector in the frontend doesn’t update the SVG when choosing Monokai."

---

## 🔁 Steps to Reproduce

1. Go to [haiku-readme frontend](https://chinmay29hub-haiku-readme.vercel.app/).
2. Select the "Monokai" theme from the dropdown.
3. Observe the SVG at `/api?theme=monokai`.
4. [Add more steps if needed]

---

## ✅ Expected Behavior

What should happen?  
**Example:**

> "The SVG should show Monokai’s dark background (`#272822`) and bright text (`#f8f8f2`)."

---

## ❌ Actual Behavior

What actually happens?  
**Example:**

> "The SVG remains in Dracula theme colors."

---

## 🖼️ Screenshots

If applicable, add screenshots to help explain the issue.  
(Drag & drop or paste image links)

---

## 🧪 Environment

- 🌐 **Browser:** [e.g., Chrome 126]
- 💻 **Device:** [e.g., Desktop]
- 🧠 **OS:** [e.g., Windows 11]
- ⚛️ **Frontend:** Vite + React (`frontend/src/App.jsx`)
- 🔧 **Backend:** Express (`backend/index.js`, `backend/svg.js`)
- 🚀 **Deployment:** Vercel ([haiku-readme.vercel.app](https://chinmay29hub-haiku-readme.vercel.app/))

---

## 💬 Additional Context

Any other helpful context?  
**Example:**

> "Bug occurs after switching themes multiple times."

---

## 🧠 Possible Solution (Optional)

Suggest a fix if you have one.  
**Example:**

> "Check `App.jsx` for theme state handling issues."

---

## ✅ Checklist

- [ ] I’ve checked existing issues to avoid duplicates.
- [ ] I’ve followed the Contributing Guide.
- [ ] I’m ready to submit a PR using the PR template.

🧡 Thanks for helping improve **HaikuReadme**!
