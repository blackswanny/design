import Image from "next/image";

import sharedStyles from "@/components/home/headerHero.module.css";

import styles from "./overview.module.css";

const projectDetails = [
  { label: "Role", values: ["Product Designer"] },
  { label: "Type", values: ["0→1", "Start-up", "B2B/B2C", "Mobile App"] },
  {
    label: "Design Focus",
    values: [
      "User Flows",
      "Specialist Discovery",
      "Booking Experience",
      "Accessible UX",
    ],
  },
] as const;

export default function MindscapeOverview() {
  return (
    <header className={styles.overview}>
      <Image
        src="/images/projects/mindscape/brand-logo.svg"
        alt="MindScape"
        width={161}
        height={131}
        loading="eager"
        unoptimized
        className={styles.logo}
      />
      <h1
        id="mindscape-title"
        className={`${sharedStyles.headline} ${styles.title}`}
      >
        <span>A mental health app that made</span>
        <span>
          finding support feel <em>easier.</em>
        </span>
      </h1>

      <div className={styles.details}>
        <section aria-labelledby="mindscape-intro-title">
          <h2 id="mindscape-intro-title" className={styles.label}>
            Intro
          </h2>
          <div className={styles.description}>
            <p>
              Looking for mental health support can feel overwhelming,
              especially when you don’t know where to start. MindScape is a
              concept app designed to help people{" "}
              <strong>
                discover licensed psychologists, explore specialties, and book
                sessions
              </strong>{" "}
              in a simple, supportive way.
            </p>
            <p>
              The goal was to <strong>reduce friction</strong> between needing
              help and getting it — through clear user flows, calming
              interfaces, and an accessible booking experience.
            </p>
            <p>
              I focused on creating a product that feels{" "}
              <strong>approachable, private, and easy to navigate</strong> from
              the very first step.
            </p>
          </div>
        </section>

        <dl className={styles.metadata}>
          {projectDetails.map(({ label, values }) => (
            <div key={label}>
              <dt className={styles.label}>{label}</dt>
              <dd className={styles.pills}>
                {values.map((value) => (
                  <span key={value} className={styles.pill}>
                    {value}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </header>
  );
}
