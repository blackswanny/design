"use client";

import ContactSection from "../contactSection";
import CursorFlower from "../cursorFlower";
import NavMenu from "../navMenu";
import styles from "./headerHero.module.css";
import Hero from "./hero";
import ProjectGallery from "./projectGallery";
import ProjectHighlights from "./projectHighlights";

// Temporarily hidden; keep the original cursor available to re-enable.
const SHOW_FLOWER_CURSOR = false;

const skills = [
  "Product Design",
  "UX Research",
  "Design Systems",
  "Mobile iOS & Android",
  "B2B SaaS",
  "Prototyping",
  "Figma",
  "A/B Testing",
  "Startup Products",
  "Visual Design",
  "Information Architecture",
  "Dashboard Design",
  "End-to-end Design",
] as const;

export default function HomePage() {
  return (
    <>
      <NavMenu />

      <Hero />
      <ProjectHighlights />
      <section
        id="projects"
        className={`${styles.projects} homepage-section scroll-mt-16 bg-background`}
      >
        <div className={styles.projectsInner}>
          <h2
            className={`${styles.sectionHeading} ${styles.worksHeading} mb-4`}
          >
            Selected <em className="text-accent">works</em>
          </h2>
          <div className="ml-auto pb-14 text-foreground md:pb-14">
            <p className={styles.worksDescription}>
              A selection of digital products and creative experiences, each
              shaped by a different idea, challenge, and purpose.
            </p>
          </div>
          <ProjectGallery />
        </div>
      </section>
      <div className={styles.ticker}>
        <div className={styles.tickerFrame}>
          <div
            className={styles.tickerViewport}
            role="region"
            aria-label="Design skills and tools"
            tabIndex={0}
          >
            <div className={styles.tickerTrack}>
              {[0, 1].map((copy) => (
                <ul
                  key={copy}
                  className={`${styles.tickerGroup} ${copy === 1 ? styles.tickerDuplicate : ""}`}
                  aria-hidden={copy === 1 ? true : undefined}
                >
                  {skills.map((skill) => (
                    <li key={skill} className={styles.tickerItem}>
                      <span>{skill}</span>
                      <svg
                        className={styles.tickerSeparator}
                        width="6"
                        height="6"
                        viewBox="0 0 8 8"
                        aria-hidden="true"
                      >
                        <path d="M4 0C4.5 2.25 5.75 3.5 8 4C5.75 4.5 4.5 5.75 4 8C3.5 5.75 2.25 4.5 0 4C2.25 3.5 3.5 2.25 4 0Z" />
                      </svg>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
      <ContactSection />
      {SHOW_FLOWER_CURSOR && <CursorFlower />}
    </>
  );
}
