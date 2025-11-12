import { COMMUNICATION } from "../../constants";

import styles from "./phones.module.css";

export const Phones = () => {
  return (
    <div className={styles.phones}>
      {COMMUNICATION.phones.map(({ id, phone }) => (
        <div key={id}>Телефон: {phone}</div>
      ))}
    </div>
  );
};
