import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { ReactNode, MouseEvent } from "react";

export function HoverImageText({
  children,
  src,
  alt,
  className = "",
}: { children: ReactNode; src: string; alt: string; className?: string }) {
  const [show, setShow] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLSpanElement>(null);

  const onMove = (e: MouseEvent<HTMLSpanElement>) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
  };

  return (
    <span
      ref={ref}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onMouseMove={onMove}
      className={`relative inline-block cursor-pointer ${className}`}
    >
      {children}
      <AnimatePresence>
        {show && (
          <motion.img
            src={src}
            alt={alt}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.25 }}
            style={{ left: pos.x - 90, top: pos.y - 110 }}
            className="pointer-events-none absolute z-30 w-[180px] h-[220px] object-cover rounded-2xl shadow-[var(--shadow-soft)] rotate-[-4deg]"
          />
        )}
      </AnimatePresence>
    </span>
  );
}
