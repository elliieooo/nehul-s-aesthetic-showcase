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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nehul Thakur — Ellie · Steganography & Data Science" },
      {
        name: "description",
        content:
          "Portfolio of Nehul Thakur (Ellie) — steganography researcher with Xaenithra, CTF player, data science student. Quiet code, loud curiosity.",
      },
      { property: "og:title", content: "Nehul Thakur — Look for the Light" },
      {
        property: "og:description",
        content:
          "An Ellie-themed dossier of steganography research, predictive ML, CTFs, and field notes.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative bg-background text-foreground font-body scanline">
      <Fireflies />
      <SoftCursor />
      <ScrollProgress />
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Xaenithra />
      <Journal />
      <Path />
      <Footer />
    </main>
  );
}
