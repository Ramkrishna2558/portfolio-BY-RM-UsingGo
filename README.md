# 🚀 Ramkrishna More - Portfolio Website

A modern, enterprise-grade portfolio website featuring **Liquid Glass UI design** with dual tech stack support for **Go Fiber** and **Astro**.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen) ![Astro](https://img.shields.io/badge/Astro-5.17.1-purple) ![Go](https://img.shields.io/badge/Go-Fiber-00ADD8) ![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue)

---

## ✨ Features

- 🎨 **Liquid Glass UI** - Apple-inspired glassmorphism design with smooth transitions
- 🌓 **Theme Toggle** - Light cream / Dark mode with smooth animations
- 🎠 **Projects Carousel** - Auto-sliding with pause on hover & touch support
- ⚡ **GSAP Animations** - Scroll-triggered and on-load effects
- 📱 **Fully Responsive** - Mobile-first design approach
- 🔒 **TypeScript** - Enterprise-grade type safety
- 🏗️ **Dual Stack** - Supports both Go Fiber AND Astro

---

## 🚀 Quick Start

### Using Switch Script (Recommended)

**Windows:**
```batch
# Run Astro SSG (Recommended)
switch.bat astro

# Run Go Fiber backend
switch.bat go
```

**Linux/Mac:**
```bash
chmod +x switch.sh
./switch.sh astro  # or ./switch.sh go
```

### Manual Start

**Astro:**
```bash
cd astro
npm install
npm run dev       # Development → http://localhost:4321
npm run build     # Production build
npm run preview   # Preview production
```

**Go Fiber:**
```bash
cd go-fiber
go run main.go    # → http://localhost:3000
```

---

## 📁 Project Structure

```
portfolio-go-fiber/
│
├── 📂 astro/                    # Astro SSG Project
│   ├── src/
│   │   ├── components/          # Reusable UI components
│   │   │   └── Projects.astro   # Auto-sliding carousel
│   │   ├── data/                # TypeScript data files
│   │   │   ├── projects.ts
│   │   │   ├── experience.ts
│   │   │   ├── certifications.ts
│   │   │   ├── skills.ts
│   │   │   └── site.ts
│   │   ├── types/               # TypeScript interfaces
│   │   │   └── index.ts
│   │   ├── layouts/
│   │   ├── pages/
│   │   └── styles/
│   ├── public/
│   ├── package.json
│   ├── tsconfig.json
│   └── vercel.json              # Vercel deployment config
│
├── 📂 go-fiber/                 # Go Fiber Project
│   ├── main.go
│   ├── go.mod
│   ├── Dockerfile
│   ├── render.yaml
│   └── public/                  # Static assets
│
├── switch.bat                   # Windows stack switcher
├── switch.sh                    # Unix stack switcher
└── README.md
```

---

## 🎨 Design System

### Liquid Glass UI
- `backdrop-filter: blur(20px)` for glass effect
- Dynamic gradient backgrounds with animated orbs
- Specular highlights and depth shadows
- Smooth 0.4s theme transitions

### Color Themes

| Theme | Background | Accent |
|-------|-----------|--------|
| Light (Cream) | `#EAD6BF` | `#3D3B3C` |
| Dark | `#0a0a1a` | `#818cf8` |

---

## 📦 Deployment

### Vercel (Astro - Recommended)

1. Push repository to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Configure:
   - **Root Directory:** `astro`
   - **Framework:** Auto-detected (Astro)
4. Deploy!

### Render (Go Fiber)

1. Connect GitHub repository
2. Set **Root Directory:** `go-fiber`
3. Render will use `render.yaml` configuration

### Docker

```bash
cd go-fiber
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

---

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Frontend** | Astro, TypeScript, GSAP, CSS3 |
| **Backend** | Go Fiber |
| **Styling** | Custom CSS, Glassmorphism |
| **Animation** | GSAP, ScrollTrigger |
| **Deployment** | Vercel, Render, Docker |

---

## 📄 Sections

- **Hero** - Animated intro with portrait and typing effect
- **About** - Professional summary
- **Skills** - Categorized tech stack chips
- **Projects** - Auto-sliding carousel with hover pause
- **Experience** - Timeline-style work history
- **Certifications** - Professional credentials grid
- **Contact** - Email and social links

---

## 👤 Author

**Ramkrishna More**  
Full Stack Developer | .NET 8 | Angular 19 | Azure AI

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?logo=linkedin)](https://linkedin.com/in/ramkrishnamore)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-black?logo=github)](https://github.com/Ramkrishna2558)

---

## 📝 License

© 2026 Ramkrishna More. All rights reserved.
