import Image from "next/image";
import Link from "next/link";

import styles from "./caseStudyView.module.css";
import { portfolioDisplay, portfolioSans } from "../home/dark/fonts";

import type { CaseStudy } from "./types";

// Dark case study page: sticky description on the left, the Behance project
// media stacked on the right.
export default function CaseStudyView({ project }: { project: CaseStudy }) {
  return (
    <main
      className={`${styles.page} ${portfolioSans.variable} ${portfolioDisplay.variable}`}
    >
      <Link
        href="/#projects"
        className={styles.close}
        aria-label="Close project and return to selected works"
      >
        <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
          <path
            d="M5 5l14 14M19 5L5 19"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </Link>
      <article className={styles.case} aria-labelledby="case-title">
        <aside className={styles.sidebar}>
          <div className={styles.sidebarInner}>
            <h1 id="case-title" className={styles.title}>
              {project.title}
            </h1>
            <p className={styles.description}>{project.description}</p>
            <ul className={styles.tags}>
              {project.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
              <li aria-hidden="true">/</li>
              <li>{project.year}</li>
            </ul>
            <a
              className={styles.behance}
              href={project.behanceUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on Behance <span aria-hidden="true">↗</span>
            </a>
          </div>
        </aside>
        <div className={styles.gallery}>
          <div className={styles.stack}>
            {project.modules.map((module, index) => {
              if (module.type === "video") {
                return (
                  <div
                    key={module.vimeoId}
                    className={styles.video}
                    style={{
                      aspectRatio: `${module.width} / ${module.height}`,
                    }}
                  >
                    <iframe
                      src={`https://player.vimeo.com/video/${module.vimeoId}?autoplay=1&loop=1&muted=1&autopause=0&background=1&title=0&byline=0&portrait=0`}
                      title={`${project.title} website interaction video`}
                      allow="autoplay; fullscreen; picture-in-picture"
                      loading="lazy"
                    />
                  </div>
                );
              }
              return (
                <Image
                  key={module.src}
                  className={styles.media}
                  src={module.src}
                  alt={module.alt}
                  width={module.width}
                  height={module.height}
                  sizes="(max-width: 900px) calc(100vw - 40px), calc(100vw - 608px)"
                  loading={index === 0 ? "eager" : "lazy"}
                  unoptimized
                />
              );
            })}
          </div>
        </div>
      </article>
    </main>
  );
}
