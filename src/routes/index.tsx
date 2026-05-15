import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Projects } from "@/components/portfolio/Projects";
import { Path } from "@/components/portfolio/Path";
import { Footer } from "@/components/portfolio/Footer";
import { SoftCursor } from "@/components/portfolio/interactive/SoftCursor";
import { ScrollProgress } from "@/components/portfolio/interactive/ScrollProgress";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nehul Thakur — Data Science & Steganography" },
      {
        name: "description",
        content:
          "Portfolio of Nehul Thakur (Ellie) — Data Science enthusiast, steganography researcher at Xaenithra, and CTF player. Python, R, mathematical statistics, and digital invisibility.",
      },
      { property: "og:title", content: "Nehul Thakur — Hiding in Plain Sight" },
      {
        property: "og:description",
        content:
          "Premium portfolio of Nehul Thakur — steganography research, predictive ML, and CTF reconnaissance.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative bg-background text-foreground font-body scanline">
      <SoftCursor />
      <ScrollProgress />
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Path />
      <Footer />
    </main>
  );
}
