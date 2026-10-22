"use client";

import ContactSection from "../contactSection";
import CursorFlower from "../cursorFlower";
import NavMenu from "../navMenu";
import styles from "./headerHero.module.css";
import Hero from "./hero";
import ProjectGallery from "./projectGallery";
import ProjectHighlights from "./projectHighlights";
import SkillsStrip from "./skillsStrip";

// Preserved light homepage, including the latest local edits before migration.
const SHOW_FLOWER_CURSOR = false;

export default function LightHomePage({
  homePath = "/light-version",
}: Readonly<{ homePath?: string }> = {}) {
  return (
    <>
      <NavMenu homePath={homePath} />
      <Hero />
      <ProjectHighlights />
      <section
        id="projects"
        className={`${styles.projects} homepage-section scroll-mt-16`}
      >
        <div className={styles.projectsInner}>
          <h2
            className={`${styles.sectionHeading} ${styles.worksHeading} mb-4`}
          >
            Selected <em className="text-accent">works</em>
          </h2>
          <div className={styles.worksIntro}>
            <p className={styles.worksDescription}>
              A selection of digital products and creative experiences, each
              shaped by a different idea, challenge, and purpose.
            </p>
          </div>
          <ProjectGallery />
        </div>
      </section>
      <div className={styles.ticker}>
        <SkillsStrip />
      </div>
      <ContactSection />
      {SHOW_FLOWER_CURSOR && <CursorFlower />}
    </>
  );
}
