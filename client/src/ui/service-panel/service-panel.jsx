import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { ROLES } from "../../constants/roles";
import { EnterExit } from "../../elements/enter-exit/enter-exit";
import { fetchLogout } from "../../request/thunk-action/fetch-logout";

import styles from "./service-panel.module.css";

export const ServicePanel = () => {
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const userName = `${user?.name} ${user?.surname}`;
  const role = user?.role;
  const isAuth = !!user.id;

  const onLogout = async () => {
    try {
      dispatch(fetchLogout());
    } catch (err) {
      console.error(err, "Ошибка сервера!!!");
    }
  };

  return (
    <div className={styles["service-panel-container"]}>
      <div className={styles.usersName}>
        {isAuth && [ROLES.ADMINISTRATOR].includes(role) && (
          <Link to="/users" className={styles.link}>
            <i className={`fa fa-users ${styles.users}`} aria-hidden="true"></i>
          </Link>
        )}
      </div>

      <div>
        {isAuth && (
          <Link to="/user" className={styles.link}>
            <span className={styles["user-name"]}>{userName}</span>
          </Link>
        )}
      </div>

      <div>
        {isAuth ? (
          <Link to="/login" className={styles.login} onClick={onLogout}>
            <EnterExit stateFlag={isAuth} />
            <span className={styles["login-span"]}>Выйти</span>
          </Link>
        ) : (
          <Link to="/login" className={styles.login}>
            <EnterExit stateFlag={isAuth} />
            <span className={styles["login-span"]}>Войти</span>
          </Link>
        )}
      </div>
      <div></div>
    </div>
  );
};
