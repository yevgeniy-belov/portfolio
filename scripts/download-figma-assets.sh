#!/bin/bash

# Script to download SVG assets from Figma localhost server
# Run this script when Figma desktop app is running with the design open

BASE_DIR="public/assets/images/profile"
mkdir -p "$BASE_DIR"

echo "Downloading profile illustration SVGs from Figma localhost server..."

# Download each SVG asset
curl -o "$BASE_DIR/complexity-shape-1.svg" "http://localhost:3845/assets/a3343414da7c610ebcf3fdf6c729be0f4bc3143a.svg" 2>/dev/null
curl -o "$BASE_DIR/complexity-shape-2.svg" "http://localhost:3845/assets/dd6a673a37312e12b6c5aa4cb631f1a160decf6a.svg" 2>/dev/null
curl -o "$BASE_DIR/complexity-shape-3.svg" "http://localhost:3845/assets/ad0b669d36a09e4b421d311a23cee7a2f1f16740.svg" 2>/dev/null
curl -o "$BASE_DIR/into-this-line.svg" "http://localhost:3845/assets/274e309280471d2f982bf16b729aadeb0bd16c37.svg" 2>/dev/null
curl -o "$BASE_DIR/arrow.svg" "http://localhost:3845/assets/cd161e8ab52b02364fd9668fa020a93b867a0f93.svg" 2>/dev/null

echo "Download complete! Check $BASE_DIR for the SVG files."

