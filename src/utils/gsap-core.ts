import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// 1️⃣ Registrar el plugin solo una vez
gsap.registerPlugin(ScrollTrigger);

// 2️⃣ Ajustes globales de GSAP para mejor performance
gsap.defaults({
  overwrite: "auto", // si hay dos animaciones en la misma propiedad, GSAP cancela la que sobra
  ease: "power2.out", // ease por defecto que suele ir bien
});

gsap.ticker.fps(30); // 30fps en lugar de 60fps
gsap.ticker.lagSmoothing(0); // Deshabilitar corrección de lag

ScrollTrigger.config({
  autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
  ignoreMobileResize: true,
  // Limitar callbacks por cada frame (nuevo)
  limitCallbacks: true,
  // Menos sincronización de scroll (nuevo)
  syncInterval: 60,
});

export { gsap, ScrollTrigger };
