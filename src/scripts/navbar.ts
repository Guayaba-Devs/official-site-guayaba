/**
 * Maneja el comportamiento de ocultar/mostrar la barra de navegación basado en el scroll
 */
export function initNavbarScroll(): void {
  const nav = document.getElementById("navbar");
  if (!nav) return;

  let lastY = window.scrollY;
  let debounceTimer: number | undefined;
  const SCROLL_DELAY = 100; // 100ms de debounce
  const SCROLL_THRESHOLD = 50; // Umbral para actualización inmediata

  const handleScroll = (): void => {
    const currentY = window.scrollY;
    const scrollDirection = currentY > lastY ? "down" : "up";

    // Lógica del navbar
    if (scrollDirection === "down" && currentY > 100) {
      nav.style.transform = "translateY(-100%)";
    } else {
      nav.style.transform = "translateY(0)";
    }

    lastY = currentY;
  };

  window.addEventListener(
    "scroll",
    () => {
      const currentY = window.scrollY;

      // Actualización inmediata para scrolls grandes
      if (Math.abs(currentY - lastY) > SCROLL_THRESHOLD) {
        clearTimeout(debounceTimer);
        handleScroll();
        return;
      }

      // Debounce para scrolls normales
      clearTimeout(debounceTimer);
      debounceTimer = window.setTimeout(handleScroll, SCROLL_DELAY);
    },
    { passive: true },
  );
}
