/**
 * Utility for optimized image loading and caching
 */

// Cache for loaded images to prevent duplicate loading
const imageCache = new Map<string, HTMLImageElement>();

/**
 * Preload a single image and store it in cache
 * @param src - Image source URL
 * @returns Promise that resolves when image is loaded
 */
export const preloadImage = (src: string): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    // Check if image is already cached
    if (imageCache.has(src)) {
      resolve(imageCache.get(src)!);
      return;
    }

    const img = new Image();

    img.onload = () => {
      imageCache.set(src, img);
      resolve(img);
    };

    img.onerror = () => {
      reject(new Error(`Failed to load image: ${src}`));
    };

    // Add timestamp to prevent caching if needed
    // img.src = `${src}?t=${Date.now()}`;
    img.src = src;
  });
};

/**
 * Preload multiple images in parallel
 * @param srcList - Array of image source URLs
 * @returns Promise that resolves when all images are loaded
 */
export const preloadImages = (
  srcList: string[]
): Promise<HTMLImageElement[]> => {
  const promises = srcList.map((src) => preloadImage(src));
  return Promise.all(promises);
};

/**
 * Preload critical images needed for initial render
 */
export const preloadCriticalImages = (): void => {
  // List of critical images to preload immediately
  const criticalImages = [
    "./assets/pfp.jpg",
    "./assets/logos/evertz.png",
    "./assets/logos/pattern.jpeg",
    "./assets/logos/mcscert.png",
    "./assets/logos/dsc.png",
  ];

  // Start loading but don't await
  preloadImages(criticalImages).catch((err) => {
    console.warn("Failed to preload some critical images:", err);
  });
};

/**
 * Preload non-critical images in the background when browser is idle
 */
export const preloadBackgroundImages = (): void => {
  // List of non-critical images to preload in background
  const backgroundImages = [
    "./assets/covers/Alkalytics.jpeg",
    "./assets/covers/MERN.jpg",
    "./assets/covers/tictactoe.png",
    "./assets/covers/london.jpeg",
    "./assets/covers/Taxi.jpeg",
    "./assets/covers/Kirby.jpg",
  ];

  if ("requestIdleCallback" in window) {
    (window as Window & typeof globalThis).requestIdleCallback(() => {
      preloadImages(backgroundImages).catch((err) => {
        console.warn("Failed to preload some background images:", err);
      });
    });
  } else {
    setTimeout(() => {
      preloadImages(backgroundImages).catch((err) => {
        console.warn("Failed to preload some background images:", err);
      });
    }, 1000); // Delay by 1s
  }
};
