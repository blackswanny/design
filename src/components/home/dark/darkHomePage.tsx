import Image from "next/image";
import Link from "next/link";

import styles from "./darkPortfolio.module.css";
import { portfolioDisplay, portfolioSans } from "./fonts";
import ProjectRibbon from "./projectRibbon";
import { portfolioProjects } from "./projects";
import SiteHeader from "./siteHeader";
import CopyEmail from "../../copyEmail";

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
              <span>Hi there, I’m Hanna</span>
            </div>
            <p className={styles.introText}>
              <span className={styles.introLine}>
                From the first idea to a <strong>working product</strong> —
              </span>{" "}
              <span className={styles.introLine}>
                connecting user needs, product direction, and
              </span>{" "}
              <span className={styles.introLine}>intuitive experiences.</span>
            </p>
          </div>
        </div>
        <ProjectRibbon />
        <h1 id="hero-title" className={styles.heroTitle}>
          <span>
            I design <strong>products</strong>
          </span>
          <span>
            that <em>feel</em> right before
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
            Selected <em>works</em>
          </h2>
          <p className={styles.sectionDescription}>
            A selection of digital products and creative experiences, each
            shaped by a different idea, challenge, and purpose.
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
                <div className={styles.projectTitle}>
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
                  <div className={styles.projectTags}>
                    {project.tags.join(" · ")}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>

      <footer
        id="contacts"
        className={styles.contact}
        aria-labelledby="contact-heading"
      >
        <span className={styles.footerNote}>
          Hanna Gomozova / Product Designer
        </span>
        <h2 id="contact-heading" className={styles.contactTitle}>
          Let’s <em>talk</em>
        </h2>
        <p className={styles.contactDescription}>
          Open to thoughtful product work, early-stage ideas, and design
          collaborations.
        </p>
        <CopyEmail
          email="anna.mayskay@gmail.com"
          className={styles.emailBlock}
        />
        <div className={styles.contactBottom}>
          <nav className={styles.socials} aria-label="Social profiles">
            <a
              href="https://www.behance.net/hanna_gomozova"
              target="_blank"
              rel="noreferrer"
            >
              Behance ↗
            </a>
            <a
              href="https://www.linkedin.com/in/hanna-gomozova/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://www.instagram.com/hanna_uiux"
              target="_blank"
              rel="noreferrer"
            >
              Instagram ↗
            </a>
          </nav>
          <div className={styles.credits}>
            <span>© 2026 Hanna Gomozova</span>
            <Link href="/light-version" className={styles.preservedLink}>
              Light version ↗
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
