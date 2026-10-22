"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

import styles from "./darkPortfolio.module.css";

// Scroll distance over which the hero header condenses into the sticky bar.
const CONDENSE_DISTANCE = 180;

export default function SiteHeader() {
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    let frame = 0;
    const update = () => {
      frame = 0;
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
    };
  }, []);

  return (
    <header ref={headerRef} className={styles.header}>
      <a
        className={styles.wordmark}
        href="#home"
        aria-label="Hanna Gomozova — home"
      >
        hanna<span className={styles.wordmarkDot}>.</span>
      </a>
      <nav className={styles.nav} aria-label="Main navigation">
        <a href="#projects">Works</a>
        <Link href="/about">About</Link>
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
