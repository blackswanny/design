import styles from "./smartboo.module.css";

/* Three SmartBoo screens as a low-fidelity prototype (greyscale, no final
   visual style yet), drawn in HTML so they stay crisp at any size. They
   show the core loop: say it, check the cards, everyone sees it. */

function Phone({
  children,
  tilt,
}: {
  children: React.ReactNode;
  tilt?: "left" | "right";
}) {
  return (
    <div className={styles.phone} data-tilt={tilt} aria-hidden="true">
      <div className={styles.screen}>
        <div className={styles.statusBar}>
          <span>9:41</span>
          <span className={styles.notch} />
          <span>●●● ▮</span>
        </div>
        {children}
      </div>
    </div>
  );
}

export function CaptureScreen({ tilt }: { tilt?: "left" | "right" }) {
  return (
    <Phone tilt={tilt}>
      <div className={styles.appHead}>
        <span className={styles.appKicker}>Listening…</span>
        <span className={styles.appTitle}>Tell me what happened</span>
      </div>
      <p className={styles.transcript}>
        Fed both cats and Rocky, gave Rocky his pill
        <span className={styles.caret} />
      </p>
      <div className={styles.phoneWave}>
        {Array.from({ length: 22 }, (_, i) => (
          <i key={i} style={{ animationDelay: `${(i % 7) * 0.11}s` }} />
        ))}
      </div>
      <div className={styles.micDock}>
        <span className={styles.micBig}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            <rect x="9" y="3" width="6" height="11" rx="3" fill="#fff" />
            <path
              d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </span>
        <span className={styles.micHint}>Tap to stop</span>
      </div>
    </Phone>
  );
}

const reviewCards = [
  { title: "Fed", pet: "Milo & Cleo", meta: "7:40 AM" },
  { title: "Fed", pet: "Rocky", meta: "7:40 AM" },
  {
    title: "Apoquel given",
    pet: "Rocky",
    meta: "Closes today’s task",
  },
];

export function ReviewScreen({ tilt }: { tilt?: "left" | "right" }) {
  return (
    <Phone tilt={tilt}>
      <div className={styles.appHead}>
        <span className={styles.appKicker}>Check before saving</span>
        <span className={styles.appTitle}>3 cards from your note</span>
      </div>
      <p className={styles.quoteChip}>
        “Fed both cats and Rocky, gave Rocky his pill”
      </p>
      <ul className={styles.reviewList}>
        {reviewCards.map((card) => (
          <li key={card.title + card.pet}>
            <span className={styles.reviewIcon} />
            <span className={styles.reviewText}>
              <b>{card.title}</b>
              {card.pet}
            </span>
            <span className={styles.reviewMeta}>{card.meta}</span>
          </li>
        ))}
      </ul>
      <span className={styles.saveAll}>Save all</span>
    </Phone>
  );
}

// Placeholder avatars: pet initials.
const pets = ["R", "M", "C", "T"];

export function TodayScreen({ tilt }: { tilt?: "left" | "right" }) {
  return (
    <Phone tilt={tilt}>
      <div className={styles.appHead}>
        <span className={styles.appKicker}>Tuesday · 3 of 5 done</span>
        <span className={styles.appTitle}>Today</span>
      </div>
      <div className={styles.petRow}>
        {pets.map((pet, i) => (
          <span key={pet} data-due={i === 3 || undefined}>
            {pet}
          </span>
        ))}
      </div>
      <p className={styles.groupLabel}>Due</p>
      <ul className={styles.taskList}>
        <li>
          <span className={styles.check} />
          Tank · water change<small>7:00 PM</small>
        </li>
        <li>
          <span className={styles.check} />
          Cleo · brush<small>Tonight</small>
        </li>
      </ul>
      <p className={styles.groupLabel}>Done</p>
      <ul className={styles.taskList} data-done>
        <li>
          <span className={styles.check} />
          Rocky · Apoquel<small>Anna · 7:41</small>
        </li>
        <li>
          <span className={styles.check} />
          Everyone fed<small>Anna · 7:40</small>
        </li>
      </ul>
    </Phone>
  );
}
