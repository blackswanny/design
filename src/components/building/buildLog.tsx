import styles from "./building.module.css";

import type { BuildStep } from "./smartboo";

const statusLabel = { done: "Done", now: "In progress", next: "Next" };

/** The build as stages: what's done, what's happening now, what's next. */
export default function BuildLog({ steps }: { steps: readonly BuildStep[] }) {
  return (
    <ol className={styles.log}>
      {steps.map((step) => (
        <li key={step.title} className={styles.step} data-status={step.status}>
          <span className={styles.stepDot} aria-hidden="true" />
          <span className={styles.stepStatus}>{statusLabel[step.status]}</span>
          <h3 className={styles.stepTitle}>{step.title}</h3>
          <p className={styles.stepText}>{step.text}</p>
        </li>
      ))}
    </ol>
  );
}
