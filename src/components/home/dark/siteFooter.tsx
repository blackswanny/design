import Link from "next/link";

import styles from "./darkPortfolio.module.css";
import CopyEmail from "../../copyEmail";

const socialIcon = {
  width: 28,
  height: 28,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const footerSocials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/hanna-gomozova/",
    icon: (
      <svg {...socialIcon}>
        <rect x="2.5" y="2.5" width="19" height="19" rx="4" />
        <path d="M7.75 10.75V17M11.5 17v-6.25M11.5 13.5c0-1.6 1-2.9 2.6-2.9 1.5 0 2.4 1 2.4 2.8V17" />
        <circle cx="7.75" cy="7.4" r="0.6" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Behance",
    href: "https://www.behance.net/hanna_gomozova",
    icon: (
      <span className={styles.behanceMark} aria-hidden="true">
        Bē
      </span>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/hanna_uiux",
    icon: (
      <svg {...socialIcon}>
        <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
        <circle cx="12" cy="12" r="4.25" />
        <circle cx="17.4" cy="6.6" r="0.6" fill="currentColor" />
      </svg>
    ),
  },
];

export default function SiteFooter() {
  return (
    <footer
      id="contacts"
      className={styles.contact}
      aria-labelledby="contact-heading"
    >
      <div className={styles.contactTexture} aria-hidden="true" />
      <span className={styles.footerNote}>
        Based in the <strong>San Francisco Bay Area</strong>
      </span>
      <h2 id="contact-heading" className={styles.contactTitle}>
        Let’s <em>talk</em>
      </h2>
      <p className={styles.contactDescription}>
        Open to product design opportunities, early-stage ideas, and creative
        collaborations.
      </p>
      <CopyEmail email="anna.mayskay@gmail.com" className={styles.emailBlock} />
      <div className={styles.contactBottom}>
        <nav className={styles.socials} aria-label="Social profiles">
          {footerSocials.map(({ name, href, icon }) => (
            <a key={name} href={href} target="_blank" rel="noreferrer">
              {icon}
              <span className={styles.socialName}>{name}</span>
              <span className={styles.socialArrow} aria-hidden="true">
                ↗
              </span>
            </a>
          ))}
        </nav>
        <div className={styles.credits}>
          <span>© 2026 Hanna Gomozova</span>
          {/* Hidden for now; the /light-version page stays live. */}
          <Link href="/light-version" className={styles.preservedLink} hidden>
            Light version ↗
          </Link>
        </div>
      </div>
    </footer>
  );
}
