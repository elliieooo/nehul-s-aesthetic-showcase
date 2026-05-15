import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Magnetic } from "./interactive/Magnetic";

const links = [
  { l: "About", h: "#about" },
  { l: "Work", h: "#work" },
  { l: "Xaenithra", h: "#xaenithra" },
  { l: "Journal", h: "#journal" },
  { l: "Path", h: "#path" },
  { l: "Say Hello", h: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className={`fixed top-0 inset-x-0 z-50 px-6 lg:px-12 transition-all ${
        scrolled ? "py-3 bg-cream/80 backdrop-blur border-b border-border" : "py-6"
      }`}
    >
      <div className="max-w-[1400px] mx-auto flex justify-between items-center">
        <a href="#top" className="flex items-baseline gap-2 group" data-cursor="back to top">
          <motion.span
            whileHover={{ rotate: -8 }}
            className="font-display text-2xl text-ink inline-block"
          >
            Ellie
          </motion.span>
          <span className="label-mono">— Nehul Thakur</span>
        </a>
        <div className="hidden md:flex gap-8 label-mono items-center">
          {links.map((l) => (
            <Magnetic key={l.l} intensity={0.2}>
              <a
                key={l.l}
                href={l.h}
                data-cursor={l.l.toLowerCase()}
                className="relative hover:text-clay transition-colors group px-2 py-1"
              >
                {l.l}
                <span className="absolute left-0 -bottom-1 h-px w-0 bg-clay transition-all group-hover:w-full" />
              </a>
            </Magnetic>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
