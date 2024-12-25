'use client'
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

const ZoomParalaxTitle = (
  {
    headerContent="",
    headerContentUnderline="",
    subHeaderContent="",
    titleHeight="30vh"
  }
) => {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start 0.65', 'start 0.15']
  })

  const headerWords = String(headerContent).split(" ")
  const headerUnderlineWords = String(headerContentUnderline).split(" ")
  const subHeaderWords = String(subHeaderContent).split(" ")
  const totalLen = headerWords.length + headerUnderlineWords.length + subHeaderWords.length
  return (
    <div ref={container} className={`
      relative align-middle
      w-[80vw] h-[${titleHeight}]
      mx-auto 
      flex flex-col items-center justify-center
    `}>
      <div className='
        relative
        font-bold
        text-2xl md:text-4xl lg:text-6xl 
        text-white text-center
        my-1 md:my-3 lg:my-5
      '>
        {
          headerWords.map( (word, i) => {
            const start = i / totalLen
            const end = start + (1 / totalLen)
            return <Word key={i} progress={scrollYProgress} range={[start, end]} additionalSuffix="mx-1 md:mx-2">{word} </Word>
          })
        }
        {
          headerUnderlineWords.map( (word, i) => {
            const start = (headerWords.length + i) / totalLen
            const end = start + (1 / totalLen)
            return <Word key={i} progress={scrollYProgress} range={[start, end]} additionalSuffix="underline underline-offset-3 decoration-8 decoration-p3 mx-1 md:mx-2">{word} </Word>
          })
        }
      </div>
      <div className='
        text-sm md:text-lg lg:text-2xl 
        text-[#ADB7BE] text-center
      '>
        {
          subHeaderWords.map( (word, i) => {
            const start = (headerUnderlineWords.length + headerWords.length + i) / totalLen
            const end = start + (1 / totalLen)
            return <Word key={i} progress={scrollYProgress} range={[start, end]} additionalSuffix="mx-1">{word} </Word>
          })
        }
      </div>
      <div className="to-bg-black-10 absolute top-0 w-full bg-gradient-to-t from-black/80 via-black/50"></div>
    </div>
  );
}

const Word = ({children, progress, range, additionalSuffix}) => {
  const opacity = useTransform(progress, range, [0, 1])
  return <div className={`relative inline-flex ${additionalSuffix}`}>
    <span className='absolute opacity-20'>{children}</span>
    <motion.span style={{opacity: opacity}}>{children}</motion.span>
  </div>
}

export default ZoomParalaxTitle;