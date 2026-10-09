"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function CursorFlower() {
  const flowerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const flower = flowerRef.current;

    if (!flower) return;

    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const hide = () => {
      flower.dataset.visible = "false";
      document.documentElement.classList.remove("has-flower-cursor");
    };

    const move = (event: PointerEvent) => {
      if (
        event.pointerType !== "mouse" ||
        !finePointer.matches ||
        reducedMotion.matches
      ) {
        hide();
        return;
      }

      flower.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
      flower.dataset.visible = "true";
      document.documentElement.classList.add("has-flower-cursor");
    };

    const leave = (event: PointerEvent) => {
      if (event.relatedTarget === null) hide();
    };

    const updatePreferences = () => {
      if (!finePointer.matches || reducedMotion.matches) hide();
    };

    const updateVisibility = () => {
      if (document.hidden) hide();
    };

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerdown", move, { passive: true });
    window.addEventListener("pointerout", leave);
    window.addEventListener("blur", hide);
    document.addEventListener("visibilitychange", updateVisibility);
    finePointer.addEventListener("change", updatePreferences);
    reducedMotion.addEventListener("change", updatePreferences);

    return () => {
      hide();
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerdown", move);
      window.removeEventListener("pointerout", leave);
      window.removeEventListener("blur", hide);
      document.removeEventListener("visibilitychange", updateVisibility);
      finePointer.removeEventListener("change", updatePreferences);
      reducedMotion.removeEventListener("change", updatePreferences);
    };
  }, []);

  return (
    <div
      ref={flowerRef}
      className="cursor-flower"
      data-visible="false"
      aria-hidden="true"
    >
      <svg
        className="cursor-flower__arrow"
        width="24"
        height="28"
        viewBox="0 0 24 28"
        fill="none"
      >
        <path
          d="M2 2L21 9L14 12L11 25L2 2Z"
          fill="#020202"
          stroke="#f5f1ea"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
      <Image
        className="cursor-flower__image"
        src="/images/cursor-poppy-original.svg"
        alt=""
        width={100}
        height={115}
        loading="eager"
        draggable={false}
        unoptimized
      />
    </div>
  );
}
