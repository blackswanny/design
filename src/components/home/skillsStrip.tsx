import styles from "./headerHero.module.css";

const skills = [
  "End-to-end Design",
  "Product Design",
  "UX Research",
  "Design Systems",
  "Mobile iOS & Android",
  "B2B SaaS",
  "Prototyping",
  "Figma",
  "A/B Testing",
  "Startup Products",
  "Visual Design",
  "Information Architecture",
  "Dashboard Design",
] as const;

export default function SkillsStrip() {
  return (
    <div className={styles.tickerFrame}>
      <div
        className={styles.tickerViewport}
        role="region"
        aria-label="Design skills and tools"
        tabIndex={0}
      >
        <ul className={styles.tickerGroup}>
          {skills.map((skill) => (
            <li key={skill} className={styles.tickerItem}>
              <span>{skill}</span>
              <svg
                className={styles.tickerSeparator}
                width="6"
                height="6"
                viewBox="0 0 8 8"
                aria-hidden="true"
              >
                <path d="M4 0C4.5 2.25 5.75 3.5 8 4C5.75 4.5 4.5 5.75 4 8C3.5 5.75 2.25 4.5 0 4C2.25 3.5 3.5 2.25 4 0Z" />
              </svg>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
