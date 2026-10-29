import Image from "next/image";
import Link from "next/link";

import styles from "./darkPortfolio.module.css";
import { portfolioDisplay, portfolioSans } from "./fonts";
import HeroCover from "./heroCover";
import ProjectRibbon from "./projectRibbon";
import { portfolioProjects } from "./projects";
import SiteFooter from "./siteFooter";
import SiteHeader from "./siteHeader";

import type { ReactNode } from "react";

// Bee stays in the ribbon (its frames are baked into the atlas) but is not
// listed in Selected works.
const selectedWorks = portfolioProjects.filter(
  (project) => project.id !== "bee",
);

function ProjectLink({
  href,
  label,
  className,
  children,
}: {
  href: string;
  label: string;
  className: string;
  children: ReactNode;
}) {
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className} aria-label={label}>
        {children}
      </Link>
    );
  }
  return (
    <a
      href={href}
      className={className}
      aria-label={label}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}

export default function DarkHomePage() {
  return (
    <main
      className={`${styles.site} ${portfolioSans.variable} ${portfolioDisplay.variable}`}
      data-portfolio-version="dark"
    >
      <SiteHeader />
      <section
        id="home"
        className={styles.hero}
        data-ribbon-hero
        aria-labelledby="hero-title"
      >
        <div className={styles.heroTop}>
          <div className={styles.headerSpacer} aria-hidden="true" />
          <div className={styles.intro}>
            <div className={styles.introGreeting}>
              <Image
                src="/images/hero-avatar-lossless.png"
                alt="Portrait of Hanna Gomozova"
                width={42}
                height={42}
                className={styles.profilePhoto}
                loading="eager"
                unoptimized
              />
              <span>Hi, I’m Hanna</span>
            </div>
            <p className={styles.introText}>
              <span className={styles.introLine}>
                From the first idea to a working product —
              </span>{" "}
              <span className={styles.introLine}>
                combining research, product thinking, and
              </span>{" "}
              <span className={styles.introLine}>intuitive design.</span>
            </p>
            {/* Phones only: the header's profile links move here. */}
            <p className={styles.introSocials}>
              <a
                href="https://www.linkedin.com/in/hanna-gomozova/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <span aria-hidden="true">/</span>
              <a
                href="https://www.behance.net/hanna_gomozova"
                target="_blank"
                rel="noopener noreferrer"
              >
                Behance
              </a>
            </p>
          </div>
        </div>
        <ProjectRibbon />
        <HeroCover />
        <h1 id="hero-title" className={styles.heroTitle}>
          <span>
            I design <strong>products</strong>
          </span>
          <span>
            that{" "}
            <span className={styles.heroAccent}>
              <em>feel right</em>
            </span>{" "}
            before
          </span>
          <span>
            you know <strong>why.</strong>
          </span>
        </h1>
      </section>

      <section
        id="projects"
        className={styles.projects}
        aria-labelledby="work-title"
      >
        <div className={styles.sectionIntro}>
          <h2 id="work-title" className={styles.sectionHeading}>
            Selected <em>Work</em>
          </h2>
          <span className={styles.sectionRule} aria-hidden="true" />
          <p className={styles.sectionDescription}>
            Digital products, thoughtful experiences, and creative exploration.
          </p>
        </div>
        <div className={styles.projectGrid}>
          {selectedWorks.map((project) => {
            const image = (
              <Image
                src={project.image}
                alt={`${project.name} — original project artwork`}
                width={project.width}
                height={project.height}
                sizes="(max-width: 759px) calc(100vw - 40px), 50vw"
                unoptimized
              />
            );
            return (
              <article
                key={project.id}
                className={styles.projectCard}
                aria-labelledby={`${project.id}-heading`}
                data-project={project.id}
              >
                {project.href ? (
                  <ProjectLink
                    href={project.href}
                    label={`Open ${project.name} project`}
                    className={styles.projectStage}
                  >
                    {image}
                  </ProjectLink>
                ) : (
                  <div className={styles.projectStage}>{image}</div>
                )}
                <div
                  className={styles.projectTitle}
                  data-caps={project.name === project.name.toUpperCase()}
                >
                  <h3
                    id={`${project.id}-heading`}
                    className={styles.projectName}
                  >
                    {project.name}
                  </h3>
                  {project.href ? (
                    <ProjectLink
                      href={project.href}
                      label={`View ${project.name} case study`}
                      className={styles.projectOpen}
                    >
                      <span aria-hidden="true">↗</span>
                    </ProjectLink>
                  ) : (
                    <span className={styles.previewLabel}>Preview</span>
                  )}
                </div>
                <p className={styles.projectSubtitle}>{project.subtitle}</p>
                {project.tags.length > 0 && (
                  <ul className={styles.projectTags}>
                    {project.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                )}
              </article>
            );
          })}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
