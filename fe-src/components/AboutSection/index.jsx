"use client";
import dynamic from 'next/dynamic'
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
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
  // TODO: change image on about section.
  // TODO: alter design? split bio & skillset. 
  // put something like: list of familiar & specialized tech stack. add logo for each tech stack.
  // put downloadable CV button. 

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        {/* <Image src="/images/about-image.png" width={500} height={500} />  */}
        <LazyHeroImagery/>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a Full Stack Data & Platform Engineer whose had several experiences in both developing & maintaining data platforms. I have experience in but not limited to creating Data Ingestion, Data Warehouse, Pipeline Orchestration, and Data Quality & Governance. I specialize in cloud data & platform migration, feel free to reach out for business inquiries.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
