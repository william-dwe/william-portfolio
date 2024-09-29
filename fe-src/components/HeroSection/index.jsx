"use client";
import React from "react";
import HeroTitle from "./HeroTitle";
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

const HeroSection = () => {
  const container = useRef();
    const { scrollYProgress } = useScroll({
      target: container,
      offset: ['start start', 'end start']
    })

    const top = useTransform(scrollYProgress, [0, 1], ["0vh", "-300vh"])

  return (
    <section ref={container} className="
      h-screen w-screen
      overflow-hidden
      bg-gradient-radial from-gray-800 via-p2 to-black
      animate-gradient-xy
    ">
      <div className="relative h-full w-full flex flex-col items-center justify-between">
        <HeroTitle/>
      </div>
    </section>
  );
};

export default HeroSection;
