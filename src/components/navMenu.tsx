import Image from "next/image";
import Link from "next/link";

import styles from "./home/headerHero.module.css";

const navItems = [
  { href: "/#projects", label: "PROJECTS" },
  { href: "/about", label: "ABOUT" },
  { href: "/#contacts", label: "CONTACT" },
];

export default function NavMenu({
  activePath,
}: Readonly<{ activePath?: string }> = {}) {
  return (
    <header className={styles.header}>
      <nav className={styles.headerInner} aria-label="Main navigation">
        <Link
          href="/#home"
          aria-label="Hanna Gomozova — Home"
          className={styles.brand}
        >
          <Image
            src="/images/header-logo.svg"
            alt=""
            width={1135}
            height={1104}
            loading="eager"
            unoptimized
            className={styles.monogram}
          />
          <span className={styles.brandName}>
            Hanna
            <br />
            Gomozova
          </span>
        </Link>
        <div className={styles.navLinks}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={activePath === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <a
          className={styles.resume}
          href="/Hanna-Gomozova-Product-Designer.pdf"
          download="Hanna Gomozova_Product Designer.pdf"
        >
          Resume
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M6 18L18 6M6 6H18V18"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
        </a>
      </nav>
    </header>
  );
}
