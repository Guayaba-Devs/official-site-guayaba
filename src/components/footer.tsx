"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Github, Instagram } from "lucide-react";
import Particles from "./particles";
import { staggerContainer, fadeIn, slideIn } from "@/utils/motion";

const Footer = () => {
  return (
    <motion.footer
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="relative bg-gradient-to-br from-primary/10 to-secondary/10 py-12 overflow-hidden text-white"
    >
      <div className="absolute inset-0 z-0">
        <Particles
          quantity={30}
          color="bg-primary"
          className="opacity-10"
          speed={15}
          maxSize={2}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <motion.div
            variants={fadeIn("right", "spring", 0.3, 1)}
            className="flex flex-col items-center md:items-start space-y-4"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative w-40 h-20 bg-white/50 backdrop-blur-sm rounded-3xl shadow-lg"
            >
              <Image
                src="/images/guayaba-cover.png"
                alt="Guayaba Devs Logo"
                fill
                className="object-contain"
              />
            </motion.div>
            <p className="text-gray-300 text-center md:text-left text-sm lg:text-base max-w-xs">
              Comunidad de desarrolladores que conectan, colaboran y aprenden
              juntos.
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn("up", "spring", 0.5, 1)}
            className="flex flex-col items-center md:items-start space-y-3"
          >
            <h3 className="text-lg lg:text-xl font-bold bg-primary bg-clip-text text-transparent">
              Explorar
            </h3>
            {["Inicio", "Miembros", "NewsLetter", "Eventos"].map(
              (link, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ x: 5 }}
                  className="text-gray-300 hover:text-primary transition-colors text-sm lg:text-base"
                >
                  {link}
                </motion.a>
              )
            )}
          </motion.div>

          <motion.div
            variants={fadeIn("left", "spring", 0.7, 1)}
            className="flex flex-col items-center md:items-start space-y-4"
          >
            <h3 className="text-lg lg:text-xl bg-primary bg-clip-text text-transparent">
              Conéctate
            </h3>
            <div className="flex space-x-6 group">
              {[
                {
                  icon: Github,
                  link: "https://github.com/Guayaba-Devs",
                },
                {
                  icon: Instagram,
                  link: "https://www.instagram.com/guayaba_devs_official/",
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 group-hover:border-primary/30 transition-all"
                >
                  <social.icon className="w-6 h-6 text-gray-300 hover:text-primary" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={slideIn("left", "tween", 0.9, 1)}
          className="my-8 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
        />

        <motion.div
          variants={fadeIn("up", "tween", 1, 1)}
          className="text-center text-sm text-gray-300"
        >
          © {new Date().getFullYear()} Guayaba Devs. Todos los derechos
          reservados.
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
