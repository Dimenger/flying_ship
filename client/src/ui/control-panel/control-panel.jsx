import { Link, NavLink, useNavigate } from "react-router-dom";

import { Button } from "../../elements/button/button";
import { BUTTONS_LIST } from "../../constants";

import styles from "./control-panel.module.css";

export const ControlPanel = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.controlPanelContainer}>
      <div className={styles.buttonsContainer}>
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
          ))}{" "}
          <NavLink onClick={() => navigate(-1)} className={styles.link}>
            <Button type="button" width="50px">
              <i className="fa fa-backward" aria-hidden="true"></i>
            </Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
