import styles from "./overview.module.css";

const statistics = [
  { value: "120+", label: "screens" },
  { value: "180+", label: "components" },
  { value: "145", label: "hours" },
] as const;

export default function MindscapeOverview() {
  return (
    <section
      className={styles.overview}
      aria-labelledby="mindscape-overview-title"
    >
      <div className={styles.introduction}>
        <h2 id="mindscape-overview-title" className={styles.label}>
          <span>01</span> About
        </h2>
        <p className={styles.description}>
          A simple and supportive space for mental well-being. The app helps
          people connect with licensed psychologists who understand what they’re
          going through. Whether it’s a one-time conversation or ongoing
          support, everything is designed to feel easy, private, and accessible.
          Users can sign up, explore specialists, and book sessions in just a
          few steps. Psychologists can also share insights and stay connected
          with their audience through the platform.
        </p>
      </div>
      <dl className={styles.statistics}>
        {statistics.map(({ value, label }) => (
          <div key={label} className={styles.statistic}>
            <dt>{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
