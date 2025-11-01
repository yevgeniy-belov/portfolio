/**
 * Vite plugin to inject CSS preload links in HTML
 * This breaks the critical request chain by loading CSS in parallel with JS
 */
export function preloadCss() {
  let cssFileName = null;
  
  return {
    name: 'preload-css',
    generateBundle(options, bundle) {
      // Find CSS file in bundle
      const cssFile = Object.keys(bundle).find(file => file.endsWith('.css'));
      
      if (cssFile && bundle[cssFile] && bundle[cssFile].type === 'asset') {
        cssFileName = bundle[cssFile].fileName;
      }
    },
    transformIndexHtml(html) {
      // After bundle generation, inject preload link
      if (cssFileName) {
        const preloadLink = `<link rel="preload" href="/portfolio/${cssFileName}" as="style" />`;
        // Insert after title tag
        if (html.includes('</title>')) {
          return html.replace('</title>', `</title>\n    ${preloadLink}`);
        }
      }
      return html;
    },
  };
}

