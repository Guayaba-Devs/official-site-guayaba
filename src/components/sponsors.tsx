"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface Sponsor {
  src: string;
  alt: string;
}

const sponsors: Sponsor[] = [
  {
    src: "images/NAO_Tecmilenio.png",
    alt: "Digital Nao Logo",
  },
  {
    src: "images/github-campus-experts.svg",
    alt: "Github Campus Experts Logo",
  },
  {
    src: "images/backpack.png",
    alt: "Student Developer Pack",
  },
  {
    src: "images/notion-logo.png",
    alt: "Notion",
  },
];

export const Sponsors = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // Observer para animar cuando el componente entra en vista
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animación de entrada del título
            if (titleRef.current) {
              gsap.fromTo(
                titleRef.current,
                { opacity: 0, y: 30 },
                {
                  opacity: 1,
                  y: 0,
                  duration: 1,
                  ease: "power3.out",
                }
              );
            }

            // Animación de entrada del subtítulo
            if (subtitleRef.current) {
              gsap.fromTo(
                subtitleRef.current,
                { opacity: 0, y: 20 },
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.8,
                  ease: "power2.out",
                  delay: 0.2,
                }
              );
            }

            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Marquee infinito perfecto con GSAP - técnica de múltiples duplicaciones
    if (marqueeRef.current) {
      const initMarquee = () => {
        if (!marqueeRef.current) return;

        const content = marqueeRef.current.querySelector(
          ".marquee-content"
        ) as HTMLElement;
        if (!content) return;

        const originalTrack = content.querySelector(
          ".marquee-track"
        ) as HTMLElement;
        if (!originalTrack) return;

        // Esperar múltiples frames para asegurar renderizado completo
        const initAnimation = () => {
          requestAnimationFrame(() => {
            // Calcular ancho exacto ANTES de clonar usando scrollWidth (incluye gaps)
            const trackWidth = originalTrack.scrollWidth;

            if (trackWidth === 0) {
              // Si aún no tiene ancho, reintentar
              setTimeout(initAnimation, 50);
              return;
            }

            // Duplicar solo una vez el track completo (suficiente para continuidad)
            const clone = originalTrack.cloneNode(true) as HTMLElement;
            content.appendChild(clone);

            // Esperar un frame más para que el clone se renderice completamente
            requestAnimationFrame(() => {
              // Usar el ancho calculado ANTES de clonar para precisión
              // Esto asegura que la animación sea exacta
              const animationWidth = trackWidth;

              // Configurar posición inicial
              gsap.set(content, {
                x: 0,
                clearProps: "transform",
              });

              // Crear timeline infinito con repeat
              const tl = gsap.timeline({
                repeat: -1,
                paused: false,
              });

              // Animar moviendo exactamente el ancho de un track completo
              // Esto hace que cuando termine, el clone esté exactamente donde empezó el original
              tl.to(content, {
                x: -animationWidth,
                duration: sponsors.length * 3,
                ease: "none",
              });

              // Reset instantáneo e invisible al final de cada ciclo
              // Como el clone es idéntico al original y está justo después,
              // el reset es completamente imperceptible
              tl.set(content, {
                x: 0,
                immediateRender: false,
              });
            });
          });
        };

        initAnimation();
      };

      // Esperar a que las imágenes carguen
      const images = marqueeRef.current.querySelectorAll("img");
      let loadedCount = 0;

      if (images.length === 0) {
        setTimeout(initMarquee, 100);
      } else {
        const checkComplete = () => {
          if (loadedCount >= images.length) {
            requestAnimationFrame(() => {
              setTimeout(initMarquee, 50);
            });
          }
        };

        images.forEach((img) => {
          if (img.complete) {
            loadedCount++;
            checkComplete();
          } else {
            img.addEventListener("load", checkComplete, { once: true });
            img.addEventListener("error", checkComplete, { once: true });
          }
        });

        if (loadedCount === images.length) {
          checkComplete();
        }
      }
    }
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full py-16 md:py-24 overflow-hidden bg-gradient-to-r from-primary to-secondary"
    >
      {/* Header - Contenido centrado */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 mb-12 md:mb-16">
        <div className="text-center">
          <h2
            ref={titleRef}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white"
            style={{ opacity: 0 }}
          >
            Con el respaldo de líderes en la industria
          </h2>
          <p
            ref={subtitleRef}
            className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto"
            style={{ opacity: 0 }}
          >
            Juntos fortalecemos la innovación y el crecimiento de la comunidad
            tecnológica
          </p>
        </div>
      </div>

      {/* Marquee infinito - Ancho completo */}
      <div className="relative py-8 w-full">
        {/* Degradados laterales - Mismo gradiente del fondo con fade suave */}
        <div
          className="absolute left-0 top-0 bottom-0 w-48 md:w-64 z-30 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, hsl(173, 80%, 44%) 0%, hsl(173, 80%, 44%) 15%, hsl(173, 80%, 44%, 0.95) 25%, hsl(173, 80%, 44%, 0.85) 35%, hsl(173, 80%, 44%, 0.7) 45%, hsl(173, 80%, 44%, 0.5) 55%, hsl(173, 80%, 44%, 0.3) 65%, hsl(173, 80%, 44%, 0.15) 75%, transparent 100%)",
          }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-48 md:w-64 z-30 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, transparent 0%, hsl(240, 78%, 17%, 0.15) 25%, hsl(240, 78%, 17%, 0.3) 35%, hsl(240, 78%, 17%, 0.5) 45%, hsl(240, 78%, 17%, 0.7) 55%, hsl(240, 78%, 17%, 0.85) 65%, hsl(240, 78%, 17%, 0.95) 75%, hsl(240, 78%, 17%) 85%, hsl(240, 78%, 17%) 100%)",
          }}
        />

        {/* Contenedor del marquee */}
        <div
          ref={marqueeRef}
          className="overflow-hidden w-full relative"
          style={{ isolation: "isolate" }}
        >
          <div className="marquee-content flex will-change-transform">
            <div className="marquee-track flex gap-8 flex-shrink-0">
              {sponsors.map((sponsor, index) => (
                <div
                  key={`original-${index}`}
                  className="flex-shrink-0 flex items-center justify-center px-4 py-6 group"
                  style={{ width: "200px" }}
                >
                  <div className="relative w-full h-20 md:h-24 flex items-center justify-center">
                    {/* Efecto hover con glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Logo - Colores originales */}
                    <img
                      src={sponsor.src}
                      alt={sponsor.alt}
                      className="relative z-10 h-12 md:h-16 w-auto max-w-[160px] md:max-w-[200px] object-contain group-hover:scale-110 transition-all duration-300"
                      onMouseEnter={(e) => {
                        gsap.to(e.currentTarget, {
                          scale: 1.15,
                          duration: 0.3,
                          ease: "power2.out",
                        });
                      }}
                      onMouseLeave={(e) => {
                        gsap.to(e.currentTarget, {
                          scale: 1,
                          duration: 0.3,
                          ease: "power2.out",
                        });
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Partículas decorativas de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-white rounded-full opacity-20 animate-pulse" />
        <div
          className="absolute top-40 right-20 w-3 h-3 bg-white rounded-full opacity-30 animate-pulse"
          style={{ animationDelay: "0.5s" }}
        />
        <div
          className="absolute bottom-20 left-1/4 w-2 h-2 bg-white rounded-full opacity-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-40 right-1/3 w-3 h-3 bg-white rounded-full opacity-30 animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />
      </div>
    </section>
  );
};
