import { forwardRef } from "react";
import { motion } from "framer-motion";

import styles from "./tetris-styles.module.css";

const LPiece = forwardRef(({ className }, ref) => {
  return (
    <div ref={ref} className={`${styles.lPiece} ${className}`}>
      <div />
      <div />
    </div>
  );
});

LPiece.displayName = 'LPiece';

export default motion(LPiece);
