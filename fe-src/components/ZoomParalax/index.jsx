"use client";
import Picture1 from '../../public/images/paralax-1.jpg';
import Picture2 from '../../public/images/paralax-2.jpg';
import Picture3 from '../../public/images/paralax-3.jpg';
import Picture4 from '../../public/images/paralax-4.jpg';
import Picture5 from '../../public/images/paralax-5.jpg';
import Picture6 from '../../public/images/paralax-6.jpg';
import Picture7 from '../../public/images/paralax-7.jpg';
import Image from 'next/image';
import { useScroll, useTransform, motion} from 'framer-motion';
import { useRef } from 'react';

export default function Index() {
    
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

    const pictures = [
        {
            src: Picture1,
            scale: scale4,
            class_suffix: " w-[25vw] h-[25vh]"
        },
        {
            src: Picture2,
            scale: scale5,
            class_suffix: " top-[-30vh] left-[5vw] w-[35vw] h-[30vh]"
        },
        {
            src: Picture3,
            scale: scale6,
            class_suffix: " top-[-10vh] left-[-25vw] w-[20vw] h-[45vh]"
        },
        {
            src: Picture4,
            scale: scale5,
            class_suffix: " left-[27.5vw] w-[25vw] h-[25vh]"
        },
        {
            src: Picture5,
            scale: scale6,
            class_suffix: " top-[27.5vh] left-[5vw] w-[20vw] h-[25vh]"
        },
        {
            src: Picture6,
            scale: scale8,
            class_suffix: " top-[27.5vh] left-[-22.5vw] w-[30vw] h-[25vh]"
        },
        {
            src: Picture7,
            scale: scale9,
            class_suffix: " top-[22.5vh] left-[25vw] w-[15vw] h-[15vh]"
        }
    ]

    return (
        <div ref={container} className="
            h-[300vh]
            relative
        ">
            <div className="
                h-[100vh]
                sticky top-0
                overflow-hidden
            ">
                {
                    pictures.map( ({src, scale, class_suffix}, index) => {
                        return <motion.div key={index} style={{scale}} className="
                            w-full h-full top-0
                            absolute
                            flex
                            items-center
                            justify-center
                        ">
                            <div className={"[&>.img]:object-cover relative" + class_suffix}>
                                <Image
                                    src={src}
                                    fill
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
    )
}
