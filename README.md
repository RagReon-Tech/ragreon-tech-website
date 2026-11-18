# RagReon Tech — Official Web Platform

> **INNOVATE. BUILD. ELEVATE.**  
> *Software, AI & Automation*

RagReon Tech is a newly established, remote-first, two-person freelance technology engineering team founded by **Sreeram Ganesh S** and **Raghuraman**. We collaborate with founders, startups, students, and businesses to build practical, authentic, and modern software, AI, and IoT solutions.

---

## 🛠️ Technology Stack

- **Framework:** React 19 (TypeScript)
- **Bundler & Tooling:** Vite 8
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`)
- **Navigation:** React Router DOM v7
- **Icons:** Lucide React
- **Animations:** Framer Motion
- **Utilities:** `clsx`, `tailwind-merge`

---

## 📁 Project Structure

```
RagReon/
├── Logo/                        # Original source brand logos (Preserved master copies)
├── public/                      # Static web assets & favicons
│   └── logos/                   # Web-optimized logos
├── src/
│   ├── assets/                  # Bundled images, styles, and team assets
│   │   ├── images/
│   │   │   ├── team/
│   │   │   └── projects/
│   │   └── styles/
│   │       └── index.css        # Tailwind v4 directives & brand design tokens
│   ├── components/
│   │   ├── common/              # Atomic UI components (Buttons, Badges, Cards)
│   │   ├── layout/              # Structural components (Navbar, Footer, Layout)
│   │   └── sections/            # Feature section modules
│   ├── data/                    # Strictly typed datasets (Services, Projects, Team)
│   ├── hooks/                   # Custom utility hooks
│   ├── pages/                   # Application views (Home, About, Services, etc.)
│   ├── types/                   # TypeScript interfaces & types
│   ├── utils/                   # Helper functions (cn utility)
│   ├── App.tsx                  # Application shell
│   └── main.tsx                 # Application entry point
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v20+ recommended, verified on v24.14.1)
- npm (v10+ recommended, verified on v11.11.0)

### Development Server
```bash
npm install
npm run dev
```

### Production Build
```bash
npm run build
npm run preview
```

---

## 📊 Google Sheets CRM & Gmail Notifications

The **"Let's Talk"** Consultation Modal is integrated with a serverless Google Apps Script backend that automatically records client enquiries in Google Sheets and sends instant email alerts to `ragreontechofficial@gmail.com`.

For complete setup instructions, deployment steps, and configuration:
👉 [**Google Apps Script Setup Guide (`GOOGLE_APPS_SCRIPT_SETUP.md`)**](file:///e:/RagReon/GOOGLE_APPS_SCRIPT_SETUP.md)

Backend source code:
📂 [`google-apps-script/Code.gs`](file:///e:/RagReon/google-apps-script/Code.gs)

