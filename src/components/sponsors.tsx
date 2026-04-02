"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface Sponsor {
  src: string;
  alt: string;
}

const sponsors: Sponsor[] = [
  {
    src: "/images/NAO_Tecmilenio.png",
    alt: "Digital Nao Logo",
  },
  {
    src: "/images/github-campus-experts.svg",
    alt: "Github Campus Experts Logo",
  },
  {
    src: "/images/backpack.png",
    alt: "Student Developer Pack",
  },
  {
    src: "/images/notion-logo.png",
    alt: "Notion",
  },
];

const SponsorLogo = ({ sponsor }: { sponsor: Sponsor }) => (
  <div className="flex-shrink-0 flex items-center justify-center px-6 md:px-10">
    <img
      src={sponsor.src}
      alt={sponsor.alt}
      className="h-10 md:h-14 w-auto max-w-[140px] md:max-w-[180px] object-contain opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300"
      loading="lazy"
    />
  </div>
);

export const Sponsors = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (titleRef.current) {
              gsap.fromTo(
                titleRef.current,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
              );
            }
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

  return (
    <section
      ref={containerRef}
      className="relative w-full py-16 md:py-24 overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-secondary scroll-mt-24"
      id="sponsors"
    >
      {/* Header */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 mb-12 md:mb-16">
        <div className="text-center">
          <h2
            ref={titleRef}
            className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl mb-4"
            style={{ opacity: 0 }}
          >
            Con el respaldo de líderes en la industria
          </h2>
          <p
            ref={subtitleRef}
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto"
            style={{ opacity: 0 }}
          >
            Juntos fortalecemos la innovación y el crecimiento de la comunidad
            tecnológica
          </p>
        </div>
      </div>

      {/* Marquee CSS puro — loop infinito real */}
      <div className="relative py-8 w-full">
        <div
          className="overflow-hidden w-full"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
          }}
        >
          <div
            className="flex animate-marquee"
            style={{ "--duration": "20s" } as React.CSSProperties}
          >
            {/* Se repite 4 veces para garantizar continuidad en cualquier pantalla */}
            {[...Array(4)].map((_, setIndex) =>
              sponsors.map((sponsor, i) => (
                <SponsorLogo
                  key={`${setIndex}-${i}`}
                  sponsor={sponsor}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
