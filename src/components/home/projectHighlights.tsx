"use client";

import Image from "next/image";
import { useCallback, useEffect, useLayoutEffect, useRef } from "react";

import styles from "./projectHighlights.module.css";

import type { KeyboardEvent, PointerEvent } from "react";

type DragState = {
  pointerId: number;
  startX: number;
  startTime: number;
  startScroll: number;
  cycleWidth: number;
  duration: number;
  animation: Animation | null;
};

const highlights = [
  {
    src: "/images/home/highlights/01-mindscape-product.png",
    whiteBackground: true,
    alt: "01 — Product Design: MindScape. A mental wellness app that makes finding the right therapist easier. Mobile App, UX/UI, Research.",
  },
  {
    src: "/images/home/highlights/02-end-to-end-design.png",
    whiteBackground: false,
    alt: "02 — End-to-End Design: From insight to interface. Shaping products from early research and strategy to intuitive UX and polished visual design. Research & Strategy, UX & Product, Visual Design.",
  },
  {
    src: "/images/home/highlights/03-workreactor-space.png",
    whiteBackground: true,
    alt: "03 — WorkReactor: A space to move ideas forward. A social network and workspace connecting people, projects, teams, and opportunities. Product Design, Social Platform, Collaboration.",
  },
  {
    src: "/images/home/highlights/04-user-centered-process.png",
    whiteBackground: false,
    alt: "04 — User-Centered Process: Curiosity before pixels. Understanding people, questioning assumptions, and exploring ideas before designing solutions. Discover, Define, Explore, Iterate.",
  },
  {
    src: "/images/home/highlights/05-setdo-advisory.png",
    whiteBackground: true,
    alt: "05 — Product Advisory: SET.DO. An AI-powered planner that turns intentions into action. Product Thinking, UX Advisory, AI Planning.",
  },
  {
    src: "/images/home/highlights/06-creative-direction.png",
    whiteBackground: false,
    alt: "06 — Creative Direction: Visual stories that move. Beyond product design, I love exploring bold ideas, visual storytelling, and creative direction. Art Direction, Visual Storytelling, Creative Exploration.",
  },
] as const;

