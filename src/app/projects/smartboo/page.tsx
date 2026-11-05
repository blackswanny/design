import { smartboo } from "@/components/building/smartboo";
import site from "@/components/home/dark/darkPortfolio.module.css";
import { portfolioDisplay, portfolioSans } from "@/components/home/dark/fonts";
import SiteFooter from "@/components/home/dark/siteFooter";
import SiteHeader from "@/components/home/dark/siteHeader";

import { ScreenShot } from "./phones";
import styles from "./smartboo.module.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SmartBoo — voice-first pet care | Hanna Gomozova",
  description:
    "SmartBoo, a voice-first care log for homes with more than one pet. Product design by Hanna Gomozova, built with Claude Code. Case study in progress.",
};

const facts = [
  { label: "Role", value: "Design and build" },
  { label: "Timeline", value: "Nov 2026 – now" },
  { label: "Tools", value: "Figma, Claude Code" },
  { label: "Status", value: "Beta in December" },
];

const stats = [
  { value: "2,900", label: "App Store reviews read and tagged" },
  {
    value: "~40",
    label: "pet apps compared, from vet portals to reptile trackers",
  },
  { value: "4", label: "weeks from first research to a working beta" },
];

const screens = {
  boo: "/images/projects/smartboo/today-boo.webp",
  due: "/images/projects/smartboo/today-due.webp",
  done: "/images/projects/smartboo/today-done.webp",
};

const flow = [
  {
    step: "01",
    title: "Say it",
    text: "Tap Boo and talk. One sentence can cover several pets and events.",
    src: screens.boo,
    alt: "Boo, the voice assistant, on the Today screen",
  },
  {
    step: "02",
    title: "See what’s next",
    text: "Due today puts the one task that matters first. Mark it done in one tap.",
    src: screens.due,
    alt: "Due today with the next task and a Mark done button",
  },
  {
    step: "03",
    title: "Everyone sees it",
    text: "Done shows who did what and when, for the whole family.",
    src: screens.done,
    alt: "Your pack and the Done list with who did each task",
  },
];

function SurveyLink({ label }: { label: string }) {
  return (
    <a
      className={styles.surveyButton}
      href={smartboo.surveyUrl}
      target="_blank"
      rel="noreferrer"
    >
      {label}
    </a>
  );
}

export default function SmartBooPage() {
  return (
    <main
      className={`${site.site} ${portfolioSans.variable} ${portfolioDisplay.variable} ${styles.page}`}
    >
      <SiteHeader page="project" />

      <div className={styles.sheet}>
        {/* Cover: name, one line, facts, and the product itself. */}
        <section className={styles.hero} aria-labelledby="smartboo-title">
          <div className={styles.heroText}>
            <p className={styles.kicker}>
              <span className={styles.liveDot} aria-hidden="true" />
              Case study in progress · Early prototype
            </p>
            <h1 id="smartboo-title" className={styles.title}>
              <span className={styles.smart}>smart</span>
              <span className={styles.boo}>boo</span>
            </h1>
            <p className={styles.tagline}>
              A voice-first care log for homes with more than one pet.{" "}
              <em>Say it once, and everyone knows.</em>
            </p>
            <div className={styles.heroActions}>
              <SurveyLink label="Own a pet? Take the survey" />
            </div>
          </div>
          <div className={styles.heroStage}>
            <ScreenShot src={screens.due} alt="" tilt="left" />
            <ScreenShot
              src={screens.boo}
              alt="SmartBoo Today screen: Boo, the pet assistant, asks what happened with the pack today"
            />
            <ScreenShot src={screens.done} alt="" tilt="right" />
          </div>
          <dl className={styles.facts}>
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Problem: one statement, three numbers. */}
        <section className={styles.split} aria-labelledby="problem-title">
          <h2 id="problem-title" className={styles.label}>
            The problem
          </h2>
          <div>
            <p className={styles.statement}>
              In a home with a dog, two cats and two people, the same questions
              come up every day: did you feed the cat? Did Rocky get his pill?
              The answers live in one person’s head.
            </p>
            <p className={styles.body}>
              Pet apps ask owners to fill in forms, one pet and one event at a
              time. People stop logging within days, and the record that matters
              at the vet is missing.
            </p>
            <ul className={styles.stats}>
              {stats.map((stat) => (
                <li key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Research: three insights. */}
        <section className={styles.split} aria-labelledby="insights-title">
          <h2 id="insights-title" className={styles.label}>
            What research showed
          </h2>
          <ol className={styles.insights}>
            {smartboo.insights.map((insight, i) => (
              <li key={insight.title}>
                <span className={styles.index}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3>{insight.title}</h3>
                <p>{insight.text}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* The core loop on three screens. */}
        <section className={styles.flowSection} aria-labelledby="flow-title">
          <div className={styles.flowHead}>
            <h2 id="flow-title" className={styles.sectionTitle}>
              Less tracking. <em>More caring.</em>
            </h2>
            <p className={styles.body}>
              The whole product is one loop: say what happened, see what’s next,
              and the home’s shared Today updates for everyone.
            </p>
          </div>
          <ol className={styles.flow}>
            {flow.map(({ step, title, text, src, alt }) => (
              <li key={step}>
                <div className={styles.flowStage}>
                  <ScreenShot src={src} alt={alt} />
                </div>
                <span className={styles.index}>{step}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Edge cases: what happens when things are unclear. */}
        <section className={styles.split} aria-labelledby="edge-title">
          <h2 id="edge-title" className={styles.label}>
            Edge cases
          </h2>
          <ul className={styles.principles}>
            {smartboo.edgeCases.map((item) => (
              <li key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Principles. */}
        <section className={styles.split} aria-labelledby="principles-title">
          <h2 id="principles-title" className={styles.label}>
            Design principles
          </h2>
          <ul className={styles.principles}>
            {smartboo.principles.map((item) => (
              <li key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.help} aria-labelledby="help-title">
          <div>
            <h2 id="help-title" className={styles.helpTitle}>
              Own a pet? <em>Help shape it.</em>
            </h2>
            <p className={styles.helpText}>
              A short survey about how you care for your pets. Every answer goes
              straight into the design.
            </p>
          </div>
          <SurveyLink label="Take the survey" />
        </section>
      </div>

      <SiteFooter />
    </main>
  );
}
