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

const ZoomParalaxSection = () => {
    const ref = useRef(null);
    const containerScroll = useScroll({
        target: ref,
        offset: ['start -0.3', 'end 0.7']
    })
    const contentScroll = useScroll({
        target: ref,
        offset: ['start 0.3', 'start -0.3']
    })

    
    const mainScale = useTransform(containerScroll.scrollYProgress, [0, 1], [1, 4]);
    const subScaleA = useTransform(containerScroll.scrollYProgress, [0, 1], [1, 6]);
    const subScaleB = useTransform(containerScroll.scrollYProgress, [0, 1], [1, 8]);

    const pictures = [
        {
            src: Picture1,
            scale: mainScale,
            class_suffix: " w-[25vw] h-[25vh]"
        },
        {
            src: Picture2,
            scale: subScaleB,
            opacityLimit: 0.3,
            class_suffix: " top-[-30vh] left-[5vw] w-[35vw] h-[30vh]"
        },
        {
            src: Picture3,
            scale: subScaleA,
            opacityLimit: 0.4,
            class_suffix: " top-[-10vh] left-[-25vw] w-[20vw] h-[45vh]"
        },
        {
            src: Picture4,
            scale: subScaleB,
            opacityLimit: 0.4,
            class_suffix: " left-[27.5vw] w-[25vw] h-[25vh]"
        },
        {
            src: Picture5,
            scale: subScaleA,
            opacityLimit: 0.4,
            class_suffix: " top-[27.5vh] left-[5vw] w-[20vw] h-[25vh]"
        },
        {
            src: Picture6,
            scale: subScaleB,
            opacityLimit: 0.3,
            class_suffix: " top-[27.5vh] left-[-22.5vw] w-[30vw] h-[25vh]"
        },
        {
            src: Picture7,
            scale: subScaleA,
            opacityLimit: 0.4,
            class_suffix: " top-[22.5vh] left-[25vw] w-[15vw] h-[15vh]"
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
                        pictures.map( ({src, scale, opacityLimit, class_suffix}, index) => {
                            const fadeInStart = index/pictures.length
                            const fadeInEnd = fadeInStart + (1/ pictures.length)
                            const scrollTrackingIntegrator = useTransform(() => contentScroll.scrollYProgress.get() + containerScroll.scrollYProgress.get())
                            
                            let zoomOpacity = 1
                            let finalOpacity = 1
                            if (index != 0) {
                                zoomOpacity = 0.8
                                finalOpacity = 0
                            }

                            const contentFadeTransformer = useTransform(scrollTrackingIntegrator, [fadeInStart, fadeInEnd, 1, 1+opacityLimit], [0, zoomOpacity, zoomOpacity, finalOpacity])

                            let styleVar = {
                                scale: scale,
                                opacity: contentFadeTransformer
                            }

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
                                    <div className={"[&>.img]:object-cover relative" + class_suffix}>
                                            <Image
                                                src={src}
                                                fill={true}
                                                alt="image"
                                                placeholder='blur'
                                                className="object-cover"
                                            />
                                    </div>
                                </motion.div>
                        })
                    }
                </div>
            </div>
            <div className="h-[30vh]"></div>
        </>
    )
}

export default ZoomParalaxSection;