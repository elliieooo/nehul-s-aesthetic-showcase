import { motion } from "framer-motion";
import { Magnetic } from "./interactive/Magnetic";


const socials = [
  { label: "LinkedIn", handle: "/in/nehulthakur", href: "https://linkedin.com/in/nehulthakur", emoji: "in" },
  { label: "GitHub", handle: "/elliieooo", href: "https://github.com/elliieooo", emoji: "{ }" },
  { label: "Instagram", handle: "@elliieooo", href: "https://instagram.com/elliieooo", emoji: "✿" },
];

export function Footer() {
  return (
    <footer id="contact" className="relative px-6 lg:px-16 pt-32 pb-12 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 100%, color-mix(in oklab, var(--blush) 50%, transparent), transparent 70%)",
        }}
      />

      <div className="relative max-w-[1400px] mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-24">

          <p className="label-mono mb-8">Chapter 04 — Say Hello</p>
          <h2 className="font-display font-normal text-6xl md:text-8xl lg:text-[10rem] text-ink leading-[0.9]">
            Let's make something{" "}
            <span className="italic-display text-clay">soft &amp; precise</span>{" "}
            together.
          </h2>
          <Magnetic>
            <a
              href="mailto:hello@nehul.dev"
              data-cursor="copy email"
              className="group inline-flex items-center gap-4 mt-12 px-8 py-4 rounded-full bg-ink text-cream label-mono hover:bg-clay transition-colors"
            >
              <span>Open a conversation</span>
              <motion.span
                animate={{ x: [0, 6, 0] }}
                transition={{ duration: 1.4, repeat: Infinity }}
              >→</motion.span>
            </a>
          </Magnetic>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-border border border-border rounded-[1.5rem] overflow-hidden">
          {socials.map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              data-cursor={s.label.toLowerCase()}
              whileHover={{ y: -2 }}
              className="group bg-cream p-8 hover:bg-blush/30 transition-colors flex flex-col gap-3 relative"
            >
              <span className="absolute top-6 right-6 font-mono text-sm text-clay opacity-50 group-hover:opacity-100 transition-opacity">
                {s.emoji}
              </span>
              <p className="label-mono">{s.label}</p>
              <div className="flex items-end justify-between">
                <p className="font-display text-3xl text-ink group-hover:italic-display group-hover:text-clay transition-all">
                  {s.handle}
                </p>
                <span className="text-ink-soft group-hover:text-clay group-hover:translate-x-1 transition-all">↗</span>
              </div>
            </motion.a>
          ))}
        </div>


        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <p className="font-display text-3xl text-ink">
              Nehul <span className="italic-display text-clay">"Ellie"</span> Thakur
            </p>
            <p className="label-mono mt-2">designed &amp; built with care · 2025</p>
          </div>
          <p className="label-mono">◦ a quiet portfolio ◦ updated this season ◦</p>
        </div>
      </div>
    </footer>
  );
}
