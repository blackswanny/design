"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

import styles from "./darkPortfolio.module.css";
import { computeHeroScale } from "./heroScale";

// Scroll distance over which the hero header condenses into the sticky bar.
const CONDENSE_DISTANCE = 180;

// On the home page the ribbon sets --hero-scale; other pages have no hero, so
// the header sets it itself to keep the same sizes.
export default function SiteHeader({
  page = "home",
}: {
  page?: "home" | "about";
}) {
  const headerRef = useRef<HTMLElement>(null);
  const onHome = page === "home";

  useEffect(() => {
    const header = headerRef.current;
    const root = header?.parentElement;
    if (!header || !root) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      if (!onHome) {
        root.style.setProperty(
          "--hero-scale",
          String(computeHeroScale(root.clientWidth)),
        );
      }
      const t = Math.min(1, Math.max(0, window.scrollY / CONDENSE_DISTANCE));
      const eased = t * t * (3 - 2 * t);
      header.style.setProperty("--header-progress", eased.toFixed(4));
      header.dataset.condensed = String(eased === 1);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (!onHome) root.style.removeProperty("--hero-scale");
    };
  }, [onHome]);

  return (
    <header ref={headerRef} className={styles.header}>
      <Link
        className={styles.wordmark}
        href={onHome ? "#home" : "/"}
        aria-label="Hanna Gomozova — home"
      >
        hanna<span className={styles.wordmarkDot}>.</span>
      </Link>
      <div className={styles.headerSocials}>
        <a
          href="https://www.linkedin.com/in/hanna-gomozova/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <span aria-hidden="true">/</span>
        <a
          href="https://www.behance.net/hanna_gomozova"
          target="_blank"
          rel="noopener noreferrer"
        >
          Behance
        </a>
      </div>
      <nav className={styles.nav} aria-label="Main navigation">
        <Link href={onHome ? "#projects" : "/#projects"}>Works</Link>
        <Link
          href="/about"
          aria-current={page === "about" ? "page" : undefined}
        >
          About
        </Link>
        <a
          href="/Hanna-Gomozova-Product-Designer.pdf"
          download="Hanna Gomozova_Product Designer.pdf"
        >
          Resume
        </a>
        <a href="#contacts">
          Contact <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  );
}
