import { COMMUNICATION } from "../../constants";
import styles from "./addresses.module.css";

export const Addresses = () => {
  return (
    <div className={styles.addresses}>
      {COMMUNICATION.addresses.map(({ id, address }) => (
        <div key={id}>{address}</div>
      ))}
    </div>
  );
};
