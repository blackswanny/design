import site from "@/components/home/dark/darkPortfolio.module.css";
import { portfolioDisplay, portfolioSans } from "@/components/home/dark/fonts";
import SiteFooter from "@/components/home/dark/siteFooter";
import SiteHeader from "@/components/home/dark/siteHeader";

import styles from "./resume.module.css";
import about from "../about/about.module.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume — Hanna Gomozova",
  description:
    "Resume of Hanna Gomozova, a product designer with 5+ years of experience across web and mobile products.",
};

// The web version of public/Hanna-Gomozova-Product-Designer.pdf; keep the
// two in sync.
const resumePdf = "/Hanna-Gomozova-Product-Designer.pdf";

const links = [
  { label: "hanna.vision", href: "https://hanna.vision" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/hanna-gomozova/",
  },
  { label: "Behance", href: "https://www.behance.net/hanna_gomozova" },
  { label: "anna.mayskay@gmail.com", href: "mailto:anna.mayskay@gmail.com" },
  { label: "925-966-8197", href: "tel:+19259668197" },
];

const skills = [
  {
    group: "Design",
    items: [
      "Product Design",
      "UX Research",
      "Usability Testing",
      "User Flows",
      "Information Architecture",
      "Wireframing",
      "Prototyping",
      "Interaction Design",
      "Design Systems",
      "Developer Handoff",
    ],
  },
  {
    group: "Tools",
    items: [
      "Figma",
      "Adobe Creative Suite",
      "Next.js",
      "AI-assisted development",
    ],
  },
];

const experience = [
  {
    role: "Product Designer",
    company: "Independent",
    place: "Bay Area, CA",
    dates: "2024 – Present",
    points: [
      "Provide product design and UX support for SET.DO, an AI-powered calendar and task-planning app, and Unit Post, a messaging and outreach platform.",
      "Design responsive websites and digital experiences across a variety of independent projects.",
      "Designed and built hanna.vision, a responsive portfolio website using Next.js and AI-assisted development.",
    ],
  },
  {
    role: "Product Designer",
    company: "WorkReactor",
    place: "San Francisco, CA",
    dates: "2021 – 2024",
    points: [
      "Sole designer on a SaaS platform combining professional networking, startup collaboration, and project management, owning research, UX, UI, and developer handoff.",
      "Led user research and continuous iteration on a live product with early users, adapting the experience through several shifts in product direction.",
      "Designed 100+ high-fidelity screens, from user flows and prototypes for profiles, networking, projects, tasks, and milestones to production-ready UI.",
      "Built and maintained the design system: reusable components, UI patterns, and visual standards shared with engineering.",
      "Partnered with the founder and engineers on product decisions, feature planning, and design reviews.",
      "Led a full product redesign in 2024 based on user feedback and the new product direction.",
    ],
  },
  {
    role: "UI/UX Designer",
    company: "ArtLife Studio",
    place: "Kyiv, Ukraine",
    dates: "2019 – 2021",
    points: [
      "Designed web and mobile interfaces for client projects, focusing on clarity, usability, and consistent UI patterns.",
      "Presented concepts to clients and iterated with designers and developers based on feedback.",
    ],
  },
];

const education = [
  {
    title: "B.S. in Mathematics",
    school: "National Pedagogical Dragomanov University",
    year: "",
  },
  { title: "Mobile App Design", school: "Projector Institute", year: "2023" },
  { title: "UI/UX Design", school: "DAN.IT", year: "2019" },
];

export default function ResumePage() {
  return (
    <main
      className={`${site.site} ${portfolioSans.variable} ${portfolioDisplay.variable}`}
      data-portfolio-version="dark"
    >
      <SiteHeader page="resume" />

      <section className={styles.resume} aria-labelledby="resume-title">
        <div className={styles.plusField} aria-hidden="true" />
        <h1 id="resume-title" className={styles.title}>
          My <em>resume</em>
        </h1>
        <a
          className={about.resumeLink}
          href={resumePdf}
          download="Hanna Gomozova_Product Designer.pdf"
        >
          <span className={about.resumeLabel}>Download resume</span>
          <span className={about.resumeArrow} aria-hidden="true">
            <span>↓</span>
          </span>
        </a>

        <article className={styles.sheet}>
          <header className={styles.sheetHeader}>
            <h2 className={styles.name}>Hanna Gomozova</h2>
            <p className={styles.roles}>Product Designer</p>
            <p className={styles.location}>Bay Area, CA</p>
            <ul className={styles.links}>
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={
                      /^(mailto|tel):/.test(link.href) ? undefined : "_blank"
                    }
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </header>

          <section className={styles.block}>
            <h3 className={styles.blockTitle}>Summary</h3>
            <p className={styles.summary}>
              Product Designer with 5+ years of experience designing web and
              mobile products from 0 to 1. As the sole designer at WorkReactor,
              owned research, UX, UI, and the design system for a live SaaS
              platform, iterating through several product pivots with the
              founder and engineers. Currently provides product design and UX
              support for early-stage products and builds in code with
              AI-assisted development.
            </p>
          </section>

          <section className={styles.block}>
            <h3 className={styles.blockTitle}>Experience</h3>
            <ol className={styles.jobs}>
              {experience.map((job) => (
                <li key={job.company}>
                  <div className={styles.jobHead}>
                    <div>
                      <h4 className={styles.jobRole}>{job.role}</h4>
                      <p className={styles.jobCompany}>
                        {job.company} <span aria-hidden="true">·</span>{" "}
                        {job.place}
                      </p>
                    </div>
                    <p className={styles.jobDates}>{job.dates}</p>
                  </div>
                  <ul className={styles.points}>
                    {job.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </section>

          <section className={styles.block}>
            <h3 className={styles.blockTitle}>Skills</h3>
            {skills.map(({ group, items }) => (
              <div key={group} className={styles.skillGroup}>
                <p className={styles.skillLabel}>{group}</p>
                <ul className={styles.skills}>
                  {items.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          <section className={styles.block}>
            <h3 className={styles.blockTitle}>Education</h3>
            <ul className={styles.education}>
              {education.map((item) => (
                <li key={item.title} className={styles.row}>
                  <div>
                    <p className={styles.rowTitle}>{item.title}</p>
                    <p className={styles.rowText}>{item.school}</p>
                  </div>
                  {item.year && <p className={styles.jobDates}>{item.year}</p>}
                </li>
              ))}
            </ul>
          </section>
        </article>
      </section>

      <SiteFooter />
    </main>
  );
}
