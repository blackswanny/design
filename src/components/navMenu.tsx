const navItems = [
  { href: "#home", label: "HG" },
  { href: "#projects", label: "PROJECTS" },
  { href: "#about", label: "ABOUT" },
  { href: "#contacts", label: "CONTACTS" },
];

export default function NavMenu() {
  return (
    <nav className="fixed inset-x-0 top-0 z-40 border-b border-white/20 bg-background">
      <div className="relative flex h-16 items-center px-6 md:px-10 lg:px-16">
        <a
          href={navItems[0].href}
          className="font-neue-montreal text-sm uppercase tracking-[0.18em] text-white transition-opacity hover:opacity-70"
        >
          {navItems[0].label}
        </a>

        <a
          href={navItems[1].href}
          className="font-neue-montreal absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-sm uppercase tracking-[0.18em] text-white transition-opacity hover:opacity-70"
        >
          {navItems[1].label}
        </a>

        <div className="ml-auto flex items-center gap-8">
          <a
            href={navItems[2].href}
            className="font-neue-montreal text-sm uppercase tracking-[0.18em] text-white transition-opacity hover:opacity-70"
          >
            {navItems[2].label}
          </a>
          <a
            href={navItems[3].href}
            className="font-neue-montreal text-sm uppercase tracking-[0.18em] text-white transition-opacity hover:opacity-70"
          >
            {navItems[3].label}
          </a>
        </div>
      </div>
    </nav>
  );
}
