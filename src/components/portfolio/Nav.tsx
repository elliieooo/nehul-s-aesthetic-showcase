export function Nav() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 px-6 lg:px-12 py-5 mix-blend-difference">
      <div className="max-w-[1400px] mx-auto flex justify-between items-center">
        <a href="#top" className="font-mono text-ember text-sm tracking-tight uppercase">
          // Codename: Ellie
        </a>
        <div className="hidden md:flex gap-10 text-[10px] uppercase tracking-[0.25em] font-medium text-ink">
          <a href="#dossier" className="hover:text-ember transition-colors">Dossier</a>
          <a href="#work" className="hover:text-ember transition-colors">Work</a>
          <a href="#path" className="hover:text-ember transition-colors">Path</a>
          <a href="#contact" className="hover:text-ember transition-colors">Terminal</a>
        </div>
      </div>
    </nav>
  );
}
