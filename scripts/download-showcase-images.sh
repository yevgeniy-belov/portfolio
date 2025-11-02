#!/bin/bash

# Script to download showcase images from Figma localhost server
# Run this script when Figma desktop app is running with the design open

BASE_DIR="public/assets/images/showcases"
mkdir -p "$BASE_DIR"

echo "Downloading showcase images from Figma localhost server..."
echo ""

# ===== Check Point showcases =====
echo "=== Check Point Showcases ==="

# Main Dashboard
curl -f -o "$BASE_DIR/main-dashboard.png" "http://localhost:3845/assets/5d996f733dd3318ec1916f266736010a613ff141.png" 2>/dev/null && echo "✓ Downloaded: main-dashboard.png (Main Dashboard)" || echo "✗ Failed: main-dashboard.png"

# Compliance Module  
curl -f -o "$BASE_DIR/compliance-module.png" "http://localhost:3845/assets/7caff49947c9677854e67e9d19b35ab67e47782d.png" 2>/dev/null && echo "✓ Downloaded: compliance-module.png (Compliance Module)" || echo "✗ Failed: compliance-module.png"

# GSL Builder
curl -f -o "$BASE_DIR/gsl-builder.png" "http://localhost:3845/assets/c8569a3424bf73ede1dd433284a061016df49ac3.png" 2>/dev/null && echo "✓ Downloaded: gsl-builder.png (GSL Builder)" || echo "✗ Failed: gsl-builder.png"

# Blueberry
curl -f -o "$BASE_DIR/blueberry.png" "http://localhost:3845/assets/bc3fcd193d0da4b7ca42986ddec8ba0d9e866f28.png" 2>/dev/null && echo "✓ Downloaded: blueberry.png (Blueberry)" || echo "✗ Failed: blueberry.png"

# Team Logo
curl -f -o "$BASE_DIR/team-logo.png" "http://localhost:3845/assets/b708775245fb46fa28fcc5e79cbebe756ad75665.png" 2>/dev/null && echo "✓ Downloaded: team-logo.png (Team Logo)" || echo "✗ Failed: team-logo.png"

# Full UI redesign
curl -f -o "$BASE_DIR/full-ui-redesign.png" "http://localhost:3845/assets/bd77e8221fa67658f146104840a14f36db686c46.png" 2>/dev/null && echo "✓ Downloaded: full-ui-redesign.png (Full UI redesign)" || echo "✗ Failed: full-ui-redesign.png"

# Automated Actions
curl -f -o "$BASE_DIR/automated-actions.png" "http://localhost:3845/assets/75c3c89362400ec6cc6f5d64863557c6efdfa883.png" 2>/dev/null && echo "✓ Downloaded: automated-actions.png (Automated Actions)" || echo "✗ Failed: automated-actions.png"

# Entity Viewer redesign
curl -f -o "$BASE_DIR/entity-viewer-redesign.png" "http://localhost:3845/assets/ae9419feddbfa00ebc3a546d0c969f35e8e3552f.png" 2>/dev/null && echo "✓ Downloaded: entity-viewer-redesign.png (Entity Viewer redesign)" || echo "✗ Failed: entity-viewer-redesign.png"

echo ""
echo "=== HP Software Showcases ==="

# Stylebox
curl -f -o "$BASE_DIR/stylebox.png" "http://localhost:3845/assets/43e09223d22aa05f763c864c25a602d019531616.png" 2>/dev/null && echo "✓ Downloaded: stylebox.png (Stylebox)" || echo "✗ Failed: stylebox.png"

# StormRunner Logo (SVG - will download as PNG from localhost)
curl -f -o "$BASE_DIR/stormrunner-logo.png" "http://localhost:3845/assets/60c78922cb2b876f629bffe5bb103cc3c1e6ccf3.svg" 2>/dev/null && echo "✓ Downloaded: stormrunner-logo.png (StormRunner Logo)" || echo "✗ Failed: stormrunner-logo.png"

# Analysis redesign
curl -f -o "$BASE_DIR/analysis-redesign.png" "http://localhost:3845/assets/b85032954ec713332f3188d520e269ff56b76c29.png" 2>/dev/null && echo "✓ Downloaded: analysis-redesign.png (Analysis redesign)" || echo "✗ Failed: analysis-redesign.png"

