import Image from "next/image";

import ArrowUpRight from "../arrowUpRight";
import styles from "./headerHero.module.css";
import HeroLine from "./heroLine";

export default function Hero() {
  return (
    <section id="home" className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.heroInner}>
        <div className={styles.copy}>
          <div className={styles.intro}>
            <span>Hello</span>
            <span className={styles.portraitAnchor}>
              <span className={styles.heroFlourish} aria-hidden="true">
                <HeroLine />
                <Image
                  className={styles.heroPoppy}
                  data-hero-poppy
                  src="/images/hero-poppy.svg"
                  alt=""
                  width={880}
                  height={1033}
                  loading="eager"
                  draggable={false}
                  unoptimized
                />
              </span>
              <span className={styles.portraitFrame} data-hero-avatar>
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
            </span>
            <span>I’m Hanna</span>
          </div>
          <h1 id="hero-heading" className={styles.headline}>
            <span>
              I design{" "}
              <span className={styles.productInitial}>
                p
                <svg
                  className={styles.letterCounter}
                  viewBox="0 0 400 520"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M83 204L64 218L57 230L55 242L55 254L55 266L55 278L55 290L55 302L55 314L55 326L55 338L55 350L56 362L61 374L77 392L94 392L114 378L122 366L128 354L131 342L134 330L135 318L136 306L137 294L136 282L135 270L134 258L131 246L126 234L118 222L97 204Z" />
                </svg>
              </span>
              roducts
            </span>{" "}
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
              Selected works
              <ArrowUpRight />
            </a>
            <div className={styles.socialLinks}>
              <a
                href="https://www.linkedin.com/in/hanna-gomozova/"
                className={styles.socialLink}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <ArrowUpRight />
              </a>
              <a
                href="https://www.behance.net/hanna_gomozova"
                className={styles.socialLink}
                target="_blank"
                rel="noreferrer"
              >
                Behance <ArrowUpRight />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
