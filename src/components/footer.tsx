"use client";
import Image from "next/image";
import { Github, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-900 py-8 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-center">
        {/* Logo y descripción */}
        <div className="flex flex-col items-center md:items-start">
          <Image
            src="/images/guayaba-cover.png"
            alt="Guayaba Devs Logo"
            width={150}
            height={80}
            className="mb-4"
          />
          <p className="text-sm text-gray-700 text-center md:text-left">
            Comunidad de desarrolladores que conectan, colaboran y aprenden
            juntos.
          </p>
        </div>

        {/* Links rápidos */}
        <div className="flex flex-col space-y-2 text-center md:text-left">
          <h3 className="text-lg font-semibold text-primary">Enlaces</h3>
          <a href="#" className="hover:text-primary transition">
            Inicio
          </a>
          <a href="#" className="hover:text-primary transition">
            Blog
          </a>
          <a href="#" className="hover:text-primary transition">
            Eventos
          </a>
          <a href="#" className="hover:text-primary transition">
            Contacto
          </a>
        </div>

        {/* Redes Sociales */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold text-primary">Síguenos</h3>
          <div className="flex space-x-4 mt-2">
            <a
              href="https://github.com/Guayaba-Devs"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.instagram.com/guayaba_devs_official/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition"
            >
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Línea divisoria */}
      <div className="border-t border-gray-300 my-6"></div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Guayaba Devs. Todos los derechos
        reservados.
      </div>
    </footer>
  );
};

export default Footer;
