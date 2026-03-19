"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const VISIBILITY_THRESHOLD = 24;

function shouldShowScrollCue() {
  const root = document.documentElement;
  const body = document.body;
  const viewportHeight = window.innerHeight || root.clientHeight;
  const scrollTop = window.scrollY || root.scrollTop;
  const scrollHeight = Math.max(root.scrollHeight, body.scrollHeight);
  const hasMoreContent = scrollHeight - viewportHeight > VISIBILITY_THRESHOLD;
  const reachedBottom =
    scrollTop + viewportHeight >= scrollHeight - VISIBILITY_THRESHOLD;

  return hasMoreContent && !reachedBottom;
}

export default function ScrollCue() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let frame = 0;

    const updateVisibility = () => {
      frame = 0;
      setIsVisible(shouldShowScrollCue());
    };

    const scheduleUpdate = () => {
      if (frame !== 0) {
        return;
      }

      frame = window.requestAnimationFrame(updateVisibility);
    };

    scheduleUpdate();

    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate, { passive: true });

    return () => {
      if (frame !== 0) {
        window.cancelAnimationFrame(frame);
      }

      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, [pathname]);

  return (
    <div
      className="scroll-cue pointer-events-none"
      data-visible={isVisible ? "true" : "false"}
    >
      <button
        type="button"
        aria-label="Scroll down"
        className="scroll-cue__button pointer-events-auto"
        onClick={() => {
          const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
          ).matches;

          window.scrollBy({
            top: Math.max(window.innerHeight * 0.72, 240),
            behavior: prefersReducedMotion ? "auto" : "smooth",
          });
        }}
      >
        <span aria-hidden="true" className="scroll-cue__glyph">
          <span className="scroll-cue__chevron scroll-cue__chevron--top" />
          <span className="scroll-cue__chevron scroll-cue__chevron--bottom" />
        </span>
      </button>
    </div>
  );
}
