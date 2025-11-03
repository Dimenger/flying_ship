import styles from "./error.module.css";

export const Failure = ({ error }) =>
  error && (
    <div className={styles.error}>
      <h1>Ошибка</h1>
      <div>{error}</div>
    </div>
  );
