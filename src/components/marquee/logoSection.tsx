import React from "react";
import Marquee from "./marquee";
import "./marquee.css";

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
    <div className="w-full bg-gray-900 text-white py-2 bg-gradient-to-r from-primary to-secondary">
      <div className="text-center mb-8 px-6 md:px-4">
        <h2 className="text-2xl font-bold md:text-4xl mb-4 md:mt-14">
          Con el respaldo de líderes en la industria
        </h2>
        <p className="text-lg mt-2 md:text-xl">
          Juntos fortalecemos la innovación y el crecimiento de la comunidad
          tecnológica
        </p>
      </div>
      <div className="overflow-hidden w-full py-5 h-20 marquee md:mb-4">
        <Marquee speed={50} gradient={"false"}>
          {logos.map((logo, index) => (
            <div key={index} className="inline-block mx-5 text-center">
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-12 md:h-16 object-contain grayscale-0 aspect-auto"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};
