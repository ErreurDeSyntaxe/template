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
  <img src="./README/css-logo.svg" alt="CSS Logo" width="40" height="40">
  <img src="./README/sass-logo.svg" alt="Sass Logo" width="40" height="40">
  <img src="./README/js-logo.svg" alt="JavaScript Logo" width="40" height="40">
  <img src="./README/react-logo.svg" alt="React Logo" width="40" height="40">
  <img src="./README/redux-logo.svg" alt="React Logo" width="40" height="40">
  <img src="./README/react-router-logo.svg" alt="React Logo" width="40" height="40">
  <img src="./README/react-testing-library-logo.svg" alt="React Logo" width="40" height="40">
  <img src="./README/nextjs-logo.svg" alt="Next JS Logo" width="40" height="40">
  <img src="./README/vite-logo.svg" alt="Vite Logo" width="40" height="40">
  <img src="./README/vitest-logo.svg" alt="Vitest Logo" width="40" height="40">
  <img src="./README/nodejs-logo.svg" alt="Node JS Logo" width="40" height="40">
  <img src="./README/expressjs-logo.svg" alt="Express JS Logo" width="40" height="40">
  <img src="./README/mongodb-logo.svg" alt="MongoDB Logo" width="40" height="40">

</p>

---

## ⚙️ Development

This section serves as both a checklist and roadmap.

### 🗒️ To-Do Overview

#### 🧾 Documentation

- [ ] Rewrite this README
  - [ ] Title
  - [ ] Description
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

- [ ] `npm install --save-dev gh-pages`
- [ ] Add `"homepage": "https://whatsacaptcha.github.io/<repo>/"`
- [ ] Add `"deploy": "gh-pages -d dist"`
- [ ] `npm run build`
- [ ] Commit all changes on main
- [ ] `npm run deploy`

#### 🪞 Final Review

- [ ] Update Live Page Link
- [ ] Update Project Preview Image
- [ ] Confirm Built With section
- [ ] Add Reflection
- [ ] Remove User Stories
- [ ] Remove Flowchart
- [ ] Remove Development

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
  constructor() {
    this.library = [];
  }

  addBook(book) {
    this.library.push(book);
  }

  listBooks() {
    console.log('Library Contents:');
    this.library.forEach((book) => {
      console.log(`- ${book.getInfo()}`);
    });
  }

  run() {
    console.log('Starting App...\n');

    const book = new Book('Generic Book', 'Author A');
    const comic = new ComicBook('Spider-Man #1', 'Stan Lee', 'Marvel Comics');
    const encyclopedia = new Encyclopedia(
      'World Encyclopedia',
      'Britannica',
      'Science'
    );

    this.addBook(book);
    this.addBook(comic);
    this.addBook(encyclopedia);

    this.listBooks();
  }
}

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  getInfo() {
    return `${this.title} by ${this.author}`;
  }
}

class ComicBook extends Book {
  constructor(title, author, publisher) {
    super(title, author);
    this.publisher = publisher;
  }

  getInfo() {
    return `${this.title} (Comic) by ${this.author}, published by ${this.publisher}`;
  }
}
```
