<div align="center">

  <h1>🚀 Sayan Sarkar — 3D Developer Portfolio</h1>

  <p>
    A modern, interactive 3D portfolio built with React, Three.js, and Tailwind CSS — showcasing projects, skills, and experience with immersive visuals and smooth animations.
  </p>

  <div>
    <img src="https://img.shields.io/badge/-React_JS-black?style=for-the-badge&logoColor=white&logo=react&color=61DAFB" alt="React.js" />
    <img src="https://img.shields.io/badge/-Three_JS-black?style=for-the-badge&logoColor=white&logo=threedotjs&color=000000" alt="Three.js" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/-Vite-black?style=for-the-badge&logoColor=white&logo=vite&color=646CFF" alt="Vite" />
    <img src="https://img.shields.io/badge/-GSAP-black?style=for-the-badge&logoColor=white&logo=greensock&color=88CE02" alt="GSAP" />
  </div>

  <br />

  <p>
    <a href="https://github.com/Sayan8945" target="_blank">GitHub</a> •
    <a href="https://www.linkedin.com/in/sayansarkar8945/" target="_blank">LinkedIn</a> •
    <a href="mailto:sayanpub2020@gmail.com">sayanpub2020@gmail.com</a>
  </p>

</div>

---

## 📋 Table of Contents

