"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "#nosotros", label: "Nosotros" },
  { href: "#servicios", label: "Miembros" },
  { href: "#contacto", label: "Newsletter" },
  { href: "#posts", label: "Posts" },
  { href: "#faq", label: "FAQ" },
];

export const NavbarTop = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbarRef = useRef<HTMLElement>(null);
  const gradientOverlayRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuItemsRef = useRef<HTMLLIElement[]>([]);

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

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);

  useEffect(() => {
    if (logoRef.current) {
      gsap.fromTo(
        logoRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.2 }
      );
    }

    const navLinksElements = navbarRef.current?.querySelectorAll("nav a");
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

  useEffect(() => {
    if (menuRef.current) {
      if (isMenuOpen) {
        gsap.fromTo(
          menuRef.current,
          { x: "100%" },
          {
            x: 0,
            duration: 0.4,
            ease: "power3.out",
          }
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

  useEffect(() => {
    if (hamburgerRef.current) {
      const lines = hamburgerRef.current.querySelectorAll("span");

      if (isMenuOpen) {
        gsap.to(lines[0], {
          rotate: 45,
          y: 8,
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(lines[1], {
          opacity: 0,
          duration: 0.2,
          ease: "power2.out",
        });
        gsap.to(lines[2], {
          rotate: -45,
          y: -8,
          duration: 0.3,
          ease: "power2.out",
        });
      } else {
        gsap.to(lines[0], {
          rotate: 0,
          y: 0,
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(lines[1], {
          opacity: 1,
          duration: 0.2,
          ease: "power2.out",
        });
        gsap.to(lines[2], {
          rotate: 0,
          y: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav
        ref={navbarRef}
        className="fixed top-0 left-0 right-0 z-50 h-20"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0)",
        }}
      >
        <div
          ref={gradientOverlayRef}
          className="absolute inset-0 bg-gradient-to-r from-primary to-secondary"
          style={{ opacity: 0 }}
        />

        <div className="container mx-auto h-full px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center justify-between h-full">
            <div ref={logoRef} className="flex items-center">
              <Link href="/" className="flex items-center">
                <Image
                  src="images/guayaba-cover.png"
                  alt="Guayabadevs Logo"
                  width={180}
                  height={54}
                  className="h-12 w-auto sm:h-14"
                  priority
                />
              </Link>
            </div>

            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-white font-medium text-base hover:text-primary transition-colors duration-300 group"
                  onMouseEnter={(e) => {
                    gsap.to(e.currentTarget, {
                      scale: 1.05,
                      duration: 0.2,
                      ease: "power2.out",
                    });
                  }}
                  onMouseLeave={(e) => {
                    gsap.to(e.currentTarget, {
                      scale: 1,
                      duration: 0.2,
                      ease: "power2.out",
                    });
                  }}
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            <button
              ref={hamburgerRef}
              onClick={toggleMenu}
              className="lg:hidden relative w-10 h-10 flex flex-col justify-center items-center gap-1.5 z-50 group"
              aria-label="Toggle menu"
            >
              <span className="w-6 h-0.5 bg-white transition-all duration-300 origin-center" />
              <span className="w-6 h-0.5 bg-white transition-all duration-300" />
              <span className="w-6 h-0.5 bg-white transition-all duration-300 origin-center" />
            </button>
          </div>
        </div>
      </nav>

      <div
        ref={menuRef}
        className="fixed top-0 right-0 h-screen w-80 max-w-[85vw] bg-gradient-to-br from-background via-background/95 to-background/90 backdrop-blur-xl z-40 lg:hidden shadow-2xl"
        style={{ transform: "translateX(100%)" }}
      >
        <div className="flex flex-col h-full pt-24 px-6">
          <ul className="flex flex-col gap-2 mt-8">
            {navLinks.map((link, index) => (
              <li
                key={link.href}
                ref={(el) => {
                  if (el) menuItemsRef.current[index] = el;
                }}
                className="opacity-0"
              >
                <Link
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-4 px-4 text-xl font-semibold text-white hover:text-primary transition-colors duration-300 rounded-lg hover:bg-white/5 relative overflow-hidden group"
                  onMouseEnter={(e) => {
                    gsap.to(e.currentTarget, {
                      x: 10,
                      duration: 0.2,
                      ease: "power2.out",
                    });
                  }}
                  onMouseLeave={(e) => {
                    gsap.to(e.currentTarget, {
                      x: 0,
                      duration: 0.2,
                      ease: "power2.out",
                    });
                  }}
                >
                  <span className="relative z-10">{link.label}</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </li>
            ))}
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
