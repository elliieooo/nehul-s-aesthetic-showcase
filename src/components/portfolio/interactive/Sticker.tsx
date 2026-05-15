import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Sticker({
  children,
  className = "",
  rotate = 0,
  drag = true,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  rotate?: number;
  drag?: boolean;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6, rotate: rotate - 10 }}
      whileInView={{ opacity: 1, scale: 1, rotate }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ type: "spring", stiffness: 180, damping: 14, delay }}
      drag={drag}
      dragSnapToOrigin
      dragElastic={0.2}
      whileHover={{ scale: 1.08, rotate: rotate + 4 }}
      whileTap={{ scale: 0.95, cursor: "grabbing" }}
      className={`select-none cursor-grab ${className}`}
      data-cursor={drag ? "drag me" : undefined}
    >
      {children}
    </motion.div>
  );
}
