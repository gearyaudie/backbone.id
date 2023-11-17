import { forwardRef } from "react";
import { motion } from "framer-motion";

import styles from "./tetris-styles.module.css";

const OPiece = forwardRef(({ className }, ref) => {
  return (
    <div ref={ref} className={`${styles.oPiece} ${className}`}>
      <div />
    </div>
  );
});

export default motion(OPiece);
