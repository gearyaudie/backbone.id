"use client"

import { useAnimation, useInView, motion } from "framer-motion";
import { Props } from "next/script";
import { useEffect, useRef } from "react";


export const Reveal = ({children}: Props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();
  
    useEffect(() => {
      if(isInView) {
        mainControls.start("visible");
        console.log("fire")
      }
    }, [isInView, mainControls])

    return (
        <div ref={ref} style={{
            position: 'relative',
            overflow: "hidden"
          }}>
            <motion.div
                variants={{
                hidden: {opacity: 0, y: 75},
                visible: {opacity: 1, y: 0},
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.25 }}
            >
                {children}
            </motion.div>
        </div>
    )
}