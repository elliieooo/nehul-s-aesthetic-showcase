type Entry = {
  period: string;
  role: string;
  italic?: string;
  org: string;
  body: string;
  highlight?: boolean;
};

const experience: Entry[] = [
  {
    period: "2025 — present",
    role: "Stegano",
    italic: "Researcher",
    org: "Xaenithra · Cybersecurity",
    body: "Leading research in cryptography and data-hiding — building steganographic engines and mapping quiet vulnerabilities for high-stakes CTF environments.",
    highlight: true,
  },
  {
    period: "ongoing",
    role: "CTF",
    italic: "Player",
    org: "Independent · Competitive",
    body: "Reverse engineering, system mapping, and patient reconnaissance across global capture-the-flag events.",
  },
];

const education: Entry[] = [
  {
    period: "2025 — 2029",
    role: "BE in",
    italic: "Data Science",
    org: "Chandigarh University",
    body: "Mathematical statistics, machine learning, and the calm side of computational logic.",
    highlight: true,
  },
  {
    period: "certified",
    role: "Programming",
    italic: "Foundations",
    org: "Duke University",
    body: "JavaScript, HTML, CSS — formal grounding in the web's quiet language.",
  },
];

function EntryRow({ item }: { item: Entry }) {
  return (
    <div className="grid md:grid-cols-12 gap-6 items-start py-10 border-t border-border first:border-t-0">
      <div className="md:col-span-3">
        <p className="label-mono">{item.period}</p>
        {item.highlight && (
          <span className="inline-block mt-3 text-xs px-3 py-1 rounded-full bg-blush/50 text-ink">
            current
          </span>
        )}
      </div>
      <div className="md:col-span-9">
        <h4 className="font-display text-3xl md:text-4xl text-ink leading-[1.05]">
          {item.role}{" "}
          {item.italic && <span className="italic-display text-clay">{item.italic}</span>}
        </h4>
        <p className="label-mono mt-2">{item.org}</p>
        <p className="mt-4 text-ink-soft leading-relaxed max-w-2xl">{item.body}</p>
      </div>
    </div>
  );
}

export function Path() {
  return (
    <section id="path" className="relative px-6 lg:px-16 py-32 lg:py-40 bg-sand/40">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-20 max-w-3xl">
          <p className="label-mono mb-6">Chapter 03 — Journal</p>
          <h2 className="font-display font-normal text-5xl md:text-7xl text-ink leading-[0.95]">
            A short ledger of <span className="italic-display text-clay">where I've been</span>{" "}
            & what I'm learning.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <p className="label-mono mb-8">— Practice</p>
            <div>
              {experience.map((e) => <EntryRow key={e.role} item={e} />)}
            </div>
          </div>
          <div>
            <p className="label-mono mb-8">— Study</p>
            <div>
              {education.map((e) => <EntryRow key={e.role} item={e} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
