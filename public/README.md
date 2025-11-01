# Public Assets Directory

This directory contains static assets that are served as-is and copied directly to the build output.

## Structure

```
public/
├── assets/
│   ├── images/
│   │   ├── logos/      # Company logos
│   │   └── showcases/  # Showcase images (named by title in kebab-case)
│   └── icons/           # Icon files (SVG, ICO, etc.)
└── favicon.ico          # Site favicon (if you have one)
```

### Showcase Images Naming Convention

Showcase images should be placed in `public/assets/images/showcases/` and named using the showcase title converted to kebab-case with a `.png` extension:

- "Design System" → `design-system.png`
- "Main Menu redesign" → `main-menu-redesign.png`
- "Color System" → `color-system.png`
- "Entity Details redesign" → `entity-details-redesign.png`

The component automatically converts showcase titles to kebab-case and looks for the corresponding image file.

## Usage

Assets in the `public/` directory are referenced using absolute paths starting from the root:

```jsx
// ✅ Correct - Use absolute path from root
<img src="/portfolio/assets/images/logo.png" alt="Logo" />
<img src="/portfolio/assets/icons/arrow.svg" alt="Arrow" />

// ❌ Wrong - Don't use relative paths
<img src="../assets/images/logo.png" alt="Logo" />
```

## Important Notes

- Files in `public/` are **NOT** processed by Vite (no optimization, hashing, etc.)
- Use absolute paths that include the base path: `/portfolio/assets/...`
- These files are copied as-is to the build output
- For assets that need optimization/hashing, use `src/assets/` instead

