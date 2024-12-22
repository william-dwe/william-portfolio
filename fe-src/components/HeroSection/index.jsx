"use client";
import React from "react";
import HeroTitle from "./HeroTitle";
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

const HeroSection = () => {
  return (
    <section className="
      h-screen
      overflow-hidden
      bg-gradient-radial from-black to-gray-800
      animate-gradient-xy
    " id="Home">
      <div className="relative h-full w-full flex flex-col items-center justify-between">
        <HeroTitle/>
      </div>
    </section>
  );
};

export default HeroSection;
