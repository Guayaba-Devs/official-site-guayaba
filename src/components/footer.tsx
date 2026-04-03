"use client";

import { useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { IconBrandGithub, IconBrandInstagram, IconBrandWhatsapp } from "@tabler/icons-react";

import { navLinks } from "@/components/navbar";

const WHATSAPP_LINK =
  "https://chat.whatsapp.com/JS7LnHo93jg0Rj6mDesFpI?mode=gi_t";

const socialMedia = [
  {
    icon: IconBrandGithub,
    link: "https://github.com/Guayaba-Devs",
    label: "GitHub",
  },
  {
    icon: IconBrandInstagram,
    link: "https://www.instagram.com/guayaba_devs_official/",
    label: "Instagram",
  },
  {
    icon: IconBrandWhatsapp,
    link: WHATSAPP_LINK,
    label: "WhatsApp",
  },
];

export const Footer = () => {
  const pathname = usePathname();
  const router = useRouter();

  const scrollToSection = useCallback((href: string) => {
    const hash = href.replace("/", "");
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (pathname !== "/") {
      router.push(href);
    }
  }, [pathname, router]);

  return (
    <footer className="relative overflow-hidden bg-background py-16 md:py-20">
      {/* Subtle top glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute left-1/2 -translate-x-1/2 top-0 h-40 w-96 bg-primary/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-5">
            <div className="relative h-14 w-36 overflow-hidden">
              <Image
                src="/images/guayaba-cover.webp"
                alt="Guayaba Devs Logo"
                fill
                sizes="144px"
                className="object-contain bg-white rounded-lg p-1"
                loading="lazy"
              />
            </div>
            <p className="max-w-xs text-sm text-gray-400 leading-relaxed">
              Comunidad que impulsa talento tech en LATAM a través de eventos,
              mentorías y proyectos reales.
            </p>
            <div className="flex items-center gap-2.5">
              {socialMedia.map((social) => (
                <a
                  key={social.link}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition-all duration-200 hover:border-white/20 hover:bg-white/10 hover:text-white"
                  aria-label={social.label}
                >
                  <social.icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div className="space-y-5">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Explorar
            </h3>
            <ul className="flex flex-wrap gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(event) => {
                      event.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="inline-flex rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-sm text-gray-400 transition-all duration-200 hover:border-white/15 hover:bg-white/[0.06] hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-5">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Conéctate
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              ¿Quieres colaborar o invitar a Guayaba Devs? Escríbenos.
            </p>
            <a
              href="mailto:contacto@guayabadev.com"
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-5 py-2.5 text-sm font-medium text-primary transition-all duration-200 hover:bg-primary/15 hover:border-primary/30"
            >
              contacto@guayabadev.com
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.06] bg-white/[0.02] px-3 py-1">
                Puebla
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.06] bg-white/[0.02] px-3 py-1">
                CDMX
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.06] bg-white/[0.02] px-3 py-1">
                Chiapas
              </span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 text-center text-xs text-gray-500 sm:flex-row sm:text-left">
          <span>
            © {new Date().getFullYear()} Guayaba Devs. Hecho con cariño por la
            comunidad.
          </span>
          <button
            onClick={() => scrollToSection("/#hero")}
            className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-xs text-gray-400 transition-all duration-200 hover:border-white/15 hover:bg-white/[0.06] hover:text-white"
          >
            Volver arriba
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};
