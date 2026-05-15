import aboutImg from "@/assets/about-soft.jpg";

const skills = [
  "Python", "R", "Statistics", "Data Science", "Machine Learning",
  "Steganography", "Cryptography", "CTF / Recon",
  "Blender", "Graphic Design", "UI / UX", "Frontend",
];

const interests = ["Skateboarding", "Hiking", "Anime", "Manga", "Music"];

export function About() {
  return (
    <section id="about" className="relative px-6 lg:px-16 py-32 lg:py-40">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-16 items-start">
        {/* Image column */}
        <div className="lg:col-span-5 lg:sticky lg:top-32">
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-[var(--shadow-soft)]">
            <img
              src={aboutImg}
              alt="Notebook, ceramic mugs and dried flowers in morning light"
              loading="lazy"
              width={1000}
              height={1200}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="label-mono mt-6 text-center">
            ◦ &nbsp;a quiet morning, somewhere in chandigarh &nbsp;◦
          </p>
        </div>

        {/* Text column */}
        <div className="lg:col-span-7 space-y-10">
          <div>
            <p className="label-mono mb-6">Chapter 01 — About</p>
            <h2 className="font-display font-normal text-5xl md:text-7xl text-ink leading-[0.95]">
              A quiet maker, <span className="italic-display text-clay">always listening</span>{" "}
              for the message underneath.
            </h2>
          </div>

          <div className="space-y-6 text-lg text-ink-soft leading-relaxed max-w-2xl">
            <p>
              I study Data Science at <span className="text-ink">Chandigarh University</span>{" "}
              and research steganography for the <span className="text-ink">Xaenithra</span>{" "}
              CTF team — the soft art of hiding data inside ordinary pixels.
            </p>
            <p>
              I move between heavy statistics and gentle design: predictive engines in
              Python and R, cryptographic experiments, Blender renders, and frontends
              that feel like paper. When the screen's off — skating, slow hikes, anime,
              manga, and a steady stack of records.
            </p>
          </div>

          <div className="pt-6">
            <p className="label-mono mb-4">A short list of tools</p>
            <div className="flex flex-wrap gap-2">
              {skills.map((s, i) => (
                <span
                  key={s}
                  className={`px-4 py-2 rounded-full border text-sm transition-all hover:-translate-y-0.5 ${
                    i % 4 === 0
                      ? "bg-blush/40 border-blush text-ink"
                      : "bg-sand/50 border-border text-ink-soft hover:text-ink"
                  }`}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-2">
            <p className="label-mono mb-4">Off-screen</p>
            <p className="font-display text-2xl text-ink-soft leading-snug">
              {interests.map((tag, i) => (
                <span key={tag}>
                  <span className={i === 0 ? "italic-display text-clay" : ""}>{tag}</span>
                  {i < interests.length - 1 && <span className="text-clay mx-3">·</span>}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
