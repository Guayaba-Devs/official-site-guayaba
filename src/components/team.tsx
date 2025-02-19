import React from "react";
import { CarouselTeam } from "./carousel/carousel";

export const TeamSection = () => {
  return (
    <section id="members" className="w-full bg-black h-auto text-white flex flex-col items-end">
      <div className="w-full md:w-9/12 bg-gradient-to-r from-primary to-secondary mt-16 h-20 md:h-32 flex items-center content-start rounded-s-xl">
        <h2 className="text-xl md:text-5xl font-bold font-sans text-right ml-8">
          Miembros
        </h2>
      </div>
      <p className="w-full text-md md:w-9/12 my-8 md:mt-4 xl:mt-10 xl:text-xl text-right pr-4 md:pr-8 md:text-lg text-gray-200">
        Este es el equipo que hace posible Guayaba Devs. Un grupo de personas
        apasionadas que trabajan juntas para impulsar el conocimiento, la
        colaboración y la creatividad en nuestra comunidad.
      </p>
      <div className="w-full flex justify-end mb-14">
        <CarouselTeam />
      </div>
    </section>
  );
};
