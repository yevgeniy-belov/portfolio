# Showcase Images

Place showcase thumbnail images in this directory. Images are automatically referenced based on the showcase title converted to kebab-case.

## Example File Names

Based on your current showcases, here are the expected file names:

- `design-system.png` (for "Design System")
- `color-system.png` (for "Color System")
- `blueberry.png` (for "Blueberry")
- `main-dashboard.png` (for "Main Dashboard")
- `compliance-module.png` (for "Compliance Module")
- `gsl-builder.png` (for "GSL Builder")
- `main-menu-redesign.png` (for "Main Menu redesign")
- `team-logo.png` (for "Team Logo")
- `full-ui-redesign.png` (for "Full UI redesign")
- `icons-system.png` (for "Icons System")
- `automated-actions.png` (for "Automated Actions")
- `entity-details-redesign.png` (for "Entity Details redesign")
- `event-graph.png` (for "Event Graph")
- `entity-viewer-redesign.png` (for "Entity Viewer redesign")

## How It Works

The `getShowcaseImagePath()` function automatically:
1. Takes the showcase title
2. Converts it to kebab-case (lowercase with hyphens)
3. Constructs the path: `/portfolio/assets/images/showcases/{kebab-title}.png`

If an image file doesn't exist, it will gracefully fail without breaking the page.

