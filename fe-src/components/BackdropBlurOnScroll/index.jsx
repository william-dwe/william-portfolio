"use client";
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion";

export default function BackdropBlurOnScroll({ children, isEnabled }) {
  
    const ref = useRef(null);
    const scroll = useScroll({
      target: ref,
      offset: ['start 0.6', 'end 0.2']
    })
    const opacityScale = useTransform(scroll.scrollYProgress, [0, 0.15, 0.8, 1], [0, 1, 1, 0])

  return (
    <div ref={ref} className="relative">
        {
            isEnabled ? <motion.div
                style={{ opacity: opacityScale }}  
                className="z-0 pointer-events-none backdrop-blur-[16px] backdrop-brightness-75 fixed inset-0 transition-opacity duration-100"  
            /> : ""
        }
      
        {children}
    </div>
  );
}