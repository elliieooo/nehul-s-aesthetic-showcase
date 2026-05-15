import heroImg from "@/assets/hero-soft.jpg";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-center px-6 lg:px-16 pt-32 pb-16 overflow-hidden grain"
    >
      <div className="max-w-[1400px] mx-auto w-full grid lg:grid-cols-12 gap-12 items-center">
        {/* Left — text */}
        <div className="lg:col-span-7 relative z-10">
          <p className="label-mono mb-8 animate-fade-up">
            <span className="text-clay">●</span> &nbsp;Portfolio · Édition 2025
          </p>

          <h1 className="font-display font-normal text-6xl md:text-7xl lg:text-[8.5rem] leading-[0.92] tracking-tight text-ink animate-reveal">
            Quiet code,
            <br />
            <span className="italic-display text-clay">loud&nbsp;curiosity.</span>
          </h1>

          <p className="mt-10 max-w-xl text-lg md:text-xl text-ink-soft leading-relaxed animate-fade-up [animation-delay:200ms]">
            I'm <span className="text-ink">Nehul</span> — most know me as
            <span className="italic-display text-clay"> Ellie</span>. A data
            science student, steganography researcher, and quiet observer of
            things hiding in plain sight.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-6 animate-fade-up [animation-delay:400ms]">
            <a
              href="#work"
              className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-ink text-cream label-mono hover:bg-clay transition-colors"
            >
              <span>See the work</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#contact"
              className="label-mono underline-offset-8 hover:text-clay hover:underline transition-colors"
            >
              Say hello
            </a>
          </div>
        </div>

        {/* Right — image card */}
        <div className="lg:col-span-5 relative animate-fade-up [animation-delay:300ms]">
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-[var(--shadow-soft)]">
            <img
              src={heroImg}
              alt="Soft cream silk and dried flowers"
              width={1600}
              height={1200}
              className="w-full h-full object-cover animate-float"
            />
          </div>
          {/* Floating tag */}
          <div className="absolute -bottom-6 -left-6 bg-cream/90 backdrop-blur border border-border rounded-2xl px-5 py-4 shadow-[var(--shadow-card)]">
            <p className="label-mono mb-1">Currently</p>
            <p className="font-display text-xl text-ink leading-tight">
              Researching at <span className="italic-display text-clay">Xaenithra</span>
            </p>
          </div>
          <div className="absolute -top-4 -right-4 size-24 rounded-full bg-blush/60 grid place-items-center font-display italic-display text-ink text-lg rotate-12">
            est. '25
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="absolute bottom-0 inset-x-0 border-y border-border bg-sand/40 backdrop-blur py-4 overflow-hidden">
        <div className="flex whitespace-nowrap">
          <div className="flex items-center gap-10 animate-marquee px-6 shrink-0">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex items-center gap-10 label-mono">
                <span>Python</span><span className="text-clay">✦</span>
                <span>R</span><span className="text-clay">✦</span>
                <span>Mathematical Statistics</span><span className="text-clay">✦</span>
                <span>Steganography</span><span className="text-clay">✦</span>
                <span>CTF Reconnaissance</span><span className="text-clay">✦</span>
                <span>Blender 3D</span><span className="text-clay">✦</span>
                <span>UI / UX</span><span className="text-clay">✦</span>
                <span>Anime · Manga · Music · Skating</span><span className="text-clay">✦</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
