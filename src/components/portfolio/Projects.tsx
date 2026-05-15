import stegano from "@/assets/project-stegano.jpg";
import chat from "@/assets/project-chat.jpg";
import weather from "@/assets/project-weather.jpg";
import login from "@/assets/project-login.jpg";
import space from "@/assets/project-space.jpg";
import recon from "@/assets/project-recon.jpg";

export function Projects() {
  return (
    <section id="work" className="relative px-6 lg:px-24 py-32 bg-surface/20 border-t border-border">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-20 flex flex-wrap justify-between items-end gap-4">
          <div>
            <p className="font-mono text-ember text-xs uppercase tracking-[0.3em] mb-2">
              // Selected Research
            </p>
            <h3 className="font-display text-4xl md:text-6xl uppercase tracking-tight text-ink">
              Reconnaissance<br />Logs / 2025
            </h3>
          </div>
          <span className="font-mono text-xs text-ember">06 // ENTRIES</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Big Project — Stegano */}
          <a
            href="#"
            className="lg:col-span-8 group relative overflow-hidden rounded-2xl border border-border bg-background block"
          >
            <img
              src={stegano}
              alt="Steganography Engine"
              loading="lazy"
              width={1280}
              height={800}
              className="w-full aspect-[16/10] object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            <div className="absolute inset-0 p-8 lg:p-12 flex flex-col justify-end">
              <span className="font-mono text-ember text-xs mb-3 uppercase tracking-[0.25em]">
                [0x1] · Cryptography
              </span>
              <h4 className="text-3xl lg:text-5xl font-display uppercase text-ink tracking-tight mb-3">
                Steganography Engine
              </h4>
              <p className="text-ink-muted max-w-md leading-relaxed">
                High-fidelity data concealment within complex visual assets using
                proprietary algorithms. Built for the Xaenithra ops stack.
              </p>
            </div>
          </a>

          {/* Side: Chat UI */}
          <a href="https://github.com/elliieooo/edgy-chat-ui" className="lg:col-span-4 glass-card p-6 rounded-2xl flex flex-col justify-between group hover:border-ember/30 transition-colors">
            <div>
              <span className="font-mono text-ember/70 text-xs">[0x2] · React / Vite</span>
              <h4 className="text-2xl font-display uppercase text-ink mt-3 group-hover:text-ember transition-colors">Edgy Chat UI</h4>
              <p className="text-ink-muted mt-2 text-sm leading-relaxed">
                Production-grade React interface with Vite-optimized pipeline and
                minimalist design patterns.
              </p>
            </div>
            <img src={chat} alt="Edgy Chat UI" loading="lazy" width={800} height={800}
              className="mt-6 w-full aspect-square object-cover rounded-lg opacity-80 group-hover:opacity-100 transition-opacity" />
          </a>

          {/* Weather */}
          <a href="https://github.com/elliieooo/Weather-Forecast" className="lg:col-span-4 glass-card p-6 rounded-2xl flex flex-col group hover:border-ember/30 transition-colors">
            <img src={weather} alt="Weather Dashboard" loading="lazy" width={800} height={600}
              className="w-full aspect-[4/3] object-cover rounded-lg mb-6 opacity-80 group-hover:opacity-100 transition-opacity" />
            <span className="font-mono text-ember/70 text-xs">[0x3] · Python / Streamlit</span>
            <h4 className="text-2xl font-display uppercase text-ink mt-3 group-hover:text-ember transition-colors">Weather Dashboard</h4>
            <p className="text-ink-muted mt-2 text-sm leading-relaxed">
              Bridging Python data science with Streamlit interfaces and live
              OpenWeatherMap API integration.
            </p>
          </a>

          {/* ML Engine — accent border */}
          <a href="#" className="lg:col-span-8 rounded-2xl p-px bg-gradient-to-br from-ember/60 via-ember/10 to-transparent group">
            <div className="bg-background h-full w-full rounded-[15px] p-8 lg:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <span className="font-mono text-ember text-xs">[0x4] · Python / R</span>
                <h4 className="text-3xl lg:text-4xl font-display uppercase text-ink mt-2 tracking-tight">Predictive ML Engine</h4>
                <p className="text-ink-muted mt-3 max-w-lg leading-relaxed">
                  Automated data science pipeline for statistical inference, feature
                  engineering, and model selection.
                </p>
              </div>
              <div className="hidden md:grid place-items-center size-28 rounded-full border border-ember/30 text-ember text-xs font-mono group-hover:border-ember group-hover:bg-ember/5 transition-all">
                VIEW_GIT →
              </div>
            </div>
          </a>

          {/* Login UI */}
          <a href="https://github.com/elliieooo/modern-login-ui" className="lg:col-span-4 glass-card rounded-2xl overflow-hidden flex flex-col group hover:border-ember/30 transition-colors">
            <img src={login} alt="Modern Login UI" loading="lazy" width={800} height={600}
              className="w-full aspect-[4/3] object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
            <div className="p-6">
              <span className="font-mono text-ember/70 text-xs">[0x5] · Glassmorphism</span>
              <h4 className="text-2xl font-display uppercase text-ink mt-3 group-hover:text-ember transition-colors">Modern Login UI</h4>
              <p className="text-ink-muted mt-2 text-sm leading-relaxed">
                Visual research into glassmorphism, backdrop filters, and high-end
                authentication flow aesthetics.
              </p>
            </div>
          </a>

          {/* Recon */}
          <a href="#" className="lg:col-span-4 glass-card rounded-2xl overflow-hidden flex flex-col group hover:border-ember/30 transition-colors">
            <img src={recon} alt="CTF Reconnaissance" loading="lazy" width={800} height={600}
              className="w-full aspect-[4/3] object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
            <div className="p-6">
              <span className="font-mono text-ember/70 text-xs">[0x6] · Recon / Vuln</span>
              <h4 className="text-2xl font-display uppercase text-ink mt-3 group-hover:text-ember transition-colors">CTF Reconnaissance</h4>
              <p className="text-ink-muted mt-2 text-sm leading-relaxed">
                Active vulnerability research and system mapping toolset for red-team
                operations.
              </p>
            </div>
          </a>

          {/* Space DS */}
          <a href="https://github.com/elliieooo/data-science-portfolio" className="lg:col-span-4 glass-card rounded-2xl overflow-hidden flex flex-col group hover:border-ember/30 transition-colors">
            <img src={space} alt="Data Science Portfolio" loading="lazy" width={800} height={600}
              className="w-full aspect-[4/3] object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
            <div className="p-6">
              <span className="font-mono text-ember/70 text-xs">[0x7] · Legacy</span>
              <h4 className="text-2xl font-display uppercase text-ink mt-3 group-hover:text-ember transition-colors">Modern Space DS</h4>
              <p className="text-ink-muted mt-2 text-sm leading-relaxed">
                Original responsive showcase for data science work — the ancestor of
                this premium build.
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
