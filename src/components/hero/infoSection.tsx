import React from "react";
import { motion } from "framer-motion";

export const InfoSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className="text-center lg:text-left"
    >
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
        Bienvenido a <span className="text-blue-100">Guayaba Devs</span>
      </h1>
      <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-lg mx-auto lg:mx-0">
        Conectamos talento y oportunidades desde cualquier parte del mundo.
      </p>
      <div className="mt-6">
        <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-500 transition-transform transform hover:scale-105">
          Únete Ahora
        </button>
      </div>
    </motion.div>
  );
};
