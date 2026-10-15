import Image from "next/image";

import ArrowUpRight from "./arrowUpRight";
import styles from "./contactSection.module.css";
import CopyEmail from "./copyEmail";
import sharedStyles from "./home/headerHero.module.css";

type ContactAction = {
  href: string;
  label: string;
  external?: boolean;
};

const socialActions: ContactAction[] = [
  {
    href: "https://www.behance.net/hanna_gomozova",
    label: "Behance",
    external: true,
  },
  {
    href: "https://www.linkedin.com/in/hanna-gomozova/",
    label: "LinkedIn",
    external: true,
  },
  {
    href: "https://www.instagram.com/hanna_uiux",
    label: "Instagram",
    external: true,
  },
];

export default function ContactSection() {
  return (
    <section
      id="contacts"
      className={styles.contacts}
      aria-labelledby="contact-heading"
    >
      <div className={styles.inner}>
        <div className={styles.stage}>
          <div className={styles.flourish} aria-hidden="true">
            <svg
              className={styles.line}
              viewBox="0 0 1600 180"
              preserveAspectRatio="none"
              fill="none"
              focusable="false"
            >
              <path
                d="M352 -20C398 30.638 444 43.036 490 48C636.667 63.828 783.333 4.085 930 0C1078.333 -4.132 1226.667 48.666 1375 54C1460 57.057 1545 44.528 1630 32"
                stroke="#E5483B"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
            <Image
              src="/images/footer-poppy.png"
              alt=""
              width={2000}
              height={1938}
              unoptimized
              draggable={false}
              className={styles.poppy}
            />
          </div>
          <h2
            id="contact-heading"
            className={`${sharedStyles.sectionHeading} ${styles.title}`}
          >
            Let’s <em>talk</em>
          </h2>
          <p className={styles.description}>
            Open to thoughtful product work, early-stage ideas, and design
            collaborations.
          </p>
          <CopyEmail email="anna.mayskay@gmail.com" />
        </div>
        <nav className={styles.socials} aria-label="Social profiles">
          {socialActions.map((action) => (
            <a
              key={action.label}
              href={action.href}
              target="_blank"
              rel="noreferrer"
              className={sharedStyles.socialLink}
            >
              <span>{action.label}</span>
              <ArrowUpRight />
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}
