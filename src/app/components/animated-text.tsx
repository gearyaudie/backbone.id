import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
}

const useInView = (ref: React.RefObject<HTMLElement>, threshold = 0.5) => {
  const [inView, setInView] = useState(false);

  const observer = new IntersectionObserver(
    (entries) => {
      const [entry] = entries;
      setInView(entry.isIntersecting);
    },
    {
      threshold,
    }
  );

  useEffect(() => {
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return inView;
};

const AnimatedText: React.FC<AnimatedTextProps> = ({ text }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef);

  return (
    <div className="AnimatedText" ref={containerRef}>
      <div>
        {text.split(" ").map((el, i) => (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{
              duration: 0.25,
              delay: inView ? i / 10 : 0,
            }}
            key={i}
          >
            {el}{" "}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default AnimatedText;