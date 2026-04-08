import Image from "next/image";

const navItems = [
  { href: "#home", label: "HG" },
  { href: "#projects", label: "PROJECTS" },
  { href: "#about", label: "ABOUT" },
  { href: "#contacts", label: "CONTACTS" },
];

export default function NavMenu() {
  return (
    <nav className="fixed left-[10vw] right-[10vw] top-0 z-40 border-b border-white/20 bg-background">
      <div className="relative flex h-14 items-center px-4 md:h-16 md:px-6 lg:px-8">
        <a
          href={navItems[0].href}
          aria-label="Home"
          className="flex items-center opacity-70 transition-opacity hover:opacity-100"
        >
          <Image
            src="/logo.svg"
            alt="HG"
            width={533}
            height={196}
            className="h-[2.6rem] w-auto md:h-[3.25rem]"
            priority
          />
        </a>

        <div className="ml-auto flex items-center gap-3 text-[#898798] md:gap-8">
          <a
            href={navItems[1].href}
            className="font-sans text-[0.9rem] uppercase tracking-[0.05em] transition-opacity hover:opacity-100 md:text-base md:tracking-[0.05em]"
          >
            {navItems[1].label}
          </a>
          <a
            href={navItems[2].href}
            className="font-sans text-[0.9rem] uppercase tracking-[0.05em] transition-opacity hover:opacity-100 md:text-base md:tracking-[0.05em]"
          >
            {navItems[2].label}
          </a>
          <a
            href={navItems[3].href}
            className="font-sans text-[0.9rem] uppercase tracking-[0.05em] text-[#898798] transition-opacity hover:opacity-100 md:text-base md:tracking-[0.1em]"
          >
            {navItems[3].label}
          </a>
        </div>
      </div>
    </nav>
  );
}