# Flow Recorder
curl -f -o "$BASE_DIR/flow-recorder.png" "http://localhost:3845/assets/2e9861a0cff8ff79e9127140710e2c7273381c9a.png" 2>/dev/null && echo "✓ Downloaded: flow-recorder.png (Flow Recorder)" || echo "✗ Failed: flow-recorder.png"

# Animated Gifs
curl -f -o "$BASE_DIR/animated-gifs.png" "http://localhost:3845/assets/e77ba57fa0a2d5833242116ef9ea40eda7a893d9.png" 2>/dev/null && echo "✓ Downloaded: animated-gifs.png (Animated Gifs)" || echo "✗ Failed: animated-gifs.png"

# Home Page
curl -f -o "$BASE_DIR/home-page.png" "http://localhost:3845/assets/ac1916e80a915dd6a295ee0f3e6bd5ada97531fd.png" 2>/dev/null && echo "✓ Downloaded: home-page.png (Home Page)" || echo "✗ Failed: home-page.png"

# Scheduling Settings (Scheduling Visualization)
curl -f -o "$BASE_DIR/scheduling-settings.png" "http://localhost:3845/assets/fa10686d064cab94047f3ca122b108bb8dea355b.png" 2>/dev/null && echo "✓ Downloaded: scheduling-settings.png (Scheduling Settings)" || echo "✗ Failed: scheduling-settings.png"

# T-shirts
curl -f -o "$BASE_DIR/t-shirts.png" "http://localhost:3845/assets/814770c592872fb3cf288d2d40ec8a6eee2db016.png" 2>/dev/null && echo "✓ Downloaded: t-shirts.png (T-shirts)" || echo "✗ Failed: t-shirts.png"

echo ""
echo "=== Subber Media Showcases ==="

# Subber Logo
curl -f -o "$BASE_DIR/subber-logo.png" "http://localhost:3845/assets/0043c1708fc6d3892138c2ff1848020db67d5ab7.png" 2>/dev/null && echo "✓ Downloaded: subber-logo.png (Subber Logo)" || echo "✗ Failed: subber-logo.png"

# Visit Card (Identity)
curl -f -o "$BASE_DIR/visit-card.png" "http://localhost:3845/assets/9ec5740399c1dc8a7a5ab5bd88caed158ea228b1.png" 2>/dev/null && echo "✓ Downloaded: visit-card.png (Visit Card)" || echo "✗ Failed: visit-card.png"

# Home Page (Subber)
curl -f -o "$BASE_DIR/home-page-subber.png" "http://localhost:3845/assets/b8ec3565b7d7e8b7eb84f2eaefc1f422ed310470.png" 2>/dev/null && echo "✓ Downloaded: home-page-subber.png (Home Page)" || echo "✗ Failed: home-page-subber.png"

# A Subtitle design (Subtitle)
curl -f -o "$BASE_DIR/a-subtitle-design.png" "http://localhost:3845/assets/5e0571c4f23bd6c5aad54b7d3296050b966429bc.png" 2>/dev/null && echo "✓ Downloaded: a-subtitle-design.png (A Subtitle design)" || echo "✗ Failed: a-subtitle-design.png"

# Main layout
curl -f -o "$BASE_DIR/main-layout.png" "http://localhost:3845/assets/97075b7a2dec74cc0ed299bed7fe6ad3b1d04058.png" 2>/dev/null && echo "✓ Downloaded: main-layout.png (Main layout)" || echo "✗ Failed: main-layout.png"

# Subtitles Menu (Main Menu)
curl -f -o "$BASE_DIR/subtitles-menu.png" "http://localhost:3845/assets/ae812d1da89ff5fd14a96368321dbaaa71e16e30.png" 2>/dev/null && echo "✓ Downloaded: subtitles-menu.png (Subtitles Menu)" || echo "✗ Failed: subtitles-menu.png"

echo ""
echo "Note: Some showcase images require manual export from Figma (complex UI compositions):"
echo "- Main Menu redesign (Check Point) - Complex frame with multiple SVG elements"
echo "- Entity Details redesign (Check Point) - Complex frame with multiple components"
echo "- Event Graph (Check Point) - Complex graph visualization with SVG elements"
echo ""
echo "To export these manually:"
echo "1. Open Figma and select the showcase frame"
echo "2. Right-click → 'Copy/Paste as' → 'Copy as PNG'"
echo "3. Or use Export panel: Select frame → Export → PNG → Save with kebab-case filename"
echo ""
echo "Download complete! Check $BASE_DIR for all PNG files."
