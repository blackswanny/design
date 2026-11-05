import styles from "./smartboo.module.css";

/** A real screen exported from the SmartBoo Figma file (V17), framed as a
    phone. The image already includes the status bar and tab bar. */
export function ScreenShot({
  src,
  alt,
  tilt,
}: {
  src: string;
  alt: string;
  tilt?: "left" | "right";
}) {
  return (
    <div className={styles.phone} data-tilt={tilt}>
      <div className={styles.screen}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} width={780} height={1688} loading="lazy" />
      </div>
    </div>
  );
}
