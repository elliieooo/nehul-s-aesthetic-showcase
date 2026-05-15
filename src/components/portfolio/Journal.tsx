import { motion } from "framer-motion";
import { Reveal } from "./interactive/Reveal";
import { Doodle } from "./interactive/Doodle";
import comicImg from "@/assets/comic-panel.jpg";
import mothImg from "@/assets/doodle-moth.png";
import guitarImg from "@/assets/doodle-guitar.png";
import fireflyImg from "@/assets/doodle-firefly.png";

const entries = [
  {
    date: "12 · MAY",
    title: "found a moth on the windowsill",
    body: "spent twenty minutes watching it. drew it three times. none of them came out right but the third one was honest.",
    tag: "field note",
  },
  {
    date: "04 · MAY",
    title: "Astra ships v0.3",
    body: "synthetic media detector finally above 94%. the false positives are funny — kept flagging baby photos as ai. babies look fake apparently.",
    tag: "xaenithra",
  },
  {
    date: "27 · APR",
    title: "guitar, two new chords",
    body: "Em → Cmaj7 → G → D. wrote a melody. it sounds like the woods after rain. trying to put it on top of an old DAW project.",
    tag: "music",
  },
  {
    date: "19 · APR",
    title: "CTF — first blood at Echelon",
    body: "stego challenge had a payload buried in the LSB of the alpha channel. nobody else looked there. felt like finding a firefly in a jar.",
    tag: "ctf",
  },
];

const quotes = [
  { q: "Endure and survive.", c: "— Savage Starlight" },
  { q: "After everything we've been through. Everything that I've done. It can't be for nothing.", c: "— Ellie" },
  { q: "Look for the light.", c: "— scribbled inside a notebook" },
];

export function Journal() {
  return (
    <section id="journal" className="relative px-6 lg:px-16 py-32 overflow-hidden">
      {/* doodles */}
      <Doodle src={mothImg} size={140} className="absolute top-12 right-[8%] opacity-70" rotate={-12} wiggle />
      <Doodle src={guitarImg} size={170} className="absolute bottom-32 left-[3%] opacity-50" rotate={20} />
      <Doodle src={fireflyImg} size={90} className="absolute top-1/2 right-[3%] opacity-60" rotate={-30} />

      <div className="max-w-[1400px] mx-auto">
        <Reveal>
          <div className="flex items-baseline gap-6 mb-4">
            <p className="label-mono">Chapter 03 · the journal</p>
            <span className="flex-1 h-px bg-border" />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-5xl md:text-7xl text-ink leading-[1.05] max-w-4xl">
            Loose pages from a <span className="italic-display text-clay">field notebook</span>.
          </h2>
        </Reveal>

        <div className="mt-20 grid lg:grid-cols-12 gap-10">
          {/* left column — entries */}
          <div className="lg:col-span-7 space-y-8">
            {entries.map((e, i) => (
              <motion.article
                key={e.date}
                initial={{ opacity: 0, y: 30, rotate: i % 2 ? -0.6 : 0.6 }}
                whileInView={{ opacity: 1, y: 0, rotate: i % 2 ? -0.4 : 0.4 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ rotate: 0, y: -4 }}
                className="relative bg-cream/70 backdrop-blur border border-border rounded-2xl p-7 shadow-[var(--shadow-card)]"
                data-cursor="read"
              >
                <span className="tape" style={{ left: "50%", top: -10, transform: "translateX(-50%) rotate(-3deg)" }} />
                <div className="flex items-baseline justify-between gap-4 mb-3">
                  <p className="label-mono text-clay">{e.date}</p>
                  <p className="label-mono">{e.tag}</p>
                </div>
                <h3 className="font-display text-2xl md:text-3xl text-ink leading-tight">
                  {e.title}
                </h3>
                <p className="mt-3 text-ink-soft leading-relaxed">{e.body}</p>
              </motion.article>
            ))}
          </div>

          {/* right column — comic + quotes */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-32 self-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 1.5 }}
              viewport={{ once: true }}
              whileHover={{ rotate: 0, scale: 1.02 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative bg-cream p-3 pb-12 shadow-[var(--shadow-soft)]"
              data-cursor="savage starlight"
            >
              <img
                src={comicImg}
                alt="Savage Starlight comic panel"
                width={1024}
                height={1024}
                loading="lazy"
                className="w-full aspect-square object-cover"
              />
              <p className="absolute bottom-3 left-0 right-0 text-center font-display italic-display text-ink/70">
                issue №7 — pulled from a glove box
              </p>
              <span className="tape" style={{ left: "50%", top: -10, transform: "translateX(-50%) rotate(-2deg)" }} />
            </motion.div>

            <div className="space-y-5">
              {quotes.map((q, i) => (
                <motion.blockquote
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.12 }}
                  className="border-l-2 border-clay pl-5"
                >
                  <p className="font-display italic-display text-2xl text-ink leading-snug">
                    "{q.q}"
                  </p>
                  <footer className="label-mono mt-2">{q.c}</footer>
                </motion.blockquote>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
