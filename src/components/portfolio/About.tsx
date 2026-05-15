import aboutImg from "@/assets/about-soft.jpg";
import stegano from "@/assets/project-stegano-soft.jpg";

import weather from "@/assets/project-weather-soft.jpg";
import { motion } from "framer-motion";
import { Sticker } from "./interactive/Sticker";
import { Reveal } from "./interactive/Reveal";
import { HoverImageText } from "./interactive/HoverImageText";

const skills = [
  "Python", "R", "Statistics", "Machine Learning",
  "Steganography", "Cryptography", "CTF / Recon",
  "Blender", "UI / UX", "Frontend",
];

const interests = ["Skateboarding", "Hiking", "Anime", "Manga", "Music"];

export function About() {
  return (
    <section id="about" className="relative px-6 lg:px-16 py-32 lg:py-40 overflow-hidden">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-16 items-start">
        {/* Image column */}
        <div className="lg:col-span-5 lg:sticky lg:top-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-[var(--shadow-soft)]" data-cursor="quiet morning">
              <img
                src={aboutImg}
                alt="Notebook, ceramic mugs and dried flowers in morning light"
                loading="lazy"
                width={1000}
                height={1200}
                className="w-full h-full object-cover"
              />
            </div>

            <Sticker rotate={-4} delay={0.4} className="absolute -bottom-6 -right-6 bg-cream p-2 pb-5 shadow-[var(--shadow-soft)] w-28">
              <img src={stegano} alt="" className="w-full aspect-square object-cover" />
              <p className="label-mono text-center mt-1.5 text-[8px]">stegano log</p>
            </Sticker>

            <p className="label-mono mt-6 text-center">
              ◦ &nbsp;a quiet morning, somewhere in chandigarh &nbsp;◦
            </p>
          </motion.div>
        </div>

        {/* Text column */}
        <div className="lg:col-span-7 space-y-10">
          <Reveal>
            <p className="label-mono mb-6">Chapter 01 — About</p>
            <h2 className="font-display font-normal text-5xl md:text-7xl text-ink leading-[0.95]">
              A quiet maker, <span className="italic-display text-clay">always listening</span>{" "}
              for the message underneath.
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="space-y-6 text-lg text-ink-soft leading-relaxed max-w-2xl">
              <p>
                I study Data Science at{" "}
                <HoverImageText src={weather} alt="campus">
                  <span className="text-ink underline decoration-clay/30 underline-offset-4">Chandigarh University</span>
                </HoverImageText>{" "}
                and research steganography for the{" "}
                <HoverImageText src={stegano} alt="xaenithra">
                  <span className="text-ink underline decoration-clay/30 underline-offset-4">Xaenithra</span>
                </HoverImageText>{" "}
                CTF team — the soft art of hiding data inside ordinary pixels.
              </p>
              <p>
                I move between heavy statistics and gentle design: predictive engines in
                Python and R, cryptographic experiments, Blender renders, and frontends
                that feel like paper. When the screen's off — skating, slow hikes, anime,
                manga, and a steady stack of records.
              </p>
            </div>
          </Reveal>

          {/* Stats inline */}
          <Reveal delay={0.3}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { k: "BE", v: "Data Science" },
                { k: "2025", v: "@ Xaenithra" },
                { k: "12+", v: "tools daily" },
                { k: "∞", v: "patience" },
              ].map((s) => (
                <motion.div
                  key={s.k}
                  whileHover={{ y: -4, rotate: -1 }}
                  className="rounded-2xl border border-border bg-sand/40 p-4"
                >
                  <p className="font-display text-2xl text-ink">{s.k}</p>
                  <p className="label-mono mt-1">{s.v}</p>
                </motion.div>
              ))}
            </div>
          </Reveal>

          <div className="pt-6">
            <p className="label-mono mb-4">A short list of tools</p>
            <div className="flex flex-wrap gap-2">
              {skills.map((s, i) => (
                <motion.span
                  key={s}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  whileHover={{ y: -3 }}
                  className={`px-4 py-2 rounded-full border text-sm cursor-default ${
                    i % 4 === 0
                      ? "bg-blush/40 border-blush text-ink"
                      : i % 4 === 2
                      ? "bg-sage/30 border-sage text-ink"
                      : "bg-sand/50 border-border text-ink-soft"
                  }`}
                  data-cursor={s.toLowerCase()}
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </div>

          <div className="pt-2">
            <p className="label-mono mb-4">Off-screen</p>
            <div className="flex flex-wrap gap-x-3 gap-y-2 font-display text-2xl text-ink-soft">
              {interests.map((tag, i) => (
                <motion.span
                  key={tag}
                  whileHover={{ y: -3, color: "var(--clay)" }}
                  className={`cursor-default ${i === 0 ? "italic-display text-clay" : ""}`}
                >
                  {tag}
                  {i < interests.length - 1 && <span className="text-clay mx-2">·</span>}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
