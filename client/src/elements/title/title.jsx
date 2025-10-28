import styles from "./title.module.css";

export const Title = ({ label, fontSize }) => {
  return (
    <h2 className={styles.title} style={{ fontSize }}>
      {label}
    </h2>
  );
};
