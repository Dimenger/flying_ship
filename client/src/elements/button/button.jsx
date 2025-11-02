import styles from "./button.module.css";

export const Button = ({ children, width }) => {
  return (
    <button className={styles.customButton} style={{ width: width }}>
      {children}
    </button>
  );
};
