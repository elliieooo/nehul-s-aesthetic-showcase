import stegano from "@/assets/project-stegano-soft.jpg";
import chat from "@/assets/project-chat-soft.jpg";
import weather from "@/assets/project-weather-soft.jpg";
import login from "@/assets/project-login-soft.jpg";
import space from "@/assets/project-space-soft.jpg";
import recon from "@/assets/project-recon-soft.jpg";

type Project = {
  no: string;
  tag: string;
  title: string;
  italic?: string;
  body: string;
  href: string;
  img: string;
  span: string;
  ratio: string;
  tone?: "blush" | "sage" | "sand";
};

const projects: Project[] = [
  {
    no: "01",
    tag: "Cryptography · Research",
    title: "Steganography",
    italic: "Engine",
    body: "Hiding entire conversations inside the texture of an ordinary photograph. Built for the Xaenithra ops stack.",
    href: "#",
    img: stegano,
    span: "lg:col-span-8",
    ratio: "aspect-[16/10]",
    tone: "blush",
  },
  {
    no: "02",
    tag: "React · Vite",
    title: "Edgy",
    italic: "Chat UI",
    body: "Production-grade chat interface — minimalist, real-time, soft on the eyes.",
    href: "https://github.com/elliieooo/edgy-chat-ui",
    img: chat,
    span: "lg:col-span-4",
    ratio: "aspect-[4/5]",
    tone: "sand",
  },
  {
    no: "03",
    tag: "Python · Streamlit",
    title: "Weather",
    italic: "Forecast",
    body: "Live OpenWeatherMap dashboard bridging Python data work with a calm interface.",
    href: "https://github.com/elliieooo/Weather-Forecast",
    img: weather,
    span: "lg:col-span-6",
    ratio: "aspect-[5/4]",
    tone: "sage",
  },
  {
    no: "04",
    tag: "Python · R",
    title: "Predictive",
    italic: "ML Engine",
    body: "Automated pipeline for inference, feature engineering, and model selection.",
    href: "#",
    img: space,
    span: "lg:col-span-6",
    ratio: "aspect-[5/4]",
    tone: "blush",
  },
  {
    no: "05",
    tag: "Glassmorphism · UI",
    title: "Modern",
    italic: "Login",
    body: "A study in soft glass, warm bokeh, and the geometry of welcome screens.",
    href: "https://github.com/elliieooo/modern-login-ui",
    img: login,
    span: "lg:col-span-4",
    ratio: "aspect-[4/5]",
    tone: "sand",
  },
  {
    no: "06",
    tag: "Recon · Vulnerability",
    title: "CTF",
    italic: "Reconnaissance",
    body: "Quiet system mapping and exploit research — the slow, patient kind.",
    href: "#",
    img: recon,
    span: "lg:col-span-8",
    ratio: "aspect-[16/10]",
    tone: "sage",
  },
];

const toneBg: Record<NonNullable<Project["tone"]>, string> = {
  blush: "bg-blush/30",
  sage: "bg-sage/25",
  sand: "bg-sand",
};

export function Projects() {
  return (
    <section id="work" className="relative px-6 lg:px-16 py-32 lg:py-40">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-20 grid lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <p className="label-mono mb-6">Chapter 02 — Selected Work</p>
            <h2 className="font-display font-normal text-5xl md:text-7xl text-ink leading-[0.95]">
              Six small <span className="italic-display text-clay">obsessions</span>,{" "}
              quietly built.
            </h2>
          </div>
          <p className="lg:col-span-4 text-ink-soft text-lg leading-relaxed lg:text-right">
            A scrapbook of research notes, side studies, and things made for
            the joy of making.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {projects.map((p) => (
            <a
              key={p.no}
              href={p.href}
              className={`${p.span} group block`}
            >
              <div
                className={`relative overflow-hidden rounded-[1.75rem] ${toneBg[p.tone ?? "sand"]} p-3 shadow-[var(--shadow-card)] transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-[var(--shadow-soft)]`}
              >
                <div className={`relative ${p.ratio} rounded-[1.25rem] overflow-hidden`}>
                  <img
                    src={p.img}
                    alt={`${p.title} ${p.italic ?? ""}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="px-3 pt-5 pb-3 flex items-start justify-between gap-6">
                  <div className="min-w-0">
                    <p className="label-mono mb-2">
                      <span className="text-clay">{p.no}</span> · {p.tag}
                    </p>
                    <h3 className="font-display text-3xl md:text-4xl text-ink leading-[1] tracking-tight">
                      {p.title}{" "}
                      {p.italic && (
                        <span className="italic-display text-clay">{p.italic}</span>
                      )}
                    </h3>
                    <p className="mt-3 text-ink-soft leading-relaxed text-sm md:text-base max-w-md">
                      {p.body}
                    </p>
                  </div>
                  <span className="shrink-0 size-12 rounded-full bg-cream border border-border grid place-items-center text-ink group-hover:bg-ink group-hover:text-cream group-hover:border-ink transition-colors">
                    →
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
