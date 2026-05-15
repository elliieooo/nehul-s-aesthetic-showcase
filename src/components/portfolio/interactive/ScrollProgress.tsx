import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 20 });
  return (
    <motion.div
      style={{ scaleX, transformOrigin: "0% 50%" }}
      className="fixed top-0 left-0 right-0 h-[2px] bg-clay z-[90]"
    />
  );
}
