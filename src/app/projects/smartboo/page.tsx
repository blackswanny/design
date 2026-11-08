import ArrowIcon from "@/components/arrowIcon";
import { smartboo } from "@/components/building/smartboo";
import SmartBooLogo from "@/components/building/smartbooLogo";
import site from "@/components/home/dark/darkPortfolio.module.css";
import { portfolioDisplay, portfolioSans } from "@/components/home/dark/fonts";
import SiteFooter from "@/components/home/dark/siteFooter";
import SiteHeader from "@/components/home/dark/siteHeader";

import { ScreenShot } from "./phones";
import styles from "./smartboo.module.css";

import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "SmartBoo — pet records with an AI assistant | Hanna Gomozova",
  description:
    "How SmartBoo took shape: the research, the decisions behind the design and a clickable prototype. Product design by Hanna Gomozova, built with Claude Code.",
};

const facts = [
  { label: "Role", value: "Design and build" },
  { label: "Timeline", value: "Nov 2026 – now" },
  { label: "Tools", value: "Figma, Claude Code, React" },
  { label: "Status", value: "iOS demo Dec 2" },
];

const stats = [
  {
    kicker: "Reviews",
    value: "2,900",
    label: "App Store reviews read and tagged",
  },
  {
    kicker: "Apps",
    value: "~40",
    label: "pet apps compared, from vet portals to reptile trackers",
  },
  {
    kicker: "Moments",
    value: "4",
    label:
      "moments that open the app: a new paper, a request, a reminder, a worry",
  },
];

const img = (name: string) => `/images/projects/smartboo/${name}.webp`;

/** Boo asking instead of guessing, drawn in HTML instead of a screenshot. */
function AskVisual() {
  return (
    <div className={styles.ask} aria-hidden="true">
      <p className={styles.askSaid}>“Gave the cat her ear drops”</p>
      <div className={styles.askBoo}>
        <span className={styles.askAvatar} />
        <p>Which cat?</p>
      </div>
      <div className={styles.askChips}>
        <span>Milo</span>
        <span data-on="">Cleo</span>
        <span>Both</span>
      </div>
    </div>
  );
}

/** What made it into the demo and what waits, as two short lists. */
function ScopeVisual() {
  return (
    <div className={styles.scope} aria-hidden="true">
      <div>
        <span className={styles.scopeHead}>In the Dec 2 demo</span>
        <ul>
          <li>Snap a vet paper</li>
          <li>Pet folders</li>
          <li>Reminders</li>
          <li>Share as PDF</li>
        </ul>
      </div>
      <div data-later="">
        <span className={styles.scopeHead}>After the demo</span>
        <ul>
          <li>Household sharing</li>
          <li>Accounts and sync</li>
          <li>Sitter links</li>
          <li>Boo talks back</li>
        </ul>
      </div>
    </div>
  );
}

/** One design token traced from Figma to code, in light and dark. */
function TokensVisual() {
  return (
    <div className={styles.tokens} aria-hidden="true">
      <div className={styles.tokenStep}>
        <span className={styles.tokenWhere}>Figma Variables</span>
        <code>accent/primary</code>
        <span className={styles.tokenSwatches}>
          <i style={{ background: "#4F62CC" }} />
          <i style={{ background: "#8F98F5" }} />
          <small>Light · Dark</small>
        </span>
      </div>
      <span className={styles.tokenArrow}>↓ npm run tokens</span>
      <div className={styles.tokenStep}>
        <span className={styles.tokenWhere}>tokens.css</span>
        <code>--accent-primary</code>
      </div>
      <span className={styles.tokenArrow}>↓</span>
      <div className={styles.tokenStep}>
        <span className={styles.tokenWhere}>The app</span>
        <span className={styles.tokenApp}>
          <span className={styles.tokenButton}>Looks right</span>
          <small>5.3 : 1 · passes AA</small>
        </span>
      </div>
    </div>
  );
}

type Decision = {
  title: string;
  considered: string;
  chose: string;
  why: string;
  visual: ReactNode;
  /** Which part of a tall screen to show on the stage. */
  crop?: "bottom";
};

