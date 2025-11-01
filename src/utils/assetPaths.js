/**
 * Asset path utilities
 * Helper functions to construct correct asset paths for GitHub Pages
 */

// Vite's base path affects public files too
// Always use the base path for assets to work in both dev and production
const BASE_PATH = '/portfolio';

/**
 * Convert a string to kebab-case
 * @param {string} str - String to convert
 * @returns {string} Kebab-case string
 */
export const toKebabCase = (str) => {
  if (!str) return '';
  return str
    .trim()
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/[\s_]+/g, '-') // Replace spaces and underscores with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
};

/**
 * Get path for an image asset
 * @param {string} imagePath - Path relative to public/assets/images/
 * @returns {string} Full path with base path included
 */
export const getImagePath = (imagePath) => {
  return `${BASE_PATH}/assets/images/${imagePath}`;
};

/**
 * Get path for an icon asset
 * @param {string} iconPath - Path relative to public/assets/icons/
 * @returns {string} Full path with base path included
 */
export const getIconPath = (iconPath) => {
  return `${BASE_PATH}/assets/icons/${iconPath}`;
};

/**
 * Get path for a logo asset
 * @param {string} logoPath - Path relative to public/assets/images/
 * @returns {string} Full path with base path included
 */
export const getLogoPath = (logoPath) => {
  return getImagePath(`logos/${logoPath}`);
};

/**
 * Get path for a showcase image based on title
 * @param {string} title - Showcase title
 * @param {string} extension - Image extension (default: 'png')
 * @returns {string} Full path with base path included
 */
export const getShowcaseImagePath = (title, extension = 'png') => {
  const kebabTitle = toKebabCase(title);
  return getImagePath(`showcases/${kebabTitle}.${extension}`);
};

