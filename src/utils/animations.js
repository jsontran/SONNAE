/**
 * Handles scroll-based animations by adding a class when elements come into view
 * Used with the animate-on-scroll CSS classes
 */
export const initScrollAnimations = () => {
  if (typeof window === "undefined") return;

  const animateElements = document.querySelectorAll(".animate-on-scroll");

  const checkIfInView = () => {
    const windowHeight = window.innerHeight;
    const windowTopPosition = window.scrollY;
    const windowBottomPosition = windowTopPosition + windowHeight;

    animateElements.forEach((element) => {
      const elementHeight = element.offsetHeight;
      const elementTopPosition = element.offsetTop;
      const elementBottomPosition = elementTopPosition + elementHeight;

      // Check if element is in viewport (with offset to start animation earlier)
      const offset = 100; // starts animation when element is 100px from entering viewport
      const isInView =
        elementBottomPosition > windowTopPosition &&
        elementTopPosition < windowBottomPosition - offset;

      if (isInView) {
        element.classList.add("animated");
      }
    });
  };

  // Initial check
  checkIfInView();

  // Check on scroll
  window.addEventListener("scroll", checkIfInView);
};

/**
 * Creates a parallax effect for an element on scroll
 * @param {string} selector - CSS selector for the element
 * @param {number} speed - Speed of the parallax effect (0.1-0.5 recommended)
 */
export const createParallax = (selector, speed = 0.2) => {
  if (typeof window === "undefined") return;

  const element = document.querySelector(selector);
  if (!element) return;

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const translateY = scrollPosition * speed;
    element.style.transform = `translateY(${translateY}px)`;
  };

  window.addEventListener("scroll", handleScroll);
};

/**
 * Creates a smooth following effect for mouse cursor
 * @param {string} selector - CSS selector for the element
 * @param {number} speed - Speed of the following effect (0.05-0.2 recommended)
 */
export const createMouseFollow = (selector, speed = 0.1) => {
  if (typeof window === "undefined") return;

  const element = document.querySelector(selector);
  if (!element) return;

  let targetX = 0;
  let targetY = 0;
  let currentX = 0;
  let currentY = 0;

  const handleMouseMove = (e) => {
    // Calculate position relative to the viewport center
    targetX = (e.clientX - window.innerWidth / 2) * speed;
    targetY = (e.clientY - window.innerHeight / 2) * speed;
  };

  const updatePosition = () => {
    // Ease the movement
    currentX += (targetX - currentX) * 0.1;
    currentY += (targetY - currentY) * 0.1;

    element.style.transform = `translate(${currentX}px, ${currentY}px)`;
    requestAnimationFrame(updatePosition);
  };

  window.addEventListener("mousemove", handleMouseMove);
  updatePosition();
};

/**
 * Creates a reveal animation for text
 * @param {string} selector - CSS selector for the container
 */
export const createSplitTextReveal = (selector) => {
  if (typeof window === "undefined") return;

  const container = document.querySelector(selector);
  if (!container) return;

  const text = container.textContent;
  container.textContent = "";

  // Split text into individual characters
  [...text].forEach((char, index) => {
    const span = document.createElement("span");
    span.textContent = char === " " ? "\u00A0" : char; // Use non-breaking space for actual spaces
    span.style.opacity = "0";
    span.style.transform = "translateY(20px)";
    span.style.display = "inline-block";
    span.style.transition = `opacity 0.4s ease-out ${
      index * 0.03
    }s, transform 0.4s ease-out ${index * 0.03}s`;
    container.appendChild(span);
  });

  // Trigger the animation
  setTimeout(() => {
    Array.from(container.children).forEach((span) => {
      span.style.opacity = "1";
      span.style.transform = "translateY(0)";
    });
  }, 100);
};
