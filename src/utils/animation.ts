import { gsap } from "./gsap-core";

// Límita cuántas animaciones corren a la vez
class AnimationBatchManager {
  static queue = [];
  static running = false;
  static batchSize = 5;

  static add(fn) {
    this.queue.push(fn);
    if (!this.running) this.process();
  }

  static process() {
    if (this.queue.length === 0) {
      this.running = false;
      return;
    }
    this.running = true;
    const batch = this.queue.splice(0, this.batchSize);
    batch.forEach((f) => f());
    requestAnimationFrame(() => this.process());
  }
}

// Fade/slide con IntersectionObserver y batching
export function createIntersectionAnimation(selector, props, threshold = 0.2) {
  const els = document.querySelectorAll(selector);
  if (!els.length) return;
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          AnimationBatchManager.add(() => {
            gsap.to(entry.target, props);
          });
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold },
  );
  els.forEach((el) => obs.observe(el));
}

// Hover sencillo: si es escala ≤1.1 usa CSS, si no, GSAP
export function addHoverAnimation(elOrSel, scale = 1.05, options = {}) {
  const els =
    typeof elOrSel === "string"
      ? document.querySelectorAll(elOrSel)
      : [elOrSel];
  els.forEach((el) => {
    if (scale <= 1.1 && !options.customEffect) {
      el.classList.add("hover-scale");
      // Asegúrate de tener este CSS global:
      // .hover-scale { transition: transform 0.3s ease; }
      // .hover-scale:hover { transform: scale(1.05); }
    } else {
      el.addEventListener("mouseenter", () => {
        gsap.to(el, {
          scale,
          duration: options.duration || 0.3,
          ease: options.ease || "power2.out",
        });
      });
      el.addEventListener("mouseleave", () => {
        gsap.to(el, {
          scale: 1,
          duration: options.duration || 0.3,
          ease: options.ease || "power2.out",
        });
      });
    }
  });
}

// Línea de tiempo ScrollTrigger optimizada
export function createScrollTimeline({ trigger, animations, scrollConfig }) {
  const trigEl = document.querySelector(trigger);
  if (!trigEl) return null;
  const tl = gsap.timeline({
    scrollTrigger: { trigger, start: "top 75%", once: true, ...scrollConfig },
  });
  animations.forEach(({ target, props, position }) => {
    const items = document.querySelectorAll(target);
    if (items.length) tl.to(items, props, position);
  });
  return tl;
}
