import { Link } from "react-router-dom";

import { Logo } from "../../elements/logo/logo";
import { Phones } from "../../elements/phones/phones";
import { Addresses } from "../../elements/addresses/addresses";
import { ControlPanel } from "../../ui/control-panel/control-panel";
import { ServicePanel } from "../../ui/service-panel/service-panel";

import styles from "./header.module.css";
import { Title } from "../../elements/title/title";

export const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.topRow}>
        <div className={styles.column}>
          <Phones />
        </div>
        <div className={styles.column}>
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className={styles.column}>
          <Addresses />
        </div>
      </div>
      <div className={styles["service-panel-row"]}>
        <div className={styles.wraper}>
          <Title
            label="Детские центры раннего развития"
            fontSize="26px"
            color="#fff"
          />
          <ServicePanel />
        </div>
      </div>

      <div className={styles["control-panel-row"]}>
        <ControlPanel />
      </div>
    </header>
  );
};
