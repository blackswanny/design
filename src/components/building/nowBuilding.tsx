import Link from "next/link";

import styles from "./building.module.css";
import { smartboo } from "./smartboo";
import SmartBooLogo, { BooMark } from "./smartbooLogo";
import ArrowIcon from "../arrowIcon";
import site from "../home/dark/darkPortfolio.module.css";

// A vet paper turning into records: the core idea of the app.
const demoCards = [
  { icon: "💉", what: "Rabies", pet: "Rocky", meta: "Due Nov 1" },
  {
    icon: "🔔",
    what: "Reminder set",
    pet: "2 weeks before",
    meta: "Saved ✓",
    done: true,
  },
];

const pains = [
  "Records everywhere",
  "“Can you show the shots?”",
  "Missed due dates",
];

/** Home page block between Selected Work and Let's talk: the app I'm
    building, as three cards (after anfalova.art's side-project row), with
    links to the project page and the owner survey. */
export default function NowBuilding() {
  const current = smartboo.log.find((step) => step.status === "now");

  return (
    <section
      id="building"
      className={styles.section}
      aria-labelledby="building-title"
    >
      <p className={styles.live}>
        <span className={styles.liveDot} aria-hidden="true" />
        Currently building{current ? ` · ${current.title}` : ""}
      </p>
      <h2
        id="building-title"
        className={`${site.sectionHeading} ${styles.heading}`}
      >
        <span>I design products for others,</span>{" "}
        <span>
          and <em>build my own</em> too.
        </span>
      </h2>
      <p className={styles.lead}>
        Right now: <SmartBooLogo tone="white" className={styles.leadLogo} />, an
        iOS app that keeps everything about your pets in one place. Hand its AI
        assistant a vet paper, and it files it and reminds you what’s due.
      </p>
      <div className={styles.actions}>
        <Link className={styles.follow} href="/projects/smartboo">
          See the project{" "}
          <span aria-hidden="true">
            <ArrowIcon />
          </span>
        </Link>
        <a
          className={styles.survey}
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

      <div className={styles.grid}>
        <Link href="/projects/smartboo" className={styles.card}>
          <div className={styles.visual} aria-hidden="true">
            <div className={styles.voice}>
              <div className={styles.say}>
                <span className={styles.booMark}>
                  <BooMark tone="blue" animated />
                </span>
                <p className={styles.quote}>Rocky’s vaccine certificate</p>
              </div>
              <ul className={styles.cards}>
                {demoCards.map((card) => (
                  <li key={card.what} data-done={card.done || undefined}>
                    <span className={styles.cardIcon}>{card.icon}</span>
                    <span className={styles.cardWhat}>
                      {card.what}
                      <small>{card.pet}</small>
                    </span>
                    <span className={styles.cardMeta}>{card.meta}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className={styles.caption}>
            Snap a vet paper, and the AI files it in the right pet’s folder
          </p>
        </Link>

        <Link href="/projects/smartboo" className={styles.card}>
          <div className={styles.visual} aria-hidden="true">
            <div className={styles.research}>
              <strong>2,900</strong>
              <span>App Store reviews read</span>
              <ul>
                {pains.map((pain) => (
                  <li key={pain}>{pain}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className={styles.caption}>
            Research first: ~50 survey responses, 5 owner interviews and
            reviews of 40 pet apps
          </p>
        </Link>

        <Link href="/projects/smartboo" className={styles.card}>
          <div className={styles.visual} aria-hidden="true">
            <div className={styles.editor}>
              <div className={styles.editorBar}>
                <i />
                <i />
                <i />
                <span>claude · smartboo</span>
              </div>
              <div className={styles.terminal}>
                <p className={styles.prompt}>
                  <b>&gt;</b> Build the review card from our Figma tokens
                </p>
                <p>
                  <span className={styles.ok}>✓</span> ReviewCard.tsx
                </p>
                <p>
                  <span className={styles.ok}>✓</span> PetFolder.tsx
                </p>
                <p className={styles.running}>
                  <span className={styles.spin} /> Checking on the iPhone
                  simulator…
                </p>
              </div>
            </div>
          </div>
          <p className={styles.caption}>
            Learning design engineering: building it with Claude Code
          </p>
        </Link>
      </div>
    </section>
  );
}
