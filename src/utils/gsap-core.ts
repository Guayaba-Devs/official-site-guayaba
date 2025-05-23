import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// 1️⃣ Registrar el plugin solo una vez
gsap.registerPlugin(ScrollTrigger);

// 2️⃣ Ajustes globales de GSAP para mejor performance
gsap.defaults({
  overwrite: "auto", // si hay dos animaciones en la misma propiedad, GSAP cancela la que sobra
  ease: "power2.out", // ease por defecto que suele ir bien
});

ScrollTrigger.config({
  autoRefreshEvents: "visibilitychange,DOMContentLoaded,load", // menos refrescos innecesarios
  ignoreMobileResize: true,
});

export { gsap, ScrollTrigger };
