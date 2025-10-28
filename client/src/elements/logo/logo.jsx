import logo from "../../assets/logo-img/logo_1.png";
// import { Image } from "../image/image";

import styles from "./logo.module.css";

export const Logo = () => {
  return <img src={logo} alt="logo" className={styles.logo} />;
};

// return <Image image={logo} alt="logo" width="350px" height="auto" />;
