"use client";

import { useLayoutEffect, useRef } from "react";

import type { ReactNode } from "react";

export default function IntroLayout({
  children,
  className,
}: Readonly<{ children: ReactNode; className: string }>) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const element = ref.current;
    const heading = document.getElementById("mindscape-title");
    if (!element || !heading) return;

    let offset = 0;
    let frame = 0;
    let active = true;
    const content = [...element.querySelectorAll("h2, dt, p, dd > span")];

    const update = () => {
      const boxes = content.map((node) => {
        if (node.tagName === "SPAN") return node.getBoundingClientRect();
        const range = document.createRange();
        range.selectNodeContents(node);
        return range.getBoundingClientRect();
      });
      if (!boxes.length) return;

      const left = Math.min(...boxes.map((box) => box.left));
      const right = Math.max(...boxes.map((box) => box.right));
      const title = heading.getBoundingClientRect();
      const shift = (title.left + title.right - left - right) / 2;

      // Move the whole grid, not its text or individual tag rows. Include the
      // previous offset so repeated measurements do not accumulate a shift.
      offset = Math.round((offset + shift) * 1000) / 1000;
      element.style.transform = `translateX(${offset}px)`;
      element.dataset.centered = "true";
    };

    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    const observer = new ResizeObserver(schedule);
    [element, heading, ...content].forEach((node) => observer.observe(node));
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
      element.style.transform = "";
    };
  }, [children]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
