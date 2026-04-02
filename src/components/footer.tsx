"use client";

import { useCallback } from "react";
import Image from "next/image";
import { Github, Instagram } from "lucide-react";

import { navLinks } from "@/components/navbar";

const socialMedia = [
  {
    icon: Github,
    link: "https://github.com/Guayaba-Devs",
    label: "GitHub",
  },
  {
    icon: Instagram,
    link: "https://www.instagram.com/guayaba_devs_official/",
    label: "Instagram",
  },
];

export const Footer = () => {
  const scrollToSection = useCallback((hash: string) => {
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <footer className="relative overflow-hidden bg-white py-16 text-gray-900">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-white/80" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="space-y-4">
            <div className="relative h-16 w-40 overflow-hidden rounded-3xl bg-white ">
              <Image
                src="/images/guayaba-cover.webp"
                alt="Guayaba Devs Logo"
                fill
                className="object-contain p-1"
                loading="lazy"
              />
            </div>
            <p className="max-w-xs text-sm text-gray-600">
              Comunidad que impulsa talento tech en LATAM a través de eventos,
              mentorías y proyectos reales.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Explorar</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(event) => {
                      event.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="inline-flex items-center gap-2 rounded px-1 py-1 transition-colors hover:text-primary"
                  >
                    <span className="h-px w-4 bg-primary/40" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Conéctate</h3>
            <p className="text-sm text-gray-600">
              ¿Quieres colaborar o invitar a Guayaba Devs? Escríbenos:
              <br />
              <a
                href="mailto:contacto@guayabadev.com"
                className="text-primary hover:underline"
              >
                contacto@guayabadev.com
              </a>
            </p>
            <div className="flex items-center gap-4">
              {socialMedia.map((social) => (
                <a
                  key={social.link}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-gray-200 bg-white p-3 text-gray-700 transition hover:border-primary/40 hover:text-primary"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="my-10 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

        <div className="flex flex-col items-center justify-between gap-4 text-center text-xs text-gray-500 sm:flex-row sm:text-left">
          <span>
            © {new Date().getFullYear()} Guayaba Devs. Hecho con cariño por la
            comunidad.
          </span>
          <div className="flex items-center gap-3 text-xs text-gray-400">
            <a
              href="#hero"
              onClick={(event) => {
                event.preventDefault();
                scrollToSection("#hero");
              }}
              className="hover:text-primary"
            >
              Arriba ↑
            </a>
            <span className="h-1 w-1 rounded-full bg-gray-300" />
            <span>Puebla · Chiapas · CDMX</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
