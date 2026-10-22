import Image from "next/image";
import Link from "next/link";

import styles from "./home/headerHero.module.css";

const navItems = [
  { href: "/#projects", label: "WORKS" },
  { href: "/about", label: "ABOUT" },
  { href: "/#contacts", label: "CONTACT" },
];

export default function NavMenu({
  activePath,
  homePath = "/",
}: Readonly<{ activePath?: string; homePath?: string }> = {}) {
  return (
    <header className={styles.header}>
      <nav className={styles.headerInner} aria-label="Main navigation">
        <Link
          href={`${homePath}#home`}
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
          {navItems.slice(0, 2).map((item) => (
            <Link
              key={item.href}
              href={
                item.href.startsWith("/#")
                  ? `${homePath}${item.href.slice(1)}`
                  : item.href
              }
              aria-current={activePath === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="/Hanna-Gomozova-Product-Designer.pdf"
            download="Hanna Gomozova_Product Designer.pdf"
          >
            RESUME
          </a>
          <Link
            href={`${homePath}#contacts`}
            className={`${styles.primary} ${styles.contactButton}`}
            aria-current={activePath === navItems[2].href ? "page" : undefined}
          >
            {navItems[2].label}
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
          </Link>
        </div>
      </nav>
    </header>
  );
}