export default function ProjectHighlights() {
  const sectionRef = useRef<HTMLElement>(null);
  const cueRef = useRef<HTMLAnchorElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<DragState | null>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const cue = cueRef.current;
    const viewport = viewportRef.current;
    const heroCopy = document.querySelector<HTMLElement>("[data-hero-copy]");
    const projects = document.getElementById("projects");
    if (!section || !cue || !viewport || !heroCopy) return;

    let active = true;
    const updatePosition = () => {
      const above = heroCopy.getBoundingClientRect().bottom;
      const cardBounds = trackRef.current
        ?.querySelector("img")
        ?.getBoundingClientRect();
      const below = cardBounds?.top ?? viewport.getBoundingClientRect().top;
      const cueHeight = cue.getBoundingClientRect().height;
      const top =
        (above + below - cueHeight) / 2 - section.getBoundingClientRect().top;
      cue.style.top = `${top}px`;
      const gap = Math.max(0, (below - above - cueHeight) / 2);
      const shadowSpace = cardBounds
        ? Math.max(
            0,
            section.getBoundingClientRect().bottom - cardBounds.bottom,
          )
        : 0;
      projects?.style.setProperty(
        "--highlights-next-gap",
        `${Math.max(0, gap - shadowSpace)}px`,
      );
    };

    updatePosition();
    const observer = new ResizeObserver(updatePosition);
    [section, cue, viewport, heroCopy].forEach((element) =>
      observer.observe(element),
    );
    window.addEventListener("resize", updatePosition);
    void document.fonts.ready.then(() => {
      if (active) updatePosition();
    });

    return () => {
      active = false;
      observer.disconnect();
      window.removeEventListener("resize", updatePosition);
      projects?.style.removeProperty("--highlights-next-gap");
    };
  }, []);

  const finishDrag = useCallback(() => {
    const drag = dragRef.current;
    if (!drag) return;
    dragRef.current = null;

    const viewport = viewportRef.current;
    if (viewport) {
      viewport.dataset.dragging = "false";
      if (viewport.hasPointerCapture(drag.pointerId)) {
        viewport.releasePointerCapture(drag.pointerId);
      }
    }

    if (
      trackRef.current?.isConnected &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      drag.animation?.play();
    }
  }, []);

  useEffect(() => {
    window.addEventListener("blur", finishDrag);
    window.addEventListener("resize", finishDrag);
    return () => {
      finishDrag();
      window.removeEventListener("blur", finishDrag);
      window.removeEventListener("resize", finishDrag);
    };
  }, [finishDrag]);

  const startDrag = (event: PointerEvent<HTMLDivElement>) => {
    if (!event.isPrimary || event.button !== 0 || dragRef.current) return;
    const track = trackRef.current;
    if (!track) return;

    const animation = track.getAnimations()[0] ?? null;
    const duration = animation?.effect?.getComputedTiming().duration;
    dragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startTime:
        typeof animation?.currentTime === "number" ? animation.currentTime : 0,
      startScroll: event.currentTarget.scrollLeft,
      cycleWidth: Math.max(
        1,
        track.firstElementChild?.getBoundingClientRect().width ?? 0,
      ),
      duration: typeof duration === "number" ? duration : 72000,
      animation,
    };

    animation?.pause();
    event.currentTarget.dataset.dragging = "true";
    event.currentTarget.setPointerCapture(event.pointerId);
    if (event.pointerType === "mouse") {
      event.preventDefault();
      event.currentTarget.blur();
    }
  };

  const moveDrag = (event: PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;
    const distance = event.clientX - drag.startX;

    if (drag.animation) {
      const time =
        drag.startTime - (distance / drag.cycleWidth) * drag.duration;
      // Wrap within the seamless loop so dragging works in either direction.
      drag.animation.currentTime =
        ((time % drag.duration) + drag.duration) % drag.duration;
    } else {
      event.currentTarget.scrollLeft = drag.startScroll - distance;
    }
  };

  const scrollWithKeyboard = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    const direction = event.key === "ArrowRight" ? 1 : -1;
    const track = trackRef.current;
    const animation = track?.getAnimations()[0];
    const cycleWidth = track?.firstElementChild?.getBoundingClientRect().width;
    const duration = animation?.effect?.getComputedTiming().duration;

    if (animation && cycleWidth && typeof duration === "number") {
      const current =
        typeof animation.currentTime === "number" ? animation.currentTime : 0;
      const time = current + ((direction * 160) / cycleWidth) * duration;
      animation.currentTime = ((time % duration) + duration) % duration;
    } else {
      event.currentTarget.scrollLeft += direction * 160;
    }
  };

  return (
    <section
      ref={sectionRef}
      className={styles.highlights}
      aria-label="Project highlights"
      id="project-highlights"
    >
      <a
        ref={cueRef}
        href="#project-highlights"
        className={styles.scrollCue}
        aria-label="Scroll to project cards"
      >
        <span>Explore</span>
        <svg
          width="24"
          height="40"
          viewBox="0 0 24 40"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M12 2v36m-7-7 7 7 7-7"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
      <div
        ref={viewportRef}
        className={styles.viewport}
        onPointerDown={startDrag}
        onPointerMove={moveDrag}
        onPointerUp={finishDrag}
        onPointerCancel={finishDrag}
        onLostPointerCapture={finishDrag}
        onKeyDown={scrollWithKeyboard}
        tabIndex={0}
        role="group"
        aria-label="Project cards — drag or use arrow keys to scroll"
      >
        <div ref={trackRef} className={styles.track}>
          {[0, 1].map((copy) => (
            <div
              key={copy}
              className={`${styles.group} ${copy === 1 ? styles.duplicate : ""}`}
              aria-hidden={copy === 1 ? true : undefined}
            >
              {highlights.map((card) => (
                <Image
                  key={card.src}
                  src={card.src}
                  alt={copy === 0 ? card.alt : ""}
                  width={656}
                  height={1200}
                  loading="eager"
                  unoptimized
                  draggable={false}
                  className={styles.card}
                  data-shadow={card.whiteBackground}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
