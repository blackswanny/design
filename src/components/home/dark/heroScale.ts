// Scale of the hero layout (1 at 1440×900 and up). The fixed header and the
// shared heading size follow it through the --hero-scale variable.
export function computeHeroScale(viewportWidth: number) {
  const height = Math.max(window.innerHeight, 640);
  const wide = viewportWidth >= 1536;
  return Math.max(
    0.35,
    Math.min(
      1,
      (viewportWidth - 63) / 1377,
      // 769.674 is the hero content height at scale 1; the extra 100px
      // keeps breathing room around the intro on shorter windows.
      (height - (wide ? 132 : 112)) / 869.674,
    ),
  );
}
