/** North-east arrow drawn to the font's cap height and set on the text
    baseline, so it lines up with the capitals of the word next to it
    (the "↗" glyph sits high in most fonts). */
export default function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{
        display: "inline-block",
        width: "0.735em",
        height: "0.735em",
        verticalAlign: "baseline",
        overflow: "visible",
      }}
    >
      <path d="M1.5 10.5L10.5 1.5M3.5 1.5h7v7" />
    </svg>
  );
}
