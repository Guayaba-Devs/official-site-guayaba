"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";

export const Newsletter = () => {
  const [email, setEmail] = useState("");

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast.error("Por favor ingresa tu email");
      return;
    }

    toast.success("Próximamente disponible ;)");
    setEmail("");
  };

  return (
    <section
      id="newsletter"
      className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden scroll-mt-24"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div ref={containerRef} className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <h2
            ref={titleRef}
            className="text-4xl font-bold sm:text-5xl lg:text-6xl mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          >
            Mantente actualizado
          </h2>
          <p
            ref={subtitleRef}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Únete a nuestra comunidad y recibe las últimas noticias, eventos y
            actualizaciones exclusivas
          </p>
        </div>

        {/* Card con imagen y formulario */}
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

          {/* Formulario */}
          <div
            ref={cardRef}
            className="relative rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm p-8 md:p-10"
          >
            <div className="space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-5 border border-primary/30 rounded-full">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                  <span className="text-xs font-medium text-primary">
                    Únete Ahora
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Suscríbete al Newsletter
                </h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  Sé el primero en conocer nuestros eventos, workshops y
                  contenido exclusivo para desarrolladores
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-300 text-sm mb-2 font-medium">
                    Tu Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tucorreo@ejemplo.com"
                    className="w-full text-white px-4 py-3 text-sm bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 transition-all duration-200"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-primary to-primary/80 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
                >
                  Suscribirse
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </button>
              </form>

              <p className="text-center text-xs text-gray-500 flex items-center justify-center gap-1.5">
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                Tu información está segura con nosotros
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
              className="py-4 px-3 rounded-xl border border-white/[0.06] bg-white/[0.02]"
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

      <Toaster position="top-right" />
    </section>
  );
};
