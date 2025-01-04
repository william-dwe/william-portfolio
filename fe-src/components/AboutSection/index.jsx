"use client";
import dynamic from 'next/dynamic'
import React, { useState, useEffect} from "react";
import AboutText from "./AboutText";
import AboutStats from "./AboutStats"
import EducationTimeline from "./AboutTimeline/EducationTimeline";
import ExperienceTimeline from "./AboutTimeline/ExperienceTimeline";
import InternshipTimeline from "./AboutTimeline/InternshipTimeline";
import VoluntaryTimeline from "./AboutTimeline/VoluntaryTimeline";
import HeroImageryLoading from "./HeroImagery/HeroImageryLoading";
import BackdropBlurOnScroll from "./../BackdropBlurOnScroll"
import HeroTitle from "../HeroSection/HeroTitle"

const LazyHeroImagery = dynamic(() => import('./HeroImagery'), {
  ssr: false,
  loading: () => <HeroImageryLoading />
})

const aboutmeSubSection = ((direction) => {
  return <div className="relative grid grid-cols-12 gap-y-2 gap-x-5 lg:my-[10vh]">
    <div dir={direction} className="lg:rtl col-start-2 col-span-10 lg:col-start-2 lg:col-span-5">
      <div className="relative lg:top-[5vh]">
        <AboutText/>
      </div>
    </div>
    <div className='col-start-2 col-span-10 lg:col-start-7 lg:col-span-5'>
      <EducationTimeline/>
    </div>
  </div>
})


const timelineSubSection = ((direction, isShowingModel) => {
  if (!isShowingModel) {
    direction = "ltr"
  }
  return <div className="grid grid-cols-12 gap-y-2 mt-[5vh] pb-[10vh]">
    <div className={"col-start-2 col-span-10" + (isShowingModel ? " lg:col-start-2 lg:col-span-4" : "")}>
      <div className='relative'>
        <ExperienceTimeline/>
      </div>
    </div>
    <div dir={direction} className={"col-start-2 col-span-10" + (isShowingModel ? " lg:col-start-8 lg:col-span-4 lg:mt-[15vh]": "")}>
      <div className={"relative" + (isShowingModel ? "lg:top-[15vh]" : "")}>
        <InternshipTimeline direction={direction}/>
      </div>
    </div>

    {!isShowingModel ? (<div dir={direction} className="col-start-2 col-span-10">
      <div className="relative">
        <VoluntaryTimeline/>
      </div>
    </div>)
    : ""}
  </div>
})

const AboutSection = ({isShowingModel=true}) => {
  let titleProps = {
    headerContent:"This is",
    headerContentUnderline:"my Build",
    subHeaderContent:"<William's character profile/>",
    titleHeight:"15vh"
  }
  const [isBackdropBlur, setIsBackdropBlur] = useState(isShowingModel)
  const [direction, setDirection] = useState('ltr');
  useEffect(() => {
    const handleResize = () => {
      const isLg = window.matchMedia('(min-width: 1024px)').matches; // Mimic 'lg' breakpoint
      setDirection(isLg ? 'rtl' : 'ltr');
      setIsBackdropBlur(isLg ? isShowingModel : false)
    };

    // Initial check
    handleResize();

    // Listen for resize events
    window.addEventListener('resize', handleResize);

    // Clean up event listener
    return () => window.removeEventListener('resize', handleResize);
  }, [isShowingModel]);

  return (
      <section className={`
      relative
      text-white
      bg-gradient-radial from-black to-gray-600
      animate-gradient-xy
      `} id="About"
    >
      <div className="relative pt-[15vh] w-full flex justify-center items-center lg:mb-[-15vh]">
        <HeroTitle />
      </div>
 
      {isShowingModel ?
      <div className="relative w-full h-[65vh] lg:sticky lg:h-[100vh] lg:top-0">
        <LazyHeroImagery/>  
      </div>
      : ""}

      <div className={isShowingModel ? "lg:h-[50vh] w-full" : ""}/> 

      
      <BackdropBlurOnScroll isEnabled={isBackdropBlur}>
          {aboutmeSubSection(direction)}
          <AboutStats/>
      </BackdropBlurOnScroll>

      <div className={isShowingModel ? "lg:h-[100vh] w-full" : ""}/> 
      
      <BackdropBlurOnScroll isEnabled={isBackdropBlur}>
        {timelineSubSection(direction, isShowingModel)}
      </BackdropBlurOnScroll>

      <div className={isShowingModel ? "lg:h-[100vh] w-full" : ""}/>
    </section>
  );
};

export default AboutSection;
