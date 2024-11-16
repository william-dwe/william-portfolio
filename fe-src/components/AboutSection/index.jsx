"use client";
import dynamic from 'next/dynamic'
import React, { useTransition, useState } from "react";
import AboutText from "./AboutText";
import EducationTimeline from "./AboutTimeline/EducationTimeline";
import ExperienceTimeline from "./AboutTimeline/ExperienceTimeline";
import InternshipTimeline from "./AboutTimeline/InternshipTimeline";
import VoluntaryTimeline from "./AboutTimeline/VoluntaryTimeline";
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

  return (
    <section className="
      h-[500vh]
      relative
      text-white
      bg-[#202023]
      " id="about"
    >
      <div className="pointer-events-none z-50 relative lg:sticky lg:top-0">
        <SectionTitle {...titleProps}/>
        <div className="relative h-[85vh]">
          <LazyHeroImagery/>
        </div>
      </div>

      <div className="
        h-[100vh]
        relative
      ">
        <div className="grid grid-cols-12 gap-y-2">
          <div className="col-start-2 col-span-10 lg:col-start-2 lg:col-span-4">
            <AboutText/>
          </div>
          <div className="lg:col-span-8"/>
          <div dir="rtl" className="rtl col-start-2 col-span-10 lg:col-start-8 lg:col-span-4">
            <EducationTimeline/>
          </div>
          <div className="lg:col-span-12 h-[10vh]"/>
          <div className="col-start-2 col-span-10 lg:col-start-2 lg:col-span-4">
            <ExperienceTimeline/>
          </div>
          <div dir="rtl" className="rtl col-start-2 col-span-10 lg:col-start-8 lg:col-span-4">
            <div className="h-[15vh]"/>
            <InternshipTimeline/>
          </div>
          <div className="lg:col-span-12 h-[10vh]"></div>
          <div className="col-start-2 col-span-10 lg:col-start-2 lg:col-span-4">
            <VoluntaryTimeline/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
