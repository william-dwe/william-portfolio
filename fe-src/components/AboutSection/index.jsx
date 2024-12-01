"use client";
import dynamic from 'next/dynamic'
import { useScroll, useTransform, motion } from 'framer-motion';
import React, {useRef} from "react";
import AboutText from "./AboutText";
import AboutStats from "./AboutStats"
import EducationTimeline from "./AboutTimeline/EducationTimeline";
import ExperienceTimeline from "./AboutTimeline/ExperienceTimeline";
import InternshipTimeline from "./AboutTimeline/InternshipTimeline";
import SectionTitle from "../SectionTitle"
import HeroImageryLoading from "./HeroImagery/HeroImageryLoading";

const LazyHeroImagery = dynamic(() => import('./HeroImagery'), {
  ssr: false,
  loading: () => <HeroImageryLoading />
})

const AboutSection = () => {
  let titleProps = {
    headerContent:"This is",
    headerContentUnderline:"my build",
    subHeaderContent:"<William's character profile/>",
    titleHeight:"15vh"
  }

  const experienceRef = useRef(null);
  const experienceScroll = useScroll({
    target: experienceRef,
    offset: ['start 0.6', 'end 0.3']
  })
  const opacityScale = useTransform(experienceScroll.scrollYProgress, [0, 0.15, 0.8, 1], [0, 1, 1, 0])

  return (
    <section className="
      h-[450vh]
      relative
      text-white
      bg-[#202023]
      mb-[-100vh]
      " id="about"
    >
      <div className="sticky top-0 h-[15vh]">
        <SectionTitle {...titleProps}/>
      </div>
      <div className="relative lg:mb-[5vh]">
        <div className="relative grid grid-cols-12 gap-y-2 gap-x-5 lg:mt-[10vh]">
          <div dir="rtl" className="rtl col-start-2 col-span-10 lg:col-start-2 lg:col-span-5">
            <div className="relative lg:top-[5vh]">
              <AboutText/>
            </div>
          </div>
          <div className='col-start-2 col-span-10 lg:col-start-7 lg:col-span-5'>
            <EducationTimeline/>
          </div>
        </div>
      </div>
      
      <AboutStats/>

      <div className="relative w-full h-[100vh] lg:sticky lg:top-0 lg:h-[100vh]">
        <LazyHeroImagery/>
      </div>

      <div ref={experienceRef} className={`
        h-auto
        relative
      `}>
        <motion.div  
          style={{ opacity: opacityScale }}  
          className="z-0 pointer-events-none backdrop-blur-[16px] backdrop-brightness-75 fixed inset-0 transition-opacity duration-100"  
        />  
        <div className="grid grid-cols-12 gap-y-2 mt-[5vh]">
          <div className="col-start-2 col-span-10 lg:col-start-2 lg:col-span-4 lg:mt-[10vh]">
            <div className='relative'>
              <ExperienceTimeline/>
            </div>
          </div>
          <div dir="rtl" className="rtl col-start-2 col-span-10 lg:col-start-8 lg:col-span-4">
            <div className="relative lg:top-[15vh]">
              <InternshipTimeline/>
            </div>
          </div>
        </div>
      </div>
      <div className="
        lg:h-[100vh]
        w-full
        absolute
        bottom-0
        bg-black
      "></div>
    </section>
  );
};

export default AboutSection;
