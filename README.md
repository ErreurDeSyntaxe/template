# 🧩 Simple Template

A lightweight **project starter and archive** — perfect for quick experiments, prototypes, or reference setups.

---

## 📖 About the Project

### 🖼️ Preview

<div align='center'>
  <img src='./README/project-preview.jpg' alt='Project preview'>
</div>

### 🌐 Live Demo

[Visit Project](http://google.com/)

### 🎯 Objective

This project’s goal is to **learn xyz by building abc**.

### ✨ Notable Features

- Add something
- Edit something
- Remove something
- Allow users to complicate the dev’s job (just as nature intended)

### 🧱 Built With

<p align="left">
  <img src="./README/html-logo.svg" alt="HTML Logo" width="40" height="40">
  <!-- <img src="./README/css-logo.svg" alt="CSS Logo" width="40" height="40"> -->
  <img src="./README/sass-logo.svg" alt="Sass Logo" width="40" height="40">
  <img src="./README/js-logo.svg" alt="JavaScript Logo" width="40" height="40">
  <!-- <img src="./README/react-logo.svg" alt="React Logo" width="40" height="40"> -->
  <!-- <img src="./README/vite-logo.svg" alt="Vite Logo" width="40" height="40"> -->
  <!-- <img src="./README/vitest.svg" alt="Vitest Logo" width="40" height="40"> -->
  <img src="./README/parcel-logo.svg" alt="Parcel Logo" width="40" height="40">
</p>

---

## ⚙️ Development

This section serves as both a checklist and roadmap.

### 🗒️ To-Do Overview

#### 🧾 Documentation

- [ ] Rewrite this README
  - [ ] Title
  - [ ] Objective
  - [ ] Notable Features

#### 🧠 Planning

- [ ] User stories
- [ ] Features
- [ ] Flowchart
- [ ] Architecture
- [ ] UI Design / Sketch

#### 💻 Development Steps

- [ ] **Basic HTML**
  - [ ] Title & Meta
  - [ ] Structure
  - [ ] Favicons
- [ ] **Parcel Setup**
  - [ ] Initialize project
  - [ ] Install Parcel (`npm i -D parcel`)
  - [ ] Install optimizers (`npm i -D @parcel/optimizer-terser @parcel/optimizer-cssnano @parcel/optimizer-htmlnano`)
  - [ ] Add scripts
- [ ] **Vitest Setup**
  - [ ] Install Vitest (`npm i vitest -D`)
  - [ ] Add `"test": "vitest --run --reporter verbose"` and `"test:watch": "vitest"` scripts
- [ ] **Logic & UI**
  - [ ] Console-based logic
  - [ ] Refined UI & layout
  - [ ] Menu / Navigation
- [ ] **Responsive Design**
  - [ ] Responsive images (Art direction)
  - [ ] Media queries
  - [ ] Mobile menu
- [ ] **Accessibility & Optimization**
  - [ ] Check accessibility
  - [ ] Optimize images
  - [ ] Run Lighthouse

#### 🚀 Deployment (Git + GitHub Pages)

- [ ] `git branch gh-pages` _(once)_
- [ ] Commit everything
- [ ] `git checkout gh-pages && git merge main --no-edit`
- [ ] `npx webpack`
- [ ] `git add dist -f && git commit -m "Deployment commit"`
- [ ] `git subtree push --prefix dist origin gh-pages`
- [ ] `git checkout main`

#### 🪞 Final Review

- [ ] Update Live Page Link
- [ ] Confirm Built With section
- [ ] Add Reflection

---

## 👥 User Stories

- As a user, I want...

---

## 🧩 Features

- Users can...

---

## 🧭 Flowchart

Page Loads → ...

---

## 🏗️ Architecture

```js
class App {
  greet() {
    console.log('Hello!');
  }
}
```
