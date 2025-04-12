"use client";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import Image from "next/image";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn, slideIn } from "@/utils/motion";

export const Events = () => {
  return (
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="w-full h-auto py-20 relative overflow-hidden"
    >
      <motion.h2
        variants={slideIn("left", "spring", 0.3, 1)}
        className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-12 text-center"
      >
        Nuestros Eventos
      </motion.h2>
      <motion.div
        variants={fadeIn("up", "spring", 3 * 0.2, 1)}
        whileHover={{ scale: 1.02 }}
      >
        <BentoGrid className="w-full mx-auto md:auto-rows-[22rem] gap-6 pb-[2%]">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              className={`${item.className} w-full h-full`}
              link={item.link}
            />
          ))}
        </BentoGrid>
      </motion.div>
    </motion.div>
  );
};

const ImageHeader1 = () => {
  return (
    <div className="flex flex-wrap md:flex-nowrap gap-2 md:gap-2 overflow-hidden">
      <div className="relative w-full md:w-1/3 h-full">
        <Image
          src="events/cinsoft1.webp"
          alt="Imagen 1"
          fill
          className="rounded-md object-cover"
        />
      </div>
      <div className="relative w-full md:w-1/3 h-40">
        <Image
          src="events/cinsoft2.webp"
          alt="Imagen 2"
          fill
          className="rounded-md object-cover"
        />
      </div>
      <div className="relative w-full md:w-1/3 h-40">
        <Image
          src="events/cinsoft3.webp"
          alt="Imagen 3"
          fill
          className="rounded-md object-cover"
        />
      </div>
    </div>
  );
};

const ImageHeader2 = () => {
  return (
    <div className="relative w-full h-48 md:h-64 lg:h-72 p-2">
      <Image
        src="events/guayabaday.webp"
        alt="Imagen 1"
        fill
        className="rounded-md object-cover"
      />
    </div>
  );
};

const ImageHeader3 = () => {
  return (
    <div className="relative w-full h-48 md:h-64 lg:h-72 p-2">
      <Image
        src="events/githubConnect.webp"
        alt="Imagen 1"
        fill
        className="rounded-md object-cover"
      />
    </div>
  );
};

const ImageHeader4 = () => {
  return (
    <div className="flex flex-wrap md:flex-nowrap gap-2 md:gap-4 p-2">
      <div className="relative w-full md:w-1/2 h-40">
        <Image
          src="events/compu-fest.webp"
          alt="Imagen 1"
          fill
          className="rounded-md object-cover"
        />
      </div>
      <div className="relative w-full md:w-1/2 h-40">
        <Image
          src="events/compu-fest2.webp"
          alt="Imagen 2"
          fill
          className="rounded-md object-cover"
        />
      </div>
    </div>
  );
};

const items = [
  {
    title: "CinSoft 4ta edición",
    description:
      "El pasado 30 de octubre, tuvimos el honor de representar a Guayaba Devs como comunidad en este increíble evento organizado en la Universidad Autónoma del Estado de Hidalgo (UAEH).",
    header: <ImageHeader1 />,
    className: "md:col-span-2",
    link: "https://www.instagram.com/p/DC-CDmFyz3r/?img_index=1",
  },
  {
    title: "Guayaba Day",
    description:
      "El pasado 12 de septiembre en la ESCIHU, reunimos a expertos en programación y desarrollo.",
    header: <ImageHeader2 />,
    className: "md:col-span-1",
    link: "https://www.instagram.com/p/DAcMD2eOW3B/?img_index=3",
  },
  {
    title: "Notion + GitHub Campus Connect",
    description:
      "Presentamos cómo las comunidades pueden usar Notion/GitHub y más novedades de Notion.",
    header: <ImageHeader3 />,
    className: "md:col-span-1",
    link: "https://www.instagram.com/p/C4l7mWsLsEP/?img_index=1",
  },
  {
    title: "Compu-Fest[0]",
    description:
      "Para nosotros que las personas conecten con aquellas que tienen pasiones parecidas resulta sumamente valioso...",
    header: <ImageHeader4 />,
    className: "md:col-span-2",
    link: "https://www.instagram.com/p/DBDJYa1OC5I/",
  },
];
