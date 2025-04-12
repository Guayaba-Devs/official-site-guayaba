"use client";
import { motion } from "framer-motion";
import Marquee from "./marquee";
import { fadeIn, staggerContainer, textVariant } from "@/utils/motion";

interface Logo {
  src: string;
  alt: string;
}

export const LogoSection = () => {
  const logos: Logo[] = [
    {
      src: `images/NAO_Tecmilenio.png`,
      alt: "Digital Nao Logo",
    },
    {
      src: `images/github-campus-experts.svg`,
      alt: "Github Campus Experts Logo",
    },
    {
      src: `images/backpack.png`,
      alt: "Student Developer Pack",
    },
    {
      src: `images/notion-logo.png`,
      alt: "Notion",
    },
  ];

  return (
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="w-full bg-gradient-to-r from-primary to-secondary py-8 md:py-12 overflow-x-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={textVariant(0.5)}
          className="text-center mb-8 md:mb-12"
        >
          <motion.h2
            variants={fadeIn("up", "spring", 0.2, 1)}
            className="text-3xl font-bold md:text-4xl lg:text-5xl mb-4 text-white"
          >
            Con el respaldo de líderes en la industria
          </motion.h2>
          <motion.p
            variants={fadeIn("up", "spring", 0.4, 1)}
            className="text-lg md:text-xl text-gray-200 mt-4 max-w-2xl mx-auto"
          >
            Juntos fortalecemos la innovación y el crecimiento de la comunidad
            tecnológica
          </motion.p>
        </motion.div>
      </div>

      <motion.div
        variants={fadeIn("up", "tween", 0.6, 1)}
        className="relative w-full  py-6"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 animate-marquee via-transparent to-secondary/30 z-20" />

        <Marquee speed={45} gradient={false}>
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="inline-block mx-4 md:mx-8 px-2 py-3 rounded-xl"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-12 md:h-16 w-auto max-w-[160px] md:max-w-[350px] object-contain hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          ))}
        </Marquee>
      </motion.div>
    </motion.div>
  );
};
