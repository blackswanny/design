import Link from "next/link";

import styles from "./building.module.css";
import { smartboo } from "./smartboo";
import ArrowIcon from "../arrowIcon";
import site from "../home/dark/darkPortfolio.module.css";

// One spoken sentence turning into cards: the core idea of the app.
const demoCards = [
  { icon: "🍽", what: "Fed", pet: "Milo & Cleo", meta: "7:40 · Anna" },
  {
    icon: "💊",
    what: "Pill given",
    pet: "Rocky",
    meta: "Task done ✓",
    done: true,
  },
];

const pains = ["Too many taps", "Who fed the cat?", "No grams for my hamster"];

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
        Right now: <strong>{smartboo.name}</strong>, a pet care app with an AI
        voice assistant. Say what happened, and the whole family knows.
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
                <span className={styles.mic}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <rect
                      x="9"
                      y="3"
                      width="6"
                      height="11"
                      rx="3"
                      fill="#fff"
                    />
                    <path
                      d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21"
                      stroke="#fff"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <span className={styles.wave}>
                  {Array.from({ length: 12 }, (_, i) => (
                    <i
                      key={i}
                      style={{ animationDelay: `${(i % 6) * 0.12}s` }}
                    />
                  ))}
                </span>
                <p className={styles.quote}>
                  “Fed both cats, gave Rocky his pill”
                </p>
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
            Talk to it, and the AI turns your words into care notes
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
            Research first: an owner survey and reviews of 40 pet apps
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
                  <b>&gt;</b> Build the voice capture screen from our Figma
                  tokens
                </p>
                <p>
                  <span className={styles.ok}>✓</span> Capture.tsx
                </p>
                <p>
                  <span className={styles.ok}>✓</span> ReviewCards.tsx
                </p>
                <p className={styles.running}>
                  <span className={styles.spin} /> Checking on iPhone Safari…
                </p>
              </div>
            </div>
          </div>
          <p className={styles.caption}>
            Built with Claude Code: design engineering with AI
          </p>
        </Link>
      </div>
    </section>
  );
}
