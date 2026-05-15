import cover from "@/assets/xaenithra-cover.jpg";
import mothImg from "@/assets/sticker-moth.jpg";
import { motion } from "framer-motion";
import { Reveal } from "./interactive/Reveal";
import { Sticker } from "./interactive/Sticker";
import { TiltCard } from "./interactive/TiltCard";

const team = [
  { name: "Utkarsh", handle: "Artix", role: "Cryptography", note: "Lead architect — breaks crypto that isn't supposed to break.", lead: true },
  { name: "Aryan", handle: "Ary0xploits", role: "Web Exploitation", note: "Injection, auth bypass, server-side logic." },
  { name: "Yuyutshu", handle: "Aquarray", role: "Reverse Engineering", note: "Reconstructs logic from compiled code." },
  { name: "Divyanshu", handle: "Harmless_BOT", role: "OSINT", note: "Surfaces infrastructure that was meant to stay quiet." },
  { name: "Yashika", handle: "Kivi", role: "Binary Exploitation", note: "Memory-level work, bypasses, persistence." },
  { name: "Nehul", handle: "Nehul", role: "Steganography", note: "Recovers hidden data from images, audio, documents.", me: true },
  { name: "Sukhman", handle: "Suxh", role: "Digital Forensics", note: "Reconstructs incidents from storage & memory." },
  { name: "Shivang", handle: "pikas", role: "Digital Forensics", note: "Traces lateral movement, builds evidence chains." },
  { name: "Manas", handle: "nisu_usx", role: "Networking", note: "Real-time traffic analysis, signal interception." },
  { name: "Classified", handle: "Unknown_010", role: "Unknown", note: "No information available." },
];

const capabilities = [
  { no: "01", t: "CTF & Competitions", d: "Dominating leaderboards in international Capture-The-Flag — high-difficulty technical categories." },
  { no: "02", t: "Bug Bounty", d: "Identifying & responsibly disclosing critical vulnerabilities in enterprise infrastructure." },
  { no: "03", t: "Innovative Development", d: "Engineering production-ready security tools like Astra for threat detection & analysis." },
  { no: "04", t: "Hackathons", d: "Architecting high-impact solutions under extreme time and performance constraints." },
];

const recent = [
  { date: "26 Mar 2026", event: "Cyberstrike CTF", rank: "Rank 4", note: "Offline · on-site engagement" },
  { date: "14 Mar 2026", event: "HackData CTF", rank: "Rank 5", note: "of 300 teams · web · crypto · forensics" },
  { date: "21 Feb 2026", event: "Bear CTF", rank: "Top 20", note: "international · open" },
  { date: "17 Jan 2026", event: "SVNIT Surat — Echelon", rank: "Rank 1", note: "first place finish" },
  { date: "15 Dec 2025", event: "IIT Madras", rank: "6th", note: "of 600+ teams" },
];

const xaenithraProjects = [
  { n: "01", t: "Astra", italic: "", body: "Multimodal system detecting synthetic media — fake images, manipulated video, malicious URLs.", tools: ["Python", "Next.js", "PyTorch", "FastAPI"], tone: "blush" },
  { n: "02", t: "Trinetra", italic: "Suite", body: "Forensics pipeline for ingesting encrypted storage, Android extractions and malware artifacts.", tools: ["Rust", "ADB", "Forensics"], tone: "sage" },
  { n: "03", t: "Encoded", italic: "Grid", body: "Closed-circuit messaging on a blind-relay architecture. Traffic analysis yields nothing.", tools: ["Go", "Libsodium", "WS"], tone: "sand" },
  { n: "04", t: "Companio", italic: "", body: "Voice-first AI companion for elderly users. Built in 48 hours on Gemini multimodal.", tools: ["Gemini", "React", "Express"], tone: "blush" },
];

const toneBg: Record<string, string> = {
  blush: "bg-blush/30", sage: "bg-sage/25", sand: "bg-sand",
};

