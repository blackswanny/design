import Image from "next/image";

import styles from "./cover.module.css";

const portraits = [
  { name: "yellow", position: "yellow" },
  { name: "pink", position: "pink" },
  { name: "blue", position: "blue" },
  { name: "smiling", position: "smiling" },
  { name: "meditating", position: "meditating" },
  { name: "glasses", position: "glasses" },
] as const;

export default function MindscapeCover({ videoSrc }: { videoSrc: string }) {
  return (
    <section className={styles.cover} aria-labelledby="mindscape-cover-title">
      <Image
        src="/images/projects/mindscape/cover/logo.svg"
        alt="MindScape"
        width={76}
        height={81}
        className={styles.logo}
        unoptimized
      />
      <h2 id="mindscape-cover-title" className={styles.heading}>
        <span>Better mental</span>
        <span>
          <em>health</em> starts
        </span>
        <span>with the right</span>
        <span>support</span>
      </h2>
      {portraits.map(({ name, position }) => (
        <div key={name} className={`${styles.portrait} ${styles[position]}`}>
          <Image
            src={`/images/projects/mindscape/cover/${name}-portrait.webp`}
            alt=""
            fill
            sizes="(min-width: 1750px) 190px, 14vw"
            className={styles.photo}
          />
        </div>
      ))}
      <div className={styles.videoFrame}>
        <video
          src={videoSrc}
          poster="/images/projects/mindscape/cover/therapy-poster.webp"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-label="A therapist listening and taking notes during a session"
          className={styles.video}
        />
      </div>
    </section>
  );
}
