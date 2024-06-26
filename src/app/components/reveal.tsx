import { useAnimation, useInView, motion } from "framer-motion";
import { useEffect, useRef } from "react";

export const Reveal = ({ children }: any) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();
  
    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView, mainControls])

    return (
        <div style={{
            position: 'relative', // Ensure the parent container is positioned relative
            overflow: "hidden"
        }}>
            <motion.div
                ref={ref} // Attach the ref to the motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
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