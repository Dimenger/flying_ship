import { Addresses } from "../../../elements/addresses/addresses";

import styles from "./contacts.module.css";

export const Contacts = () => {
  return (
    <section className={styles.contacts}>
      <h2 className={styles.title}>Наши адреса</h2>
      <Addresses />
      <div className={styles.info}>
        <p>
          <strong>ИНН:</strong> 633300003333
        </p>
        <p>
          <strong>ИП:</strong> Каменева М.С.
        </p>
      </div>
    </section>
  );
};
