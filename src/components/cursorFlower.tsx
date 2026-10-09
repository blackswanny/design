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

      flower.style.transform = `translate3d(${event.clientX + 12}px, ${event.clientY + 16}px, 0)`;
      flower.dataset.visible = "true";
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
      <Image
        src="/images/cursor-poppy.svg"
        alt=""
        width={290}
        height={340}
        draggable={false}
        unoptimized
      />
    </div>
  );
}
