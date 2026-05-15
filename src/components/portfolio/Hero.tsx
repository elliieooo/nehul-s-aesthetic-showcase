import heroImg from "@/assets/hero-soft.jpg";
import aboutImg from "@/assets/about-soft.jpg";
import stegano from "@/assets/project-stegano-soft.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Magnetic } from "./interactive/Magnetic";
import { Sticker } from "./interactive/Sticker";
import { LiveClock } from "./interactive/LiveBadge";
import { SplitWords, Reveal } from "./interactive/Reveal";
import { HoverImageText } from "./interactive/HoverImageText";

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
      {/* tiny corner labels */}
      <div className="absolute top-24 left-6 lg:left-16 label-mono flex items-center gap-2 z-10">
        <motion.span
          animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="inline-block size-1.5 rounded-full bg-clay"
        />
        live · chandigarh · <LiveClock />
      </div>
      <div className="absolute top-24 right-6 lg:right-16 label-mono hidden md:block z-10">
        N 30.7° / E 76.7° &nbsp;◦&nbsp; soft mode
      </div>

      <motion.div style={{ y: yTxt, opacity }} className="max-w-[1400px] mx-auto w-full grid lg:grid-cols-12 gap-12 items-center">
        {/* Left text */}
        <div className="lg:col-span-7 relative z-10">
          <Reveal>
            <p className="label-mono mb-8">
              <span className="text-clay">●</span> &nbsp;Portfolio · Édition 2025 · v.04
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
              <HoverImageText src={heroImg} alt="ellie">
                <span className="italic-display text-clay underline decoration-clay/40 decoration-1 underline-offset-4">Ellie</span>
              </HoverImageText>
              . A data science student, steganography researcher, and quiet
              observer of{" "}
              <HoverImageText src={stegano} alt="hidden things">
                <span className="italic-display text-clay underline decoration-clay/40 decoration-1 underline-offset-4">things hiding</span>
              </HoverImageText>{" "}
              in plain sight.
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
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >→</motion.span>
                </a>
              </Magnetic>
              <Magnetic strength={0.5}>
                <a
                  href="#contact"
                  data-cursor="say hi"
                  className="label-mono underline-offset-8 hover:text-clay hover:underline transition-colors"
                >
                  Say hello ✿
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

        {/* Right image */}
        <div className="lg:col-span-5 relative">
          <motion.div style={{ y: yImg }} className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-[var(--shadow-soft)]" data-cursor="that's me">
            <img
              src={heroImg}
              alt="Soft cream silk and dried flowers"
              width={1600}
              height={1200}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cream/30 to-transparent pointer-events-none" />
          </motion.div>

          {/* sticker cluster */}
          <Sticker rotate={-6} className="absolute -bottom-6 -left-6 bg-cream/90 backdrop-blur border border-border rounded-2xl px-5 py-4 shadow-[var(--shadow-card)]">
            <p className="label-mono mb-1">Currently</p>
            <p className="font-display text-xl text-ink leading-tight">
              Researching at <span className="italic-display text-clay">Xaenithra</span>
            </p>
          </Sticker>

          <Sticker rotate={12} delay={0.2} className="absolute -top-4 -right-4 size-24 rounded-full bg-blush/70 grid place-items-center font-display italic-display text-ink text-lg">
            est. '25
          </Sticker>

          <Sticker rotate={-15} delay={0.4} className="absolute top-12 -left-10 bg-sage/40 px-3 py-1.5 rounded-full label-mono">
            ✦ now playing — radiohead
          </Sticker>

          <Sticker rotate={8} delay={0.6} className="absolute bottom-24 -right-8 bg-sand border border-border px-3 py-1.5 rounded-full label-mono">
            🛹 skater · she/they
          </Sticker>

          <Sticker rotate={-3} delay={0.8} className="absolute top-1/2 -right-12 bg-cream border border-border rounded-xl p-2 shadow-[var(--shadow-card)] hidden lg:block">
            <div className="size-14 rounded-md bg-blush/60 grid place-items-center text-2xl">🌸</div>
          </Sticker>
        </div>
      </motion.div>

      {/* Marquee */}
      <div className="absolute bottom-0 inset-x-0 border-y border-border bg-sand/40 backdrop-blur py-4 overflow-hidden">
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
