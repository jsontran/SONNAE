/**
 * Throttle function to limit how often a function can be called
 * @param func - Function to throttle
 * @param limit - Time limit in ms
 */
const throttle = <T extends (...args: any[]) => ReturnType<T>>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean = false;
  return function (this: unknown, ...args: Parameters<T>): void {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

/**
 * Creates a parallax effect for an element on scroll using requestAnimationFrame for smooth performance
 * @param selector - CSS selector for the element
 * @param speed - Speed of the parallax effect (0.1-0.5 recommended)
 */
export const createParallax = (selector: string, speed = 0.2): (() => void) => {
  if (typeof window === "undefined") return () => {};

  const element = document.querySelector(selector) as HTMLElement | null;
  if (!element) return () => {};

  let ticking = false;
  let scrollY = window.scrollY;
  let rafId: number | null = null;

  // Pre-calculate element bounds to avoid layout thrashing
  const elementBounds = {
    top: element.getBoundingClientRect().top + scrollY,
    height: element.offsetHeight,
  };

  const isElementInView = (): boolean => {
    const viewportHeight = window.innerHeight;
    const scrollBottom = scrollY + viewportHeight;
    return (
      scrollY < elementBounds.top + elementBounds.height &&
      scrollBottom > elementBounds.top
    );
  };

  const updatePosition = (): void => {
    if (isElementInView()) {
      const translateY = scrollY * speed;
      // Use transform instead of top/left for better performance
      element.style.transform = `translate3D(0, ${translateY}px, 0)`;
    }
    ticking = false;
  };

  const onScroll = (): void => {
    scrollY = window.scrollY;
    if (!ticking) {
      ticking = true;
      rafId = requestAnimationFrame(updatePosition);
    }
  };

  // Use passive event listener for better scroll performance
  window.addEventListener("scroll", onScroll, { passive: true });

  // Initial position update
  requestAnimationFrame(updatePosition);

  // Return cleanup function
  return () => {
    window.removeEventListener("scroll", onScroll);
    if (rafId) cancelAnimationFrame(rafId);
  };
};

/**
 * Creates a smooth following effect for mouse cursor with optimized performance
 * @param selector - CSS selector for the element
 * @param speed - Speed of the following effect (0.05-0.2 recommended)
 */
export const createMouseFollow = (
  selector: string,
  speed = 0.1
): (() => void) => {
  if (typeof window === "undefined") return () => {};

  const element = document.querySelector(selector) as HTMLElement | null;
  if (!element) return () => {};

  let targetX = 0;
  let targetY = 0;
  let currentX = 0;
  let currentY = 0;
  let rafId: number | null = null;

  const handleMouseMove = throttle((e: MouseEvent): void => {
    // Calculate position relative to the viewport center
    targetX = (e.clientX - window.innerWidth / 2) * speed;
    targetY = (e.clientY - window.innerHeight / 2) * speed;
  }, 16); // Throttle to ~60fps for performance

  const updatePosition = (): void => {
    // Ease the movement with small increments for performance
    const dx = targetX - currentX;
    const dy = targetY - currentY;

    // Only update if there's visible movement
    if (Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1) {
      currentX += dx * 0.1;
      currentY += dy * 0.1;

      // Use translate3d to trigger GPU acceleration
      element.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
    }

    rafId = requestAnimationFrame(updatePosition);
  };

  // Use passive event listener for better performance
  window.addEventListener("mousemove", handleMouseMove, { passive: true });
  rafId = requestAnimationFrame(updatePosition);

  // Return cleanup function
  return () => {
    window.removeEventListener("mousemove", handleMouseMove);
    if (rafId) cancelAnimationFrame(rafId);
  };
};

/**
 * Creates a reveal animation for text with optimized performance
 * @param selector - CSS selector for the container
 */
export const createSplitTextReveal = (selector: string): void => {
  if (typeof window === "undefined") return;

  const container = document.querySelector(selector) as HTMLElement | null;
  if (!container) return;

  const text = container.textContent || "";

  // Create a document fragment for better performance
  const fragment = document.createDocumentFragment();

  // Prepare all spans in memory before DOM insertion
  [...text].forEach((char, index) => {
    const span = document.createElement("span");
    span.textContent = char === " " ? "\u00A0" : char;
    span.style.opacity = "0";
    span.style.transform = "translateY(20px)";
    span.style.display = "inline-block";

    // Use will-change sparingly for better performance
    if (index < 20) {
      // Only apply to first few elements
      span.style.willChange = "opacity, transform";
    }

    // Batch transition definitions
    const delay = index * 0.03;
    span.style.transition = `opacity 0.4s ease-out ${delay}s, transform 0.4s ease-out ${delay}s`;

    fragment.appendChild(span);
  });

  // Clear and append in one operation to minimize reflows
  container.textContent = "";
  container.appendChild(fragment);

  // Force a reflow before starting animations
  void container.offsetHeight;

  // Use requestAnimationFrame for the animation trigger
  requestAnimationFrame(() => {
    // Batch DOM operations by using a class
    container.classList.add("reveal-text");

    // Apply styles to all children in one go
    const spans = container.children;
    setTimeout(() => {
      for (let i = 0; i < spans.length; i++) {
        const span = spans[i] as HTMLElement;
        span.style.opacity = "1";
        span.style.transform = "translateY(0)";

        // Remove will-change after animation
        setTimeout(() => {
          if (span.style.willChange) span.style.willChange = "auto";
        }, 400 + i * 30);
      }
    }, 50);
  });
};
