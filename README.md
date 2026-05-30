# Ang Zhang's Academic Homepage

This is the source code for my academic homepage, hosted at [az.azhang.eu.org](https://az.azhang.eu.org/).

## Technology Stack
- **Framework**: React + Vite (Single-Page Application)
- **Styling**: Premium Light Slate & Glass CSS Design System
- **Deployment**: Automated GitHub Actions (deploys directly to GitHub Pages on push to `master`)

## Getting Started

To run the development server locally:
```bash
npm install
npm run dev
```

To compile the static production bundle:
```bash
npm run build
```

## Folder Structure
- `src/pages/`: Contains main page sections (`Home.jsx`, `Research.jsx`, `Teaching.jsx`, `CV.jsx`).
- `src/components/`: Shared UI components (`Navbar.jsx`, `SectionCard.jsx`, `AbstractCollapsible.jsx`).
- `public/`: Static files copied to build root (`CNAME`, `profile.jpeg`, favicon, icons).
- `jekyll_backup/`: Archived legacy files from the old Jekyll website configuration.
