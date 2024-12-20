"use client";
import React from "react";
import { Carousel, Card } from "./apple-cards-carousel";
import {
  IconBrandInstagram,
  IconBrandGithub,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import { icons } from "lucide-react";

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
    src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    socialLinks: [
      { icon: <IconBrandGithub />, url: "https://github.com/john" },
      { icon: <IconBrandLinkedin />, url: "https://facebook.com/john" },
      { icon: <IconBrandInstagram />, url: "https://instagram.com" },
    ],
  },
  {
    category: "Full Stack Developer & Mobile",
    title: "Ian Vega",
    src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    socialLinks: [
      { icon: <IconBrandGithub />, url: "https://github.com/john" },
      { icon: <IconBrandLinkedin />, url: "https://facebook.com/john" },
      {
        icon: <IconBrandInstagram />,
        url: "https://www.instagram.com/pablo_roab/",
      },
    ],
  },
  {
    category: "Diseño Gráfico",
    title: "Atenea Aguilar",
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    socialLinks: [
      { icon: <IconBrandLinkedin />, url: "https://facebook.com/john" },
      { icon: <IconBrandInstagram />, url: "https://instagram.com" },
    ],
  },
  {
    category: "Marketing",
    title: "Miker Gutierrez",
    src: "/mike-perfil.jpeg",
    socialLinks: [
      { icon: <IconBrandLinkedin />, url: "https://facebook.com/john" },
      { icon: <IconBrandInstagram />, url: "https://instagram.com" },
    ],
  },
];
