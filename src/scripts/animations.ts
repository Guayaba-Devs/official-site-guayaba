// animations.ts - Script para manejar animaciones basadas en Intersection Observer

// Función para inicializar el observer que activará las animaciones
export function setupAnimations(): void {
  // Solo ejecutar en el cliente
  if (typeof window === "undefined") return;

  const animatedElements = document.querySelectorAll("[data-animate]");

  // Configuración del Intersection Observer
  const observerOptions = {
    root: null, // viewport
    rootMargin: "0px",
    threshold: 0.1, // % visible necesario para activar
  };

  // Callback que se ejecuta cuando un elemento es observado
  const observerCallback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const element = entry.target;
        // Obtener el tipo de animación del atributo data-animate
        const animationType = element.getAttribute("data-animate");
        const delay = element.getAttribute("data-delay") || "";

        // Aplicar clases de animación
        element.classList.add(`animate-${animationType}`, delay);

        // Dejar de observar el elemento una vez animado
        observer.unobserve(element);
      }
    });
  };

  // Crear el observer
  const observer = new IntersectionObserver(observerCallback, observerOptions);

  // Observar todos los elementos con data-animate
  animatedElements.forEach((element) => observer.observe(element));
}
