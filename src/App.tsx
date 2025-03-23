import React, { useState, useEffect, lazy, Suspense } from "react";
import { Navbar } from "./components";
import { ThreeDScene } from "./components/threejs";
import {
  preloadCriticalImages,
  preloadBackgroundImages,
} from "./utils/imageLoader";
import { Performance, OptimizedScripts } from "./utils/performance";

// Constants for better maintainability
const LOADING_DELAY = 200;
const IDLE_FALLBACK_DELAY = 100;

// Loading components
const LoadingIndicator: React.FC = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-background z-30">
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      <span className="mt-4 font-neutralface text-text-secondary text-sm">
        Loading content...
      </span>
    </div>
  </div>
);

// Define fallback components for each section to improve perceived loading
const HomeFallback: React.FC = () => (
  <div className="h-screen bg-background"></div>
);

// Lazy load components with delayed loading to prevent flashing
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Experience = lazy(() => import("./pages/Experience"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));

const App: React.FC = () => {
  const [navState, setNavState] = useState<boolean>(false);
  const [hasLoaded, setHasLoaded] = useState<boolean>(false);
  const [showHome, setShowHome] = useState<boolean>(false);

  // Initialize app and handle asset loading
  useEffect(() => {
    // Add performance mark to measure initial load time
    if ("performance" in window && "mark" in performance) {
      performance.mark("app-start");
    }

    // Prefetch important images immediately
    preloadCriticalImages();

    // Scroll to top on initial load
    window.scrollTo(0, 0);

    // Delay home component to prevent flashing
    const homeTimer = setTimeout(() => {
      setShowHome(true);
    }, LOADING_DELAY);

    // Handle non-critical initialization
    const handleIdleLoad = () => {
      setHasLoaded(true);

      // Prefetch background images after main content is loaded
      preloadBackgroundImages();

      // Mark load completion for performance measurement
      if ("performance" in window && "mark" in performance) {
        performance.mark("app-loaded");
        performance.measure("app-total-load", "app-start", "app-loaded");
      }
    };

    // Use requestIdleCallback if available for non-critical initialization
    let idleTimer: ReturnType<typeof setTimeout> | undefined;
    if ("requestIdleCallback" in window) {
      // Using type assertion with Window interface
      (window as Window & typeof globalThis).requestIdleCallback(
        handleIdleLoad
      );
    } else {
      // Fallback to setTimeout with a short delay
      idleTimer = setTimeout(handleIdleLoad, IDLE_FALLBACK_DELAY);
    }

    // Cleanup function
    return () => {
      clearTimeout(homeTimer);
      if (idleTimer) clearTimeout(idleTimer);
    };
  }, []);

  return (
    <>
      <Performance />
      <OptimizedScripts />
      <div
        className={`transition-opacity duration-300 ${
          hasLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <Navbar navState={navState} setNavState={setNavState} />

        {/* Home section with controlled render timing for better perceived performance */}
        {showHome && (
          <Suspense fallback={<HomeFallback />}>
            <div className="will-change-opacity">
              <Home />
            </div>
          </Suspense>
        )}

        {/* Remaining sections with standard loading indicator */}
        <Suspense fallback={<LoadingIndicator />}>
          <ThreeDScene />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </Suspense>
      </div>
    </>
  );
};

export default App;
