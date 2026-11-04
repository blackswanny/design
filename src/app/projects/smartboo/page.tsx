import ArrowIcon from "@/components/arrowIcon";
import BuildLog from "@/components/building/buildLog";
import { smartboo } from "@/components/building/smartboo";
import site from "@/components/home/dark/darkPortfolio.module.css";
import { portfolioDisplay, portfolioSans } from "@/components/home/dark/fonts";
import SiteFooter from "@/components/home/dark/siteFooter";
import SiteHeader from "@/components/home/dark/siteHeader";

import styles from "./smartboo.module.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SmartBoo — building in public | Hanna Gomozova",
  description:
    "SmartBoo, a voice care log for every pet in the house. Designed by Hanna Gomozova and built with Claude Code, in public.",
};

export default function SmartBooPage() {
  return (
    <main
      className={`${site.site} ${portfolioSans.variable} ${portfolioDisplay.variable} ${styles.page}`}
    >
      <SiteHeader page="project" />

      <div className={styles.sheet}>
        <section className={styles.hero} aria-labelledby="smartboo-title">
          <p className={styles.kicker}>
            Currently building · Design Engineer Pro course project
          </p>
          <h1 id="smartboo-title" className={styles.title}>
            {smartboo.name}
          </h1>
          <p className={styles.tagline}>
            Say it once. <em>Your whole household knows.</em>
          </p>
          <p className={styles.lead}>{smartboo.summary}</p>
          <div className={styles.heroActions}>
            <a
              className={styles.surveyButton}
              href={smartboo.surveyUrl}
              target="_blank"
              rel="noreferrer"
            >
              Own a pet? Take the survey{" "}
              <span aria-hidden="true">
                <ArrowIcon />
              </span>
            </a>
          </div>
          <dl className={styles.facts}>
            <div>
              <dt>Role</dt>
              <dd>Product design, design engineering with Claude Code</dd>
            </div>
            <div>
              <dt>Status</dt>
              <dd>In progress, beta in December 2026</dd>
            </div>
            <div>
              <dt>Platform</dt>
              <dd>Web app for iPhone</dd>
            </div>
            <div>
              <dt>Stack</dt>
              <dd>{smartboo.stack.join(", ")}</dd>
            </div>
          </dl>
        </section>

        <section className={styles.block} aria-labelledby="log-title">
          <div className={styles.blockHead}>
            <h2 id="log-title" className={styles.blockTitle}>
              Where it&apos;s <em>at</em>
            </h2>
            <p className={styles.blockText}>
              From research to a beta that real families use at home.
            </p>
          </div>
          <div className={styles.panel}>
            <BuildLog steps={smartboo.log} />
          </div>
        </section>

        <section className={styles.block} aria-labelledby="why-title">
          <div className={styles.blockHead}>
            <h2 id="why-title" className={styles.blockTitle}>
              What <em>owners</em> told us
            </h2>
            <p className={styles.blockText}>
              The loudest pains from about 2,900 App Store reviews of pet apps.
            </p>
          </div>
          <ol className={styles.pains}>
            {smartboo.pains.map((pain, i) => (
              <li key={pain}>
                <span className={styles.painIndex}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                {pain}
              </li>
            ))}
          </ol>
        </section>

        <section className={styles.block} aria-labelledby="idea-title">
          <div className={styles.blockHead}>
            <h2 id="idea-title" className={styles.blockTitle}>
              The <em>idea</em>
            </h2>
            <p className={styles.blockText}>
              A shared care memory for the home, for any animal, from a dog to a
              fish tank.
            </p>
          </div>
          <ul className={styles.pillars}>
            {smartboo.pillars.map((pillar) => (
              <li key={pillar.title}>
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </li>
            ))}
          </ul>
          <p className={styles.loop}>
            Say it → check the cards → saved to history → today&apos;s tasks
            update → the family sees it
          </p>
        </section>

        <section className={styles.block} aria-labelledby="goals-title">
          <div className={styles.blockHead}>
            <h2 id="goals-title" className={styles.blockTitle}>
              How I&apos;ll know it <em>works</em>
            </h2>
            <p className={styles.blockText}>
              Targets for the beta. Real numbers land here once it&apos;s out.
            </p>
          </div>
          <ul className={styles.goals}>
            {smartboo.goals.map((goal) => (
              <li key={goal.label}>
                <strong>{goal.value}</strong>
                <span>{goal.label}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.block} aria-labelledby="help-title">
          <div className={styles.help}>
            <div>
              <h2 id="help-title" className={styles.helpTitle}>
                Own a pet? <em>Help shape it.</em>
              </h2>
              <p className={styles.helpText}>
                A short survey about how you care for your pets. Every answer
                goes straight into the design.
              </p>
            </div>
            <a
              className={styles.surveyButton}
              href={smartboo.surveyUrl}
              target="_blank"
              rel="noreferrer"
            >
              Take the survey{" "}
              <span aria-hidden="true">
                <ArrowIcon />
              </span>
            </a>
          </div>
        </section>
      </div>

      <SiteFooter />
    </main>
  );
}
