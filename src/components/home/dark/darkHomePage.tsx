import Image from "next/image";
import Link from "next/link";

import styles from "./darkPortfolio.module.css";
import { portfolioDisplay, portfolioSans } from "./fonts";
import HeroCover from "./heroCover";
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

const socialIcon = {
  width: 28,
  height: 28,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const footerSocials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/hanna-gomozova/",
    icon: (
      <svg {...socialIcon}>
        <rect x="2.5" y="2.5" width="19" height="19" rx="4" />
        <path d="M7.75 10.75V17M11.5 17v-6.25M11.5 13.5c0-1.6 1-2.9 2.6-2.9 1.5 0 2.4 1 2.4 2.8V17" />
        <circle cx="7.75" cy="7.4" r="0.6" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Behance",
    href: "https://www.behance.net/hanna_gomozova",
    icon: (
      <span className={styles.behanceMark} aria-hidden="true">
        Bē
      </span>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/hanna_uiux",
    icon: (
      <svg {...socialIcon}>
        <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
        <circle cx="12" cy="12" r="4.25" />
        <circle cx="17.4" cy="6.6" r="0.6" fill="currentColor" />
      </svg>
    ),
  },
];

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
          Open to product design opportunities, early-stage ideas, and creative
          collaborations.
        </p>
        <CopyEmail
          email="anna.mayskay@gmail.com"
          className={styles.emailBlock}
        />
        <div className={styles.contactBottom}>
          <nav className={styles.socials} aria-label="Social profiles">
            {footerSocials.map(({ name, href, icon }) => (
              <a key={name} href={href} target="_blank" rel="noreferrer">
                {icon}
                <span className={styles.socialName}>{name}</span>
                <span className={styles.socialArrow} aria-hidden="true">
                  ↗
                </span>
              </a>
            ))}
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
