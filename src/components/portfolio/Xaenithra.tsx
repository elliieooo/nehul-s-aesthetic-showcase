import cover from "@/assets/xaenithra-cover.jpg";
import { motion } from "framer-motion";
import { Reveal } from "./interactive/Reveal";
import { SectionReveal, RevealItem } from "./interactive/SectionReveal";
import { Magnetic } from "./interactive/Magnetic";

const team = [
  { name: "Utkarsh", handle: "Artix", role: "Crypto", lead: true },
  { name: "Aryan", handle: "Ary0xploits", role: "Web" },
  { name: "Yuyutshu", handle: "Aquarray", role: "Rev" },
  { name: "Divyanshu", handle: "Harmless_BOT", role: "OSINT" },
  { name: "Yashika", handle: "Kivi", role: "Pwn" },
  { name: "Nehul", handle: "Nehul", role: "Stegano", me: true },
  { name: "Sukhman", handle: "Suxh", role: "Forensics" },
  { name: "Shivang", handle: "pikas", role: "Forensics" },
  { name: "Manas", handle: "nisu_usx", role: "Net" },
  { name: "...", handle: "010", role: "—" },
];

const xProjects = [
  { t: "Astra", body: "Synthetic media detection.", tone: "blush" },
  { t: "Trinetra", body: "Forensics pipeline.", tone: "sage" },
  { t: "Encoded", body: "Closed messaging.", tone: "sand" },
];

const toneBg: Record<string, string> = {
  blush: "bg-blush/30", sage: "bg-sage/25", sand: "bg-sand",
};

export function Xaenithra() {
  return (
    <section id="xaenithra" className="relative px-6 lg:px-16 py-24 overflow-hidden bg-sand/20">
      <div className="max-w-[1200px] mx-auto">
        <SectionReveal>
          <div className="grid lg:grid-cols-[1fr,400px] gap-16 items-start">
            <div>
              <RevealItem>
                <p className="label-mono mb-4 text-clay">Cell 02½ — Collaboration</p>
                <h2 className="font-display font-normal text-4xl md:text-5xl text-ink leading-tight mb-6">
                  Part of <span className="italic-display text-clay">Xaenithra</span>, a specialized team focused on advanced security research.
                </h2>
                <p className="text-ink-soft max-w-xl mb-8 leading-relaxed">
                  While my primary focus is steganography and data science, I collaborate with this cell on collective R&D, CTFs, and modular security tooling.
                </p>
              </RevealItem>

              <div className="flex flex-wrap gap-4 mb-12">
                <RevealItem>
                  <Magnetic intensity={0.2}>
                    <a
                      href="https://github.com/Xaenithra"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-ink text-cream px-6 py-3 text-sm font-medium transition-transform hover:scale-105 active:scale-95"
                      data-cursor="external"
                    >
                      Access Xaenithra Website
                      <span className="text-xs">↗</span>
                    </a>
                  </Magnetic>
                </RevealItem>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {team.map((m, i) => (
                  <RevealItem key={m.handle}>
                    <div className={`p-3 rounded-xl border text-center ${m.me ? 'bg-blush/30 border-clay/30' : 'bg-cream/50 border-border'}`}>
                      <p className="label-mono text-[10px] opacity-70">{m.role}</p>
                      <p className="font-display text-lg text-ink mt-1">{m.name}</p>
                    </div>
                  </RevealItem>
                ))}
              </div>
            </div>

            <div className="relative">
              <RevealItem>
                <div className="rounded-[2rem] overflow-hidden shadow-card mb-8">
                  <img src={cover} alt="" className="w-full h-[250px] object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                </div>
              </RevealItem>

              <div className="space-y-3">
                <p className="label-mono mb-4">— Notable Contributions</p>
                {xProjects.map((p, i) => (
                  <RevealItem key={p.t}>
                    <div className={`p-4 rounded-2xl border border-border ${toneBg[p.tone]} flex items-center justify-between group cursor-default`}>
                      <div>
                        <h4 className="font-display text-xl text-ink">{p.t}</h4>
                        <p className="text-xs text-ink-soft">{p.body}</p>
                      </div>
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity text-clay">→</span>
                    </div>
                  </RevealItem>
                ))}
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
