'use client'
import { useScroll } from 'framer-motion';
import Lenis from 'lenis';
import { useEffect, useRef } from 'react';
import TextSlide from './TextSlide'

const TextParalaxDevider = () => {

  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  })

  useEffect( () => {
    const lenis = new Lenis()
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])

  return (
    <div className="overflow-hidden py-2 bg-black">
      <div ref={container}>
        <TextSlide className="text-primary-300" text={"Data Platform Engineer"} direction={'left'} left={"-40%"} speed={750} progress={scrollYProgress}/>
        <TextSlide className="text-primary-400" text={"Data Warehouse Engineer"} direction={'right'} left={"-15%"} speed={450} progress={scrollYProgress}/>
        <TextSlide className="text-primary-500" text={"Certified Data Engineer"} direction={'left'}  left={"-70%"} speed={1500} progress={scrollYProgress}/>
      </div>
    </div>
  );
}



export default TextParalaxDevider;