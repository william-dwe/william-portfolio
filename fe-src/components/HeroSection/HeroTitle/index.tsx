"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroTitle = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="
        w-10/12 md:w-9/12 lg:w-7/12
      "
    >
      <h2 className="flex justify-center my-1 lg:my-2">
        <span className="
          text-[#ADB7BE] font-mono
          text-xs md:text-base lg:text-xl
          max-w-[80vw] lg:max-w-[40vw]
        ">
          I&apos;m William Wibowo, a <span className="font-bold underline">Data Engineer</span>. Ready to
        </span>
        <br/>
      </h2>
      

      <h1 className="
        flex
        flex-col
        items-center
        text-white font-extrabold 
        text-3xl md:text-4xl lg:text-7xl xl:text-9xl
        lg:leading-loose
        my-1 lg:my-2
      ">
        <span className="
          text-transparent 
          text-center
          max-w-[90vw] lg:max-w-[70vw]
          bg-clip-text bg-gradient-to-r from-p2 to-p3"
        >
          <span className="my-1 lg:my-2">Crafting Intelligent</span>
          <br/>
          <TypeAnimation
            sequence={[
            "Data Platform",
            300,
            "Data Warehouse",
            300,
            "Data Solutions",
            300,
            ]}
            wrapper="span"
            speed={50}
            preRenderFirstString={false}
          />
        </span>
      </h1>
      <p className="
        flex
        justify-center
        mb-1
        text-[#ADB7BE] font-mono
        text-xs md:text-base lg:text-xl
      ">
        <span className="text-center max-w-[80vw] lg:max-w-[50vw]">
        Building and optimizing ETL pipelines, data ingestions, data warehouses, data qualities, and data platforms to enable a better data processing and analysis
        </span>
      </p>
      {/* <AboutMeButton/> */}
    </motion.div>
  );
};

export default HeroTitle;
