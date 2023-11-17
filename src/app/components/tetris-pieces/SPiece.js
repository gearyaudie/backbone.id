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

SPiece.displayName = 'SPiece';

export default motion(SPiece);
