"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Button, Input } from "@nextui-org/react";
import Image from "next/image";
import { staggerContainer, fadeIn, slideIn, zoomIn } from "@/utils/motion";

export const Newsletter = () => {
  const [email, setEmail] = useState("");

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
            <Card
              className="bg-gradient-to-br from-gray-900 to-black border border-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-2xl"
              isHoverable
            >
              <CardHeader className="flex flex-col items-start gap-2">
                <h4 className="text-2xl md:text-3xl font-semibold text-white">
                  Nuestro Newsletter
                </h4>
                <p className="text-gray-400 text-lg">
                  Recibe actualizaciones exclusivas directamente en tu inbox
                </p>
              </CardHeader>

              <CardBody>
                <motion.div whileHover={{ scale: 1.02 }}>
                  <Input
                    label="Email"
                    labelPlacement="outside"
                    size="lg"
                    value={email}
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tucorreo@ejemplo.com"
                    classNames={{
                      input: "text-lg",
                      label: "text-gray-300 text-lg",
                    }}
                    variant="faded"
                    color="primary"
                  />
                </motion.div>
              </CardBody>

              <CardFooter>
                <motion.div
                  className="w-full"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Button
                    fullWidth
                    size="lg"
                    className="text-lg font-semibold bg-gradient-to-r from-primary to-secondary text-white shadow-lg"
                  >
                    Suscribirse Ahora
                    <svg
                      className="w-5 h-5 ml-2"
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
                  </Button>
                </motion.div>
              </CardFooter>
            </Card>
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
    </motion.section>
  );
};
