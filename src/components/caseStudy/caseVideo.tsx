"use client";

import { useEffect, useRef } from "react";

type Props = {
  src: string;
  poster: string;
  title: string;
  className?: string;
  eager?: boolean;
};

// Self-hosted loop: the poster (first frame) shows instantly, the file
// starts loading a screen ahead of the viewport and pauses off screen.
export default function CaseVideo({
  src,
  poster,
  title,
  className,
  eager = false,
}: Props) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const load = () => {
      if (!video.getAttribute("src")) video.src = src;
    };
    if (eager) load();
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          load();
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { rootMargin: "100% 0px" },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [src, eager]);

  return (
    <video
      ref={ref}
      className={className}
      poster={poster}
      aria-label={title}
      muted
      loop
      playsInline
      preload={eager ? "auto" : "none"}
    />
  );
}
