import sharedStyles from "@/components/home/headerHero.module.css";

import styles from "./summary.module.css";

import type { ReactNode } from "react";

const cards = [
  {
    id: "mindscape-problem",
    title: "Problem",
    icon: "/images/projects/mindscape/icons/problem-custom.svg",
    paragraphs: [
      {
        text: "Seeking mental health support is already emotionally difficult.\nMany platforms add friction, low trust, and unclear navigation when users are simply trying to find the right specialist.",
        emphasis: [
          "emotionally difficult.",
          "friction, low trust,",
          "unclear navigation",
        ],
      },
    ],
  },
  {
    id: "mindscape-solution",
    title: "Solution",
    icon: "/images/projects/mindscape/icons/solution-notebook.svg",
    paragraphs: [
      {
        text: "I designed a calm, guided experience with clear information architecture, thoughtful therapist discovery, and a streamlined booking flow that helps users move forward with more confidence.",
        emphasis: [
          "calm, guided experience",
          "clear information architecture,",
          "therapist discovery,",
          "streamlined booking flow",
        ],
      },
    ],
  },
  {
    id: "mindscape-outcome",
    title: "Outcome",
    icon: "/images/projects/mindscape/icons/outcome-rocket.svg",
    paragraphs: [
      {
        text: "MindScape brings discovery, specialist profiles, and session booking into one connected flow. The concept includes 120+ screens and 180+ reusable components, creating a strong foundation for a consistent product.",
        emphasis: [
          "discovery, specialist profiles,",
          "session booking",
          "120+ screens",
          "180+ reusable components,",
        ],
      },
    ],
  },
] as const;

function EmphasizedParagraph({
  text,
  emphasis,
}: Readonly<{ text: string; emphasis: readonly string[] }>) {
  const content: ReactNode[] = [];
  let cursor = 0;

  for (const phrase of emphasis) {
    const index = text.indexOf(phrase, cursor);
    if (index < 0) continue;
    content.push(text.slice(cursor, index));
    content.push(<strong key={index}>{phrase}</strong>);
    cursor = index + phrase.length;
  }

  content.push(text.slice(cursor));
  return <p>{content}</p>;
}

export default function MindscapeSummary() {
  return (
    <section
      id="mindscape-summary"
      className={styles.summary}
      aria-label="Problem, solution and outcome"
    >
      <div className={styles.grid}>
        {cards.map(({ id, title, icon, paragraphs }) => (
          <article key={id} className={styles.card} aria-labelledby={id}>
            <span className={styles.iconBadge} aria-hidden="true">
              <span
                className={styles.icon}
                style={{
                  WebkitMaskImage: `url("${icon}")`,
                  maskImage: `url("${icon}")`,
                }}
              />
            </span>
            <h2
              id={id}
              className={`${sharedStyles.sectionHeading} ${styles.title}`}
            >
              {title}
            </h2>
            <div className={styles.copy}>
              {paragraphs.map(({ text, emphasis }) => (
                <EmphasizedParagraph
                  key={text}
                  text={text}
                  emphasis={emphasis}
                />
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
