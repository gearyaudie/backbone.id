import { forwardRef } from "react";
import { motion } from "framer-motion";

import styles from "./tetris-styles.module.css";

const ZPiece = forwardRef(({ className }, ref) => {
  return (
    <div ref={ref} className={`${styles.zPiece} ${className}`}>
      <div />
      <div />
    </div>
  );
});

export default motion(ZPiece);
