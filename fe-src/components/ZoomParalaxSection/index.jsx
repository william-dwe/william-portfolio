"use client";
import Picture1 from '../../public/images/paralax-1.jpg';
import Picture2 from '../../public/images/paralax-2.jpg';
import Picture3 from '../../public/images/paralax-3.jpg';
import Picture4 from '../../public/images/paralax-4.jpg';
import Picture5 from '../../public/images/paralax-5.jpg';
import Picture6 from '../../public/images/paralax-6.jpg';
import Picture7 from '../../public/images/paralax-7.jpg';
import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import SectionTitle from "../SectionTitle"

const ParalaxImage = ({ index, picture, contentScroll, containerScroll, numPicture }) => {
    
  const fadeInStart = index / numPicture;
  const fadeInEnd = fadeInStart + (1 / numPicture);

  const zoomOpacity = 0.8;
  const finalOpacity = index === 0 ? 1 : 0;

  const scrollTrackingIntegrator = useTransform(
    [contentScroll.scrollYProgress, containerScroll.scrollYProgress],
    ([x, y]) => x + y
  );

  const contentFadeTransformer = useTransform(scrollTrackingIntegrator, [fadeInStart, fadeInEnd, 1, 1 + picture.opacityLimit], [0, zoomOpacity, zoomOpacity, finalOpacity]);

  let styleVar = {
    scale: picture.scale,
    opacity: contentFadeTransformer
  };



    return <motion.div 
            key={index} 
            style={styleVar}
            className={`
                w-full h-full top-0
                absolute
                flex
                items-center
                justify-center
            `}
        >
            <div className={"relative" + picture.classSuffix}>
                    <Image
                        src={picture.src}
                        fill={true}
                        alt="image"
                        placeholder='blur'
                        className="object-cover"
                    />
            </div>
        </motion.div>
}

const ZoomParalaxSection = () => {
    const ref = useRef(null);
    const contentScroll = useScroll({
        target: ref,
        offset: ['start 0.3', 'start -0.3']
    })
    const containerScroll = useScroll({
        target: ref,
        offset: ['start -0.3', 'end 0.7']
    })
    
    const mainScale = useTransform(containerScroll.scrollYProgress, [0, 1], [1, 4]);
    const subScaleA = useTransform(containerScroll.scrollYProgress, [0, 1], [1, 6]);
    const subScaleB = useTransform(containerScroll.scrollYProgress, [0, 1], [1, 8]);

    const pictures = [
        {
            src: Picture1,
            scale: mainScale,
            classSuffix: " w-[25vw] h-[25vh]"
        },
        {
            src: Picture2,
            scale: subScaleB,
            opacityLimit: 0.3,
            classSuffix: " top-[-30vh] left-[5vw] w-[35vw] h-[30vh]"
        },
        {
            src: Picture3,
            scale: subScaleA,
            opacityLimit: 0.4,
            classSuffix: " top-[-10vh] left-[-25vw] w-[20vw] h-[45vh]"
        },
        {
            src: Picture4,
            scale: subScaleB,
            opacityLimit: 0.4,
            classSuffix: " left-[27.5vw] w-[25vw] h-[25vh]"
        },
        {
            src: Picture5,
            scale: subScaleA,
            opacityLimit: 0.4,
            classSuffix: " top-[27.5vh] left-[5vw] w-[20vw] h-[25vh]"
        },
        {
            src: Picture6,
            scale: subScaleB,
            opacityLimit: 0.3,
            classSuffix: " top-[27.5vh] left-[-22.5vw] w-[30vw] h-[25vh]"
        },
        {
            src: Picture7,
            scale: subScaleA,
            opacityLimit: 0.4,
            classSuffix: " top-[22.5vh] left-[25vw] w-[15vw] h-[15vh]"
        }
    ]

    let titleProps = {
        headerContent:"Will's fondest",
        headerContentUnderline:"memory fragments",
        subHeaderContent:"Memories are bound to be made, some to be cherished, others to be shared."
    }

    return (
        <>
            <div ref={ref} className="
                h-[250vh]
                relative
            ">
                <div className="
                    sticky top-0 mb-[-30vh] 
                ">
                    <SectionTitle
                    {...titleProps}
                />
                </div>
                <div className="
                    h-[100vh]
                    mt-[30vh]
                    mb-[-30vh]
                    sticky top-0
                    overflow-hidden
                ">
                    {
                        pictures.map((picture, index) => <ParalaxImage key={index} index={index} picture={picture} contentScroll={contentScroll} containerScroll={containerScroll} numPicture={pictures.length}/>)
                    }
                </div>
            </div>
            <div className="h-[30vh]"></div>
        </>
    )
}

export default ZoomParalaxSection;