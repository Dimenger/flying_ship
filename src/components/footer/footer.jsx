import { Link } from "react-router-dom";

import { Phones } from "../../elements/phones/phones";
import { SocialIcon } from "../../elements/social-icon/social-icon";

import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <Link to="registration" className={styles.link}>
        <span className={styles.linkText}>Записаться на пробное занятие</span>
      </Link>
      <div className={styles.topRow}>
        <div className={styles.column}>
          <SocialIcon />
        </div>
        <div className={styles.column}>
          <Phones />
        </div>
      </div>
    </footer>
  );
};
