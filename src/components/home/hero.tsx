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
      <div className={styles.atmosphere} aria-hidden="true">
        <Image
          src="/images/hero-poppy-background-white.png"
          alt=""
          fill
          loading="eager"
          sizes="100vw"
          className={styles.backgroundImage}
        />
      </div>

      <div className={styles.heroInner}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>
            <span>Product Designer</span>
            <span className={styles.eyebrowLine} aria-hidden="true" />
            <span className={styles.specialty}>Early-stage products</span>
          </p>
          <h1 id="hero-heading" className={styles.headline}>
            <span>I design early-stage</span> <span>products with</span>{" "}
            <span className={styles.accent}>clarity and intention.</span>
          </h1>
          <p className={styles.description}>
            I help turn early ideas into real products, shaping user flows,
            product direction, and experiences people actually use.
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

        <div className={styles.portraitFrame}>
          <Image
            src="/images/portrait-cutout-refined.png"
            alt="Portrait of Hanna Gomozova"
            fill
            loading="eager"
            sizes="(min-width: 1600px) 440px, (min-width: 1024px) 30vw, (min-width: 600px) 315px, 64vw"
            className={styles.portrait}
          />
        </div>
      </div>

      <a
        href="#about"
        className={styles.heroScroll}
        aria-label="Scroll to About"
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
