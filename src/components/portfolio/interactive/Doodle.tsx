import { motion } from "framer-motion";
import type { CSSProperties } from "react";

type Props = {
  src: string;
  alt?: string;
  className?: string;
  style?: CSSProperties;
  drift?: boolean;
  wiggle?: boolean;
  rotate?: number;
  size?: number;
};

/** Floating hand-drawn doodle. Decorative, parallax-friendly. */
export function Doodle({
  src,
  alt = "",
  className = "",
  style,
  drift = true,
  wiggle = false,
  rotate = 0,
  size = 80,
}: Props) {
  return (
    <motion.img
      src={src}
      alt={alt}
      width={size}
      height={size}
      loading="lazy"
      aria-hidden={!alt}
      className={`pointer-events-none select-none ${drift ? "animate-drift" : ""} ${wiggle ? "animate-wiggle" : ""} ${className}`}
      style={{
        width: size,
        height: "auto",
        transform: `rotate(${rotate}deg)`,
        filter: "drop-shadow(0 8px 16px rgba(40,30,20,0.18))",
        ...style,
      }}
      initial={{ opacity: 0, scale: 0.7 }}
      whileInView={{ opacity: 0.85, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
    />
  );
}
