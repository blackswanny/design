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
    let frame = 0;
    let lastTime = 0;
    let visible = false;
    const target = { x: 0, y: 0 };
    const position = { x: 0, y: 0, rotation: 0 };

    const hide = () => {
      visible = false;
      flower.dataset.visible = "false";
      window.cancelAnimationFrame(frame);
      frame = 0;
      lastTime = 0;
    };

    const animate = (time: number) => {
      const elapsed = lastTime ? Math.min(time - lastTime, 64) : 16;
      lastTime = time;
      const follow = 1 - Math.exp(-elapsed / 55);
      const sway = 1 - Math.exp(-elapsed / 100);
      const rotation = Math.max(
        -8,
        Math.min(8, (target.x - position.x) * 0.12),
      );

      position.x += (target.x - position.x) * follow;
      position.y += (target.y - position.y) * follow;
      position.rotation += (rotation - position.rotation) * sway;
      flower.style.transform = `translate3d(${position.x + 12}px, ${position.y + 16}px, 0) rotate(${position.rotation}deg)`;

      if (
        Math.abs(target.x - position.x) > 0.1 ||
        Math.abs(target.y - position.y) > 0.1 ||
        Math.abs(position.rotation) > 0.1
      ) {
        frame = window.requestAnimationFrame(animate);
      } else {
        frame = 0;
        lastTime = 0;
      }
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

      target.x = event.clientX;
      target.y = event.clientY;

      if (!visible) {
        position.x = target.x;
        position.y = target.y;
        position.rotation = 0;
        visible = true;
        flower.dataset.visible = "true";
      }

      if (!frame) frame = window.requestAnimationFrame(animate);
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
