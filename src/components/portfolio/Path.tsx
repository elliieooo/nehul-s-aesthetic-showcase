const experience = [
  {
    period: "2025 — PRES",
    role: "Stegano Researcher",
    org: "Xaenithra · Cybersecurity Team",
    body: "Leading technical initiatives in cryptography and data hiding. Specialized in steganographic engine architecture and vulnerability research within high-stakes CTF environments.",
    accent: true,
  },
  {
    period: "ONGOING",
    role: "CTF Player",
    org: "Independent · Competitive Circuit",
    body: "Vulnerability research, system mapping, and reverse engineering. Active participant in global capture-the-flag competitions and red-team simulations.",
  },
];

const education = [
  {
    period: "2025 — 2029",
    role: "BE Data Science",
    org: "Chandigarh University",
    body: "Mathematical statistics, machine learning architectures, and computational logic.",
    accent: true,
  },
  {
    period: "CERTIFIED",
    role: "Programming Foundations",
    org: "Duke University",
    body: "JavaScript, HTML, CSS — formal grounding in web fundamentals.",
  },
];

function Entry({ item }: { item: typeof experience[number] }) {
  return (
    <div className="grid md:grid-cols-4 gap-4 items-start">
      <span className="font-mono text-ink-muted text-xs uppercase tracking-[0.2em] pt-1">
        {item.period}
      </span>
      <div
        className={`md:col-span-3 border-l pl-8 pb-4 ${
          item.accent ? "border-ember/40" : "border-border"
        }`}
      >
        <h4 className="text-2xl font-display text-ink uppercase tracking-tight">
          {item.role}
        </h4>
        <p
          className={`font-mono text-xs mt-1 uppercase tracking-tight ${
            item.accent ? "text-ember" : "text-ink-muted"
          }`}
        >
          {item.org}
        </p>
        <p className="text-ink-muted mt-4 leading-relaxed">{item.body}</p>
      </div>
    </div>
  );
}

export function Path() {
  return (
    <section id="path" className="relative px-6 lg:px-24 py-32 border-t border-border">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-20">
        <div>
          <p className="font-mono text-ember text-xs mb-12 tracking-[0.3em] uppercase">
            // Professional_Path
          </p>
          <div className="space-y-14">
            {experience.map((e) => <Entry key={e.role} item={e} />)}
          </div>
        </div>
        <div>
          <p className="font-mono text-ember text-xs mb-12 tracking-[0.3em] uppercase">
            // Academic_Record
          </p>
          <div className="space-y-14">
            {education.map((e) => <Entry key={e.role} item={e} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
