"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { staggerContainer, fadeIn, slideIn, zoomIn } from "@/utils/motion";
import toast, { Toaster } from "react-hot-toast";

export const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    toast.success("Proximamente disponible ;)");
  };

  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="mt-24 px-4 my-20 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <motion.div
        variants={zoomIn(0.3, 1)}
        className="absolute -top-32 -right-20 w-auto h-96 bg-primary/10 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h3
          variants={slideIn("left", "spring", 0.5, 1)}
          className="text-4xl py-4 md:text-6xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
        >
          Mantente Actualizado
        </motion.h3>

        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeIn("right", "spring", 0.5, 1)}>
            <div className="bg-gradient-to-br from-gray-900 to-black border border-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-2xl hover:shadow-primary/20 transition-all">
              <div className="flex flex-col items-start gap-2 mb-6">
                <h4 className="text-2xl md:text-3xl font-semibold text-white">
                  Nuestro Newsletter
                </h4>
                <p className="text-gray-400 text-lg">
                  Recibe actualizaciones exclusivas directamente en tu inbox
                </p>
              </div>

              <motion.div whileHover={{ scale: 1.02 }} className="mb-8">
                <label className="block text-gray-300 text-lg mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tucorreo@ejemplo.com"
                  className="w-full text-white px-4 py-3 text-lg bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                />
              </motion.div>

              {/* Botón */}
              <motion.div
                className="w-full"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <button
                  onClick={() => handleSubmit()}
                  className="w-full px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-primary to-secondary rounded-lg shadow-lg hover:shadow-primary/30 transition-all flex items-center justify-center gap-2"
                >
                  <span>Suscribirse Ahora</span>
                  <svg
                    className="w-5 h-5 animate-bounce-horizontal"
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
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            variants={slideIn("left", "spring", 0.8, 1)}
            className="relative w-full h-64 md:h-96"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-2xl" />
            <Image
              src="images/mascota.png"
              alt="mascota"
              fill
              className="object-contain hover:scale-105 transition-transform duration-300"
              quality={100}
              priority
            />
          </motion.div>
        </div>
      </div>
      <Toaster />
    </motion.section>
  );
};
