import Image from "next/image";

import ContactSection from "@/components/contactSection";
import NavMenu from "@/components/navMenu";

import { caseModules, projectDescription } from "./caseStudy";
import MindscapeOverview, { MindscapeIntro } from "./overview";
import styles from "./page.module.css";
import MindscapeSummary from "./summary";

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
        <MindscapeOverview />
        <MindscapeIntro />
        <div className={styles.canvas}>
          {caseModules.map((module, index) =>
            module.type === "summary" ? (
              <MindscapeSummary key={module.id} />
            ) : module.type === "image" ? (
              <a
                key={module.src}
                href={module.src}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${module.alt} in full size`}
                data-continuous-start={
                  module.continuousStart ? true : undefined
                }
                className={`${styles.panelLink} ${module.background === "page" ? styles.pagePanel : ""} ${module.roundedTop ? styles.roundedTopPanel : ""}`}
              >
                <Image
                  src={module.src}
                  alt={module.alt}
                  width={module.width ?? 2800}
                  height={module.height}
                  quality={95}
                  sizes="(min-width: 1750px) 1400px, 80vw"
                  className={styles.panel}
                />
              </a>
            ) : (
              <div
                key={module.src}
                className={`${styles.video} ${module.cropTop ? styles.cleanEdge : ""}`}
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
      </article>
      <footer>
        <ContactSection />
      </footer>
    </main>
  );
}
