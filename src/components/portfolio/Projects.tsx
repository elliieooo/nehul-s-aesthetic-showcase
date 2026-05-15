import stegano from "@/assets/project-stegano-soft.jpg";
import chat from "@/assets/project-chat-soft.jpg";
import weather from "@/assets/project-weather-soft.jpg";
import login from "@/assets/project-login-soft.jpg";
import space from "@/assets/project-space-soft.jpg";
import recon from "@/assets/project-recon-soft.jpg";
import { motion } from "framer-motion";
import { TiltCard } from "./interactive/TiltCard";
import { Reveal } from "./interactive/Reveal";
import { Sticker } from "./interactive/Sticker";

type Project = {
  no: string; tag: string; title: string; italic?: string; body: string;
  href: string; img: string; span: string; ratio: string;
  tone?: "blush" | "sage" | "sand"; tools: string[]; year: string;
};

const projects: Project[] = [
  { no: "01", tag: "Cryptography · Research", title: "Steganography", italic: "Engine",
    body: "Hiding entire conversations inside the texture of an ordinary photograph. Built for the Xaenithra ops stack.",
    href: "#", img: stegano, span: "lg:col-span-8", ratio: "aspect-[16/10]", tone: "blush",
    tools: ["Python", "OpenCV", "AES"], year: "2025" },
  { no: "02", tag: "React · Vite", title: "Edgy", italic: "Chat UI",
    body: "Production-grade chat interface — minimalist, real-time, soft on the eyes.",
    href: "https://github.com/elliieooo/edgy-chat-ui", img: chat, span: "lg:col-span-4", ratio: "aspect-[4/5]", tone: "sand",
    tools: ["React", "Tailwind"], year: "2024" },
  { no: "03", tag: "Python · Streamlit", title: "Weather", italic: "Forecast",
    body: "Live OpenWeatherMap dashboard bridging Python data work with a calm interface.",
    href: "https://github.com/elliieooo/Weather-Forecast", img: weather, span: "lg:col-span-6", ratio: "aspect-[5/4]", tone: "sage",
    tools: ["Python", "Streamlit", "API"], year: "2024" },
  { no: "04", tag: "Python · R", title: "Predictive", italic: "ML Engine",
    body: "Automated pipeline for inference, feature engineering, and model selection.",
    href: "#", img: space, span: "lg:col-span-6", ratio: "aspect-[5/4]", tone: "blush",
    tools: ["sklearn", "R", "pandas"], year: "2025" },
  { no: "05", tag: "Glassmorphism · UI", title: "Modern", italic: "Login",
    body: "A study in soft glass, warm bokeh, and the geometry of welcome screens.",
    href: "https://github.com/elliieooo/modern-login-ui", img: login, span: "lg:col-span-4", ratio: "aspect-[4/5]", tone: "sand",
    tools: ["HTML", "CSS"], year: "2024" },
  { no: "06", tag: "Recon · Vulnerability", title: "CTF", italic: "Reconnaissance",
    body: "Quiet system mapping and exploit research — the slow, patient kind.",
    href: "#", img: recon, span: "lg:col-span-8", ratio: "aspect-[16/10]", tone: "sage",
    tools: ["Burp", "nmap", "Linux"], year: "2025" },
];

const toneBg: Record<NonNullable<Project["tone"]>, string> = {
  blush: "bg-blush/30", sage: "bg-sage/25", sand: "bg-sand",
};

export function Projects() {
  return (
    <section id="work" className="relative px-6 lg:px-16 py-32 lg:py-40 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-20 grid lg:grid-cols-12 gap-8 items-end relative">
          <Sticker rotate={-8} className="absolute -top-8 right-1/3 bg-blush/70 px-3 py-1 rounded-full label-mono z-10">
            ✿ scrapbook mode
          </Sticker>

          <div className="lg:col-span-8">
            <Reveal>
              <p className="label-mono mb-6">Chapter 02 — Selected Work</p>
              <h2 className="font-display font-normal text-5xl md:text-7xl text-ink leading-[0.95]">
                Six small <span className="italic-display text-clay">obsessions</span>,{" "}
                quietly built.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p className="lg:col-span-4 text-ink-soft text-lg leading-relaxed lg:text-right">
              A scrapbook of research notes, side studies, and things made for
              the joy of making. <span className="italic-display text-clay">↓ tilt them.</span>
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {projects.map((p, idx) => (
            <motion.div
              key={p.no}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: idx * 0.08 }}
              className={`${p.span} group`}
            >
              <TiltCard intensity={6}>
                <a
                  href={p.href}
                  data-cursor="open project"
                  className="block"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div
                    className={`relative overflow-hidden rounded-[1.75rem] ${toneBg[p.tone ?? "sand"]} p-3 shadow-[var(--shadow-card)] transition-shadow duration-500 group-hover:shadow-[var(--shadow-soft)]`}
                  >
                    {/* corner badge */}
                    <div className="absolute top-5 left-5 z-10 flex items-center gap-2">
                      <span className="bg-cream/90 backdrop-blur label-mono px-2.5 py-1 rounded-full">
                        {p.no} · {p.year}
                      </span>
                    </div>
                    <motion.div
                      whileHover={{ rotate: 90 }}
                      className="absolute top-5 right-5 z-10 size-9 rounded-full bg-cream/90 backdrop-blur grid place-items-center text-ink"
                    >
                      ↗
                    </motion.div>

                    <div className={`relative ${p.ratio} rounded-[1.25rem] overflow-hidden`}>
                      <motion.img
                        src={p.img}
                        alt={`${p.title} ${p.italic ?? ""}`}
                        loading="lazy"
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.06 }}
                        transition={{ duration: 0.7 }}
                      />
                      {/* hover overlay */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-0 bg-ink/40 backdrop-blur-sm flex items-end p-6"
                      >
                        <div className="flex flex-wrap gap-2">
                          {p.tools.map((t) => (
                            <span key={t} className="label-mono bg-cream/90 px-2 py-1 rounded-full text-ink">
                              {t}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    </div>

                    <div className="px-3 pt-5 pb-3 flex items-start justify-between gap-6">
                      <div className="min-w-0">
                        <p className="label-mono mb-2">
                          <span className="text-clay">●</span> {p.tag}
                        </p>
                        <h3 className="font-display text-3xl md:text-4xl text-ink leading-[1] tracking-tight">
                          {p.title}{" "}
                          {p.italic && (
                            <span className="italic-display text-clay">{p.italic}</span>
                          )}
                        </h3>
                        <p className="mt-3 text-ink-soft leading-relaxed text-sm md:text-base max-w-md">
                          {p.body}
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* small footer note */}
        <Reveal delay={0.2}>
          <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
            <p className="label-mono">+ 20 more in the private archive ◦ ask politely</p>
            <a href="#contact" className="label-mono text-clay hover:underline" data-cursor="email">
              request access →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
