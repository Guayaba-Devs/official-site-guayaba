"use client";

import { motion } from "framer-motion";

interface ParticlesProps {
  quantity?: number;
  color?: string;
  className?: string;
  maxSize?: number;
  minSize?: number;
  speed?: number;
}

const Particles = ({
  quantity = 30,
  color = "bg-primary",
  className = "",
  maxSize = 4,
  minSize = 1,
  speed = 10,
}: ParticlesProps) => {
  return (
    <div className={`absolute inset-0 z-0 ${className}`}>
      {[...Array(quantity)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute ${color} rounded-full`}
          style={{
            width: `${Math.random() * (maxSize - minSize) + minSize}px`,
            height: `${Math.random() * (maxSize - minSize) + minSize}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -150, 0],
            opacity: [0.8, 0],
          }}
          transition={{
            duration: speed + Math.random() * speed,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default Particles;
