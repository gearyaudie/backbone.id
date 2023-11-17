import { forwardRef } from "react";
import { motion } from "framer-motion";
import styles from "./tetris-styles.module.css";


const JPiece = forwardRef(({ className }, ref) => {
  return (
    <div ref={ref} className={`${styles.jPiece} ${className}`}>
      <div />
      <div />
    </div>
  );
});

export default motion(JPiece);
