# 📝 not-a-pad

**not-a-pad** is a minimalistic, web-based note keeper built with **React** (frontend), **Go** (backend), and **PostgreSQL** (database). It's designed for speed, simplicity, and flexibility—supporting plain text, Markdown, and HTML notes.

Spin it up locally with a single command:

```bash
docker-compose up -d
```

---

## 🚀 Features

- ✍️ Create and edit notes in **plain text**, **Markdown**, or **HTML**
- 🔎 Real-time rendering for Markdown and HTML
- 📦 Backend API built in Go for performance
- 💾 Persistent PostgreSQL storage
- 🐳 Quick deployment with Docker Compose

---

## 📸 Screenshots

### 🏠 Home Page
![home page](https://i.imgur.com/LkNN9zM.png)

The home screen lists all your saved notes, sorted by last updated. You can click any note to edit it or create a new one using the “+” button. Clean, distraction-free design helps you focus on content.

---

### ✍️ Plain Text Note Editor
![html writter](https://i.imgur.com/aSYDHWd.png)


This is the default note editor for writing plain text. It's perfect for quick thoughts, to-do lists, or drafting content before formatting.

---

### 🌐 HTML Editor
![html writter](https://i.imgur.com/JxinCUa.png)

Write raw HTML and see a live preview rendered on the right. Great for designing lightweight layouts or testing HTML snippets directly in the browser.

---

### 📄 Markdown Editor
![md writter](https://i.imgur.com/xLwo9Bt.png)

Write Markdown with real-time preview. Supports headings, bold, italic, lists, and more. Ideal for structured writing like documentation or technical notes.

---

## 🧰 Tech Stack

- **Frontend**: React
- **Backend**: Go (Fiber)
- **Database**: PostgreSQL
- **Deployment**: Docker Compose

---

## 📦 Getting Started

Clone the project and start all services:
```bash
git clone https://github.com/gramkow-exe/not-a-pad.git
cd not-a-pad
docker-compose up -d
```
