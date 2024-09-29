'use client'
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

const IntroTitle = () => {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start 0.65', 'start 0.15']
  })

  const headerContent = "Will's fondest memory fragments"
  const subHeaderContent = "Memories are bound to be made, some to be cherished, others to be shared."
  const headerWords = headerContent.split(" ")
  const subHeaderWords = subHeaderContent.split(" ")
  const totalLen = headerWords.length + subHeaderWords.length
  return (
    <div ref={container} className='
      sticky top-0 mb-[-30vh] 
      w-[80vw] h-[30vh] 
      m-auto 
      flex flex-col items-center justify-center
    '> 
      <div className='relative mb-4 align-middle'>
          <h2 className='
            font-bold
            text-2xl md:text-4xl lg:text-6xl 
            text-white text-center
            my-1 md:my-3 lg:my-5
          '>
            {
              headerWords.map( (word, i) => {
                const start = i / totalLen
                const end = start + (1 / totalLen)
                return <Word key={i} progress={scrollYProgress} range={[start, end]} margin="mx-1 md:mx-2">{word} </Word>
              })
            }
          </h2>
          <p className='
            text-sm md:text-lg lg:text-2xl 
            text-[#ADB7BE] text-center
          '>
            {
              subHeaderWords.map( (word, i) => {
                const start = (headerWords.length + i) / totalLen
                const end = start + (1 / totalLen)
                return <Word key={i} progress={scrollYProgress} range={[start, end]} margin="mx-1">{word} </Word>
              })
            }
          </p>
          <div class="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
      </div>
    </div>
  );
}

const Word = ({children, progress, range, margin}) => {
  const opacity = useTransform(progress, range, [0, 1])
  return <div className={`relative inline-flex ${margin}`}>
    <span className='absolute opacity-20'>{children}</span>
    <motion.span style={{opacity: opacity}}>{children}</motion.span>
  </div>
}



export default IntroTitle;