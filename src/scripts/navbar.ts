/**
 * Handles navbar show/hide behavior based on scroll
 */
export function initNavbarScroll(): void {
  const nav = document.getElementById("navbar");
  if (!nav) return;

  let lastY = window.scrollY;
  // Use requestAnimationFrame instead of setTimeout for better performance
  let ticking = false;
  const SCROLL_THRESHOLD = 50;

  const handleScroll = (): void => {
    const currentY = window.scrollY;
    // Only hide navbar when scrolling down and below threshold
    nav.style.transform =
      currentY > lastY && currentY > 100
        ? "translateY(-100%)"
        : "translateY(0)";

    lastY = currentY;
    ticking = false;
  };

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        window.requestAnimationFrame(handleScroll);
        ticking = true;
      }
    },
    { passive: true },
  );
}
