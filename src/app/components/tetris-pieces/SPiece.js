import { forwardRef } from "react";
import { motion } from "framer-motion";

import styles from "./tetris-styles.module.css";

const SPiece = forwardRef(({ className }, ref) => {
  return (
    <div ref={ref} className={`${styles.sPiece} ${className}`}>
      <div />
      <div />
    </div>
  );
});

export default motion(SPiece);