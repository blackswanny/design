import { Nunito } from "next/font/google";
import { useId } from "react";

import styles from "./smartbooLogo.module.css";

// The SmartBoo wordmark face from the Figma logo kit (Nunito, heavy).
const wordmarkFont = Nunito({
  subsets: ["latin"],
  weight: "900",
  display: "swap",
});

type Tone = "black" | "white" | "blue";

/** Boo's mark from the Figma "Logo" page: a twelve-petal flower with a
    ring and a face. Black is the default, white goes on dark surfaces,
    blue (soft gradient petals, blue core) is for playful moments. */
export function BooMark({
  tone = "black",
  className,
}: {
  tone?: Tone;
  className?: string;
}) {
  const id = useId();
  const petals =
    tone === "blue" ? `url(#${id})` : tone === "white" ? "#fff" : "#111318";
  const core = tone === "blue" ? "#2A55C4" : petals;
  const ring = tone === "white" ? "#111318" : "#fff";
  const eyes = tone === "white" ? "#111318" : "#fff";

  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      aria-hidden="true"
      focusable="false"
    >
      {tone === "blue" && (
        <defs>
          <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#D9E4FB" />
            <stop offset="0.5" stopColor="#C7D0F5" />
            <stop offset="1" stopColor="#E6D9F2" />
          </linearGradient>
        </defs>
      )}
      <g fill={petals}>
        <circle cx="50" cy="50" r="38" />
        {Array.from({ length: 12 }, (_, i) => {
          const a = ((15 + i * 30) * Math.PI) / 180;
          return (
            <circle
              key={i}
              cx={(50 + 37.8 * Math.sin(a)).toFixed(2)}
              cy={(50 - 37.8 * Math.cos(a)).toFixed(2)}
              r="12.2"
            />
          );
        })}
      </g>
      <circle cx="50" cy="50" r="37.2" fill={ring} />
      <circle cx="50" cy="50" r="28.8" fill={core} />
      <ellipse cx="37.8" cy="46.2" rx="4.8" ry="8.6" fill={eyes} />
      <ellipse cx="62.2" cy="46.2" rx="4.8" ry="8.6" fill={eyes} />
    </svg>
  );
}

/** The horizontal lockup: mark + "smartboo". Size it with font-size. */
export default function SmartBooLogo({
  tone = "black",
  className,
}: {
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={`${styles.logo} ${className ?? ""}`}
      data-tone={tone}
      role="img"
      aria-label="SmartBoo"
    >
      <BooMark tone={tone} className={styles.mark} />
      <span className={`${styles.word} ${wordmarkFont.className}`}>
        smartboo
      </span>
    </span>
  );
}
