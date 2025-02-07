import React from "react";
import Globe from "./globeConfig";

export const GlobeSection = () => {
  return (
    <div className="relative flex size-full h-full items-center justify-center overflow-hidden rounded-lg px-40 pb-40 pt-8 md:pb-60 ">
      <Globe />
    </div>
  );
};
