const navItems = [
  { href: "#home", label: "HG" },
  { href: "#projects", label: "PROJECTS" },
  { href: "#about", label: "ABOUT" },
  { href: "#contacts", label: "CONTACTS" },
];

export default function NavMenu() {
  return (
    <nav className="fixed inset-x-0 top-0 z-40 border-b border-white/20 bg-background">
      <div className="relative flex h-14 items-center px-4 md:h-16 md:px-10 lg:px-16">
        <a
          href={navItems[0].href}
          className="font-neue-montreal text-[1.2rem] uppercase tracking-[0.05em] text-white opacity-70 transition-opacity hover:opacity-100 md:text-xl md:tracking-[0.1em]"
        >
          {navItems[0].label}
        </a>

        <div className="ml-auto flex items-center gap-3 md:gap-8">
          <a
            href={navItems[1].href}
            className="font-neue-montreal md:text-md text-[0.9rem] uppercase tracking-[0.05em] text-white opacity-70 transition-opacity hover:opacity-100 md:tracking-[0.1em]"
          >
            {navItems[1].label}
          </a>
          <a
            href={navItems[2].href}
            className="font-neue-montreal md:text-md text-[0.9rem] uppercase tracking-[0.05em] text-white opacity-70 transition-opacity hover:opacity-100 md:tracking-[0.1em]"
          >
            {navItems[2].label}
          </a>
          <a
            href={navItems[3].href}
            className="font-neue-montreal md:text-md text-[0.9rem] uppercase tracking-[0.05em] text-white opacity-70 transition-opacity hover:opacity-100 md:tracking-[0.1em]"
          >
            {navItems[3].label}
          </a>
        </div>
      </div>
    </nav>
  );
}
