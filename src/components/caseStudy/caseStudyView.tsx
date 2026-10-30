import Image from "next/image";
import Link from "next/link";

import styles from "./caseStudyView.module.css";
import CaseVideo from "./caseVideo";
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
            {project.sections ? (
              <>
                <p className={styles.lead}>{project.description}</p>
                {project.sections.map((section) => (
                  <section key={section.title} className={styles.section}>
                    <h2 className={styles.sectionTitle}>{section.title}</h2>
                    <p className={styles.sectionText}>{section.text}</p>
                  </section>
                ))}
                {project.facts && (
                  <dl className={styles.facts}>
                    {project.facts.map((fact) => (
                      <div key={fact.title}>
                        <dt>{fact.title}</dt>
                        <dd>{fact.text}</dd>
                      </div>
                    ))}
                  </dl>
                )}
              </>
            ) : (
              <>
                <p className={styles.description}>{project.description}</p>
                <ul className={styles.tags}>
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                  <li aria-hidden="true">/</li>
                  <li>{project.year}</li>
                </ul>
              </>
            )}
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
                    key={module.src}
                    className={styles.video}
                    style={{
                      aspectRatio: `${module.width} / ${module.height}`,
                    }}
                  >
                    <CaseVideo
                      src={module.src}
                      poster={module.poster}
                      title={`${project.title} interaction video`}
                      eager={index === 0}
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
