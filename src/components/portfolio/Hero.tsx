import heroAmbient from "@/assets/hero-ambient.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex flex-col justify-center px-6 lg:px-24 overflow-hidden grain">
      {/* Ambient image */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={heroAmbient}
          alt=""
          width={1600}
          height={1024}
          className="w-full h-full object-cover opacity-30 animate-float"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      {/* Top meta strip */}
      <div className="absolute top-24 right-6 lg:right-24 text-right hidden md:block z-10">
        <p className="font-mono text-[10px] text-ink-muted uppercase tracking-[0.25em] leading-relaxed">
          Subject: Nehul Thakur<br />
          Codename: <span className="text-ember">Ellie</span><br />
          Status: <span className="text-ember">Active_Researcher</span>
        </p>
      </div>

      <div className="relative z-10 max-w-6xl">
        <h2 className="font-mono text-ember text-xs mb-6 uppercase tracking-[0.4em] animate-fade-up">
          System.Initialize("Nehul Thakur")
        </h2>

        <h1 className="font-display font-extrabold text-7xl md:text-8xl lg:text-[10rem] leading-[0.85] uppercase tracking-tighter text-ink mb-8 animate-reveal">
          Hiding in
          <br />
          <span className="text-stroke-ember">Plain Sight</span>
        </h1>

        <p className="max-w-xl text-lg md:text-xl text-ink-muted font-light leading-relaxed animate-fade-up [animation-delay:200ms]">
          Data Science Enthusiast & Steganography researcher. Mapping systems, breaking
          ciphers, and building predictive engines at the intersection of statistics
          and cybersecurity.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4 animate-fade-up [animation-delay:400ms]">
          <div className="px-4 py-2 border border-ember/30 rounded-full flex items-center gap-2 bg-surface/40 backdrop-blur-sm">
            <span className="relative flex w-2 h-2">
              <span className="absolute inset-0 rounded-full bg-ember animate-ping opacity-60" />
              <span className="relative w-2 h-2 rounded-full bg-ember" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-wider text-ember">
              Active : Xaenithra Team
            </span>
          </div>
          <a
            href="#work"
            className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink-muted hover:text-ember transition-colors"
          >
            ↓ Scroll to decode
          </a>
        </div>
      </div>

      {/* Marquee */}
      <div className="absolute bottom-0 inset-x-0 border-t border-border bg-background/70 backdrop-blur py-3 overflow-hidden z-10">
        <div className="flex whitespace-nowrap">
          <div className="flex gap-12 animate-marquee px-6 font-mono text-[10px] uppercase tracking-[0.3em] text-ink-muted shrink-0">
            {Array.from({ length: 2 }).map((_, i) => (
              <span key={i}>
                Skateboarding · Hiking · Anime · Manga · Music · Mathematical Statistics ·
                CTF · Steganography · Blender · Python · R · ✦
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
