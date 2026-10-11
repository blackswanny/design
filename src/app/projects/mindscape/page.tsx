import Image from "next/image";
import Link from "next/link";

import ContactSection from "@/components/contactSection";
import sharedStyles from "@/components/home/headerHero.module.css";
import NavMenu from "@/components/navMenu";

import { behanceUrl, caseModules, projectDescription } from "./caseStudy";
import styles from "./page.module.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MindScape — Mental Health App Design | Hanna Gomozova",
  description: projectDescription,
};

export default function MindscapePage() {
  return (
    <main className={`${styles.page} min-h-screen bg-background`}>
      <NavMenu />
      <article className={styles.caseStudy} aria-labelledby="mindscape-title">
        <header className={styles.projectHeader}>
          <Link href="/#projects" className={styles.backLink}>
            <span aria-hidden="true">←</span> Back to selected work
          </Link>
          <h1
            id="mindscape-title"
            className={`${sharedStyles.sectionHeading} ${styles.title}`}
          >
            MindScape
          </h1>
          <p className={styles.description}>{projectDescription}</p>
        </header>

        <div className={styles.canvas}>
          {caseModules.map((module, index) =>
            module.type === "image" ? (
              <a
                key={module.src}
                href={module.src}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${module.alt} in full size`}
                className={styles.panelLink}
              >
                <Image
                  src={module.src}
                  alt={module.alt}
                  width={2800}
                  height={module.height}
                  quality={95}
                  sizes="(min-width: 1750px) 1400px, 80vw"
                  className={styles.panel}
                />
              </a>
            ) : (
              <div
                key={module.src}
                className={styles.video}
                style={{
                  aspectRatio: `${module.width} / ${module.height - (module.cropTop ?? 0)}`,
                }}
              >
                <iframe
                  src={module.src}
                  title={module.title}
                  loading={index === 0 ? "eager" : "lazy"}
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                  className={styles.player}
                  style={{
                    height: `${(module.height / (module.height - (module.cropTop ?? 0))) * 100}%`,
                    top: `${-((module.cropTop ?? 0) / (module.height - (module.cropTop ?? 0))) * 100}%`,
                  }}
                />
              </div>
            ),
          )}
        </div>

        <div className={styles.projectEnd}>
          <Link href="/#projects" className={styles.backLink}>
            <span aria-hidden="true">←</span> Back to selected work
          </Link>
          <a
            href={behanceUrl}
            target="_blank"
            rel="noreferrer"
            className={styles.backLink}
          >
            Original case on Behance <span aria-hidden="true">↗</span>
          </a>
        </div>
      </article>
      <footer>
        <ContactSection />
      </footer>
    </main>
  );
}
