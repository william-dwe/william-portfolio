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

const aboutmeSubSection = () => {
  return <div className="relative grid grid-cols-12 gap-y-2 gap-x-5 lg:mt-[10vh]">
    <div dir="rtl" className="rtl col-start-2 col-span-10 lg:col-start-2 lg:col-span-5">
      <div className="relative lg:top-[5vh]">
        <AboutText/>
      </div>
    </div>
    <div className='col-start-2 col-span-10 lg:col-start-7 lg:col-span-5'>
      <EducationTimeline/>
    </div>
  </div>
}


const timelineSubSection = ((isShowingModel) => {
  return <div className="grid grid-cols-12 gap-y-2 mt-[5vh] pb-[10vh]">
    <div className={"col-start-2 col-span-10" + (isShowingModel ? " lg:col-start-2 lg:col-span-4" : "")}>
      <div className='relative'>
        <ExperienceTimeline/>
      </div>
    </div>
    <div dir={(isShowingModel ? "rtl" : "")} className={"col-start-2 col-span-10" + (isShowingModel ? " rtl lg:col-start-8 lg:col-span-4 lg:mt-[15vh]": "")}>
      <div className={"relative" + (isShowingModel ? "lg:top-[15vh]" : "")}>
        <InternshipTimeline/>
      </div>
    </div>
  </div>
})

const AboutSection = ({isParalax=true, isShowingModel=true}) => {
  let titleProps = {
    headerContent:"This is",
    headerContentUnderline:"my Build",
    subHeaderContent:"<William's character profile/>",
    titleHeight:"15vh"
  }

  const experienceRef = useRef(null);
  const experienceScroll = useScroll({
    target: experienceRef,
    offset: ['start 0.6', 'end 0.3']
  })
  const experienceOpacityScale = useTransform(experienceScroll.scrollYProgress, [0, 0.15, 0.8, 1], [0, 1, 1, 0])

  const aboutmeRef = useRef(null);
  const aboutmeScroll = useScroll({
    target: aboutmeRef,
    offset: ['start 0.6', 'end 0.3']
  })
  const aboutmeOpacityScale = useTransform(aboutmeScroll.scrollYProgress, [0, 0.15, 0.8, 1], [0, 1, 1, 0])

  return (
    <section className={`
      relative
      text-white
      bg-gradient-radial from-black to-gray-600
      animate-gradient-xy
      `} id="About"
    >
      <div className={isShowingModel ? "sticky top-0 h-[15vh] mb-[-15vh]" : ""}>
        <SectionTitle {...titleProps}/>
      </div>
 
      {isShowingModel ?
      <div className="relative w-full h-[100vh] lg:sticky lg:top-0">
        <LazyHeroImagery/>  
      </div>
      : ""}

      <div className={isShowingModel ? "lg:h-[50vh] w-full" : ""}/> 

      <div ref={aboutmeRef} className="relative lg:mb-[5vh]">
        {isShowingModel ?
        <motion.div  
          style={{ opacity: aboutmeOpacityScale }}  
          className="z-0 pointer-events-none backdrop-blur-[16px] backdrop-brightness-75 fixed inset-0 transition-opacity duration-100"  
        />
        :""}
        {aboutmeSubSection()}
        <AboutStats/>
      </div>

      <div className={isShowingModel ? "lg:h-[100vh] w-full" : ""}/> 

      <div ref={experienceRef} className='h-full relative'>
        {isShowingModel ?
        <motion.div  
          style={{ opacity: experienceOpacityScale }}  
          className="z-0 pointer-events-none backdrop-blur-[16px] backdrop-brightness-75 fixed inset-0 transition-opacity duration-100"  
        />
        :""}
        {timelineSubSection(isShowingModel)}
      </div>

      <div className={isShowingModel ? "lg:h-[100vh] w-full" : ""}/>
    </section>
  );
};

export default AboutSection;
