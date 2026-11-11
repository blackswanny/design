import site from "@/components/home/dark/darkPortfolio.module.css";
import { portfolioDisplay, portfolioSans } from "@/components/home/dark/fonts";
import SiteFooter from "@/components/home/dark/siteFooter";
import SiteHeader from "@/components/home/dark/siteHeader";

import styles from "./resume.module.css";
import about from "../about/about.module.css";
import { pageOpenGraph } from "../pageOpenGraph";

import type { Metadata } from "next";

const title = "Resume — Hanna Gomozova";
const description =
  "Resume of Hanna Gomozova, a product designer with 5+ years of experience across web and mobile products.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: pageOpenGraph("/resume", title, description),
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
      "Claude Code",
      "Next.js",
      "React",
      "AI-assisted development",
    ],
  },
];

const experience = [
  {
    role: "Product Designer → Design Engineer",
    company: "SmartBoo (personal project)",
    place: "Bay Area, CA",
    dates: "2026 – Present",
    points: [
      "Own SmartBoo end to end, from research and product strategy to UX, UI, and the design system: an AI assistant that files vet papers and voice notes into each pet’s records.",
      "Led mixed-methods research to define the MVP: an owner survey (~50 responses), 5 owner interviews (ongoing), and ~2,900 App Store reviews across ~40 competing pet apps.",
      "Pivoted the concept from a daily voice diary to paper-first capture after research showed most owners touch pet records only a few times a year.",
      "Defined trust rules for the AI: it asks instead of guessing between pets, saves low-stakes logs with Undo, and sends meds, vaccines, and symptoms through a review card.",
      "Learning design engineering by building the iOS prototype with Claude Code from Figma Variables tokens; set an activation goal of 60% of new users saving a first record in session one. TestFlight demo on December 2.",
    ],
  },
  {
    role: "Product Designer",
    company: "Independent",
    place: "Bay Area, CA",
    dates: "2024 – Present",
    points: [
      "Leading a full redesign of SET.DO, an AI-powered calendar and task-planning app, as its incoming owner.",
      "Advise Unit Post, a messaging and outreach platform, on UX and UI details.",
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
      "Sole designer for three years on a live platform for startup teams, owning research, UX, UI, the design system, and developer handoff.",
      "Redesigned core flows through four concept pivots with the CEO and engineers: social network → network + team workspace → network only → a profile-as-a-website “startup card”.",
      "Interviewed 32 founders, engineers, and investors to shape product direction and feature priorities.",
      "Ran lightweight A/B tests with small user groups to pick the clearest flows, with a focus on sign-up and sign-in.",
      "Designed 100+ production-ready screens and built the design system (reusable components, UI patterns, visual standards) shared with engineering.",
      "After the company wound down, completed a self-initiated end-to-end redesign showing the product’s intended vision, grounded in that research.",
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
              Product Designer with 5+ years of experience taking web and
              mobile products from 0 to 1. As the sole designer at WorkReactor,
              owned research, UX, UI, and the design system for a live SaaS
              platform through several product pivots. Now focused on SmartBoo,
              my own AI app, from owner research to clear decisions, flows, and
              edge cases, while learning design engineering by building its iOS
              prototype with Claude Code.
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