1. [About](#-about)
2. [Features](#-features)
3. [Tech Stack](#-tech-stack)
4. [Projects Showcased](#-projects-showcased)
5. [Sections](#-sections)
6. [Quick Start](#-quick-start)
7. [Environment Variables](#-environment-variables)
8. [Folder Structure](#-folder-structure)
9. [Contact](#-contact)

---

## 🧑‍💻 About

Hi, I'm **Sayan Sarkar** — a 4th-year Electronics and Communication Engineering student at **Coochbehar Government Engineering College (CGEC)**, graduating 2027.

I'm a **Full Stack MERN & Next.js Developer** with a solid foundation in Java, C, and Data Structures & Algorithms. I enjoy building scalable, production-ready web applications and solving complex algorithmic problems.

- 📍 Based in Coochbehar, West Bengal, India
- 📧 sayanpub2020@gmail.com
- 📞 (+91) 8945097611
- 💼 [LinkedIn](https://www.linkedin.com/in/sayansarkar8945/)
- 🐙 [GitHub](https://github.com/Sayan8945)
- 🧩 [LeetCode](https://leetcode.com/u/BdSDn4oSv4) — 100+ problems solved

---

## ✨ Features

- **3D Interactive Hero** — A detailed procedural programming desk scene built with React Three Fiber, responding to mouse movement with smooth camera tracking
- **Immersive About Section** — Bento grid layout with a live 3D globe pinpointing Coochbehar, tech stack overview, and an inline PDF resume viewer (no redirects)
- **Projects Showcase** — Browse real projects with left/right swipe (mobile & tablet touch support) and dot navigation indicators
- **Skills Section** — 4-category skill grid with real tech icons for every skill (35+ logos)
- **Work Experience Timeline** — Interactive 3D animated developer character reacts to each experience entry on hover
- **Contact Form** — EmailJS-powered form that sends messages directly to my inbox
- **Inline Resume Viewer** — Opens the PDF resume inside the site without redirecting to any external page, with a download option
- **Fully Responsive** — Optimised for desktop, tablet, and mobile with touch swipe navigation on project cards

---

## ⚙️ Tech Stack

| Category | Technologies |
|---|---|
| **Frontend** | React.js, Vite, Tailwind CSS, Framer Motion |
| **3D / Animation** | Three.js, React Three Fiber, React Three Drei, GSAP |
| **Backend** | Node.js, Express.js (projects), EmailJS (contact form) |
| **Database** | MongoDB (projects) |
| **DevOps** | Vercel, Git, GitHub |
| **Languages** | JavaScript, TypeScript, Java, C |

---

## 🗂️ Projects Showcased

### 1. Stayan — Tourism & Accommodation Platform
A full-stack Airbnb-inspired platform for discovering and booking accommodations worldwide, with real-time search, host dashboards, and booking management.
> **Stack:** MERN (MongoDB, Express, React, Node.js)

### 2. MediBloom — Mental Health Platform
A privacy-first mental health platform with AI-powered chatbots for emotional support, mood tracking, and real-time self-assessment.
> **Stack:** React, Node.js, Express, MongoDB, AI integration

### 3. Package Tracker & Mover Site
Full-stack logistics platform with real-time shipment tracking, mover booking, admin dashboards, and JWT authentication. Deployed on Vercel + Render.
> **Stack:** Next.js (App Router), Node.js, Express, MongoDB

### 4. Student Marksheet Management System
Role-based marksheet management with JWT auth and separate dashboards for students, teachers, and admins.
> **Stack:** React, Node.js, Express, MongoDB

---

## 📄 Sections

| Section | Description |
|---|---|
| **Hero** | 3D procedural programming desk with mouse-tracking camera |
| **About** | Bio, tech stack, globe location, Tech-O-Nicks card, inline resume viewer |
| **Projects** | Swipeable project cards with spotlight backgrounds and tech tags |
| **Skills** | 4-category skill grid with icons for all 35+ technologies |
| **Experience** | Interactive 3D animated character with internship timeline |
| **Contact** | EmailJS contact form |
| **Footer** | GitHub, LinkedIn, Instagram links |

---

## 🤸 Quick Start

### Prerequisites

Make sure you have the following installed:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en) (v18+)
- [npm](https://www.npmjs.com/)

### Clone & Install

```bash
git clone https://github.com/Sayan8945/threejs-portfolio.git
cd threejs-portfolio
npm install
```

### Run Locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

---

## 🔐 Environment Variables

Create a `.env` file in the root of the project:

```env
VITE_APP_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

Get your credentials from [EmailJS](https://www.emailjs.com/).

---

## 📁 Folder Structure

```
threejs-portfolio/
├── public/
│   ├── assets/
│   │   ├── logos/          # Tech & project logos (35+ SVG/PNG icons)
│   │   ├── resume.pdf      # Inline resume (served directly)
│   │   └── ...             # UI assets (arrows, spotlights, etc.)
│   ├── models/             # 3D GLB/FBX models & animations
│   └── textures/           # Matcap and project video textures
├── src/
│   ├── components/
│   │   ├── HackerRoom.jsx  # Procedural 3D programming desk (hero)
│   │   ├── DemoComputer.jsx # Procedural 3D monitor (projects)
│   │   ├── Developer.jsx   # Animated 3D character (experience)
│   │   ├── ResumeModal.jsx # Inline PDF resume viewer
│   │   ├── Target.jsx      # Procedural target (hero decoration)
│   │   └── ...
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx    # Swipe-enabled project carousel
│   │   ├── Skills.jsx      # Icon-rich skill grid
│   │   ├── Experience.jsx
│   │   ├── Contact.jsx
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── constants/
│   │   └── index.js        # All site data (projects, skills, experience)
│   └── hooks/
│       └── useAlert.js
├── .env
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## 🎓 Education

**Coochbehar Government Engineering College (CGEC)**
B.Tech — Electronics and Communication Engineering
*Aug 2023 – Present (Expected 2027)*

**West Bengal Council of Higher Secondary Education (WBCHSE)**
Higher Secondary — 90.14% | 2022

---

## 💼 Experience

| Role | Organization | Duration |
|---|---|---|
| MERN Stack Intern | Elevate Labs | 2024 |
| Frontend & Backend Intern | Prodigy Infotech | 1 month, 2024 |
| FDM 3D Printing Intern | 3D Printing Lab | 2024 |
| Core Team Member | Tech-O-Nicks, CGEC | Ongoing |
| Co-lead | CGEC Doubthub | Ongoing |

---

## 📬 Contact

| Platform | Link |
|---|---|
| Email | [sayanpub2020@gmail.com](mailto:sayanpub2020@gmail.com) |
| LinkedIn | [linkedin.com/in/sayansarkar8945](https://www.linkedin.com/in/sayansarkar8945/) |
| GitHub | [github.com/Sayan8945](https://github.com/Sayan8945) |
| Instagram | [@itz_error404__](https://www.instagram.com/itz_error404__) |
| LeetCode | [leetcode.com/u/BdSDn4oSv4](https://leetcode.com/u/BdSDn4oSv4) |

---

<div align="center">
  <p>© 2025 Sayan Sarkar. All rights reserved.</p>
</div>
