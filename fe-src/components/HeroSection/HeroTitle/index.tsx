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
        className="col-span-6 place-self-center text-center sm:text-left justify-self-start"
    >
        <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
            Hello, I&apos;m{" "}
        </span>
        <br></br>
        <TypeAnimation
            sequence={[
            "William Wibowo",
            1000,
            "Data Engineer",
            1000,
            "Platform Engineer",
            1000,
            ]}
            wrapper="span"
            speed={25}
            repeat={Infinity}
        />
        </h1>
        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
        Full Stack Data & Platform Engineer from Indonesia, experienced in both developing & maintaining data platforms and ETL-ELT pipelines. Look forward to collaborate with you!
        </p>
        <AboutMeButton/>
    </motion.div>
  );
};

export default HeroTitle;
