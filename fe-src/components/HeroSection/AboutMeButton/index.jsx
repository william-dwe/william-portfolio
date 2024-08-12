"use client";
import React from "react";
import Link from 'next/link';
import { ArrowUpRightIcon } from '@heroicons/react/16/solid';

const AboutMeButton = () => {

    return (
        <Link className="rounded-full bg-clip-padding transition-colors bg-gradient-to-r from-secondary-400 to-primary-600 hover:from-primary-800 text-white text-l my-4 py-2 px-4" href="/about" scroll={false}>
            <div className='inline-flex group justify-center'>
                <div>About Me</div>
                <ArrowUpRightIcon className='fill-white h-6'/> 
            </div>
        </Link>
    );
}

export default AboutMeButton;