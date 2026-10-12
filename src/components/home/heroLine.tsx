"use client";

import { useLayoutEffect, useRef } from "react";

import styles from "./headerHero.module.css";

export default function HeroLine() {
  const svgRef = useRef<SVGSVGElement>(null);

  useLayoutEffect(() => {
    const svg = svgRef.current;
    const canvas = svg?.parentElement;
    const hero = svg?.closest("#home");
    const avatar = hero?.querySelector<HTMLElement>("[data-hero-avatar]");
    const flower = hero?.querySelector<HTMLElement>("[data-hero-poppy]");
    const path = svg?.querySelector("path");

    if (!svg || !canvas || !hero || !avatar || !flower || !path) {
      return;
    }

    let frame = 0;
    let active = true;

    const update = () => {
      const bounds = canvas.getBoundingClientRect();
      const heroBounds = hero.getBoundingClientRect();
      const portrait = avatar.getBoundingClientRect();

      // Keep the original flower attachment point, including its rotation.
      const flowerStyle = getComputedStyle(flower);
      const origin = flowerStyle.transformOrigin.split(" ").map(parseFloat);
      const transform = new DOMMatrix(flowerStyle.transform);
      const endX = parseFloat(flowerStyle.left) + origin[0] + transform.e;
      const endY = parseFloat(flowerStyle.top) + origin[1] + transform.f;
      const centerX = portrait.left + portrait.width / 2 - bounds.left;
      const topY = portrait.top - bounds.top;
      const bottomY = portrait.bottom - bounds.top;

      // Build a new curve from the measured anchors. Two visible cubics form
      // the left sweep; one broad cubic connects the avatar to the flower.
      const leftEdge = heroBounds.left - bounds.left;
      const leftSpan = centerX - leftEdge;
      const startX = leftEdge - portrait.height * 0.25;
      const startY = topY + portrait.height * 0.7;
      const crestWidth = Math.min(leftSpan * 0.1, portrait.height * 1.1);
      const crestHeight = portrait.height * 0.45;
      const crestX = centerX - crestWidth;
      const crestY = topY - crestHeight;
      const dipY = startY + Math.min(leftSpan * 0.16, portrait.height * 2);

      // A quarter-ellipse rounds the crest. Match its tangent and curvature
      // at the preceding join so the sweep has no visible corner or flat spot.
      const ellipseHandle = (4 * (Math.sqrt(2) - 1)) / 3;
      const crestHandle = crestWidth * ellipseHandle;
      const crestRise = crestHeight * (1 - ellipseHandle);
      const sweepHandle = crestHandle * Math.sqrt((dipY - crestY) / crestRise);
      const rightSpan = Math.max(0, endX - centerX);
      const arcDepth = rightSpan * 0.38;
      const point = (x: number, y: number) => `${x.toFixed(2)} ${y.toFixed(2)}`;

      const d = [
        `M${point(startX, startY)}`,
        `C${point(leftEdge + leftSpan * 0.22, dipY)} ${point(crestX - sweepHandle, crestY)} ${point(crestX, crestY)}`,
        `C${point(crestX + crestHandle, crestY)} ${point(centerX, topY - crestHeight * ellipseHandle)} ${point(centerX, topY)}`,
        // This collinear cubic is entirely hidden behind the circular avatar.
        `C${point(centerX, topY + portrait.height / 3)} ${point(centerX, bottomY - portrait.height / 3)} ${point(centerX, bottomY)}`,
        `C${point(centerX, bottomY + arcDepth)} ${point(endX - rightSpan * 0.085, endY + arcDepth)} ${point(endX, endY)}`,
      ].join(" ");

      svg.setAttribute("viewBox", `0 0 ${bounds.width} ${bounds.height}`);
      path.setAttribute("d", d);
      svg.dataset.ready = "true";
    };

    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    const observer = new ResizeObserver(schedule);
    [canvas, hero, avatar, flower].forEach((element) =>
      observer.observe(element),
    );
    window.addEventListener("resize", schedule, { passive: true });
    document.fonts.addEventListener("loadingdone", schedule);
    void document.fonts.ready.then(() => {
      if (active) schedule();
    });

    return () => {
      active = false;
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("resize", schedule);
      document.fonts.removeEventListener("loadingdone", schedule);
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      className={styles.heroLine}
      viewBox="0 0 1 1"
      preserveAspectRatio="none"
      data-ready="false"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d=""
        fill="none"
        stroke="#E5483B"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