export function Xaenithra() {
  return (
    <section id="xaenithra" className="relative px-6 lg:px-16 py-32 lg:py-40 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        {/* header */}
        <div className="grid lg:grid-cols-12 gap-10 mb-16 items-end relative">
          <Sticker rotate={-6} className="absolute -top-2 right-1/4 bg-sage/50 px-3 py-1 rounded-full label-mono z-10">
            ◦ ten quiet operators ◦
          </Sticker>
          <div className="lg:col-span-8">
            <Reveal>
              <p className="label-mono mb-6">Chapter 02½ — The Cell</p>
              <h2 className="font-display font-normal text-5xl md:text-7xl text-ink leading-[0.95]">
                I work with{" "}
                <span className="italic-display text-clay">Xaenithra</span> — a small
                cell of ten finding out how things break.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <div className="lg:col-span-4 text-ink-soft text-lg leading-relaxed">
              <p>Each member specialises in one area — crypto, binex, forensics, OSINT, RE, web, networking, steganography. The overlap is where it gets interesting.</p>
              <p className="label-mono mt-4 text-clay">● active · accepting select engagements</p>
            </div>
          </Reveal>
        </div>

        {/* cover image with overlay */}
        <Reveal>
          <div className="relative rounded-[2rem] overflow-hidden mb-20 shadow-[var(--shadow-soft)]" data-cursor="dossier">
            <img src={cover} alt="Soft objects" className="w-full h-[40vh] object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/10 to-transparent" />
            <div className="absolute inset-0 p-8 lg:p-12 flex flex-col justify-end text-cream">
              <p className="label-mono text-cream/70">est. 9 nov 2025 · india</p>
              <p className="font-display italic-display text-3xl md:text-5xl mt-2 max-w-2xl leading-tight">
                "Built for the work that doesn't get talked about."
              </p>
            </div>
            <Sticker rotate={-8} drag={false} className="absolute top-6 right-6 bg-cream/95 backdrop-blur px-3 py-1.5 rounded-full label-mono">
              ✦ x · 10 members
            </Sticker>
          </div>
        </Reveal>

        {/* Capabilities */}
        <div className="mb-24">
          <Reveal>
            <p className="label-mono mb-8">— Capabilities</p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {capabilities.map((c, i) => (
              <motion.div
                key={c.no}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                whileHover={{ y: -6 }}
                className="rounded-2xl border border-border bg-cream/70 p-6 group cursor-default"
              >
                <p className="label-mono text-clay mb-4">{c.no}</p>
                <h3 className="font-display text-2xl text-ink leading-tight group-hover:italic-display group-hover:text-clay transition-all">
                  {c.t}
                </h3>
                <p className="mt-3 text-sm text-ink-soft leading-relaxed">{c.d}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-24">
          <div className="flex items-end justify-between mb-8 gap-6 flex-wrap">
            <Reveal>
              <p className="label-mono">— The Team</p>
            </Reveal>
            <Reveal>
              <p className="label-mono">10 specialists · 1 cell</p>
            </Reveal>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {team.map((m, i) => (
              <motion.div
                key={m.handle}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                whileHover={{ y: -4 }}
                className={`relative rounded-2xl border p-5 cursor-default ${
                  m.me
                    ? "bg-blush/50 border-clay/40"
                    : m.lead
                    ? "bg-sand border-border"
                    : "bg-cream/70 border-border"
                }`}
                data-cursor={m.handle.toLowerCase()}
              >
                {m.lead && (
                  <span className="absolute top-4 right-4 label-mono text-clay">leader</span>
                )}
                {m.me && (
                  <span className="absolute top-4 right-4 label-mono text-clay">that's me ✿</span>
                )}
                <p className="label-mono">{m.role}</p>
                <p className="font-display text-2xl text-ink mt-2">
                  {m.name} <span className="italic-display text-clay text-base">/ {m.handle}</span>
                </p>
                <p className="mt-3 text-sm text-ink-soft leading-relaxed">{m.note}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Built at Xaenithra projects */}
        <div className="mb-24">
          <div className="flex items-end justify-between mb-8 gap-6 flex-wrap">
            <Reveal>
              <p className="label-mono">— Built at Xaenithra</p>
            </Reveal>
            <Reveal>
              <p className="label-mono italic-display text-clay">four quiet tools</p>
            </Reveal>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {xaenithraProjects.map((p, i) => (
              <motion.div
                key={p.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <TiltCard intensity={4}>
                  <div className={`rounded-[1.5rem] p-6 border border-border ${toneBg[p.tone]}`}>
                    <div className="flex items-start justify-between mb-4">
                      <p className="label-mono"><span className="text-clay">{p.n}</span> · case study</p>
                      <span className="size-9 rounded-full bg-cream grid place-items-center text-ink">→</span>
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
        <div className="relative">
          <Sticker rotate={6} className="absolute -top-4 right-0 bg-blush/70 px-3 py-1 rounded-full label-mono z-10">
            ◦ leaderboard ◦
          </Sticker>
          <Reveal>
            <p className="label-mono mb-8">— Recent Competitions</p>
          </Reveal>
          <div className="rounded-[1.75rem] border border-border bg-cream/60 overflow-hidden">
            {recent.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ backgroundColor: "color-mix(in oklab, var(--blush) 25%, transparent)" }}
                className="grid grid-cols-12 gap-4 px-6 py-5 border-t border-border first:border-t-0 items-center cursor-default"
              >
                <p className="label-mono col-span-3">{r.date}</p>
                <p className="font-display text-xl text-ink col-span-5">{r.event}</p>
                <p className="font-display italic-display text-clay text-xl col-span-2">{r.rank}</p>
                <p className="label-mono col-span-2 text-right">{r.note}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* tiny footer credit */}
        <div className="mt-12 flex items-center gap-3 label-mono">
          <img src={mothImg} alt="" className="size-8 object-contain" />
          <span>signed · ellie · stegano cell · xaenithra</span>
        </div>
      </div>
    </section>
  );
}
