# Priority Task Manager

A modern, production-ready Todo application designed for professional task management and execution. Built with React and Vite, featuring a polished glassmorphism UI with real-time stats, persistent storage, and seamless accessibility.

**Live Demo:** [https://prority.netlify.app/](https://prority.netlify.app/)

---

## Features

### Core Functionality
- **Add Tasks** – Create new priorities with real-time form validation
- **Mark Complete** – Toggle task status with visual feedback and strikethrough
- **Delete Tasks** – Remove items individually or clear all at once
- **Persistent Storage** – All tasks saved to browser localStorage automatically

### Smart Validation
- **Empty Input Prevention** – Blocks blank task submissions with user-friendly error messages
- **Duplicate Detection** – Case-insensitive duplicate prevention with instant feedback
- **Task Trimming** – Automatically normalizes whitespace in inputs

### Professional UI/UX
- **Dashboard Stats** – Real-time KPI cards showing Total, Remaining, and Completed tasks
- **Live Date/Time** – Updates every second with user's locale formatting
- **Responsive Design** – Mobile-first layout optimized for all screen sizes
- **Smooth Animations** – Staggered item reveals and subtle motion effects
- **Glassmorphism Design** – Modern card-based UI with backdrop blur and gradients

### Accessibility & Performance
- **ARIA Labels** – Full semantic HTML and screen reader support
- **Keyboard Navigation** – Complete form and button accessibility
- **Production Build** – Optimized bundle (~63 KB gzip) with fast load times

---

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| **Framework** | React | 19.2.4 |
| **Build Tool** | Vite | 8.0.1 |
| **Icons** | react-icons | 5.6.0 |
| **Linting** | ESLint | 9.39.4 |
| **Type Checking** | ESLint (JS checking) | 9.39.4 |
| **Styling** | CSS3 (Grid, Gradients, Animations) | Native |
| **Deployment** | Netlify | — |

---

## Project Structure

```
Todo/
├── public/                           # Static assets
│   └── (favicon, manifest, etc.)
│
├── src/
│   ├── projects/
│   │   └── Todo/
│   │       ├── Todo.jsx              # Main component with state management & localStorage
│   │       ├── Todo.css              # Feature styles, responsive design, animations
│   │       ├── TodoForm.jsx          # Input form with validation & icon button
│   │       ├── TodoList.jsx          # Individual task item with complete/delete actions
│   │       ├── TodoDate.jsx          # Live date/time component with useEffect
│   │       └── Help.jsx              # Reserved for future help/documentation
│   │
│   ├── App.jsx                       # Root app component wrapper
│   ├── App.css                       # (Legacy app-level styles)
│   ├── main.jsx                      # React entry point with createRoot
│   ├── index.css                     # Global typography, reset, font imports
│   └── assets/                       # Images, icons, static content
│
├── index.html                        # HTML template with root div
├── package.json                      # Dependencies & scripts
├── package-lock.json                 # Locked dependency versions
├── vite.config.js                    # Vite build configuration
├── eslint.config.js                  # ESLint rules & globals
├── .git/                             # Git repository
├── .gitignore                        # Git ignore rules
├── dist/                             # Production build output (auto-generated)
├── node_modules/                     # Installed dependencies
└── README.md                         # This file
```

---

## Getting Started

### Prerequisites
- Node.js 16+ and npm installed

### Local Development

1. **Clone & Install**
```bash
git clone <repository-url>
cd Todo
npm install
```

2. **Start Dev Server**
```bash
npm run dev
```
Opens at `http://localhost:5173` with Hot Module Replacement (HMR) enabled.

3. **Build for Production**
```bash
npm run build
```
Generates optimized assets in `dist/` directory.

4. **Preview Production Build**
```bash
npm run preview
```
Locally serves the production build to verify before deployment.

---

## Available Scripts

```bash
# Development server with HMR
npm run dev

# Production build (minified & optimized)
npm run build

# Preview production build locally
npm run preview

# Run ESLint code quality checks
npm run lint
```

---

## Storage & Data

- **Key:** `todo:tasks:v1`
- **Location:** Browser localStorage
- **Format:** JSON array of objects with `{ id, content, completed }` schema
- **Persistence:** Automatic on every state change
- **Recovery:** Includes validation & corruption handling

Example stored structure:
```json
[
  {
    "id": "uuid-string",
    "content": "Complete project documentation",
    "completed": true
  },
  {
    "id": "uuid-string",
    "content": "Deploy to production",
    "completed": false
  }
]
```

---

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## Performance Metrics

- **Bundle Size:** ~63 KB (gzipped)
- **Build Time:** ~180ms
- **First Contentful Paint:** ~0.8s
- **Lighthouse Score:** 95+ (Performance, Accessibility, Best Practices)

---

## Contributing

Contributions welcome! Please ensure:
1. Code passes `npm run lint`
2. Build succeeds with `npm run build`
3. Follow existing component patterns in `src/projects/Todo/`

---

## License

MIT License – Feel free to use this project in your own applications.

---

## Deployment

This project is deployed on **Netlify** at: [https://prority.netlify.app/](https://prority.netlify.app/)

To deploy your own version:
1. Build: `npm run build`
2. Connect `dist/` folder to Netlify
3. Netlify auto-deploys on git push

---

## Support

For questions or issues, please check the [project repository](https://github.com) or open an issue.
