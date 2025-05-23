export function initNavbarScroll() {
  const nav = document.getElementById("navbar");
  if (!nav) return;

  let lastY = window.scrollY; // posición de scroll en el último frame
  let pendingY = lastY; // dónde guardamos la próxima lectura
  let ticking = false;
  const THRESHOLD = 30; // umbral de cambio para toggle

  function checkNavbar() {
    const currentY = pendingY; // usamos la lectura ya hecha
    const deltaY = currentY - lastY;

    if (Math.abs(deltaY) > THRESHOLD) {
      const hide = deltaY > 0 && currentY > 100;
      nav.classList.toggle("-translate-y-full", hide);
      lastY = currentY;
    }

    ticking = false;
  }

  function onScroll() {
    // UNA sola lectura forzada de scrollY por frame
    pendingY = window.scrollY;

    if (!ticking) {
      ticking = true;
      requestAnimationFrame(checkNavbar);
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
}
