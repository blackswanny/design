import styles from "./smartboo.module.css";

/** A real screen exported from the SmartBoo Figma prototype (iPhone 14,
    390×844), framed as a phone. The image already includes the status bar
    and tab bar. */
export function ScreenShot({
  src,
  alt,
  tilt,
  eager,
}: {
  src: string;
  alt: string;
  tilt?: "left" | "right";
  eager?: boolean;
}) {
  return (
    <div className={styles.phone} data-tilt={tilt}>
      <div className={styles.screen}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          width={780}
          height={1688}
          loading={eager ? "eager" : "lazy"}
        />
      </div>
    </div>
  );
}
