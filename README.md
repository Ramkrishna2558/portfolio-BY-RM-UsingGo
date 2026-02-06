# Portfolio - Ramkrishna More

A modern, responsive portfolio website built with **Go Fiber** backend and a **Material 3 inspired** frontend design.

![Go](https://img.shields.io/badge/Go-1.21+-00ADD8?style=flat&logo=go)
![Fiber](https://img.shields.io/badge/Fiber-v2.52-00ACD7?style=flat)
![License](https://img.shields.io/badge/License-MIT-green.svg)

## ✨ Features

- **Dual Theme System** - Dark (navy blue) and Light (creamy warm) themes with localStorage persistence
- **GSAP Animations** - Smooth scroll reveals, staggered animations, parallax effects
- **Interactive Elements** - Scroll progress bar, cursor glow, typing animation
- **Responsive Design** - Mobile-first approach with fluid typography
- **Projects Showcase** - Project cards with hover overlays
- **Fast Backend** - Go Fiber serving static files with minimal latency

## 🚀 Quick Start

### Prerequisites

- [Go 1.21+](https://golang.org/dl/)
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/Ramkrishna2558/portfolio-go-fiber.git
cd portfolio-go-fiber

# Install dependencies
go mod tidy

# Run the server
go run main.go
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
portfolio-go-fiber/
├── main.go           # Go Fiber server
├── go.mod            # Go module definition
├── go.sum            # Dependency checksums
├── Dockerfile        # Docker configuration
├── render.yaml       # Render deployment config
├── public/
│   ├── index.html    # Main HTML file
│   ├── style.css     # All styles (themes, animations)
│   └── script.js     # GSAP animations & interactions
└── README.md
```

## 🎨 Tech Stack

| Layer | Technology |
|-------|-----------|
| Backend | Go Fiber v2 |
| Frontend | Vanilla HTML/CSS/JS |
| Animations | GSAP + ScrollTrigger |
| Fonts | Inter, Outfit (Google Fonts) |
| Icons | Font Awesome 6 |
| CSS Tokens | Open Props |

## 🌐 Deployment

### Deploy to Render

1. Push code to GitHub
2. Connect repository to [Render](https://render.com)
3. Render will auto-detect the `render.yaml` configuration

### Docker

```bash
# Build image
docker build -t portfolio .

# Run container
docker run -p 3000:3000 portfolio
```

## 🎯 Customization

### Change Theme Colors

Edit `public/style.css`:

```css
/* Dark Theme */
[data-theme="dark"] {
  --surface-1: #0c1222;
  --accent: #5b9cf6;
  /* ... */
}

/* Light Theme */
[data-theme="light"] {
  --surface-1: #faf8f5;
  --accent: #2563eb;
  /* ... */
}
```

### Update Content

Edit `public/index.html` to modify:
- Personal information
- Skills list
- Project cards
- Experience details
- Certifications

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 👤 Author

**Ramkrishna More**
- Email: Ramkrishnamore299@gmail.com
- LinkedIn: [linkedin.com/in/ramkrishnamore](https://linkedin.com/in/)
- GitHub: [github.com/Ramkrishna2558](https://github.com/Ramkrishna2558)
