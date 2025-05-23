/**
 * Optimized navbar visibility control based on scroll
 * Uses CSS transitions and throttled scroll handling
 */
export function initNavbarScroll() {
  const nav = document.getElementById("navbar");
  const sentinel = document.getElementById("sentinel");
  if (!nav || !sentinel) return;

  const obs = new IntersectionObserver(
    ([entry]) => {
      nav.classList.toggle("navbar-hidden", !entry.isIntersecting);
    },
    { rootMargin: "-100px 0px 0px 0px" },
  );
  obs.observe(sentinel);
}
