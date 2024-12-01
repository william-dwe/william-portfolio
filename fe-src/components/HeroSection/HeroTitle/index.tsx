"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import AboutMeButton from '../AboutMeButton';

const HeroTitle = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="
        w-10/12 md:w-9/12 lg:w-7/12
        my-auto
        text-left
      "
    >
      <span className="
        text-[#ADB7BE] 
        text-base md:text-lg lg:text-xl
        mb-6 
      ">
        Let me tell you a story about
      </span>
      <br/>
      <h1 className="
        mb-4
        text-white font-extrabold 
        text-3xl md:text-4xl lg:text-6xl 
        lg:leading-normal
      ">
        <span className="
          text-transparent 
          text-5xl md:text-7xl lg:text-9xl 
          bg-clip-text bg-gradient-to-r from-p2 to-p3"
        >
          William Wibowo
        </span>
        <br/>
        <span>The </span>
        <TypeAnimation
          sequence={[
          "Data Engineer",
          1000,
          "Platform Engineer",
          1000,
          "Full Stack Engineer",
          1000,
          ]}
          wrapper="span"
          speed={25}
          repeat={Infinity}
        />
      </h1>
      <p className="
        mb-6
        text-[#ADB7BE] 
        text-xs md:text-base lg:text-xl
      ">
      Full Stack Data & Platform Engineer, experienced in both developing and maintaining data platforms, covering end-to-end process of ETL-ELT pipelines. Look forward to collaborate with you!
      </p>
      <AboutMeButton/>
    </motion.div>
  );
};

export default HeroTitle;
