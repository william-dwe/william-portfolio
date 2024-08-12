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
    <section className="flex min-h-screen bg-gradient-to-tl from-gray-900 to-black flex-col items-center justify-between p-12 lg:p-24 h-[90vh] lg:py-16">
      <div className="h-full grid grid-cols-1 sm:grid-cols-12">
        <HeroTitle/>
        <LazyHeroImagery/>
      </div>
    </section>
  );
};

export default HeroSection;
