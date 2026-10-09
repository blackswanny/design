import styles from "./home/headerHero.module.css";

const navItems = [
  { href: "#projects", label: "PROJECTS" },
  { href: "#about", label: "ABOUT" },
  { href: "#contacts", label: "CONTACT" },
];

export default function NavMenu() {
  return (
    <header className={styles.header}>
      <nav className={styles.headerInner} aria-label="Main navigation">
        <a
          href="#home"
          aria-label="Hanna Gomozova — Home"
          className={styles.brand}
        >
          <span className={styles.monogram} aria-hidden="true" />
          <span className={styles.brandName}>
            Hanna
            <br />
            Gomozova
          </span>
        </a>
        <div className={styles.navLinks}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
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
