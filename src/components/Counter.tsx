import styles from "./Counter.module.css";

interface CounterProps {
  total: number;
  finished?: number;
  title: string;
}

export function Counter({ total, finished, title }: CounterProps) {
  const fontColor =
    finished || finished === 0 ? styles.fontPurple : styles.fontBlue;

  return (
    <div className={`${styles.counterContent} ${fontColor}`}>
      <p>{title}</p>
      <div className={styles.counterNumbers}>
        <p>
          {finished || finished === 0 ? `${finished} de ` : ""}
          {total}
        </p>
      </div>
    </div>
  );
}
