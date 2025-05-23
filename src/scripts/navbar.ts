/**
 * Optimized navbar visibility control based on scroll
 * Uses CSS transitions and throttled scroll handling
 */
export function initNavbarScroll() {
  const nav = document.getElementById("navbar");
  if (!nav) return;

  let lastY = window.scrollY;
  let ticking = false;
  let lastToggle = 0;
  const THRESHOLD = 30;

  function checkNavbar() {
    const currentY = window.scrollY;
    if (Math.abs(currentY - lastY) > THRESHOLD) {
      const hide = currentY > lastY && currentY > 100;
      nav.classList.toggle("navbar-hidden", hide);
      lastY = currentY;
    }
    ticking = false;
  }

  function onScroll() {
    const now = performance.now();
    // Limita toggles a ~60 FPS
    if (now - lastToggle < 16) return;
    lastToggle = now;
    if (!ticking) {
      requestAnimationFrame(checkNavbar);
      ticking = true;
    }
  }

  // Pasivo para no bloquear el scroll principal
  window.addEventListener("scroll", onScroll, { passive: true });
}
