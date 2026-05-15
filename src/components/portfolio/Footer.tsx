const interests = ["Skateboarding", "Hiking", "Anime", "Manga", "Music", "Blender 3D"];

export function Footer() {
  return (
    <footer id="contact" className="relative px-6 lg:px-24 py-32 border-t border-border overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-40"
        style={{ background: "radial-gradient(ellipse at bottom, color-mix(in oklab, var(--ember) 18%, transparent), transparent 60%)" }} />

      <div className="relative max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 mb-24">
          <div>
            <p className="font-mono text-ember text-xs uppercase tracking-[0.3em] mb-6">
              // Establish_Connection
            </p>
            <h2 className="font-display text-5xl md:text-7xl uppercase text-ink leading-[0.9] tracking-tight mb-10">
              Let's build<br />the unseen.
            </h2>
            <a
              href="mailto:nehul@example.com"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-ember text-primary-foreground font-mono text-xs uppercase tracking-[0.25em] hover:-translate-y-0.5 transition-transform"
            >
              <span>Open Channel</span>
              <span aria-hidden>→</span>
            </a>
          </div>

          <div className="flex flex-col justify-between gap-12">
            <div>
              <p className="font-mono text-[10px] text-ink-muted uppercase tracking-[0.3em] mb-4">
                Off-screen
              </p>
              <div className="flex flex-wrap gap-2">
                {interests.map((tag, i) => (
                  <span
                    key={tag}
                    className={`px-4 py-1.5 rounded-full border text-xs font-mono uppercase tracking-tight ${
                      i === 0
                        ? "border-ember/40 bg-ember/5 text-ember"
                        : "border-border text-ink-muted"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3 font-mono text-sm uppercase tracking-tight">
              <a
                href="https://linkedin.com/in/nehulthakur"
                target="_blank"
                rel="noreferrer"
                className="group flex justify-between items-center py-3 border-b border-border hover:border-ember transition-colors"
              >
                <span className="text-ink group-hover:text-ember transition-colors">LinkedIn</span>
                <span className="text-ink-muted text-xs">/in/nehulthakur ↗</span>
              </a>
              <a
                href="https://github.com/elliieooo"
                target="_blank"
                rel="noreferrer"
                className="group flex justify-between items-center py-3 border-b border-border hover:border-ember transition-colors"
              >
                <span className="text-ink group-hover:text-ember transition-colors">GitHub</span>
                <span className="text-ink-muted text-xs">/elliieooo ↗</span>
              </a>
              <a
                href="https://instagram.com/elliieooo"
                target="_blank"
                rel="noreferrer"
                className="group flex justify-between items-center py-3 border-b border-border hover:border-ember transition-colors"
              >
                <span className="text-ink group-hover:text-ember transition-colors">Instagram</span>
                <span className="text-ink-muted text-xs">@elliieooo ↗</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="font-display text-2xl uppercase text-ink tracking-tight">
            Nehul "Ellie" Thakur
          </p>
          <p className="font-mono text-[10px] text-ink-muted uppercase tracking-[0.3em]">
            © 2025 · Designed for the edge
            <span className="ml-2 text-ember animate-blink">_</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
