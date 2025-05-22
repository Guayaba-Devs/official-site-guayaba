/**
 * Animation utilities using GSAP
 */
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

/**
 * Creates a fade-in animation when element enters viewport
 */
export function fadeInOnScroll(selector: string, options = {}) {
  const defaults = {
    y: 20,
    duration: 0.8,
    opacity: 0,
    stagger: 0.1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: selector,
      start: "top 75%",
      once: true,
    },
  };

  return gsap.from(selector, { ...defaults, ...options });
}

//TODO

/**
buttonWrapper.addEventListener("mousedown", () => {
    gsap.to(button, {
        scale: 0.97,
        duration: 0.1,
    });
});

buttonWrapper.addEventListener("mouseup", () => {
    gsap.to(button, {
        scale: 1.05,
        duration: 0.2,
    });
});

buttonWrapper.addEventListener("click", () => {
    gsap.to(button, {
        scale: 1.05,
        duration: 0.2,
    });
});
*/

/**
 * Adds hover animation to an element or elements matching a selector
 * @param elementOrSelector - DOM element or CSS selector
 * @param scale - Scale factor for the hover effect (default: 1.05)
 */
export function addHoverAnimation(
  elementOrSelector: Element | string,
  scale = 1.05,
) {
  // If a string is provided, treat it as a selector
  if (typeof elementOrSelector === "string") {
    // Get all elements matching the selector
    const elements = document.querySelectorAll(elementOrSelector);

    // Apply hover effect to each element
    elements.forEach((element) => {
      applyHoverEffect(element, scale);
    });
  } else if (elementOrSelector instanceof Element) {
    // Direct element reference
    applyHoverEffect(elementOrSelector, scale);
  }
}

// Helper function to apply hover effect to a single element
function applyHoverEffect(element: Element, scale: number) {
  element.addEventListener("mouseenter", () => {
    gsap.to(element, { scale, duration: 0.3, ease: "power2.out" });
  });

  element.addEventListener("mouseleave", () => {
    gsap.to(element, { scale: 1, duration: 0.3, ease: "power2.out" });
  });
}
