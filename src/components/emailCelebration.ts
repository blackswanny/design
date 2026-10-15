import styles from "./emailCelebration.module.css";

export function celebrateEmailCopy(x: number, y: number) {
  if (
    window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
    typeof document.documentElement.animate !== "function"
  ) {
    return;
  }

  const burst = document.createElement("div");
  burst.className = styles.burst;
  burst.setAttribute("aria-hidden", "true");
  burst.setAttribute("data-copy-celebration", "");
  burst.style.setProperty("--burst-x", `${x}px`);
  burst.style.setProperty("--burst-y", `${y}px`);
  document.body.appendChild(burst);

  const particleCount = 28;
  const animations = Array.from({ length: particleCount }, (_, index) => {
    const particle = document.createElement("span");
    particle.className = styles.particle;
    burst.appendChild(particle);

    const angle = (index / particleCount) * Math.PI * 2 - Math.PI / 2;
    const distance = 50 + (index % 5) * 13;
    const dx = Math.cos(angle) * distance;
    const dy = Math.sin(angle) * distance;
    const rotation = index % 2 === 0 ? 220 : -220;

    return particle.animate(
      [
        { transform: "translate(0, 0) rotate(0deg) scale(0.5)", opacity: 1 },
        {
          transform: `translate(${dx * 0.85}px, ${dy * 0.85}px) rotate(${rotation * 0.6}deg) scale(1)`,
          opacity: 1,
          offset: 0.6,
        },
        {
          transform: `translate(${dx}px, ${dy + 36}px) rotate(${rotation}deg) scale(0.3)`,
          opacity: 0,
        },
      ],
      {
        duration: 850 + (index % 5) * 45,
        easing: "cubic-bezier(0.15, 0.65, 0.3, 1)",
        fill: "forwards",
      },
    );
  });

  const cancel = () => {
    animations.forEach((animation) => animation.cancel());
    burst.remove();
  };

  const finished = Promise.all(
    animations.map((animation) => animation.finished.catch(() => undefined)),
  ).then(() => burst.remove());

  return { cancel, finished };
}
