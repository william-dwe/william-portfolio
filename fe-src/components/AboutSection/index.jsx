"use client";
import dynamic from 'next/dynamic'
import React, { useTransition, useState } from "react";
import AboutText from "./AboutText";
import EducationTimeline from "./AboutTimeline/EducationTimeline";
import ExperienceTimeline from "./AboutTimeline/ExperienceTimeline";
import IntroTitle from "./../IntroSection/IntroTitle"
import HeroImageryLoading from "./HeroImagery/HeroImageryLoading";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Python</li>
        <li>Golang</li>
        <li>Bash/ Shell Script</li>
        <li>Node.js</li>
        <li>Datawarehousing Tools (BigQuery, Hive, Impala, etc.)</li>
        <li>Data Ingestion & Processing (Dataflow, Kubernetes, etc.)</li>
        <li>Pipeline Orchestrationo (Airflow, Cloud Composser, etc.)</li>
        <li>SQL & NoSQL Databases (PostgreSQL, MongoDB, MySQL, etc.)</li>
        <li>Cloud Services (Google Cloud Platform & Amazon Web Service)</li>
        <li>Docker & Docker Composser</li>
        <li>React & Next.Js</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Industrial Engineering | Institut Teknologi Bandung, Indonesia</li>
        <li>Full Stack Software Engineer - SeaLabs Bootcamp | SEA, Indonesia</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Google Cloud Professional Data Engineer</li>
      </ul>
    ),
  },
];

const LazyHeroImagery = dynamic(() => import('./HeroImagery'), {
  ssr: false,
  loading: () => <HeroImageryLoading />
})

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  let titleProps = {
    headerContent:"This is",
    headerContentUnderline:"my build",
    subHeaderContent:"<William's character profile/>",
    titleHeight:"15vh"
}

  return (
    <section className="
      h-[300vh]
      relative
      text-white
      bg-[#202023]
      " id="about"
    >
      <div className="pointer-events-none z-50 relative lg:sticky lg:top-0">
        <IntroTitle {...titleProps}/>
        <div className="relative h-[85vh]">
          <LazyHeroImagery/>
        </div>
      </div>

      <div className="
        h-[100vh]
        relative
      ">
        {/* 
        Option 1:
          TODO: change these children to absolute left & right instead. 
          why? to make sure the element on middle is clickable.
          later on, we can disable the z-indexing for the 3d model.
          it's okay if the 3 model doesn't show over the text.
          as long as the button is clickable.
        Option 2:
          - move the button & interactable element to the right side.
          - on mobile view:
            - disable all grid spans. (no left-right side)
            - keep the 3d model above so it didn't overlay
            - enlarge the canvas size to 100% when not overlay.
            (cons: need to re-render the page to resize canvas.)
        */}
        <div className="grid grid-cols-12 gap-y-2">
          <div className="col-start-2 col-span-4">
            <AboutText/>
          </div>
          <div className="col-span-10"></div>
          <div className="col-start-8 col-span-4">
            <EducationTimeline/>
          </div>
          <div className="col-start-2 col-span-4">
            <ExperienceTimeline/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
