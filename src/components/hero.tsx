"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { InfoSection } from "./hero/infoSection";

type Particle = {
  id: string;
  left: number;
  top: number;
};

export const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const codeSymbols = ["{ }", "< />", 'console.log("🍈");', "git commit"];
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setIsMounted(true);
    const generateParticles = () =>
      Array.from({ length: 20 }).map((_, i) => ({
        id: `particle-${i}`,
        left: Math.random() * 100,
        top: Math.random() * 100,
      }));
    setParticles(generateParticles());
  }, []);

  if (!isMounted) return null;

  return (
    <div
      className="bg-secondaryLight dark:bg-gradient-to-br dark:from-[hsl(var(--secondary))] dark:to-[hsl(var(--primary))] relative flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-20 lg:py-28 gap-8"
      style={{ minHeight: "calc(100vh - 70px)" }}
    >
      <div className="w-full lg:w-1/2 text-center lg:text-left space-y-8">
        <InfoSection />
      </div>

      <div className="w-full lg:w-1/2 flex justify-center h-[400px] lg:h-[600px]">
        <motion.div
          className="relative w-full max-w-xl h-full"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, type: "spring" }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--secondary)/0.2)] to-[hsl(var(--primary)/0.1)] dark:from-[hsl(var(--secondary)/0.4)] dark:to-[hsl(var(--primary)/0.3)] rounded-3xl shadow-lg backdrop-blur-xl border-2 border-[hsl(var(--border))]">
            <div className="absolute inset-0 flex items-center justify-center p-4 lg:p-8">
              <div className="text-3xl lg:text-5xl font-mono space-y-4 text-secondary dark:text-primary">
                {codeSymbols.map((text, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 0.9 }}
                    transition={{
                      delay: index * 0.3,
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "mirror",
                      ease: "easeInOut",
                    }}
                    whileHover={{ scale: 1.1 }}
                    className="cursor-pointer hover:text-[hsl(var(--secondary)/0.8)] dark:hover:text-[hsl(var(--primary)/0.8)] transition-all"
                  >
                    {text}
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="absolute inset-0 overflow-hidden rounded-3xl">
              {particles.map((particle) => (
                <motion.div
                  key={particle.id}
                  className="absolute w-2 h-2 bg-secondary/80 dark:bg-primary rounded-full z-20"
                  initial={{
                    opacity: 0,
                    x: Math.random() * 100 - 50,
                    y: Math.random() * 100 - 50,
                  }}
                  animate={{
                    opacity: [0, 0.8, 0],
                    scale: [1, 2, 1],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                  style={{
                    left: `${particle.left}%`,
                    top: `${particle.top}%`,
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