const decisions: Decision[] = [
  {
    title: "Papers first, not a daily log",
    considered: "A voice diary for every feeding, walk and pill",
    chose: "A place to file vet papers, with reminders for what’s due",
    why: "My first concept was the voice diary. Then the survey came back: most owners touch their pet’s records a few times a year. Nobody keeps a daily habit, but everyone has papers. So the first screen asks for one.",
    visual: (
      <ScreenShot
        src={img("welcome")}
        alt="Welcome screen: Hi, I'm Boo, with Snap a vet paper and Add your pet"
      />
    ),
  },
  {
    title: "Cut to the aha moment",
    considered: "Household sharing, accounts and sync in the first version",
    chose: "Everything on the phone, no sign-up, until the demo",
    why: "The question to answer first is whether people bring a paper in their first minute. Sharing and sync only matter after that. Data goes through one storage module, so moving to a server later is one rewrite.",
    visual: <ScopeVisual />,
  },
  {
    title: "Boo is a sheet, not a chat",
    considered: "A chat tab with Boo and a conversation history",
    chose: "A bottom sheet that opens over any screen: talk, snap or type",
    why: "Owners come with a task, not a conversation. A sheet keeps the screen they were on, shows the result in place and closes. No history to scroll through, no blank chat to stare at.",
    visual: (
      <ScreenShot
        src={img("boo-sheet")}
        alt="Boo sheet with Talk, Snap a paper and Type over the Today screen"
      />
    ),
    crop: "bottom",
  },
  {
    title: "Ask, never guess",
    considered: "Pick the most likely pet and let people fix it",
    chose: "One short question with choices when anything is unclear",
    why: "With two cats, a wrong guess means a missed dose. One tap on a choice is cheaper than finding and fixing a wrong record later. The same rule covers “Is this the same Rocky?”",
    visual: <AskVisual />,
  },
  {
    title: "Confirm by risk",
    considered: "Confirm everything, or save everything automatically",
    chose:
      "Simple things save with Undo; papers, meds and symptoms get a review card",
    why: "Confirming a walk is friction; auto-saving a wrong vaccine date is dangerous. So the rule depends on what’s at stake, and fields Boo isn’t sure about are highlighted for one tap.",
    visual: (
      <ScreenShot
        src={img("review-card")}
        alt="Review card: Rocky's vaccines with one uncertain date highlighted and a Looks right button"
      />
    ),
    crop: "bottom",
  },
  {
    title: "One source of truth for the look",
    considered: "Copying colors and sizes from Figma into the code by hand",
    chose:
      "Figma Variables exported as design tokens, so code uses the same names",
    why: "I design and build alone, so the mockup and the app drift apart the moment I tweak a color. Now a change in Figma is one export and one command. Light and dark come from the same roles, and the code never holds a raw hex value.",
    visual: <TokensVisual />,
  },
];

const buildFacts = [
  {
    value: "iOS",
    label: "React app wrapped with Capacitor, run on iPhone 17 Pro",
  },
  { value: "54", label: "color pairs checked for contrast, all pass WCAG AA" },
  { value: "1 PR", label: "per change: a branch, a review, then main" },
];

const metrics = [
  {
    value: "60%",
    label:
      "of new users save their first paper or pet and get a reminder in the first session",
  },
  {
    value: "80%",
    label: "of review cards confirmed with Looks right, without edits",
  },
];

