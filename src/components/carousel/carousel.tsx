"use client";
import React from "react";
import { Carousel, Card } from "./apple-cards-carousel";
import {
  IconBrandInstagram,
  IconBrandGithub,
  IconBrandLinkedin,
} from "@tabler/icons-react";

export function CarouselTeam() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full">
      <Carousel items={cards} />
    </div>
  );
}

const data = [
  {
    category: "Full Stack Developer",
    title: "Josafat Jimenez",
    src: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/josa-perfil.jpg`,
    socialLinks: [
      { icon: <IconBrandGithub />, url: "https://github.com/josafatjimenezB" },
      {
        icon: <IconBrandLinkedin />,
        url: "https://www.linkedin.com/in/josafat-jimenez/",
      },
      {
        icon: <IconBrandInstagram />,
        url: "https://www.instagram.com/h4rt0ch/",
      },
    ],
  },
  {
    category: "Full Stack Developer",
    title: "Ivan Ramirez",
    src: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/ivan-perfil.jpeg`,
    socialLinks: [
      { icon: <IconBrandGithub />, url: "https://github.com/Texhnolyze47" },
      {
        icon: <IconBrandLinkedin />,
        url: "https://www.linkedin.com/in/ivan-ramirezu/",
      },
    ],
  },
  {
    category: "Full Stack Developer & Mobile",
    title: "Ian Vega",
    src: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/ian-perfil.jpg`,
    socialLinks: [
      { icon: <IconBrandGithub />, url: "https://github.com/joh" },
      {
        icon: <IconBrandLinkedin />,
        url: "https://www.linkedin.com/in/lann892/",
      },
      {
        icon: <IconBrandInstagram />,
        url: "https://www.instagram.com/lannv891/",
      },
    ],
  },
  {
    category: "Software Developer",
    title: "Pablo Aguilar",
    src: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/pablo-perfil.jpg`,
    socialLinks: [
      { icon: <IconBrandGithub />, url: "https://github.com/JuanPablo-Coder" },
      {
        icon: <IconBrandLinkedin />,
        url: "https://www.linkedin.com/in/juan-bablo-rodriguez-aguilar-1b7633295/",
      },
      {
        icon: <IconBrandInstagram />,
        url: "https://www.instagram.com/pablo_roab/",
      },
    ],
  },
  {
    category: "Diseño Gráfico",
    title: "Atenea Aguilar",
    src: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/ate-perfil.jpeg`,
    socialLinks: [
      {
        icon: <IconBrandLinkedin />,
        url: "https://www.linkedin.com/in/atenea-oishy-rodríguez-aguilar-097905147/",
      },
      {
        icon: <IconBrandInstagram />,
        url: "https://www.instagram.com/kimdan.roasb/",
      },
    ],
  },
  {
    category: "Marketing",
    title: "Miker Gutierrez",
    src: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/mike-perfil.jpeg`,
    socialLinks: [
      {
        icon: <IconBrandLinkedin />,
        url: "https://www.linkedin.com/in/erick-gutierrez/",
      },
      {
        icon: <IconBrandInstagram />,
        url: "https://www.instagram.com/miker_xn/",
      },
    ],
  },
];
