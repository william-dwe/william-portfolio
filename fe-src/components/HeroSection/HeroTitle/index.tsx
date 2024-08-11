"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

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
        {/* <div>
        <Link
            href="/#contact"
            className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
        >
            Contact Me
        </Link>
        <Link
            href="/"
            className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
        >
            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
            Download CV
            </span>
        </Link>
        </div>  */}
    </motion.div>
  );
};

export default HeroTitle;
