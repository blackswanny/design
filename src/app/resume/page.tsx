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
];

const skills = [
  "Product Design",
  "UX/UI Design",
  "User Flows",
  "Information Architecture",
  "Wireframing",
  "High-Fidelity UI",
  "Interactive Prototyping",
  "Interaction Design",
  "Responsive Design",
  "Design Systems",
  "Usability Testing",
  "Developer Handoff",
  "Figma",
  "Adobe Creative Suite",
];

const experience = [
  {
    role: "Freelance Product Designer",
    company: "Independent",
    place: "Bay Area, CA",
    dates: "2024 – Present",
    points: [
      "Provided occasional project-based design support for SET.DO, an AI calendar and task-planning product, and Unit Post, a messaging/outreach product.",
      "Designed and implemented hanna.vision, a responsive portfolio website, using AI-assisted development workflows; final refinements in progress.",
      "Designed various websites and digital experiences, including responsive layouts, user interfaces, and web and mobile app concepts; continued professional training in product design and design engineering.",
    ],
  },
  {
    role: "Sole Product Designer",
    company: "WorkReactor",
    place: "San Francisco, CA",
    dates: "Feb 2021 – 2024",
    points: [
      "Owned end-to-end product design for a SaaS platform combining professional networking, startup collaboration, and project management.",
      "Designed an estimated 100+ unique high-fidelity screens across multiple product iterations as business priorities and feature requirements evolved.",
      "Created and maintained a comprehensive design system of reusable components, UI patterns, and consistent visual standards.",
      "Developed user flows, wireframes, and interactive prototypes for profiles, networking, project collaboration, tasks, and milestones.",
      "Partnered with the founder and engineering team on product decisions, feature planning, design reviews, and developer handoff.",
      "Completed a comprehensive redesign in 2024; implementation was paused following engineering team changes.",
    ],
  },
  {
    role: "UI/UX Designer",
    company: "ArtLife Studio",
    place: "Kyiv, Ukraine",
    dates: "Nov 2019 – Feb 2021",
    points: [
      "Designed web and mobile interfaces, emphasizing visual clarity, usability, and consistent UI patterns.",
      "Collaborated with design and development teams; prepared and presented project concepts to clients and incorporated feedback.",
    ],
  },
];

const education = [
  {
    title: "Bachelor’s Degree in Mathematics",
    school: "National Pedagogical Dragomanov University",
    year: "",
  },
  { title: "Design Engineering Course", school: "In progress", year: "2026" },
  { title: "Mobile App Design", school: "Projector Institute", year: "2023" },
  { title: "Design Pro", school: "Uprock School", year: "2021" },
  { title: "UI/UX Design", school: "DAN.IT", year: "2019" },
  { title: "Web & Mobile UI/UX", school: "Mobios School", year: "2019" },
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
            <p className={styles.roles}>
              Product Designer · UI/UX Designer · Design Systems Designer
            </p>
            <p className={styles.location}>Bay Area, CA</p>
            <ul className={styles.links}>
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={
                      link.href.startsWith("mailto:") ? undefined : "_blank"
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
              Product Designer with 5+ years of experience creating web and
              mobile interfaces for early-stage digital products. Sole designer
              for a complex SaaS platform combining professional networking and
              project management; experienced in end-to-end UX/UI, iterative
              product development, design systems, prototyping, and
              collaboration with founders and engineers. Building skills in
              design engineering and AI-assisted development.
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
            <ul className={styles.skills}>
              {skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </section>

          <section className={styles.block}>
            <h3 className={styles.blockTitle}>Selected project</h3>
            <div className={styles.row}>
              <div>
                <p className={styles.rowTitle}>
                  Hanna Vision — Portfolio Website
                </p>
                <p className={styles.rowText}>
                  Responsive site designed and implemented with AI-assisted
                  development tools.
                </p>
              </div>
              <p className={styles.jobDates}>2026</p>
            </div>
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
