"use client";

import React from "react";
import { GlobeSection } from "./globe/globe";
import { InfoSection } from "./hero/infoSection";

export const Hero = () => {
  return (
    <div
      className=" bg-slate-800 relative flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-16 py-12 lg:py-20"
      style={{ minHeight: "calc(100vh - 70px)" }}
    >
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <InfoSection />
      </div>

      <div className="w-full lg:w-1/2 flex justify-center md:h-full">
        <GlobeSection />
      </div>
    </div>
  );
};
