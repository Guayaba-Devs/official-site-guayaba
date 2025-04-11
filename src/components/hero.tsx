"use client";

import { Image } from "@nextui-org/react";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn, zoomIn, textVariant } from "@/utils/motion";
import Particles from "./particles";

export const Hero = () => {
  return (
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="min-h-screen bg-background relative overflow-hidden font-sans"
    >
      <motion.div
        variants={zoomIn(0.5, 1)}
        className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-[3%]"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-10" />

      <div className="container mx-auto px-4 h-screen flex items-center justify-center">
        <div className="max-w-6xl w-full text-center relative z-20 px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={zoomIn(0.5, 1)}
            className="mx-auto mb-6 sm:mb-8 w-24 h-24 sm:w-32 sm:h-32 bg-primary-foreground rounded-full flex items-center justify-center shadow-2xl shadow-primary/30"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center">
              <Image
                className="w-full h-full object-cover"
                src="/images/mascota.png"
                alt="mascota guayabadevs"
              />
            </div>
          </motion.div>

          <motion.h1
            variants={textVariant(0.8)}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          >
            Guayabadevs
          </motion.h1>

          <motion.p
            variants={fadeIn("up", "spring", 1, 1)}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 sm:mb-12 font-medium max-w-2xl mx-auto px-2"
          >
            Creando desarrolladores{" "}
            <span className="text-primary font-bold">fructíferos</span>
          </motion.p>

          <motion.div
            variants={fadeIn("up", "spring", 1.2, 1)}
            className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4"
          >
            <a
              href="https://github.com/Guayaba-Devs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-bold transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-primary/20">
                <span>Únete a la comunidad</span>
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 animate-bounce-horizontal"
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
              href="https://www.instagram.com/guayaba_devs_official/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="border border-primary text-primary hover:bg-primary/5 px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-medium transition-all transform hover:scale-105 flex items-center justify-center gap-2">
                <span>Próximos eventos</span>
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
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
          </motion.div>
        </div>
      </div>

      <Particles
        quantity={window.innerWidth < 640 ? 15 : 30}
        maxSize={window.innerWidth < 640 ? 3 : 4}
        speed={12}
        className="hidden sm:block"
      />

      <motion.div
        variants={zoomIn(0.5, 1)}
        className="hidden sm:block absolute top-1/4 left-20 w-48 h-48 bg-primary rounded-full mix-blend-screen opacity-10 blur-3xl animate-float"
      />

      <motion.div
        variants={zoomIn(0.5, 1)}
        className="hidden sm:block absolute bottom-20 right-32 w-64 h-64 bg-secondary rounded-full mix-blend-screen opacity-10 blur-3xl animate-float-delayed"
      />
    </motion.div>
  );
};
