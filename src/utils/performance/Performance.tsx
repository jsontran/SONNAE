import { useEffect } from "react";

// Add interfaces for specific performance entry types
interface LayoutShiftEntry extends PerformanceEntry {
  hadRecentInput: boolean;
  value: number;
}

interface FirstInputEntry extends PerformanceEntry {
  processingStart: number;
}

interface ResourceEntry extends PerformanceEntry {
  decodedBodySize: number;
  duration: number;
}

/**
 * The Performance component measures and reports on key performance metrics
 * It helps in identifying bottlenecks and improvements in the site's performance
 *
 * This component doesn't render anything visually
 */
const Performance = () => {
  useEffect(() => {
    // Only run in production mode and if Performance API is available
    if (process.env.NODE_ENV !== "production" || !("performance" in window)) {
      return;
    }

    let cumulativeLayoutShift = 0;
    let firstInputDelay = 0;
    let largestContentfulPaint = 0;
    let firstContentfulPaint = 0;

    // Track Cumulative Layout Shift (CLS)
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        // Type assertion to access layout-shift specific properties
        const layoutShiftEntry = entry as LayoutShiftEntry;
        if (!layoutShiftEntry.hadRecentInput) {
          cumulativeLayoutShift += layoutShiftEntry.value;
        }
      }
    });
    if (PerformanceObserver.supportedEntryTypes.includes("layout-shift")) {
      observer.observe({ type: "layout-shift", buffered: true });
    }

    // Track First Input Delay (FID)
    const firstInputObserver = new PerformanceObserver((list) => {
      const firstInput = list.getEntries()[0] as FirstInputEntry;
      if (firstInput) {
        firstInputDelay = firstInput.processingStart - firstInput.startTime;
        console.log("First Input Delay:", firstInputDelay);
      }
    });
    if (PerformanceObserver.supportedEntryTypes.includes("first-input")) {
      firstInputObserver.observe({ type: "first-input", buffered: true });
    }

    // Track Largest Contentful Paint (LCP)
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      if (lastEntry) {
        largestContentfulPaint = lastEntry.startTime;
        console.log("Largest Contentful Paint:", largestContentfulPaint);
      }
    });
    if (
      PerformanceObserver.supportedEntryTypes.includes(
        "largest-contentful-paint"
      )
    ) {
      lcpObserver.observe({ type: "largest-contentful-paint", buffered: true });
    }

    // Track First Contentful Paint (FCP)
    const paintObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.name === "first-contentful-paint") {
          firstContentfulPaint = entry.startTime;
          console.log("First Contentful Paint:", firstContentfulPaint);
        }
      }
    });
    if (PerformanceObserver.supportedEntryTypes.includes("paint")) {
      paintObserver.observe({ type: "paint", buffered: true });
    }

    // Report all metrics on page unload
    const reportPerformanceMetrics = () => {
      // Use the Web Vitals API to report metrics
      // For production, these would go to an analytics service
      console.log("Performance Metrics:");
      console.log("------------------");
      console.log("Cumulative Layout Shift:", cumulativeLayoutShift);
      console.log("First Input Delay:", firstInputDelay);
      console.log("Largest Contentful Paint:", largestContentfulPaint);
      console.log("First Contentful Paint:", firstContentfulPaint);
      console.log("Time to Interactive:", performance.now());

      // Get resource timing data for large resources
      const resourceEntries = performance.getEntriesByType(
        "resource"
      ) as ResourceEntry[];
      const largeResources = resourceEntries
        .filter((entry) => entry.decodedBodySize > 100000) // 100KB
        .map((entry) => ({
          name: entry.name,
          size: Math.round(entry.decodedBodySize / 1024) + "KB",
          duration: Math.round(entry.duration) + "ms",
        }));

      if (largeResources.length > 0) {
        console.log("Large Resources:");
        console.table(largeResources);
      }
    };

    // Call when the page is about to be unloaded
    window.addEventListener("beforeunload", reportPerformanceMetrics);

    // Also report after everything has loaded
    window.addEventListener("load", () => {
      // Use requestIdleCallback to avoid blocking the main thread
      if ("requestIdleCallback" in window) {
        (window as Window & typeof globalThis).requestIdleCallback(() => {
          reportPerformanceMetrics();
        });
      } else {
        setTimeout(reportPerformanceMetrics, 2000);
      }
    });

    return () => {
      window.removeEventListener("beforeunload", reportPerformanceMetrics);
      if (observer) observer.disconnect();
      if (firstInputObserver) firstInputObserver.disconnect();
      if (lcpObserver) lcpObserver.disconnect();
      if (paintObserver) paintObserver.disconnect();
    };
  }, []);

  // This component doesn't render anything
  return null;
};

export default Performance;