function SurveyLink({ label, quiet }: { label: string; quiet?: boolean }) {
  return (
    <a
      className={quiet ? styles.quietButton : styles.surveyButton}
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
              Case study in progress · Clickable prototype
            </p>
            <h1 id="smartboo-title" className={styles.title}>
              <SmartBooLogo tone="blue" animated />
            </h1>
            <p className={styles.tagline}>
              Everything about your pets in one place.{" "}
              <em>Just hand it to Boo.</em>
            </p>
            <div className={styles.heroActions}>
              <a className={styles.surveyButton} href="#prototype">
                Try the prototype
              </a>
              <SurveyLink label="Own a pet? Take the survey" quiet />
            </div>
          </div>
          <div className={styles.heroStage}>
            <ScreenShot src={img("review-card")} alt="" tilt="left" />
            <ScreenShot
              src={img("today")}
              alt="SmartBoo Today screen: Boo, the pet assistant, asks what happened with the pack today"
              eager
            />
            <ScreenShot src={img("pet-folder")} alt="" tilt="right" />
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
              Rocky’s shots are in one clinic’s email, the cat’s lab results in
              another, and the rabies certificate is in a drawer. Then the
              boarding place asks for proof.
            </p>
            <p className={styles.body}>
              Pet apps try to fix this with daily logging. But most owners open
              their pet’s records a few times a year, so the habit never forms,
              and the paper that matters is still missing.
            </p>
            <ul className={styles.stats}>
              {stats.map((stat) => (
                <li key={stat.label}>
                  <em className={styles.statKicker}>{stat.kicker}</em>
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

        {/* The decisions behind the design: the heart of the case study. */}
        <section className={styles.decisions} aria-labelledby="decisions-title">
          <div className={styles.flowHead}>
            <h2 id="decisions-title" className={styles.sectionTitle}>
              Six decisions <em>behind it.</em>
            </h2>
            <p className={styles.body}>
              Every part of the app started as a choice between two options.
              Here’s what I weighed, what I chose and why.
            </p>
          </div>
          <ol className={styles.decisionList}>
            {decisions.map((d, i) => (
              <li key={d.title} className={styles.decision}>
                <div className={styles.decisionText}>
                  <span className={styles.decisionNumber} aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3>
                    <span className={styles.visuallyHidden}>
                      Decision {i + 1}:{" "}
                    </span>
                    {d.title}
                  </h3>
                  <p className={styles.why}>{d.why}</p>
                  <dl className={styles.choice}>
                    <div data-kind="considered">
                      <dt>
                        <span aria-hidden="true">✕</span> Considered
                      </dt>
                      <dd>{d.considered}</dd>
                    </div>
                    <div data-kind="chose">
                      <dt>
                        <span aria-hidden="true">✓</span> Chose
                      </dt>
                      <dd>{d.chose}</dd>
                    </div>
                  </dl>
                </div>
                <div className={styles.decisionVisual} data-crop={d.crop}>
                  {d.visual}
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Design engineering: the same screen in Figma and in the build. */}
        <section className={styles.device} aria-labelledby="device-title">
          <div className={styles.deviceText}>
            <h2 id="device-title" className={styles.sectionTitle}>
              From Figma <em>to a real iPhone.</em>
            </h2>
            <p className={styles.body}>
              I design and build SmartBoo myself, with Claude Code as my pair.
              The first version already runs as an iOS app on the simulator. Its
              screens still wear the early teal; the next pass moves them onto
              the new Figma tokens.
            </p>
            <ul className={styles.deviceFacts}>
              {buildFacts.map((fact) => (
                <li key={fact.value}>
                  <strong>{fact.value}</strong>
                  <span>{fact.label}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.deviceStage}>
            <figure>
              <ScreenShot
                src={img("today")}
                alt="Today in Figma: an overdue rabies card for Rocky, Boo's card and the tab bar"
              />
              <figcaption>Figma · Today</figcaption>
            </figure>
            <figure>
              <ScreenShot
                src={img("build-today")}
                alt="Today in the running app on the iPhone simulator: Tell Boo what happened, Next up and Coming up"
              />
              <figcaption>iPhone simulator · first build</figcaption>
            </figure>
          </div>
        </section>

        {/* The path: how the project moves from research to a demo. */}
        <section className={styles.split} aria-labelledby="path-title">
          <h2 id="path-title" className={styles.label}>
            The path so far
          </h2>
          <ol className={styles.path}>
            {smartboo.log.map((step) => (
              <li key={step.title} data-status={step.status}>
                <span className={styles.pathDot} aria-hidden="true" />
                <span className={styles.pathStatus}>
                  {step.status === "done"
                    ? "Done"
                    : step.status === "now"
                      ? "Now"
                      : "Next"}
                </span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* The clickable Figma prototype. */}
        <section
          id="prototype"
          className={styles.prototype}
          aria-labelledby="prototype-title"
        >
          <div className={styles.prototypeHead}>
            <h2 id="prototype-title" className={styles.sectionTitle}>
              Try it yourself.
            </h2>
            <p className={styles.body}>
              The Figma prototype. Tap the Boo button, snap a paper, open
              Rocky’s folder or switch to Schedule.
            </p>
            <a
              className={styles.prototypeLink}
              href={smartboo.prototypeUrl}
              target="_blank"
              rel="noreferrer"
            >
              Open full screen{" "}
              <span aria-hidden="true">
                <ArrowIcon />
              </span>
            </a>
          </div>
          <div className={styles.prototypeFrame}>
            <iframe
              src={smartboo.prototypeEmbedUrl}
              title="SmartBoo clickable prototype in Figma"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </section>

        {/* How success will be measured. */}
        <section className={styles.split} aria-labelledby="metrics-title">
          <h2 id="metrics-title" className={styles.label}>
            How I’ll know it works
          </h2>
          <div>
            <ul className={`${styles.stats} ${styles.metrics}`}>
              {metrics.map((metric) => (
                <li key={metric.value}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </li>
              ))}
            </ul>
            <p className={styles.body}>
              Before there’s a backend, I’ll measure with usability tests and an
              anonymous counter in Boo’s server function. Still open: will
              people bring a paper in the first minute, and will they talk to
              Boo?
            </p>
          </div>
        </section>

        <section className={styles.help} aria-labelledby="help-title">
          <div>
            <h2 id="help-title" className={styles.helpTitle}>
              Own a pet? <em>Help shape it.</em>
            </h2>
            <p className={styles.helpText}>
              A short survey about how you keep your pets’ records. Every answer
              goes straight into the design.
            </p>
          </div>
          <SurveyLink label="Take the survey" />
        </section>
      </div>

      <SiteFooter />
    </main>
  );
}
