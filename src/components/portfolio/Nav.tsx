export function Nav() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 px-6 lg:px-12 py-6">
      <div className="max-w-[1400px] mx-auto flex justify-between items-center">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-display text-2xl text-ink">Ellie</span>
          <span className="label-mono">— Nehul Thakur</span>
        </a>
        <div className="hidden md:flex gap-10 label-mono">
          <a href="#about" className="hover:text-clay transition-colors">About</a>
          <a href="#work" className="hover:text-clay transition-colors">Work</a>
          <a href="#path" className="hover:text-clay transition-colors">Journal</a>
          <a href="#contact" className="hover:text-clay transition-colors">Say Hello</a>
        </div>
      </div>
    </nav>
  );
}
