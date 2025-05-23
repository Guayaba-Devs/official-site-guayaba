export function initNavbarScroll() {
  const nav = document.getElementById("navbar");
  if (!nav) return;

  // Evitar inicializaciones múltiples
  if (nav.dataset.initialized === "true") return;
  nav.dataset.initialized = "true";

  // No usamos lastScrollY global (mejora rendimiento)
  let prevScrollY = window.scrollY;
  let scrollTimeout = null;

  function onScroll() {
    // Evitar procesamiento excesivo con throttling
    if (!scrollTimeout) {
      scrollTimeout = setTimeout(() => {
        const currentScrollY = window.scrollY;
        const isScrollingDown = currentScrollY > prevScrollY;

        if (isScrollingDown && currentScrollY > 50) {
          nav.classList.add("navbar-hidden");
        } else {
          nav.classList.remove("navbar-hidden");
        }

        prevScrollY = currentScrollY;
        scrollTimeout = null;
      }, 100); // Throttling a 100ms
    }
  }

  // Usar evento scroll con passive para mejor rendimiento
  window.addEventListener("scroll", onScroll, { passive: true });

  // Crear un elemento al inicio para detectar cuando estamos en la parte superior
  const topElement = document.createElement("div");
  topElement.style.position = "absolute";
  topElement.style.top = "0";
  topElement.style.height = "1px";
  topElement.style.width = "100%";
  topElement.style.pointerEvents = "none";
  document.body.prepend(topElement);

  // Usar un IntersectionObserver para cuando estemos en la parte superior
  const topObserver = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        nav.classList.remove("navbar-hidden");
      }
    },
    { threshold: 0.1 },
  );

  topObserver.observe(topElement);

  return () => {
    window.removeEventListener("scroll", onScroll);
    clearTimeout(scrollTimeout);
    topObserver.disconnect();
  };
}
