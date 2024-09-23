"use client";
import React from "react";
import HeroTitle from "./HeroTitle";

const HeroSection = () => {
  return (
    <section className="
      flex flex-col items-center justify-between 
      min-h-screen p-12 lg:p-24 h-[90vh] lg:py-16
      bg-gradient-radial from-gray-800 via-secondary-900 to-black
      animate-gradient-xy
    ">
      {/* <div className="h-full"> */}
        <HeroTitle/>
      {/* </div> */}
    </section>
  );
};

export default HeroSection;
