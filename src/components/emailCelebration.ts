import styles from "./emailCelebration.module.css";

const palette = [
  "#e54438",
  "#ffc83d",
  "#ff5fa2",
  "#8b5cf6",
  "#3dd6f5",
  "#4ade80",
  "#ffffff",
];

const shapes = [styles.star, styles.confetti, styles.dot] as const;

const pick = <T>(items: readonly T[]) =>
  items[Math.floor(Math.random() * items.length)];
const between = (min: number, max: number) => min + Math.random() * (max - min);

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
  document.body.appendChild(burst);

  const animations: Animation[] = [];
  const spawn = (className: string, left: number, top: number) => {
    const element = document.createElement("span");
    element.className = className;
    element.style.left = `${left}px`;
    element.style.top = `${top}px`;
    burst.appendChild(element);
    return element;
  };

  // Main confetti burst: mixed shapes and colours that arc out and fall.
  for (let index = 0; index < 300; index += 1) {
    const particle = spawn(`${styles.particle} ${pick(shapes)}`, x, y);
    particle.style.background = pick(palette);

    const angle = between(0, Math.PI * 2);
    const distance = between(40, 200);
    const dx = Math.cos(angle) * distance;
    const dy = Math.sin(angle) * distance - between(20, 60);
    const spin = between(360, 900) * (Math.random() < 0.5 ? -1 : 1);

    animations.push(
      particle.animate(
        [
          { transform: "translate(-50%, -50%) scale(0.4)", opacity: 1 },
          {
            transform: `translate(calc(${dx}px - 50%), calc(${dy}px - 50%)) rotate(${spin * 0.55}deg) scale(1)`,
            opacity: 1,
            offset: 0.45,
          },
          {
            transform: `translate(calc(${dx * 1.15}px - 50%), calc(${dy + between(90, 160)}px - 50%)) rotate(${spin}deg) scale(0.6)`,
            opacity: 0,
          },
        ],
        {
          duration: between(1300, 2000),
          delay: between(0, 60),
          easing: "cubic-bezier(0.12, 0.7, 0.3, 1)",
          fill: "backwards",
        },
      ),
    );
  }

  const cancel = () => {
    animations.forEach((animation) => animation.cancel());
    burst.remove();
  };

  const finished = Promise.all(
    animations.map((animation) => animation.finished.catch(() => undefined)),
  ).then(() => burst.remove());

  return { cancel, finished };
}
