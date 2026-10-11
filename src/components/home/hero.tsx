import Image from "next/image";

import styles from "./headerHero.module.css";

function ArrowUpRight() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path d="M6 18L18 6M6 6H18V18" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="home" className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.heroInner}>
        <div className={styles.copy}>
          <div className={styles.intro}>
            <span>Hello</span>
            <span className={styles.portraitFrame}>
              <Image
                src="/images/hero-avatar-lossless.png"
                alt="Portrait of Hanna Gomozova"
                fill
                loading="eager"
                unoptimized
                sizes="(max-width: 759px) 44px, 56px"
                className={styles.portrait}
              />
            </span>
            <span>I’m Hanna</span>
          </div>
          <h1 id="hero-heading" className={styles.headline}>
            <span>I design products</span>{" "}
            <span>
              that <em>feel</em> right before
            </span>{" "}
            <span>you know why.</span>
          </h1>
          <p className={styles.description}>
            From the first idea to a{" "}
            <span className={styles.descriptionEmphasis}>working product</span>{" "}
            — connecting user needs, product direction, and intuitive
            experiences.
          </p>
          <div className={styles.actions}>
            <a href="#projects" className={styles.primary}>
              View Selected Work
              <ArrowUpRight />
            </a>
            <div className={styles.socialLinks}>
              <a
                href="https://www.linkedin.com/in/hanna-gomozova/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <ArrowUpRight />
              </a>
              <a
                href="https://www.behance.net/hanna_gomozova"
                target="_blank"
                rel="noreferrer"
              >
                Behance <ArrowUpRight />
              </a>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#projects"
        className={styles.heroScroll}
        aria-label="Scroll to selected work"
      >
        <span aria-hidden="true" className={styles.scrollLine} />
        <span>Scroll</span>
        <svg
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          aria-hidden="true"
        >
          <path d="M1 1L6 6L11 1" stroke="currentColor" />
        </svg>
      </a>
    </section>
  );
}
