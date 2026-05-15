import ellieImg from "@/assets/ellie-hero.jpg";
import mothImg from "@/assets/doodle-moth.png";
import guitarImg from "@/assets/doodle-guitar.png";
import fireflyImg from "@/assets/doodle-firefly.png";
import knifeImg from "@/assets/doodle-knife.png";

import stegano from "@/assets/project-stegano-soft.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Magnetic } from "./interactive/Magnetic";
import { Sticker } from "./interactive/Sticker";
import { SplitWords, Reveal } from "./interactive/Reveal";
import { HoverImageText } from "./interactive/HoverImageText";
import { Doodle } from "./interactive/Doodle";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yImg = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const yTxt = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-screen flex flex-col justify-center px-6 lg:px-16 pt-32 pb-24 overflow-hidden grain"
    >
      {/* floating doodles */}
      <Doodle src={mothImg} size={120} className="absolute top-32 left-[6%] opacity-70" rotate={-14} wiggle />
      <Doodle src={fireflyImg} size={70} className="absolute top-[40%] left-[2%] opacity-80" rotate={20} />
      <Doodle src={knifeImg} size={90} className="absolute bottom-32 right-[6%] opacity-50" rotate={35} />

      <motion.div style={{ y: yTxt, opacity }} className="max-w-[1400px] mx-auto w-full grid lg:grid-cols-12 gap-12 items-center">
        {/* Left text */}
        <div className="lg:col-span-7 relative z-10">
          <Reveal>
            <p className="label-mono mb-8">
              <span className="inline-block size-2 rounded-full bg-clay animate-glow mr-2 align-middle" />
              endure · survive · édition 2025
            </p>
          </Reveal>

          <h1 className="font-display font-normal text-6xl md:text-7xl lg:text-[8.5rem] leading-[0.92] tracking-tight text-ink">
            <SplitWords text="Quiet code," />
            <br />
            <span className="italic-display text-clay">
              <SplitWords text="loud curiosity." delay={0.3} />
            </span>
          </h1>

          <Reveal delay={0.6}>
            <p className="mt-10 max-w-xl text-lg md:text-xl text-ink-soft leading-relaxed">
              I'm <span className="text-ink">Nehul</span> — most know me as{" "}
              <HoverImageText src={ellieImg} alt="ellie">
                <span className="italic-display text-clay underline decoration-clay/40 decoration-1 underline-offset-4">Ellie</span>
              </HoverImageText>
              . Data science student, steganography researcher with{" "}
              <HoverImageText src={stegano} alt="xaenithra">
                <span className="italic-display text-clay underline decoration-clay/40 decoration-1 underline-offset-4">Xaenithra</span>
              </HoverImageText>
              , and a quiet observer of things hiding in plain sight.
            </p>
          </Reveal>

          <Reveal delay={0.8}>
            <div className="mt-12 flex flex-wrap items-center gap-6">
              <Magnetic>
                <a
                  href="#work"
                  data-cursor="explore"
                  className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-ink text-cream label-mono hover:bg-clay transition-colors"
                >
                  <span>See the work</span>
                  <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>→</motion.span>
                </a>
              </Magnetic>
              <Magnetic strength={0.5}>
                <a
                  href="#contact"
                  data-cursor="say hi"
                  className="label-mono underline-offset-8 hover:text-clay hover:underline transition-colors"
                >
                  Look for the light ✦
                </a>
              </Magnetic>
            </div>
          </Reveal>

          {/* tiny stat strip */}
          <Reveal delay={1}>
            <div className="mt-16 grid grid-cols-3 max-w-md gap-4 border-t border-border pt-6">
              {[
                { n: "47", l: "ctf flags" },
                { n: "12", l: "side studies" },
                { n: "∞", l: "cups of chai" },
              ].map((s) => (
                <div key={s.l}>
                  <p className="font-display text-3xl text-ink">{s.n}</p>
                  <p className="label-mono mt-1">{s.l}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Right image — Ellie portrait */}
        <div className="lg:col-span-5 relative">
          <motion.div
            style={{ y: yImg }}
            className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-[var(--shadow-soft)] bg-cream"
            data-cursor="codename: ellie"
          >
            <img
              src={ellieImg}
              alt="Illustrated portrait of Ellie in a forest at dusk"
              width={1024}
              height={1280}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent pointer-events-none" />

            {/* corner annotation */}
            <div className="absolute top-4 left-4 label-mono text-cream/90">
              ⊹ subject: ellie
            </div>
            <div className="absolute bottom-4 right-4 label-mono text-cream/90 text-right">
              jackson, wyoming<br />
              <span className="text-cream/60">— ish</span>
            </div>
          </motion.div>

          {/* sticker cluster */}
          <Sticker rotate={-6} className="absolute -bottom-6 -left-6 bg-cream/95 backdrop-blur border border-border rounded-2xl px-5 py-4 shadow-[var(--shadow-card)]">
            <p className="label-mono mb-1">Codename</p>
            <p className="font-display text-xl text-ink leading-tight">
              <span className="italic-display text-clay">Ellie</span> · stegano cell
            </p>
          </Sticker>

          <Sticker rotate={12} delay={0.2} className="absolute -top-4 -right-4 size-24 rounded-full bg-clay/90 grid place-items-center font-display italic-display text-cream text-lg shadow-[var(--shadow-card)]">
            est. '25
          </Sticker>

          {/* moth polaroid */}
          <Sticker rotate={-12} delay={0.4} className="absolute top-8 -left-12 bg-cream p-2 pb-5 shadow-[var(--shadow-soft)] w-24 hidden md:block">
            <img src={mothImg} alt="moth tattoo" className="w-full aspect-square object-contain" />
            <p className="label-mono text-center mt-1.5 text-[8px]">moth · v.01</p>
          </Sticker>

          {/* guitar doodle */}
          <Doodle src={guitarImg} size={130} className="absolute -bottom-10 -right-8 opacity-90" rotate={-18} />
        </div>
      </motion.div>

      {/* Marquee */}
      <div className="absolute bottom-0 inset-x-0 border-y border-border bg-sand/60 backdrop-blur py-4 overflow-hidden">
        <div className="flex whitespace-nowrap">
          <div className="flex items-center gap-10 animate-marquee px-6 shrink-0">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex items-center gap-10 label-mono">
                <span>Python</span><span className="text-clay">✦</span>
                <span>R</span><span className="text-clay">✦</span>
                <span>Mathematical Statistics</span><span className="text-clay">✿</span>
                <span>Steganography</span><span className="text-clay">✦</span>
                <span>CTF Reconnaissance</span><span className="text-clay">✿</span>
                <span>Blender 3D</span><span className="text-clay">✦</span>
                <span>UI / UX</span><span className="text-clay">✿</span>
                <span>Anime · Manga · Music · Skating</span><span className="text-clay">✦</span>
                <span>Endure & Survive</span><span className="text-clay">✦</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
