import { forwardRef } from "react";
import { motion } from "framer-motion";

import styles from "./tetris-styles.module.css";

const IPiece = forwardRef(({ className }, ref) => {
  return (
    <div ref={ref} className={`${styles.iPiece} ${className}`}>
      <div />
    </div>
  );
});

IPiece.displayName = 'IPiece';

export default motion(IPiece);
