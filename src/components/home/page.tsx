"use client";

import Image from "next/image";
import Link from "next/link";

import ContactSection from "../contactSection";
import CursorFlower from "../cursorFlower";
import NavMenu from "../navMenu";
import styles from "./headerHero.module.css";
import Hero from "./hero";

// Temporarily hidden; keep the original cursor available to re-enable.
const SHOW_FLOWER_CURSOR = false;

function SquareArrowUpRightIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="h-4 w-4 text-accent"
    >
      <title>open-in-new</title>
      <path
        d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"
        fill="currentColor"
      />
    </svg>
  );
}

type Project = {
  name: string;
  subname?: string;
  imageSrc?: string;
  nativeVideoSrc?: string;
  behanceLink?: string;
  caseStudyHref?: string;
};

const projects: Project[] = [
  {
    name: "Work Reactor",
    subname: "Startup Networking Platform",
    imageSrc: "/images/wr.png",
    behanceLink:
      "https://www.behance.net/gallery/246318193/Work-Reactor-Startup-Platform-(Web-Mobile)",
  },
  {
    name: "MindScape",
    subname: "Mental Health Support App",
    nativeVideoSrc: "/videos/mindscape.mp4",
    caseStudyHref: "/projects/mindscape",
    behanceLink:
      "https://www.behance.net/gallery/246126405/Mindscape-Mental-Health-App-Design",
  },
  {
    name: "The Groove Avenue",
    subname: "Digital Music Experience",
    nativeVideoSrc: "/videos/music.mp4",
    behanceLink:
      "https://www.behance.net/gallery/246119825/The-Groove-Avenue-Digital-Music-Experience",
  },
  {
    name: "DAFF Closet",
    subname: "Redesign concept for online shop",
    nativeVideoSrc: "/videos/shop.mp4",
    behanceLink: "https://www.behance.net/gallery/211201181/DAFF",
  },
  {
    name: "Bee",
    subname: "Book for Designers",
    nativeVideoSrc: "/videos/bee.mp4",
  },
];

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

function ProjectCard({
  project,
  isFullWidth,
}: {
  project: Project;
  isFullWidth?: boolean;
}) {
  const projectHref = project.caseStudyHref ?? project.behanceLink;
  const isInternal = Boolean(project.caseStudyHref);
  const isClickable = Boolean(projectHref);
  const ProjectLink = isInternal ? Link : "a";

  return (
    <div className={`w-full ${isFullWidth ? "" : "md:w-[calc(50%-0.75rem)]"}`}>
      <div
        className={`group relative aspect-video w-full overflow-hidden rounded-md border border-border bg-surface transition-colors duration-200 hover:border-accent ${
          isClickable ? "cursor-pointer" : ""
        }`}
      >
        {project.imageSrc ? (
          <Image
            src={project.imageSrc}
            alt={`${project.name} preview`}
            fill
            unoptimized
            sizes="(min-width: 768px) 50vw, 100vw"
            className="absolute left-0 top-0 h-full w-full object-cover"
          />
        ) : project.nativeVideoSrc ? (
          <video
            src={project.nativeVideoSrc}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="absolute left-0 top-0 h-full w-full object-cover"
          />
        ) : null}
        {projectHref ? (
          <ProjectLink
            href={projectHref}
            target={isInternal ? undefined : "_blank"}
            rel={isInternal ? undefined : "noreferrer"}
            aria-label={
              isInternal
                ? `View ${project.name} case study`
                : `Open ${project.name} on Behance`
            }
            className="absolute inset-0 z-20"
          />
        ) : null}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-white/30 via-white/0 opacity-0 transition-opacity group-hover:opacity-100" />
      </div>
      <div className="mx-2 mt-3 flex items-start justify-between text-foreground">
        <div className="font-editorial flex flex-col items-start justify-between">
          <h3 className="text-[clamp(1.3rem,4vw,1.3rem)] font-[300] leading-[1] tracking-[-0.03em] text-foreground">
            {project.name}
          </h3>
          <h3 className="font-sans text-base text-secondary">
            {project.subname}
          </h3>
        </div>
        {projectHref ? (
          <ProjectLink
            href={projectHref}
            target={isInternal ? undefined : "_blank"}
            rel={isInternal ? undefined : "noreferrer"}
            aria-label={
              isInternal ? `Read ${project.name} case study` : undefined
            }
            className={`${styles.actionText} inline-flex items-center text-secondary transition-colors hover:text-accent`}
          >
            <span>More</span>
            <SquareArrowUpRightIcon />
          </ProjectLink>
        ) : null}
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <NavMenu />

      <Hero />
      <section
        id="projects"
        className={`${styles.projects} homepage-section scroll-mt-16 bg-background px-4 pb-4 md:px-6 md:pb-8 lg:px-8 lg:pb-24`}
      >
        <div className="mx-auto w-full max-w-[980px]">
          <div
            className={`${styles.sectionHeading} pointer-events-none z-20 mb-6 text-[clamp(1.9rem,4vw,3rem)] leading-[1] tracking-[-0.03em] text-foreground md:mb-8`}
          >
            Selected <span className="text-accent">works</span>
          </div>
          <div className="ml-auto pb-14 text-foreground md:pb-14">
            <div className="flex flex-col gap-2 font-sans text-[clamp(1rem,2.2vw,1.25rem)] leading-relaxed tracking-[-0.01em] text-secondary">
              <p>
                A mix of product, UX, and visual work across different types of
                projects.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} isFullWidth />
            ))}
          </div>
        </div>
      </section>
      <div className={styles.ticker}>
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
      <ContactSection />
      {SHOW_FLOWER_CURSOR && <CursorFlower />}
    </>
  );
}
