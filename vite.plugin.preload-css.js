/**
 * Vite plugin to inject CSS preload links and optimize JS loading
 * This breaks the critical request chain by loading CSS in parallel with JS
 */
export function preloadCss() {
  let cssFileName = null;
  let jsFileName = null;
  let vendorFileName = null;
  
  return {
    name: 'preload-css',
    generateBundle(options, bundle) {
      // Find CSS file in bundle
      const cssFile = Object.keys(bundle).find(file => file.endsWith('.css'));
      
      if (cssFile && bundle[cssFile] && bundle[cssFile].type === 'asset') {
        cssFileName = bundle[cssFile].fileName;
      }
      
      // Find JS files
      const jsFiles = Object.keys(bundle).filter(file => 
        file.endsWith('.js') && bundle[file].type === 'chunk'
      );
      
      // Main entry JS file (not vendor)
      const mainJs = jsFiles.find(file => 
        bundle[file].isEntry && !bundle[file].name.includes('vendor')
      );
      
      // React vendor file
      const vendorJs = jsFiles.find(file => 
        bundle[file].name.includes('react-vendor') || bundle[file].name.includes('vendor')
      );
      
      if (mainJs) jsFileName = mainJs;
      if (vendorJs) vendorFileName = bundle[vendorJs].fileName;
    },
    transformIndexHtml: {
      order: 'post',
      handler(html) {
        let result = html;
        
        // Inject CSS preload link
        if (cssFileName) {
          const preloadLink = `<link rel="preload" href="/portfolio/${cssFileName}" as="style" />`;
          if (result.includes('</title>')) {
            result = result.replace('</title>', `</title>\n    ${preloadLink}`);
          }
        }
        
        // Defer JS loading until first interaction
        // Extract script srcs from Vite-injected scripts
        const scriptRegex = /<script[^>]*src="([^"]+)"[^>]*><\/script>/g;
        const scriptSources = [];
        let match;
        
        while ((match = scriptRegex.exec(result)) !== null) {
          scriptSources.push(match[1]);
        }
        
        // Also include modulepreload links as scripts to load
        const modulePreloadRegex = /<link[^>]*rel="modulepreload"[^>]*href="([^"]+)"[^>]*>/g;
        while ((match = modulePreloadRegex.exec(result)) !== null) {
          const href = match[1];
          if (!scriptSources.includes(href)) {
            scriptSources.push(href);
          }
        }
        
        if (scriptSources.length > 0) {
          // Remove original script tags and modulepreload links (we'll load them dynamically)
          result = result.replace(/<script[^>]*src="[^"]+"[^>]*><\/script>/g, '');
          result = result.replace(/<link[^>]*rel="modulepreload"[^>]*>/g, '');
          
          // Inject lazy-load script
          const scriptSourcesStr = scriptSources.map(src => `'${src}'`).join(', ');
          const lazyLoadScript = `    <!-- Defer JS loading until first user interaction -->
    <script>
      (function() {
        let jsLoaded = false;
        const scriptSources = [${scriptSourcesStr}];
        
        const loadJS = function() {
          if (jsLoaded) return;
          jsLoaded = true;
          
          // Remove event listeners
          ['mousedown', 'touchstart', 'scroll', 'keydown'].forEach(event => {
            document.removeEventListener(event, loadJS, { passive: true });
          });
          
          // Load all scripts
          scriptSources.forEach(src => {
            const script = document.createElement('script');
            script.type = 'module';
            script.src = src;
            document.body.appendChild(script);
          });
        };
        
        // Prefetch JS files for faster load when triggered
        scriptSources.forEach(src => {
          const prefetch = document.createElement('link');
          prefetch.rel = 'prefetch';
          prefetch.as = 'script';
          prefetch.href = src;
          document.head.appendChild(prefetch);
        });
        
        // Load on first interaction
        ['mousedown', 'touchstart', 'scroll', 'keydown'].forEach(event => {
          document.addEventListener(event, loadJS, { passive: true, once: true });
        });
        
        // Also load after a short delay (for users who don't interact immediately)
        setTimeout(loadJS, 3000);
      })();
    </script>`;
          
          // Insert before closing body tag
          if (result.includes('</body>')) {
            result = result.replace('</body>', lazyLoadScript + '\n  </body>');
          }
        }
        
        return result;
      },
    },
  };
}

