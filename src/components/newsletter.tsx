"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

const WHATSAPP_LINK =
  "https://chat.whatsapp.com/JS7LnHo93jg0Rj6mDesFpI?mode=gi_t";

export const Newsletter = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (titleRef.current) {
              gsap.to(titleRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out",
              });
            }
            if (subtitleRef.current) {
              gsap.to(subtitleRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.7,
                ease: "power2.out",
                delay: 0.15,
              });
            }
            if (cardRef.current) {
              gsap.to(cardRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out",
                delay: 0.3,
              });
            }
            if (imageRef.current) {
              gsap.to(imageRef.current, {
                opacity: 1,
                scale: 1,
                duration: 1,
                ease: "power2.out",
                delay: 0.4,
              });
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      if (titleRef.current) gsap.set(titleRef.current, { opacity: 0, y: 30 });
      if (subtitleRef.current)
        gsap.set(subtitleRef.current, { opacity: 0, y: 20 });
      if (cardRef.current) gsap.set(cardRef.current, { opacity: 0, y: 30 });
      if (imageRef.current)
        gsap.set(imageRef.current, { opacity: 0, scale: 0.9 });

      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="newsletter"
      className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden scroll-mt-24 bg-background"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div ref={containerRef} className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <h2
            ref={titleRef}
            className="text-4xl font-bold sm:text-5xl lg:text-6xl mb-4 text-white"
          >
            Únete a la comunidad
          </h2>
          <p
            ref={subtitleRef}
            className="text-base text-gray-400 sm:text-lg max-w-2xl mx-auto"
          >
            Conéctate con otros devs, entérate de eventos y comparte
            conocimiento en nuestro canal de WhatsApp
          </p>
        </div>

        {/* Card con imagen y CTA */}
        <div className="relative grid md:grid-cols-[1fr,1.4fr] gap-8 items-center">
          {/* Mascota */}
          <div
            ref={imageRef}
            className="relative w-full max-w-[280px] mx-auto md:max-w-none aspect-square"
          >
            <Image
              src="/images/mascota.png"
              alt="mascota guayabadevs"
              fill
              className="object-contain"
              quality={75}
            />
          </div>

          {/* CTA Card */}
          <div
            ref={cardRef}
            className="relative border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm p-8 md:p-10"
            style={{ borderRadius: "28px" }}
          >
            <div className="space-y-6">
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 border border-green-500/30 bg-green-500/10 rounded-full">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs font-medium text-green-400">
                    Canal activo
                  </span>
                </span>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Nuestro canal de WhatsApp
                </h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  Sé el primero en conocer nuestros eventos, workshops y
                  contenido exclusivo. Comparte ideas, resuelve dudas y conecta
                  con la comunidad Guayaba.
                </p>
              </div>

              {/* Beneficios como pills */}
              <div className="flex flex-wrap gap-2">
                {[
                  "Eventos exclusivos",
                  "Networking",
                  "Recursos gratis",
                  "Oportunidades",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex rounded-full border border-white/[0.08] bg-white/[0.04] px-3.5 py-1.5 text-xs text-gray-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* WhatsApp button */}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-3 rounded-full bg-[#25D366] px-6 py-4 text-base font-semibold !text-white transition-all duration-200 hover:bg-[#1fb855] hover:shadow-lg hover:shadow-green-500/20 hover:-translate-y-0.5 active:translate-y-0"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Unirse al canal de WhatsApp
              </a>

              <p className="text-center text-xs text-gray-500">
                Gratis y sin spam. Solo contenido de valor para la comunidad.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-14 grid grid-cols-3 gap-4 text-center">
          {[
            { number: "500+", label: "Miembros Activos" },
            { number: "10+", label: "Eventos Realizados" },
            { number: "100%", label: "Gratis Siempre" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="py-4 px-3 border border-white/[0.06] bg-white/[0.02]"
              style={{ borderRadius: "22px" }}
            >
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                {stat.number}
              </div>
              <div className="text-gray-500 text-xs md:text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
