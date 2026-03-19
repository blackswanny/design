"use client";

import { ChevronDownIcon } from "@heroicons/react/24/outline";
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
      className={`pointer-events-none fixed inset-x-0 bottom-8 z-50 flex justify-center transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <button
        type="button"
        aria-label="Scroll down"
        className="pointer-events-auto rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
        onClick={() => {
          const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
          ).matches;

          window.scrollBy({
            top: window.innerHeight * 0.8,
            behavior: prefersReducedMotion ? "auto" : "smooth",
          });
        }}
      >
        <ChevronDownIcon className="h-6 w-6" />
      </button>
    </div>
  );
}
