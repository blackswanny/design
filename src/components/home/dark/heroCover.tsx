"use client";

import { useEffect } from "react";

// Pins the hero once its bottom reaches the viewport bottom and lets the next
// section slide over it. Writes on the hero element:
// --hero-sticky-top  sticky offset (0 when the hero fits the viewport)
// --hero-cover       0 → 1 while the next section covers the hero
// data-covered       "true" once fully covered (fires `herocoverchange`)
export default function HeroCover() {
  useEffect(() => {
    const hero = document.querySelector<HTMLElement>("[data-ribbon-hero]");
    // Progress is measured from the section that slides over the hero, since
    // a stuck sticky element reports its stuck position.
    const next = hero?.nextElementSibling;
    if (!hero || !next) return;

    let frame = 0;
    let covered = false;
    const update = () => {
      frame = 0;
      const viewport = window.innerHeight;
      const overflow = Math.max(0, hero.offsetHeight - viewport);
      const progress = Math.min(
        1,
        Math.max(0, 1 - next.getBoundingClientRect().top / viewport),
      );
      hero.style.setProperty("--hero-sticky-top", `${-overflow}px`);
      hero.style.setProperty("--hero-cover", progress.toFixed(4));
      if (covered !== (progress === 1)) {
        covered = progress === 1;
        hero.dataset.covered = String(covered);
        hero.dispatchEvent(new Event("herocoverchange"));
      }
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    const sizing = new ResizeObserver(schedule);
    sizing.observe(hero);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      sizing.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      hero.style.removeProperty("--hero-sticky-top");
      hero.style.removeProperty("--hero-cover");
      delete hero.dataset.covered;
    };
  }, []);

  return null;
}
