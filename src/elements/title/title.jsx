import styles from "./title.module.css";

export const Title = ({ lable }) => {
  return <h2 className={styles.title}>{lable}</h2>;
};
