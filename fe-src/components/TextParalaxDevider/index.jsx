'use client'
import { useScroll, useTransform, motion } from 'framer-motion';
import Lenis from 'lenis';
import {ChevronDoubleRightIcon, ChevronDoubleLeftIcon} from '@heroicons/react/16/solid';
import { useEffect, useRef } from 'react';

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
    <main className="overflow-hidden">
      <div ref={container}>
        <Slide text={"Data Platform Engineer"} direction={'left'} left={"20%"} speed={750} progress={scrollYProgress}/>
        <Slide text={"Data Warehouse Engineer"} direction={'right'} left={"25%"} speed={450} progress={scrollYProgress}/>
        <Slide text={"Professional Data Engineer"} direction={'left'}  left={"-15%"} speed={1500} progress={scrollYProgress}/>
      </div>
      <div className='h-[100vh]' />
    </main>
  );
}

const Slide = (props) => {
  const direction = props.direction == 'left' ? 1 : -1;
  const translateX = useTransform(props.progress, [0, 1], [props.speed * direction, -props.speed * direction])
  return (
    <motion.div style={{x: translateX, left: props.left}} className="relative flex whitespace-nowrap">
      <Phrase text={props.text} direction={props.direction}/>
      <Phrase text={props.text} direction={props.direction}/>
      <Phrase text={props.text} direction={props.direction}/>
      <Phrase text={props.text} direction={props.direction}/>
      <Phrase text={props.text} direction={props.direction}/>
      <Phrase text={props.text} direction={props.direction}/>
      <Phrase text={props.text} direction={props.direction}/>
    </motion.div>
  )
}

const Phrase = ({text, direction}) => {

  return (
    <div className={'px-5 flex gap-5 items-center'}>
      <p className='text-8xl'>{text}</p>
      { direction == 'left' ? <ChevronDoubleLeftIcon className='fill-white h-24'/> : <ChevronDoubleRightIcon className='fill-white h-24'/> } 
    </div>
  )
}

export default TextParalaxDevider;