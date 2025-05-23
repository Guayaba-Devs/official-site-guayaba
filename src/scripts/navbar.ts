/**
 * Optimized navbar visibility control based on scroll
 * Uses CSS transitions and throttled scroll handling
 */
export function initNavbarScroll() {
  const nav = document.getElementById("navbar");
  if (!nav) return;

  let lastY = window.scrollY;
  let ticking = false;
  let lastTime = 0;
  const THRESHOLD = 30;

  function checkNavbar() {
    const currentY = window.scrollY;
    if (Math.abs(currentY - lastY) > THRESHOLD) {
      // hide si scroll down y > 100px, show otherwise
      const hide = currentY > lastY && currentY > 100;
      nav.classList.toggle("navbar-hidden", hide);
      lastY = currentY;
    }
    ticking = false;
  }

  function onScroll() {
    const now = performance.now();
    // throttle a ~60 FPS evitando layout thrashing
    if (now - lastTime < 16) return;
    lastTime = now;
    if (!ticking) {
      requestAnimationFrame(checkNavbar);
      ticking = true;
    }
  }

  // listener pasivo para no bloquear scroll principal
  window.addEventListener("scroll", onScroll, { passive: true });
}
