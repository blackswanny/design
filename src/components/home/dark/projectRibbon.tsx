"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import styles from "./darkPortfolio.module.css";
import { ribbonImages } from "./projects";
import { createRibbonRenderer } from "./ribbonRenderer";

import type { RibbonGeometry } from "./ribbonRenderer";

type Drag = {
  id: number;
  x: number;
  start: number;
  previousX: number;
  previousTime: number;
  velocity: number;
};

export default function ProjectRibbon() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const controls = useRef<{ toggle: () => void } | null>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const viewport = viewportRef.current;
    const hero = viewport?.closest<HTMLElement>("[data-ribbon-hero]");
    if (!viewport || !hero) return;

    let active = true;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const cards = Array.from(
      viewport.querySelectorAll<HTMLElement>("[data-ribbon-card]"),
    );
    const canvas = document.createElement("canvas");
    canvas.className = styles.lensCanvas;
    canvas.setAttribute("aria-hidden", "true");
    hero.prepend(canvas);
    const renderer = createRibbonRenderer(canvas, (ready) => {
      if (!active) return;
      hero.dataset.lens = ready ? "true" : "false";
      hero.dataset.mediaAtlas = ready ? "ready" : "fallback";
    });
    if (!renderer) hero.dataset.mediaAtlas = "fallback";

    let geometry: RibbonGeometry = {
      cardWidth: 332,
      cardHeight: 219,
      gap: 14,
      count: ribbonImages.length,
    };
    let viewportWidth = hero.clientWidth;
    let compact = viewportWidth <= 759;
    let stride = geometry.cardWidth + geometry.gap;
    let offset = geometry.cardWidth / 2 - viewportWidth / 2;
    let target = offset;
    let momentum = 0;
    let renderVelocity = 0;
    let isPaused = reduced.matches;
    let reportedPaused: boolean | null = null;
    let drag: Drag | null = null;
    let hovered = false;
    let focused = false;
    let visible = true;
    let covered = hero.dataset.covered === "true";
    let frame = 0;
    let lastTime = 0;
    let lastInput = performance.now();
    const startedAt = lastInput;

    const nearestCard = (position: number) => {
      const centre = viewportWidth / 2 - geometry.cardWidth / 2;
      return Math.round((position + centre) / stride) * stride - centre;
    };

    const updateBounds = () => {
      if (!active) return;
      const heroBounds = hero.getBoundingClientRect();
      const row = viewport.getBoundingClientRect();
      renderer?.resize(
        heroBounds.width,
        heroBounds.height,
        row.top - heroBounds.top + row.height / 2,
      );
    };

    const calibrate = () => {
      viewportWidth = hero.clientWidth;
      compact = viewportWidth <= 759;
      const height = Math.max(window.innerHeight, 640);
      const wide = viewportWidth >= 1536;
      const heroScale = Math.max(
        0.35,
        Math.min(
          1,
          (viewportWidth - 63) / 1377,
          // 769.674 is the hero content height at scale 1; the extra 100px
          // keeps breathing room around the intro on shorter windows.
          (height - (wide ? 132 : 112)) / 869.674,
        ),
      );
      const maxBandScale = wide
        ? Math.min(1.4, 1 + (viewportWidth - 1536) / 3200)
        : heroScale;
      const allowance =
        (height - (wide ? 132 : 112) - 550.674 * heroScale) / 219;
      const bandScale = compact
        ? 1
        : Math.max(0.35, Math.min(maxBandScale, allowance));
      geometry = {
        cardWidth: 332 * bandScale,
        cardHeight: 219 * bandScale,
        gap: 14 * bandScale,
        count: ribbonImages.length,
      };
      stride = geometry.cardWidth + geometry.gap;
      // Set on the page root so the fixed site header scales with the hero.
      (hero.parentElement ?? hero).style.setProperty(
        "--hero-scale",
        String(heroScale),
      );
      hero.style.setProperty("--carousel-scale", String(bandScale));
      viewport.dataset.enhanced = "true";
      viewport.dataset.count = String(geometry.count);
      viewport.dataset.cardWidth = geometry.cardWidth.toFixed(3);
      updateBounds();
    };

    const draw = () => {
      const progress = reduced.matches
        ? 1
        : Math.min(
            1,
            Math.max(0, (performance.now() - startedAt - 120) / 1250),
          );
      const reveal = progress * progress * (3 - 2 * progress);
      const rendered = renderer?.draw({
        offset,
        reveal,
        velocity: renderVelocity,
        geometry,
        compact,
      });
      if (!rendered) {
        const total = stride * cards.length;
        cards.forEach((card, index) => {
          const x =
            ((((index * stride - offset + stride) % total) + total) % total) -
            stride;
          card.style.width = `${geometry.cardWidth}px`;
          card.style.height = `${geometry.cardHeight}px`;
          card.style.transform = `translate3d(${x}px,-50%,0)`;
        });
      }
      viewport.dataset.position = offset.toFixed(2);
    };

    const tick = (time: number) => {
      frame = 0;
      if (!active || !visible || covered || document.hidden) return;
      if (reportedPaused !== isPaused) {
        reportedPaused = isPaused;
        setPaused(isPaused);
      }
      const delta = lastTime ? Math.min(40, time - lastTime) : 16;
      lastTime = time;
      const idle = time - lastInput;
      const autoplay =
        !isPaused &&
        !reduced.matches &&
        !drag &&
        !hovered &&
        !focused &&
        idle > 1800;
      if (!drag && !isPaused && momentum) {
        target += momentum * delta;
        momentum *= Math.exp(-delta / 115);
        if (Math.abs(momentum) < 0.025) momentum = 0;
      }
      if (autoplay) target += delta * 0.0288;
      else if (!drag && !isPaused && !momentum && idle > 160 && idle < 1700)
        target = nearestCard(target);
      const previous = offset;
      const follow = reduced.matches
        ? 1
        : 1 - Math.exp(-delta / (drag ? 95 : 165));
      offset += (target - offset) * follow;
      if (Math.abs(target - offset) < 0.01) offset = target;
      renderVelocity += ((offset - previous) / delta - renderVelocity) * 0.24;
      viewport.dataset.state = drag
        ? "dragging"
        : autoplay
          ? "autoplay"
          : momentum
            ? "gliding"
            : Math.abs(target - offset) > 0.5
              ? "settling"
              : "idle";
      draw();
      frame = requestAnimationFrame(tick);
    };

    const startFrames = () => {
      if (!frame && active && visible && !covered && !document.hidden) {
        lastTime = 0;
        frame = requestAnimationFrame(tick);
      }
    };

    const pause = (value: boolean) => {
      isPaused = value;
      momentum = 0;
      target = offset;
      lastInput = performance.now();
      setPaused(value);
      reportedPaused = value;
      draw();
    };
    controls.current = { toggle: () => pause(!isPaused) };

    const pointerDown = (event: PointerEvent) => {
      if (!event.isPrimary || event.button !== 0 || drag) return;
      momentum = 0;
      lastInput = performance.now();
      drag = {
        id: event.pointerId,
        x: event.clientX,
        start: target,
        previousX: event.clientX,
        previousTime: lastInput,
        velocity: 0,
      };
      viewport.dataset.dragging = "true";
      viewport.setPointerCapture(event.pointerId);
      if (event.pointerType === "mouse") event.preventDefault();
    };
    const pointerMove = (event: PointerEvent) => {
      if (!drag || drag.id !== event.pointerId) return;
      const now = performance.now();
      const speed =
        -(event.clientX - drag.previousX) /
        Math.max(8, now - drag.previousTime);
      drag.velocity =
        drag.velocity * 0.5 + Math.max(-3, Math.min(3, speed)) * 0.5;
      drag.previousX = event.clientX;
      drag.previousTime = now;
      target = drag.start - (event.clientX - drag.x);
      lastInput = now;
      if (reduced.matches) {
        offset = target;
        draw();
      }
    };
    const finishDrag = (cancelled = false) => {
      if (!drag) return;
      const pointerId = drag.id;
      momentum =
        !isPaused &&
        !reduced.matches &&
        !cancelled &&
        performance.now() - drag.previousTime < 100
          ? drag.velocity
          : 0;
      if (!momentum) target = nearestCard(target);
      lastInput = performance.now();
      drag = null;
      viewport.dataset.dragging = "false";
      if (viewport.hasPointerCapture(pointerId))
        viewport.releasePointerCapture(pointerId);
    };
    const pointerUp = () => finishDrag();
    const pointerCancel = () => finishDrag(true);
    const pointerEnter = (event: PointerEvent) => {
      if (event.pointerType === "mouse") hovered = true;
    };
    const pointerLeave = () => {
      hovered = false;
      lastInput = performance.now();
    };
    const focus = () => {
      focused = true;
      momentum = 0;
    };
    const blur = () => {
      focused = false;
      lastInput = performance.now();
    };
    const keyDown = (event: KeyboardEvent) => {
      if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
      event.preventDefault();
      momentum = 0;
      target =
        nearestCard(target) + (event.key === "ArrowRight" ? stride : -stride);
      lastInput = performance.now();
      if (reduced.matches) {
        offset = target;
        draw();
      }
    };
    const resize = () => {
      finishDrag(true);
      const index =
        (target + viewportWidth / 2 - geometry.cardWidth / 2) / stride;
      calibrate();
      offset = nearestCard(
        index * stride - viewportWidth / 2 + geometry.cardWidth / 2,
      );
      target = offset;
      momentum = 0;
      lastInput = performance.now();
      draw();
    };
    const windowBlur = () => {
      finishDrag(true);
      momentum = 0;
    };
    const reducedChange = () => pause(reduced.matches);
    const visibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(frame);
        frame = 0;
      } else startFrames();
    };

    viewport.addEventListener("pointerdown", pointerDown);
    viewport.addEventListener("pointermove", pointerMove);
    viewport.addEventListener("pointerup", pointerUp);
    viewport.addEventListener("pointercancel", pointerCancel);
    viewport.addEventListener("lostpointercapture", pointerCancel);
    viewport.addEventListener("pointerenter", pointerEnter);
    viewport.addEventListener("pointerleave", pointerLeave);
    viewport.addEventListener("focus", focus);
    viewport.addEventListener("blur", blur);
    viewport.addEventListener("keydown", keyDown);
    window.addEventListener("resize", resize);
    window.addEventListener("blur", windowBlur);
    document.addEventListener("visibilitychange", visibilityChange);
    reduced.addEventListener("change", reducedChange);

    const sizing = new ResizeObserver(updateBounds);
    sizing.observe(hero);
    sizing.observe(viewport);
    const intersection = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) startFrames();
      else {
        cancelAnimationFrame(frame);
        frame = 0;
      }
    });
    intersection.observe(hero);
    // Stop drawing while the next section fully covers the pinned hero.
    const coverChange = () => {
      covered = hero.dataset.covered === "true";
      if (covered) {
        cancelAnimationFrame(frame);
        frame = 0;
      } else startFrames();
    };
    hero.addEventListener("herocoverchange", coverChange);
    calibrate();
    offset = geometry.cardWidth / 2 - viewportWidth / 2;
    target = offset;
    draw();
    startFrames();
    void document.fonts.ready.then(() => {
      if (active) resize();
    });

    return () => {
      active = false;
      finishDrag(true);
      cancelAnimationFrame(frame);
      controls.current = null;
      sizing.disconnect();
      intersection.disconnect();
      hero.removeEventListener("herocoverchange", coverChange);
      viewport.removeEventListener("pointerdown", pointerDown);
      viewport.removeEventListener("pointermove", pointerMove);
      viewport.removeEventListener("pointerup", pointerUp);
      viewport.removeEventListener("pointercancel", pointerCancel);
      viewport.removeEventListener("lostpointercapture", pointerCancel);
      viewport.removeEventListener("pointerenter", pointerEnter);
      viewport.removeEventListener("pointerleave", pointerLeave);
      viewport.removeEventListener("focus", focus);
      viewport.removeEventListener("blur", blur);
      viewport.removeEventListener("keydown", keyDown);
      window.removeEventListener("resize", resize);
      window.removeEventListener("blur", windowBlur);
      document.removeEventListener("visibilitychange", visibilityChange);
      reduced.removeEventListener("change", reducedChange);
      renderer?.destroy();
      canvas.remove();
      delete hero.dataset.lens;
      delete hero.dataset.mediaAtlas;
    };
  }, []);

  return (
    <div className={styles.ribbonShell}>
      <div
        ref={viewportRef}
        className={styles.ribbonViewport}
        role="region"
        aria-label="Selected work gallery — nine images"
        aria-describedby="ribbon-instructions"
        tabIndex={0}
        id="hero-project-ribbon"
      >
        <div className={styles.ribbonFallback}>
          {ribbonImages.map((image) => (
            <div key={image.src} className={styles.ribbonCard} data-ribbon-card>
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                loading="eager"
                unoptimized
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
      <button
        type="button"
        className={styles.motionButton}
        aria-label={paused ? "Resume ribbon motion" : "Pause ribbon motion"}
        aria-pressed={paused}
        onClick={() => controls.current?.toggle()}
      >
        {paused ? "Resume motion" : "Pause motion"}
        <span aria-hidden="true">{paused ? "▷" : "Ⅱ"}</span>
      </button>
      <p id="ribbon-instructions" className={styles.visuallyHidden}>
        Drag horizontally or use the left and right arrow keys to explore.
        Motion pauses while hovered or focused.
      </p>
      <ol className={styles.visuallyHidden} aria-label="Ribbon artwork">
        {ribbonImages.map((image) => (
          <li key={image.src}>{image.alt}</li>
        ))}
      </ol>
    </div>
  );
}
