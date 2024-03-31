import React from "react";
import { motion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text }) => {
  return (
    <div className="AnimatedText">
      {text.split(" ").map((el, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: i / 10,
          }}
          key={i}
        >
          {el}{" "}
        </motion.span>
      ))}
    </div>
  );
};

export default AnimatedText;