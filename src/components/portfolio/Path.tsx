import { motion } from "framer-motion";
import { Reveal } from "./interactive/Reveal";


type Entry = {
  period: string; role: string; italic?: string; org: string; body: string; highlight?: boolean;
  emoji?: string;
};

const experience: Entry[] = [
  { period: "2025 — present", role: "Stegano", italic: "Researcher", org: "Xaenithra · Cybersecurity",
    body: "Leading research in cryptography and data-hiding — building steganographic engines and mapping quiet vulnerabilities for high-stakes CTF environments.",
    highlight: true, emoji: "🔍" },
  { period: "ongoing", role: "CTF", italic: "Player", org: "Independent · Competitive",
    body: "Reverse engineering, system mapping, and patient reconnaissance across global capture-the-flag events.",
    emoji: "⚑" },
];

const education: Entry[] = [
  { period: "2025 — 2029", role: "BE in", italic: "Data Science", org: "Chandigarh University",
    body: "Mathematical statistics, machine learning, and the calm side of computational logic.",
    highlight: true, emoji: "📐" },
  { period: "certified", role: "Programming", italic: "Foundations", org: "Duke University",
    body: "JavaScript, HTML, CSS — formal grounding in the web's quiet language.", emoji: "✦" },
];

function EntryRow({ item, idx }: { item: Entry; idx: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: idx * 0.1 }}
      whileHover={{ x: 6 }}
      className="grid md:grid-cols-12 gap-6 items-start py-10 border-t border-border first:border-t-0 cursor-default group"
    >
      <div className="md:col-span-3">
        <p className="label-mono">{item.period}</p>
        {item.highlight && (
          <span className="inline-flex items-center gap-1.5 mt-3 text-xs px-3 py-1 rounded-full bg-blush/50 text-ink">
            <motion.span
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="size-1.5 rounded-full bg-clay"
            />
            current
          </span>
        )}
      </div>
      <div className="md:col-span-9 relative">
        <span className="absolute -left-10 top-2 text-2xl opacity-0 group-hover:opacity-100 transition-opacity">
          {item.emoji}
        </span>
        <h4 className="font-display text-3xl md:text-4xl text-ink leading-[1.05] group-hover:text-clay transition-colors">
          {item.role}{" "}
          {item.italic && <span className="italic-display text-clay">{item.italic}</span>}
        </h4>
        <p className="label-mono mt-2">{item.org}</p>
        <p className="mt-4 text-ink-soft leading-relaxed max-w-2xl">{item.body}</p>
      </div>
    </motion.div>
  );
}

export function Path() {
  return (
    <section id="path" className="relative px-6 lg:px-16 py-32 lg:py-40 bg-sand/40 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-20 max-w-3xl">
          <Reveal>
            <p className="label-mono mb-6">Chapter 03 — Journal</p>
            <h2 className="font-display font-normal text-5xl md:text-7xl text-ink leading-[0.95]">
              A short ledger of <span className="italic-display text-clay">where I've been</span>{" "}
              & what I'm learning.
            </h2>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <p className="label-mono mb-8">— Practice</p>
            {experience.map((e, i) => <EntryRow key={e.role} item={e} idx={i} />)}
          </div>
          <div>
            <p className="label-mono mb-8">— Study</p>
            {education.map((e, i) => <EntryRow key={e.role} item={e} idx={i} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
