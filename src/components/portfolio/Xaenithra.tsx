import cover from "@/assets/xaenithra-cover.jpg";
import { motion } from "framer-motion";
import { Reveal } from "./interactive/Reveal";
import { TiltCard } from "./interactive/TiltCard";

const team = [
  { name: "Utkarsh", handle: "Artix", role: "Cryptography", lead: true },
  { name: "Aryan", handle: "Ary0xploits", role: "Web Exploitation" },
  { name: "Yuyutshu", handle: "Aquarray", role: "Reverse Engineering" },
  { name: "Divyanshu", handle: "Harmless_BOT", role: "OSINT" },
  { name: "Yashika", handle: "Kivi", role: "Binary Exploitation" },
  { name: "Nehul", handle: "Nehul", role: "Steganography", me: true },
  { name: "Sukhman", handle: "Suxh", role: "Forensics" },
  { name: "Shivang", handle: "pikas", role: "Forensics" },
  { name: "Manas", handle: "nisu_usx", role: "Networking" },
  { name: "Classified", handle: "Unknown_010", role: "—" },
];

const capabilities = [
  { no: "01", t: "CTF & Competitions" },
  { no: "02", t: "Bug Bounty" },
  { no: "03", t: "Tooling" },
  { no: "04", t: "Hackathons" },
];

const recent = [
  { date: "Mar 2026", event: "Cyberstrike CTF", rank: "Rank 4" },
  { date: "Mar 2026", event: "HackData CTF", rank: "Rank 5" },
  { date: "Feb 2026", event: "Bear CTF", rank: "Top 20" },
  { date: "Jan 2026", event: "SVNIT Echelon", rank: "Rank 1" },
  { date: "Dec 2025", event: "IIT Madras", rank: "6th" },
];

const xProjects = [
  { n: "01", t: "Astra", body: "Detects synthetic media — fake images, videos, malicious URLs.", tools: ["PyTorch", "Next.js"], tone: "blush" },
  { n: "02", t: "Trinetra", italic: "Suite", body: "Forensics pipeline for encrypted storage and Android extractions.", tools: ["Rust", "ADB"], tone: "sage" },
  { n: "03", t: "Encoded", italic: "Grid", body: "Closed-circuit messaging on a blind-relay architecture.", tools: ["Go", "Libsodium"], tone: "sand" },
  { n: "04", t: "Companio", body: "Voice-first AI companion. Built in 48 hours on Gemini.", tools: ["Gemini", "React"], tone: "blush" },
];

const toneBg: Record<string, string> = {
  blush: "bg-blush/30", sage: "bg-sage/25", sand: "bg-sand",
};

export function Xaenithra() {
  return (
    <section id="xaenithra" className="relative px-6 lg:px-16 py-32 lg:py-40 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        {/* header */}
        <div className="mb-16 max-w-3xl">
          <Reveal>
            <p className="label-mono mb-6">Chapter 02½ — The Cell</p>
            <h2 className="font-display font-normal text-5xl md:text-7xl text-ink leading-[0.95]">
              I work with{" "}
              <span className="italic-display text-clay">Xaenithra</span> — a small
              cell of ten.
            </h2>
          </Reveal>
        </div>

        {/* cover image with overlay */}
        <Reveal>
          <div className="relative rounded-[2rem] overflow-hidden mb-20 shadow-[var(--shadow-soft)]" data-cursor="dossier">
            <img src={cover} alt="" className="w-full h-[36vh] object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-ink/10 to-transparent" />
            <div className="absolute inset-0 p-8 lg:p-12 flex flex-col justify-end text-cream">
              <p className="label-mono text-cream/70">est. 9 nov 2025 · india</p>
              <p className="font-display italic-display text-3xl md:text-5xl mt-2 max-w-2xl leading-tight">
                "Built for the work that doesn't get talked about."
              </p>
            </div>
          </div>
        </Reveal>

        {/* Capabilities */}
        <div className="mb-24">
          <p className="label-mono mb-8">— Capabilities</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {capabilities.map((c, i) => (
              <motion.div
                key={c.no}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-border bg-cream/70 p-6 cursor-default"
              >
                <p className="label-mono text-clay mb-4">{c.no}</p>
                <h3 className="font-display text-2xl text-ink leading-tight">{c.t}</h3>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-24">
          <div className="flex items-end justify-between mb-8 gap-6 flex-wrap">
            <p className="label-mono">— The Team</p>
            <p className="label-mono">10 specialists · 1 cell</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {team.map((m, i) => (
              <motion.div
                key={m.handle}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                whileHover={{ y: -3 }}
                className={`relative rounded-2xl border p-4 cursor-default ${
                  m.me
                    ? "bg-blush/50 border-clay/40"
                    : m.lead
                    ? "bg-sand border-border"
                    : "bg-cream/70 border-border"
                }`}
                data-cursor={m.handle.toLowerCase()}
              >
                <p className="label-mono">{m.role}</p>
                <p className="font-display text-xl text-ink mt-2 leading-tight">{m.name}</p>
                <p className="label-mono mt-1 text-clay">/{m.handle}</p>
                {m.lead && <span className="absolute top-3 right-3 label-mono text-clay">lead</span>}
                {m.me && <span className="absolute top-3 right-3 label-mono text-clay">me</span>}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Built at Xaenithra projects */}
        <div className="mb-24">
          <p className="label-mono mb-8">— Built at Xaenithra</p>
          <div className="grid sm:grid-cols-2 gap-5">
            {xProjects.map((p, i) => (
              <motion.div
                key={p.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <TiltCard intensity={4}>
                  <div className={`rounded-[1.5rem] p-6 border border-border ${toneBg[p.tone]}`}>
                    <div className="flex items-start justify-between mb-3">
                      <p className="label-mono"><span className="text-clay">{p.n}</span></p>
                      <span className="size-8 rounded-full bg-cream grid place-items-center text-ink text-sm">→</span>
                    </div>
                    <h4 className="font-display text-3xl text-ink leading-tight">
                      {p.t} {p.italic && <span className="italic-display text-clay">{p.italic}</span>}
                    </h4>
                    <p className="mt-3 text-ink-soft text-sm leading-relaxed">{p.body}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {p.tools.map((t) => (
                        <span key={t} className="label-mono bg-cream/80 px-2 py-1 rounded-full">{t}</span>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Recent competitions */}
        <div>
          <p className="label-mono mb-8">— Recent Competitions</p>
          <div className="rounded-[1.5rem] border border-border bg-cream/60 overflow-hidden">
            {recent.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ backgroundColor: "color-mix(in oklab, var(--blush) 22%, transparent)" }}
                className="grid grid-cols-12 gap-4 px-6 py-5 border-t border-border first:border-t-0 items-center cursor-default"
              >
                <p className="label-mono col-span-3">{r.date}</p>
                <p className="font-display text-xl text-ink col-span-6">{r.event}</p>
                <p className="font-display italic-display text-clay text-xl col-span-3 text-right">{r.rank}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
