"use client";
import { motion } from "framer-motion";
import { CarouselTeam } from "./carousel/carousel";
import Particles from "./particles";
import { staggerContainer, fadeIn, slideIn } from "@/utils/motion";

export const TeamSection = () => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="w-full min-h-screen text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <Particles
          quantity={80}
          color="bg-secondary"
          className="opacity-30"
          speed={30}
          maxSize={4}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-black to-secondary/20 z-10" />

      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          variants={slideIn("left", "spring", 0.5, 1)}
          className="relative group mb-24"
        >
          <div className="absolute -inset-2 bg-gradient-to-r from-primary to-secondary blur-2xl opacity-30 group-hover:opacity-50 transition-all duration-500" />
          <div className="relative">
            <motion.h2
              variants={fadeIn("up", "spring", 0.3, 1)}
              className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
            >
              Miembros
            </motion.h2>
            <motion.p
              variants={fadeIn("up", "spring", 0.5, 1)}
              className="text-lg md:text-xl lg:text-2xl text-gray-300 mt-4 max-w-2xl"
            >
              El corazón palpitante de Guayabadevs. Conoce al equipo que está
              revolucionando la formación de desarrolladores.
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("up", "tween", 0.8, 1)}
          className="relative ml-[-5%] w-[110%]"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-secondary/30 blur-3xl rounded-xl" />
          <div className="relative backdrop-blur-lg border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
            <CarouselTeam />
          </div>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 1, 1)}
          className="hidden lg:block absolute top-1/3 -right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
        />
      </div>
    </motion.section>
  );
};
