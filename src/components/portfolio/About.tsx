const skills = [
  "Python", "R", "Mathematical Statistics", "Data Science",
  "Machine Learning", "Steganography", "Cryptography", "CTF / Recon",
  "Blender 3D", "Graphic Design", "UI / UX", "Frontend Dev",
];

export function About() {
  return (
    <section id="dossier" className="relative px-6 lg:px-24 py-32 border-t border-border">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-4">
          <p className="font-mono text-ember text-xs uppercase tracking-[0.3em] mb-6">// Dossier_01</p>
          <h2 className="font-display text-4xl md:text-5xl uppercase tracking-tight text-ink leading-[0.95]">
            Quiet hands.<br />Loud signal.
          </h2>
        </div>

        <div className="lg:col-span-8 space-y-8 text-lg text-ink-muted leading-relaxed">
          <p>
            I'm <span className="text-ink">Nehul</span> — most know me as
            <span className="text-ember"> Ellie</span>. Currently pursuing a BE in Data
            Science at Chandigarh University while researching steganography for the
            <span className="text-ink"> Xaenithra</span> CTF team.
          </p>
          <p>
            I work the seam between heavy statistics and digital invisibility — building
            predictive engines in Python and R, hiding payloads inside ordinary pixels,
            and reverse-engineering systems for sport. When the screen's off: skating,
            hiking, anime, manga, and a slow stack of records.
          </p>

          <div className="pt-8">
            <p className="font-mono text-[10px] text-ink-muted uppercase tracking-[0.3em] mb-4">
              Intelligence Grid
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map((s, i) => (
                <span
                  key={s}
                  className={`px-4 py-1.5 rounded-full border text-xs font-mono uppercase tracking-tight transition-all hover:-translate-y-0.5 ${
                    i % 5 === 0
                      ? "border-ember/40 bg-ember/5 text-ember"
                      : "border-border bg-surface/40 text-ink-muted hover:text-ink"
                  }`}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
