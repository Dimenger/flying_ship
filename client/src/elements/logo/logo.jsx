import logo from "../../assets/logo-img/logo-3.png";

import styles from "./logo.module.css";

export const Logo = () => {
  return (
    <img
      src={logo}
      alt="logo"
      className={styles.logo}
      width="180px"
      height="auto"
    />
  );
};
