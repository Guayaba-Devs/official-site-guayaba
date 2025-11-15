"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const particlesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Observer para animaciones al entrar en vista
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target;

            if (target === containerRef.current) {
              // Animación del título
              if (titleRef.current) {
                gsap.to(titleRef.current, {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  duration: 1,
                  ease: "back.out(1.7)",
                });
              }

              // Animación del subtítulo
              if (subtitleRef.current) {
                gsap.to(subtitleRef.current, {
                  opacity: 1,
                  y: 0,
                  duration: 0.8,
                  ease: "power2.out",
                  delay: 0.2,
                });
              }

              // Animación de la card con efecto 3D
              if (cardRef.current) {
                gsap.to(cardRef.current, {
                  opacity: 1,
                  x: 0,
                  y: 0,
                  rotationY: 0,
                  scale: 1,
                  duration: 1.2,
                  ease: "power3.out",
                  delay: 0.4,
                });
              }

              // Animación de la imagen con efecto dramático
              if (imageRef.current) {
                gsap.to(imageRef.current, {
                  opacity: 1,
                  scale: 1,
                  rotation: 0,
                  duration: 1.5,
                  ease: "elastic.out(1, 0.5)",
                  delay: 0.6,
                });
              }

              observer.unobserve(target);
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: "100px" }
    );

    if (containerRef.current) {
      // Estados iniciales
      if (titleRef.current) {
        gsap.set(titleRef.current, { opacity: 0, y: -50, scale: 0.8 });
      }
      if (subtitleRef.current) {
        gsap.set(subtitleRef.current, { opacity: 0, y: 20 });
      }
      if (cardRef.current) {
        gsap.set(cardRef.current, {
          opacity: 0,
          x: -100,
          y: 50,
          rotationY: -20,
          scale: 0.9,
        });
      }
      if (imageRef.current) {
        gsap.set(imageRef.current, { opacity: 0, scale: 0.5, rotation: -15 });
      }

      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Animación de partículas flotantes
    const particleTimer = setTimeout(() => {
      particlesRef.current.forEach((particle, index) => {
        if (particle) {
          gsap.to(particle, {
            y: -30,
            x: Math.random() * 20 - 10,
            opacity: 0.4,
            scale: 1.5,
            duration: 3 + index * 0.5,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            delay: index * 0.4,
          });
        }
      });
    }, 300);

    return () => clearTimeout(particleTimer);
  }, []);

  const handleInputFocus = () => {
    setIsFocused(true);
    if (inputRef.current) {
      gsap.to(inputRef.current.parentElement, {
        scale: 1.02,
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(inputRef.current, {
        borderColor: "#00C8B3",
        boxShadow: "0 0 0 3px rgba(0, 200, 179, 0.2)",
        duration: 0.3,
      });
    }
  };

  const handleInputBlur = () => {
    setIsFocused(false);
    if (inputRef.current) {
      gsap.to(inputRef.current.parentElement, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(inputRef.current, {
        borderColor: "rgba(255, 255, 255, 0.1)",
        boxShadow: "0 0 0 0px rgba(0, 200, 179, 0)",
        duration: 0.3,
      });
    }
  };

  const handleButtonHover = (isHovering: boolean) => {
    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        scale: isHovering ? 1.05 : 1,
        y: isHovering ? -4 : 0,
        boxShadow: isHovering
          ? "0 20px 50px rgba(0, 200, 179, 0.5)"
          : "0 10px 30px rgba(0, 200, 179, 0.3)",
        duration: 0.3,
        ease: "power2.out",
      });

      const arrow = buttonRef.current.querySelector("svg");
      if (arrow) {
        gsap.to(arrow, {
          x: isHovering ? 8 : 0,
          scale: isHovering ? 1.2 : 1,
          duration: 0.3,
          ease: "back.out(1.7)",
        });
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast.error("Por favor ingresa tu email");
      if (inputRef.current) {
        gsap.to(inputRef.current, {
          keyframes: [{ x: -10 }, { x: 10 }, { x: -10 }, { x: 10 }, { x: 0 }],
          duration: 0.5,
          ease: "power2.inOut",
        });
      }
      return;
    }

    // Animación del botón al hacer clic
    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        scale: 0.95,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut",
      });
    }

    toast.success("Próximamente disponible ;)");
    setEmail("");
  };

  return (
    <section
      id="newsletter"
      ref={sectionRef}
      className="relative mt-24 px-4 my-20 sm:px-6 lg:px-8 overflow-hidden scroll-mt-24"
    >
      {/* Fondos decorativos animados */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Glow principal animado */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-full blur-3xl animate-pulse" />

        {/* Glows secundarios */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

        {/* Líneas decorativas animadas */}
        <svg
          className="absolute inset-0 w-full h-full opacity-10"
          viewBox="0 0 1200 400"
        >
          <path
            d="M0,200 Q300,100 600,200 T1200,200"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
            className="animate-pulse"
          />
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00C8B3" stopOpacity="1" />
              <stop offset="100%" stopColor="#0D1137" stopOpacity="1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div ref={containerRef} className="max-w-7xl mx-auto relative z-10">
        {/* Header mejorado */}
        <div className="text-center mb-16 md:mb-20">
          <h2
            ref={titleRef}
            className="text-4xl font-bold sm:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent will-change-transform"
            style={{ opacity: 0 }}
          >
            Mantente actualizado
          </h2>
          <p
            ref={subtitleRef}
            className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto will-change-transform"
            style={{ opacity: 0 }}
          >
            Únete a nuestra comunidad y recibe las últimas noticias, eventos y
            actualizaciones exclusivas
          </p>
        </div>

        {/* Layout mejorado: Imagen grande de fondo y formulario flotante */}
        <div className="relative">
          {/* Contenedor de imagen - Más grande y prominente */}
          <div
            ref={imageRef}
            className="relative w-full h-[400px] md:h-[500px] mb-12 md:mb-0 md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2 md:w-2/5 will-change-transform"
            style={{ opacity: 0 }}
          >
            {/* Glow alrededor de la imagen */}
            <div className="absolute -inset-10 bg-gradient-to-r from-primary/30 via-secondary/30 to-primary/30 rounded-full blur-3xl opacity-50" />

            <div className="relative w-full h-full group">
              <Image
                src="/images/mascota.png"
                alt="mascota guayabadevs"
                fill
                className="object-contain transition-all duration-500 group-hover:scale-110 will-change-transform"
                quality={100}
                priority
                onMouseEnter={(e) => {
                  gsap.to(e.currentTarget, {
                    rotation: 10,
                    scale: 1.15,
                    duration: 0.6,
                    ease: "elastic.out(1, 0.5)",
                  });
                }}
                onMouseLeave={(e) => {
                  gsap.to(e.currentTarget, {
                    rotation: 0,
                    scale: 1,
                    duration: 0.6,
                    ease: "power2.out",
                  });
                }}
              />

              {/* Partículas decorativas */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    ref={(el) => {
                      if (el) particlesRef.current[i] = el;
                    }}
                    className="absolute w-3 h-3 bg-primary rounded-full opacity-30"
                    style={{
                      top: `${15 + i * 18}%`,
                      left: `${5 + i * 20}%`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Card del formulario - Flotante y moderno */}
          <div
            ref={cardRef}
            className="relative md:ml-auto md:w-3/5 will-change-transform"
            style={{ opacity: 0 }}
          >
            {/* Efecto de brillo animado */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-[2rem] opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 pointer-events-none" />

            <div className="relative bg-gradient-to-br from-cardbg/95 via-cardbg/85 to-cardbg/75 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-10 md:p-12 shadow-2xl overflow-hidden">
              {/* Patrón de fondo animado */}
              <div className="absolute inset-0 opacity-[0.03]">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,200,179,0.3) 1px, transparent 0)`,
                    backgroundSize: "40px 40px",
                  }}
                />
              </div>

              {/* Gradiente animado de fondo */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/10 via-transparent to-transparent rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-secondary/10 via-transparent to-transparent rounded-full blur-3xl" />

              <div className="relative z-10">
                {/* Badge decorativo */}
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 rounded-full backdrop-blur-sm">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <span className="text-sm font-semibold text-primary">
                    Únete Ahora
                  </span>
                </div>

                <h4 className="text-3xl md:text-4xl font-bold text-white mb-4 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                  Suscríbete al Newsletter
                </h4>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  Sé el primero en conocer nuestros eventos, workshops y
                  contenido exclusivo para desarrolladores
                </p>

                {/* Formulario */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="relative">
                    <label className="block text-gray-300 text-lg mb-3 font-medium">
                      Tu Email
                    </label>
                    <div className="relative">
                      {/* Icono de email */}
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>

                      <input
                        ref={inputRef}
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                        placeholder="tucorreo@ejemplo.com"
                        className="w-full text-white pl-12 pr-5 py-4 text-lg bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 will-change-transform backdrop-blur-sm"
                      />

                      {/* Indicador de focus animado */}
                      {isFocused && (
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-b-xl" />
                      )}
                    </div>
                  </div>

                  {/* Botón mejorado */}
                  <button
                    ref={buttonRef}
                    type="submit"
                    onMouseEnter={() => handleButtonHover(true)}
                    onMouseLeave={() => handleButtonHover(false)}
                    className="w-full px-8 py-5 text-lg font-bold text-white bg-gradient-to-r from-primary via-primary to-secondary rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 group relative overflow-hidden will-change-transform"
                  >
                    {/* Efecto shine en hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                    {/* Glow interno */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300" />

                    <span className="relative z-10 flex items-center gap-3">
                      Suscribirse
                      <svg
                        className="w-6 h-6 relative z-10 transition-all duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </span>
                  </button>
                </form>

                {/* Texto de seguridad */}
                <p className="mt-6 text-center text-sm text-gray-500 flex items-center justify-center gap-2">
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
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                  Tu información está segura con nosotros
                </p>
              </div>

              {/* Decoraciones de esquina mejoradas */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-br-[2rem] pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-secondary/20 via-secondary/10 to-transparent rounded-tl-[2rem] pointer-events-none" />

              {/* Borde animado */}
              <div className="absolute inset-0 rounded-[2rem] border border-transparent bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm" />
            </div>
          </div>
        </div>

        {/* Estadísticas o información adicional */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {[
            { number: "500+", label: "Miembros Activos en la Comunidad" },
            { number: "10+", label: "Eventos Realizados" },
            { number: "100%", label: "Gratis Siempre" },
          ].map((stat, index) => (
            <div
              key={index}
              className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300"
              onMouseEnter={(e) => {
                gsap.to(e.currentTarget, {
                  y: -5,
                  scale: 1.05,
                  duration: 0.3,
                  ease: "power2.out",
                });
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget, {
                  y: 0,
                  scale: 1,
                  duration: 0.3,
                  ease: "power2.out",
                });
              }}
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm md:text-base">
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
