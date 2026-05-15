import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function SoftCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 300, damping: 30, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 300, damping: 30, mass: 0.6 });
  const [label, setLabel] = useState<string | null>(null);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = e.target as HTMLElement;
      const el = t.closest<HTMLElement>("[data-cursor]");
      if (el) {
        setLabel(el.dataset.cursor || null);
        setHover(true);
      } else {
        setLabel(null);
        setHover(false);
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <>
      <motion.div
        aria-hidden
        style={{ x: sx, y: sy }}
        className="pointer-events-none fixed top-0 left-0 z-[100] hidden md:block -translate-x-1/2 -translate-y-1/2"
      >
        <motion.div
          animate={{ scale: hover ? 2.4 : 1, opacity: hover ? 0.85 : 0.55 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="size-3 rounded-full bg-clay mix-blend-multiply"
        />
        {label && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute left-5 top-3 whitespace-nowrap rounded-full bg-ink text-cream px-3 py-1 text-[10px] tracking-[0.2em] uppercase font-mono"
          >
            {label}
          </motion.div>
        )}
      </motion.div>
    </>
  );
}
