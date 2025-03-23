import { useEffect } from "react";

/**
 * Component for optimizing and deferring loading of scripts and resources
 *
 * This component:
 * 1. Adds font preloading with font-display:swap
 * 2. Defers non-critical scripts
 * 3. Adds resource hints (preconnect, dns-prefetch)
 * 4. Implements script load timeouts
 */
const OptimizedScripts = () => {
  useEffect(() => {
    // Only run in production to avoid impacting development experience
    if (process.env.NODE_ENV !== "production") {
      return;
    }

    // Preload critical fonts with font-display:swap
    const preloadFonts = () => {
      const fontUrls = [
        "../public/fonts/NeutralFace.otf",
        "../public/fonts/SkModernist.otf",
      ];

      fontUrls.forEach((fontUrl) => {
        const link = document.createElement("link");
        link.rel = "preload";
        link.href = fontUrl;
        link.as = "font";
        link.type = "font/otf";
        link.crossOrigin = "anonymous";
        document.head.appendChild(link);
      });
    };

    // Add resource hints to speed up connections
    const addResourceHints = () => {
      // Known domains to preconnect to
      const domains = [
        "https://fonts.googleapis.com",
        "https://fonts.gstatic.com",
      ];

      domains.forEach((domain) => {
        // Add preconnect
        const preconnect = document.createElement("link");
        preconnect.rel = "preconnect";
        preconnect.href = domain;
        preconnect.crossOrigin = "anonymous";
        document.head.appendChild(preconnect);

        // Add dns-prefetch as fallback
        const dnsPrefetch = document.createElement("link");
        dnsPrefetch.rel = "dns-prefetch";
        dnsPrefetch.href = domain;
        document.head.appendChild(dnsPrefetch);
      });
    };

    // Define script data interface
    interface ScriptData {
      src: string;
      timeout: number;
    }

    // Defer non-critical third-party scripts
    const deferNonCriticalScripts = () => {
      // List of non-critical scripts to load after page is interactive
      const nonCriticalScripts: ScriptData[] = [
        // Add third-party scripts here as needed
        // { src: 'https://example.com/analytics.js', timeout: 3000 }
      ];

      if (nonCriticalScripts.length === 0) return;

      // Function to load a script with timeout
      const loadScriptWithTimeout = (scriptData: ScriptData) => {
        // Create a promise that rejects after the timeout
        const timeoutPromise = new Promise((_, reject) => {
          setTimeout(
            () => reject(new Error(`Script load timeout: ${scriptData.src}`)),
            scriptData.timeout
          );
        });

        // Create a promise that resolves when the script loads
        const loadPromise = new Promise((resolve) => {
          const script = document.createElement("script");
          script.src = scriptData.src;
          script.async = true;
          script.onload = () => resolve(undefined);
          script.onerror = () => resolve(undefined); // Resolve anyway to continue loading other scripts
          document.body.appendChild(script);
        });

        // Race the promises
        return Promise.race([loadPromise, timeoutPromise]).catch((err) => {
          console.warn(err.message);
          return undefined;
        });
      };

      // Load scripts when browser is idle
      if ("requestIdleCallback" in window) {
        (window as Window & typeof globalThis).requestIdleCallback(() => {
          nonCriticalScripts.forEach((script) => loadScriptWithTimeout(script));
        });
      } else {
        // Fallback for browsers without requestIdleCallback
        setTimeout(() => {
          nonCriticalScripts.forEach((script) => loadScriptWithTimeout(script));
        }, 2000); // Wait for 2 seconds after load
      }
    };

    // Optimize image loading by adding native lazy loading
    const optimizeExistingImages = () => {
      const images = document.querySelectorAll("img:not([loading])");
      images.forEach((img) => {
        if (!img.hasAttribute("loading")) {
          img.setAttribute("loading", "lazy");
        }

        // Cast to HTMLImageElement to access width and height properties
        const imgElement = img as HTMLImageElement;

        // Ensure images have explicit width and height when possible
        if (
          imgElement.width &&
          imgElement.height &&
          !imgElement.getAttribute("width") &&
          !imgElement.getAttribute("height")
        ) {
          imgElement.setAttribute("width", imgElement.width.toString());
          imgElement.setAttribute("height", imgElement.height.toString());
        }
      });
    };

    // Run optimizations
    preloadFonts();
    addResourceHints();
    deferNonCriticalScripts();

    // Optimize images after DOM is loaded
    if (document.readyState === "complete") {
      optimizeExistingImages();
    } else {
      window.addEventListener("load", optimizeExistingImages);
      return () => window.removeEventListener("load", optimizeExistingImages);
    }
  }, []);

  // This component doesn't render anything
  return null;
};

export default OptimizedScripts;
