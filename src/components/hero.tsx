"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const heroImages = [
  "https://res.cloudinary.com/dq84mzx7b/image/upload/f_auto,q_auto,w_1920/v1761092964/_DSC0115_v80ngi.jpg",
  "https://res.cloudinary.com/dq84mzx7b/image/upload/f_auto,q_auto,w_1920/v1746660670/_DSC0203_6_xn4jgg.jpg",
  "https://res.cloudinary.com/dq84mzx7b/image/upload/f_auto,q_auto,w_1920/v1746660556/_DSC0017_3_akrp30.jpg",
  "https://res.cloudinary.com/dq84mzx7b/image/upload/f_auto,q_auto,w_1920/v1761092958/_DSC9891_vcewmx.jpg",
];

const transitionTypes = ["slide-right", "fade", "zoom-in", "slide-left"];

export const Hero = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<HTMLDivElement[]>([]);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const currentIndexRef = useRef(0);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    if (carouselRef.current && slidesRef.current.length > 0) {
      const slides = slidesRef.current;
      const totalSlides = heroImages.length;
      const viewportWidth = window.innerWidth;

      const getNextIndex = () => {
        currentIndexRef.current = (currentIndexRef.current + 1) % totalSlides;
        return currentIndexRef.current;
      };

      const applyTransition = (fromIndex: number, toIndex: number) => {
        const fromSlide = slides[fromIndex];
        const toSlide = slides[toIndex];
        const transitionType =
          transitionTypes[fromIndex % transitionTypes.length];

        gsap.set(toSlide, { clearProps: "all" });

        setCurrentSlideIndex(toIndex);

        if (progressBarRef.current) {
          gsap.fromTo(
            progressBarRef.current,
            { width: "0%" },
            { width: "100%", duration: 3, ease: "none" }
          );
        }

        switch (transitionType) {
          case "slide-right":
            gsap.set(toSlide, { x: viewportWidth, opacity: 1 });
            gsap.to(fromSlide, {
              x: -viewportWidth,
              opacity: 0,
              duration: 1.2,
              ease: "power2.inOut",
            });
            gsap.to(toSlide, {
              x: 0,
              opacity: 1,
              duration: 1.2,
              ease: "power2.inOut",
            });
            break;

          case "fade":
            gsap.set(toSlide, { opacity: 0 });
            gsap.to(fromSlide, {
              opacity: 0,
              duration: 1.2,
              ease: "power1.inOut",
            });
            gsap.to(toSlide, {
              opacity: 1,
              duration: 1.2,
              ease: "power1.inOut",
            });
            break;

          case "zoom-in":
            gsap.set(toSlide, { scale: 1.2, opacity: 0 });
            gsap.to(fromSlide, {
              scale: 0.9,
              opacity: 0,
              duration: 1.2,
              ease: "power2.inOut",
            });
            gsap.to(toSlide, {
              scale: 1,
              opacity: 1,
              duration: 1.2,
              ease: "power2.inOut",
            });
            break;

          case "slide-left":
            gsap.set(toSlide, { x: -viewportWidth, opacity: 1 });
            gsap.to(fromSlide, {
              x: viewportWidth,
              opacity: 0,
              duration: 1.2,
              ease: "power2.inOut",
            });
            gsap.to(toSlide, {
              x: 0,
              opacity: 1,
              duration: 1.2,
              ease: "power2.inOut",
            });
            break;
        }
      };

      slides.forEach((slide, index) => {
        if (index === 0) {
          gsap.set(slide, { x: 0, opacity: 1, scale: 1 });
        } else {
          gsap.set(slide, { x: 0, opacity: 0, scale: 1 });
        }
      });

      const animateCarousel = () => {
        const currentIndex = currentIndexRef.current;
        const nextIndex = getNextIndex();

        if (progressBarRef.current) {
          gsap.set(progressBarRef.current, { width: "0%" });
        }

        applyTransition(currentIndex, nextIndex);

        setTimeout(() => {
          gsap.set(slides[currentIndex], {
            x: 0,
            opacity: 0,
            scale: 1,
            clearProps: "transform",
          });
          animateCarousel();
        }, 3000);
      };

      if (progressBarRef.current) {
        gsap.fromTo(
          progressBarRef.current,
          { width: "0%" },
          { width: "100%", duration: 3, ease: "none" }
        );
      }

      const startTimeout = setTimeout(() => {
        animateCarousel();
      }, 100);

      return () => {
        clearTimeout(startTimeout);
      };
    }
  }, []);

  useEffect(() => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (titleRef.current) {
          gsap.set(titleRef.current, { x: -100, opacity: 0, scale: 0.9 });
          gsap.to(titleRef.current, {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: "power3.out",
            delay: 0.5,
          });
        }

        if (subtitleRef.current) {
          gsap.set(subtitleRef.current, { x: -80, opacity: 0, y: 20 });
          gsap.to(subtitleRef.current, {
            x: 0,
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            delay: 0.8,
          });
        }

        if (descriptionRef.current) {
          gsap.set(descriptionRef.current, { x: -50, opacity: 0, y: 15 });
          gsap.to(descriptionRef.current, {
            x: 0,
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            delay: 1.1,
          });
        }

        if (buttonsRef.current && buttonsRef.current.children.length > 0) {
          const buttons = Array.from(
            buttonsRef.current.children
          ) as HTMLElement[];
          buttons.forEach((button, index) => {
            gsap.set(button, { x: -50, opacity: 0, scale: 0.8, y: 20 });
            gsap.to(button, {
              x: 0,
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 0.8,
              ease: "back.out(1.7)",
              delay: 1.3 + index * 0.15,
            });
          });
        }
      });
    });
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden scroll-mt-24"
      style={{ backgroundColor: "transparent", background: "none" }}
    >
      <div
        ref={carouselRef}
        className="absolute inset-0"
        style={{
          zIndex: 1,
        }}
      >
        {heroImages.map((image, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) slidesRef.current[index] = el;
            }}
            className="absolute inset-0 overflow-hidden"
            style={{
              width: "100vw",
              height: "100vh",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/25 to-black/30 md:from-black/50 md:via-black/40 md:to-black/50 z-10" />

            <img
              src={image}
              alt={`Hero image ${index + 1}`}
              className="w-full h-full object-cover"
              style={{
                objectFit: "cover",
                objectPosition: "center",
                width: "100%",
                height: "100%",
                willChange: "transform, opacity",
              }}
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
              fetchPriority={index === 0 ? "high" : "low"}
            />
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-40 md:bottom-8 md:left-auto md:transform-none md:right-8">
        <div
          className="flex items-center gap-3 rounded-full px-4 py-2.5 backdrop-blur-md"
          style={{ background: "rgba(0,0,0,0.35)", border: "1px solid rgba(255,255,255,0.1)" }}
        >
          <div className="flex gap-1.5">
            {heroImages.map((_, index) => (
              <div
                key={index}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === currentSlideIndex
                    ? "bg-primary w-6"
                    : "bg-white/25 w-1.5"
                }`}
              />
            ))}
          </div>
          <div className="w-20 h-1.5 bg-white/10 rounded-full overflow-hidden md:w-28">
            <div
              ref={progressBarRef}
              className="h-full bg-primary rounded-full"
              style={{ width: "0%" }}
            />
          </div>
        </div>
      </div>

      <div className="relative z-30 min-h-screen flex items-center px-4 sm:px-6 lg:px-8 xl:px-16 pt-20">
        <div className="max-w-4xl w-full text-center md:text-left">
          <div className="mb-6 sm:mb-8 flex justify-center md:justify-start">
            <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full flex items-center justify-center shadow-2xl shadow-primary/20 border border-white/15 bg-black/30 backdrop-blur-md">
              <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full overflow-hidden">
                <img
                  src="/images/mascota.png"
                  alt="mascota guayabadevs"
                  className="w-full h-full object-cover"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>
          </div>

          <h1
            ref={titleRef}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent drop-shadow-2xl will-change-transform"
            style={{ lineHeight: 1.2, paddingBottom: "0.1em" }}
          >
            Guayabadevs
          </h1>

          <p
            ref={subtitleRef}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white mb-4 sm:mb-6 font-medium max-w-2xl mx-auto md:mx-0 drop-shadow-lg leading-relaxed will-change-transform"
          >
            Creando desarrolladores{" "}
            <span className="text-primary font-bold">fructíferos</span>
          </p>

          <p
            ref={descriptionRef}
            className="text-sm sm:text-base md:text-lg text-white/90 mb-8 sm:mb-12 font-normal max-w-xl mx-auto md:mx-0 drop-shadow-md leading-relaxed will-change-transform"
          >
            Una comunidad de desarrolladores apasionados por la tecnología,
            compartiendo conocimiento y construyendo el futuro juntos.
          </p>

          <div
            ref={buttonsRef}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center md:items-start justify-center md:justify-start"
          >
            <a
              href="https://chat.whatsapp.com/JS7LnHo93jg0Rj6mDesFpI?mode=gi_t"
              target="_blank"
              rel="noopener noreferrer"
              className="group will-change-transform"
            >
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-bold transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-3 shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40">
                <span>Únete a la comunidad</span>
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </a>

            <a
              href="#events"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#events")?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="group will-change-transform"
            >
              <button className="border border-white/20 text-white hover:bg-white/10 hover:border-white/30 px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-3 backdrop-blur-md bg-white/5">
                <span>Próximos eventos</span>
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-y-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
