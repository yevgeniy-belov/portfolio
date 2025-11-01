# Portfolio 3

A modern React application built with Vite and Tailwind CSS using the latest versions.

## Getting Started

### Prerequisites

- **Node.js** ^20.19.0 or >=22.12.0 (required for Vite 7)
- **npm** (comes with Node.js)

### Install Dependencies

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

### Build

Build for production:

```bash
npm run build
```

### Preview

Preview the production build:

```bash
npm run preview
```

## Tech Stack

- **React** ^19.2.0 - Latest React with concurrent features
- **Vite** ^7.1.12 - Next-generation build tool
- **Tailwind CSS** ^4.1.16 - Latest Tailwind CSS v4 with Vite plugin
- **@tailwindcss/vite** ^4.1.16 - Official Tailwind CSS Vite plugin

## Tailwind CSS v4 Setup

This project uses Tailwind CSS v4, which features:
- Native Vite plugin integration (no PostCSS config needed)
- Simpler CSS imports (`@import "tailwindcss"`)
- Improved performance and smaller bundle sizes

## GitHub Pages Deployment

This project is configured for GitHub Pages deployment. 

### Automatic Deployment

The project includes a GitHub Actions workflow that automatically builds and deploys the site when you push to the `master` branch.

### Manual Setup (if needed)

1. Go to your repository Settings → Pages
2. Under "Source", select "GitHub Actions"
3. The workflow will automatically deploy your site

Your site will be available at: `https://yevgeniy-belov.github.io/portfolio/`

### Important Notes

- The base path is set to `/portfolio/` in `vite.config.js` to match the repository name
- If you rename the repository, update the `base` path in `vite.config.js`
- Image URLs using `localhost` need to be updated to hosted URLs or relative paths for production

