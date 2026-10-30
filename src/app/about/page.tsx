import Image from "next/image";
import Link from "next/link";

import site from "@/components/home/dark/darkPortfolio.module.css";
import { portfolioDisplay, portfolioSans } from "@/components/home/dark/fonts";
import SiteFooter from "@/components/home/dark/siteFooter";
import SiteHeader from "@/components/home/dark/siteHeader";

import styles from "./about.module.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About me — Hanna Gomozova",
  description:
    "About Hanna Gomozova, a product designer focused on early-stage products and intuitive user experiences.",
};

const iconProps = {
  width: 44,
  height: 44,
  viewBox: "0 0 44 44",
  fill: "none",
  strokeWidth: 2.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const strengths = [
  {
    title: "Research & product thinking",
    text: "I explore user needs, frame problems, and turn insights into clear design decisions.",
    tags: ["User interviews", "Problem framing", "Product discovery"],
    icon: (
      <svg {...iconProps}>
        <path d="M10 14v24" stroke="var(--red)" />
        <path d="M21 24v14M32 6v32" stroke="currentColor" />
      </svg>
    ),
  },
  {
    title: "UX & interaction design",
    text: "I simplify complex flows and turn ideas into intuitive, usable experiences.",
    tags: ["User flows", "Information architecture", "Prototyping"],
    icon: (
      <svg {...iconProps}>
        <path d="M7 7l26 10-11 3.5L18.5 32z" stroke="var(--red)" />
        <path d="M24 24l11 11" stroke="currentColor" />
      </svg>
    ),
  },
  {
    title: "Visual design & systems",
    text: "I bring ideas to life through polished interfaces, reusable components, and thoughtful details.",
    tags: ["UI design", "Design systems", "Visual direction"],
    icon: (
      <svg {...iconProps}>
        <path d="M22 5l17 9-17 9-17-9z" stroke="var(--red)" />
        <path d="M5 22l17 9 17-9M5 30l17 9 17-9" stroke="currentColor" />
      </svg>
    ),
  },
];

// Matches the resume (public/Hanna-Gomozova-Product-Designer.pdf), newest
// first.
const journey = [
  {
    dates: "2024 – Present",
    role: "Product Designer",
    company: "Independent",
    place: "Bay Area, CA",
    text: "Product design and UX support for SET.DO (AI-powered calendar and task planning) and Unit Post (messaging and outreach), plus responsive websites for independent projects. Designed and built hanna.vision with Next.js and AI-assisted development.",
    tags: ["Consulting", "UX Research", "Web & Mobile", "Design Engineering"],
  },
  {
    dates: "2021 – 2024",
    role: "Product Designer",
    company: "WorkReactor",
    place: "San Francisco, CA",
    text: "Sole designer. Owned research, UX, UI, and the design system for a live SaaS platform combining professional networking, startup collaboration, and project management. Iterated with early users through several product pivots, working closely with the founder and engineers.",
    tags: ["Product Design", "UX Research", "Design Systems", "0 → 1"],
  },
  {
    dates: "2019 – 2021",
    role: "UI/UX Designer",
    company: "ArtLife Studio",
    place: "Kyiv, Ukraine",
    text: "Designed web and mobile interfaces with a focus on visual clarity and usability. Collaborated with design and development teams, presented concepts to clients, and incorporated feedback.",
    tags: ["UI/UX Design", "Client Work", "Web & Mobile", "Collaboration"],
  },
];

const outsidePhotos = [
  {
    src: "/images/about/outside/aerial.webp",
    alt: "Hanna on an aerial hoop",
    label: "Lyra, pole, aerial",
    caption: "Life upside down",
  },
  {
    src: "/images/about/outside/travel.webp",
    alt: "Hanna walking towards a bridge in the mountains",
    label: "Travel",
    caption: "Always exploring",
  },
  {
    src: "/images/about/outside/dog.webp",
    alt: "Hanna holding her poodle at sunset",
    label: "My dog",
    caption: "Rocky, my sidekick",
  },
];

export default function AboutPage() {
  return (
    <main
      className={`${site.site} ${portfolioSans.variable} ${portfolioDisplay.variable}`}
      data-portfolio-version="dark"
    >
      <SiteHeader page="about" />

      <section className={styles.intro} aria-labelledby="about-title">
        <div className={styles.plusHeart} aria-hidden="true" />
        <div className={styles.collage}>
          <div className={styles.calmCard}>
            <p className={styles.calmText}>
              <span>Keep calm</span> <em>and</em> <span>stay curious</span>
            </p>
          </div>
          <figure className={styles.polaroid}>
            <Image
              src="/images/about/portrait-polaroid.webp"
              alt="Portrait of Hanna Gomozova"
              width={900}
              height={900}
              className={styles.polaroidPhoto}
              loading="eager"
              unoptimized
            />
            <figcaption className={styles.polaroidCaption}>
              <strong>Hanna Gomozova</strong>
              <span>
                Product designer{" "}
                <span className={styles.heart} aria-hidden="true">
                  ♥
                </span>
              </span>
            </figcaption>
          </figure>
        </div>
        <h1 id="about-title" className={styles.title}>
          Nice to <em>meet you.</em>
        </h1>
        <p className={styles.lead}>
          I’m a product designer based in the San Francisco Bay Area, with 5+
          years of experience across research, UX, and visual design.
        </p>
        <p className={styles.bio}>
          I love getting involved early, working closely with teams, and shaping
          everything from the big-picture ideas to the smallest interface
          details.
        </p>
        <Link className={styles.resumeLink} href="/resume">
          <span className={styles.resumeLabel}>View resume</span>
          <span className={styles.resumeArrow} aria-hidden="true">
            <span>↗</span>
          </span>
        </Link>
      </section>

      <section className={styles.bring} aria-label="What I bring">
        <ul className={styles.strengths}>
          {strengths.map((item) => (
            <li key={item.title}>
              {item.icon}
              <h2 className={styles.strengthTitle}>{item.title}</h2>
              <p className={styles.strengthText}>{item.text}</p>
              <ul className={styles.strengthTags}>
                {item.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.approach} aria-labelledby="approach-title">
        <div className={styles.plusField} aria-hidden="true" />
        <div className={styles.approachPanel}>
          <div className={styles.approachBody}>
            <h2 id="approach-title" className={styles.approachTitle}>
              The best work starts{" "}
              <span className={styles.approachTail}>
                with a <em>conversation</em>
              </span>
            </h2>
            <p className={styles.approachText}>
              I enjoy working closely with engineers, product teams, and
              founders&nbsp;— especially when ideas are still evolving. I ask
              questions, explore different approaches, and use prototypes to
              make ideas easier to discuss and&nbsp;improve.
            </p>
          </div>
          <ol className={styles.journey} aria-label="My journey">
            {journey.map((job) => (
              <li key={job.company}>
                <p className={styles.journeyDates}>{job.dates}</p>
                <div className={styles.journeyBody}>
                  <h3 className={styles.journeyRole}>{job.role}</h3>
                  <p className={styles.journeyCompany}>
                    {job.company} <span aria-hidden="true">·</span> {job.place}
                  </p>
                  <p className={styles.journeyText}>{job.text}</p>
                  <ul className={styles.journeyTags}>
                    {job.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={styles.outside} aria-labelledby="outside-title">
        <div className={site.sectionIntro}>
          <h2 id="outside-title" className={site.sectionHeading}>
            Outside the <em>screen</em>
          </h2>
          <span
            className={`${site.sectionRule} ${styles.darkRule}`}
            aria-hidden="true"
          />
          <p className={`${site.sectionDescription} ${styles.outsideText}`}>
            When I’m not designing, I’m usually upside down, exploring somewhere
            new, or hanging out with my&nbsp;dog.
          </p>
        </div>
        <ul className={styles.photos}>
          {outsidePhotos.map((photo) => (
            <li key={photo.src} className={styles.photoSlot}>
              <figure className={styles.snap}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={1000}
                  height={1000}
                  sizes="(max-width: 759px) 80vw, 400px"
                  className={styles.polaroidPhoto}
                  unoptimized
                />
                <figcaption className={styles.snapCaption}>
                  <span>{photo.label}</span>
                  <strong>{photo.caption}</strong>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </section>

      <SiteFooter />
    </main>
  );
}
