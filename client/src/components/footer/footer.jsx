import { Link } from "react-router-dom";

import { Phones } from "../../elements/phones/phones";
import { SocialIcon } from "../../elements/social-icon/social-icon";

import styles from "./footer.module.css";
import { useSelector } from "react-redux";

export const Footer = () => {
  const user = useSelector((state) => state.user);
  const isAuth = !!user.id;

  return (
    <footer className={styles.footerContainer}>
      {isAuth ? (
        <Link to="/user" className={styles.link}>
          <span className={styles.linkText}>Личная страница</span>
        </Link>
      ) : (
        <Link to="/registration" className={styles.link}>
          <span className={styles.linkText}>Записаться на пробное занятие</span>
        </Link>
      )}

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
