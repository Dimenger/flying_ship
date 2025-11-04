import styles from "./title.module.css";

export const Title = ({ label, fontSize, color }) => {
  return (
    <h2 className={styles.title} style={{ fontSize, color }}>
      {label}
    </h2>
  );
};
