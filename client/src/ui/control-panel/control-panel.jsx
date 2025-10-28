import { NavLink } from "react-router-dom";

import { Button } from "../../elements/button/button";
import { BUTTONS_LIST } from "../../constants";

import styles from "./control-panel.module.css";

export const ControlPanel = () => {
  return (
    <div className={styles.buttonsContainer}>
      {BUTTONS_LIST.map(({ id, title, path }) => (
        <NavLink
          key={id}
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.link
          }
          to={path}
        >
          <Button type="button">{title}</Button>
        </NavLink>
      ))}
    </div>
  );
};
