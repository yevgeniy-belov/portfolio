# Profile Illustration Assets

This directory contains the SVG illustrations used in the Profile page's "I turn this into this" section.

## Required Files

The following SVG files need to be exported from Figma and placed in this directory:

1. **complexity-shape-1.svg** - First shape overlay in the "complexity" illustration
2. **complexity-shape-2.svg** - Second shape overlay in the "complexity" illustration  
3. **complexity-shape-3.svg** - Third shape overlay in the "complexity" illustration
4. **into-this-line.svg** - The simple line illustration (the "into this" result)
5. **arrow.svg** - The arrow icon next to the description text

## How to Export from Figma

1. Open the Figma design: https://www.figma.com/design/9vqaQ9QznJQc7pEWLDjqO8/Showcases?node-id=331-4271

2. For each SVG element:
   - Select the SVG element in Figma
   - Right-click and choose "Copy/Paste as" → "Copy as SVG" 
   - Or use the Export panel (right sidebar) → Select "SVG" → Click "Export"
   - Save the file with the corresponding name listed above

3. Place all 5 SVG files in this directory: `public/assets/images/profile/`

## Node IDs Reference (from Figma)

- Complexity illustration shapes are part of node `455:3297`
- The "into this" line is node `455:3299` (imgFrame4)
- The arrow icon is node `455:3305` (imgVector4)

## Current Status

⚠️ The illustration SVGs are currently missing. Once these files are added, the Profile page illustration will display correctly.

