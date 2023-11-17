import { forwardRef } from "react";
import { motion } from "framer-motion";

import styles from "./tetris-styles.module.css";

const TPiece = forwardRef(({ className }, ref) => {
  return (
    <div ref={ref} className={`${styles.tPiece} ${className}`}>
      <div />
      <div />
    </div>
  );
});

IPiece.displayName = 'TPiece';


export default motion(TPiece);
