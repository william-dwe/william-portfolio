"use client";
import dynamic from 'next/dynamic'
import React from "react";
import HeroTitle from "./HeroTitle";
import HeroImageryLoading from './HeroImagery/HeroImageryLoading';

const LazyHeroImagery = dynamic(() => import('./HeroImagery'), {
  ssr: false,
  loading: () => <HeroImageryLoading />
})

const HeroSection = () => {
  return (
    <section className="h-[90vh] lg:py-16">
      <div className="h-full grid grid-cols-1 sm:grid-cols-12">
        <HeroTitle/>
        <LazyHeroImagery/>
      </div>
    </section>
  );
};

export default HeroSection;
