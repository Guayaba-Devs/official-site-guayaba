"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import Image from "next/image";

export const navLinks = [
  { href: "#hero", label: "Inicio" },
  { href: "#about", label: "Sobre" },
  { href: "#sponsors", label: "Sponsors" },
  { href: "#team", label: "Equipo" },
  { href: "#events", label: "Eventos" },
  { href: "#newsletter", label: "Comunidad" },
];

const SECTION_IDS = navLinks.map((l) => l.href.replace("#", ""));

export const NavbarTop = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbarRef = useRef<HTMLElement>(null);
  const gradientOverlayRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuItemsRef = useRef<HTMLLIElement[]>([]);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const navContainerRef = useRef<HTMLElement>(null);

  // Active section detection
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Animate pill indicator to active link
  useEffect(() => {
    if (!indicatorRef.current || !navContainerRef.current) return;

    const activeLink = navContainerRef.current.querySelector(
      `[data-section="${activeSection}"]`
    ) as HTMLElement | null;

    if (!activeLink) {
      gsap.to(indicatorRef.current, { opacity: 0, duration: 0.2 });
      return;
    }

    const containerRect = navContainerRef.current.getBoundingClientRect();
    const linkRect = activeLink.getBoundingClientRect();

    gsap.to(indicatorRef.current, {
      x: linkRect.left - containerRect.left,
      width: linkRect.width,
      opacity: 1,
      duration: 0.35,
      ease: "power2.out",
    });
  }, [activeSection]);

  // Scroll detection for navbar background
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const shouldBeScrolled = scrollY > 50;

      if (shouldBeScrolled !== isScrolled) {
        setIsScrolled(shouldBeScrolled);

        if (navbarRef.current) {
          gsap.to(navbarRef.current, {
            backdropFilter: shouldBeScrolled ? "blur(10px)" : "blur(0px)",
            duration: 0.4,
            ease: "power2.out",
          });
        }

        if (gradientOverlayRef.current) {
          gsap.to(gradientOverlayRef.current, {
            opacity: shouldBeScrolled ? 1 : 0,
            duration: 0.4,
            ease: "power2.out",
          });
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled]);

  // Initial entrance animation
  useEffect(() => {
    if (logoRef.current) {
      gsap.fromTo(
        logoRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.2 }
      );
    }

    const navLinksElements = navContainerRef.current?.querySelectorAll("a");
    if (navLinksElements) {
      gsap.fromTo(
        Array.from(navLinksElements),
        { opacity: 0, y: -10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          delay: 0.4,
          stagger: 0.1,
        }
      );
    }
  }, []);

  // Mobile menu animation
  useEffect(() => {
    if (menuRef.current) {
      if (isMenuOpen) {
        gsap.fromTo(
          menuRef.current,
          { x: "100%" },
          { x: 0, duration: 0.4, ease: "power3.out" }
        );

        if (menuItemsRef.current.length > 0) {
          gsap.fromTo(
            menuItemsRef.current,
            { opacity: 0, x: 50 },
            {
              opacity: 1,
              x: 0,
              duration: 0.3,
              ease: "power2.out",
              stagger: 0.08,
              delay: 0.1,
            }
          );
        }
      } else {
        gsap.to(menuRef.current, {
          x: "100%",
          duration: 0.3,
          ease: "power2.in",
        });

        gsap.to(menuItemsRef.current, {
          opacity: 0,
          x: 50,
          duration: 0.2,
          stagger: 0.05,
        });
      }
    }
  }, [isMenuOpen]);

  // Hamburger animation
  useEffect(() => {
    if (hamburgerRef.current) {
      const lines = hamburgerRef.current.querySelectorAll("span");

      if (isMenuOpen) {
        gsap.to(lines[0], { rotate: 45, y: 8, duration: 0.3, ease: "power2.out" });
        gsap.to(lines[1], { opacity: 0, duration: 0.2, ease: "power2.out" });
        gsap.to(lines[2], { rotate: -45, y: -8, duration: 0.3, ease: "power2.out" });
      } else {
        gsap.to(lines[0], { rotate: 0, y: 0, duration: 0.3, ease: "power2.out" });
        gsap.to(lines[1], { opacity: 1, duration: 0.2, ease: "power2.out" });
        gsap.to(lines[2], { rotate: 0, y: 0, duration: 0.3, ease: "power2.out" });
      }
    }
  }, [isMenuOpen]);

  const scrollToSection = useCallback((hash: string) => {
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <nav
        ref={navbarRef}
        className="fixed top-0 left-0 right-0 z-50 h-20"
        style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
      >
        <div
          ref={gradientOverlayRef}
          className="absolute inset-0 bg-gradient-to-r from-primary to-secondary"
          style={{ opacity: 0 }}
        />

        <div className="container mx-auto h-full px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <div ref={logoRef} className="flex items-center">
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/guayaba-cover.webp"
                  alt="Guayabadevs Logo"
                  width={180}
                  height={54}
                  className="h-12 w-auto sm:h-14"
                  priority
                />
              </Link>
            </div>

            {/* Desktop nav with sliding pill indicator */}
            <nav
              ref={navContainerRef}
              className="hidden lg:flex items-center gap-1 relative"
            >
              {/* Sliding pill background */}
              <div
                ref={indicatorRef}
                className="absolute top-0 h-full rounded-full pointer-events-none"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  opacity: 0,
                }}
              />

              {navLinks.map((link) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    data-section={sectionId}
                    className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                      isActive ? "text-white" : "text-white/70 hover:text-white"
                    }`}
                    onClick={(event) => {
                      event.preventDefault();
                      scrollToSection(link.href);
                    }}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Hamburger */}
            <button
              ref={hamburgerRef}
              onClick={toggleMenu}
              className="lg:hidden relative w-10 h-10 flex flex-col justify-center items-center gap-1.5 z-50"
              aria-label="Toggle menu"
            >
              <span className="w-6 h-0.5 bg-white transition-all duration-300 origin-center" />
              <span className="w-6 h-0.5 bg-white transition-all duration-300" />
              <span className="w-6 h-0.5 bg-white transition-all duration-300 origin-center" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        ref={menuRef}
        className="fixed top-0 right-0 h-screen w-80 max-w-[85vw] bg-gradient-to-br from-background via-background/95 to-background/90 backdrop-blur-xl z-40 lg:hidden shadow-2xl"
        style={{ transform: "translateX(100%)" }}
      >
        <div className="flex flex-col h-full pt-24 px-6">
          <ul className="flex flex-col gap-2 mt-8">
            {navLinks.map((link, index) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <li
                  key={link.href}
                  ref={(el) => {
                    if (el) menuItemsRef.current[index] = el;
                  }}
                  className="opacity-0"
                >
                  <a
                    href={link.href}
                    onClick={(event) => {
                      event.preventDefault();
                      scrollToSection(link.href);
                      setIsMenuOpen(false);
                    }}
                    className={`flex items-center gap-3 py-4 px-4 text-lg font-semibold rounded-2xl transition-all duration-200 ${
                      isActive
                        ? "text-white bg-white/10"
                        : "text-white/60 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {isActive && (
                      <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    )}
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="mt-auto mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mb-6" />
            <div className="text-center">
              <p className="text-white/60 text-sm mb-4">Guayabadevs</p>
              <p className="text-white/40 text-xs">
                Creando desarrolladores fructíferos
              </p>
            </div>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 lg:hidden"
          onClick={toggleMenu}
        />
      )}
    </>
  );
};
