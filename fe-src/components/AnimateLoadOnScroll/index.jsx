"use client";
import { useRef } from "react"
import { motion } from "framer-motion";

export default function AnimateLoadOnScroll({ children, direction="left" }) {
  const ref = useRef(null)

  const mapDirectionVariants = {
    "left": {
      hidden: {opacity: 0, x: 75},
      visible: {opacity: 1, x: 0},
    },
    "right": {
      hidden: {opacity: 0, x: -75},
      visible: {opacity: 1, x: 0},
    },
    "up": {
      hidden: {opacity: 0, y: 75},
      visible: {opacity: 1, y: 0},
    },
    "down": {
      hidden: {opacity: 0, y: -75},
      visible: {opacity: 1, y: 0},
    }
  }

  return (
    <div ref={ref} className="relative overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={mapDirectionVariants[direction]}
        transition={{ duration: 0.5, delay: 0.25 }}  
      >
        {children}
      </motion.div>
    </div>
  );
}