import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Projects } from "@/components/portfolio/Projects";
import { Path } from "@/components/portfolio/Path";
import { Footer } from "@/components/portfolio/Footer";
import { Xaenithra } from "@/components/portfolio/Xaenithra";
import { Journal } from "@/components/portfolio/Journal";
import { SoftCursor } from "@/components/portfolio/interactive/SoftCursor";
import { ScrollProgress } from "@/components/portfolio/interactive/ScrollProgress";
import { Fireflies } from "@/components/portfolio/interactive/Fireflies";
import { SmoothScroll } from "@/components/portfolio/interactive/SmoothScroll";
import { SectionReveal } from "@/components/portfolio/interactive/SectionReveal";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="relative bg-background text-foreground font-body scanline">
      <SmoothScroll />
      <Fireflies />
      <SoftCursor />
      <ScrollProgress />
      <Nav />
      <SectionReveal>
        <Hero />
      </SectionReveal>
      <SectionReveal>
        <About />
      </SectionReveal>
      <SectionReveal>
        <Projects />
      </SectionReveal>
      <SectionReveal>
        <Xaenithra />
      </SectionReveal>
      <SectionReveal>
        <Journal />
      </SectionReveal>
      <SectionReveal>
        <Path />
      </SectionReveal>
      <Footer />
    </main>
  );
}
