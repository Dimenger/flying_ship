import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { EnterExit } from "../../elements/enter-exit/enter-exit";
import { Button } from "../../elements/button/button";
import { ICONS_LIST } from "../../constants";
import { removeUser } from "../../actions/remove-user";

import styles from "./service-panel.module.css";

export const ServicePanel = () => {
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const role = user?.role;
  const userName = `${user?.name} ${user?.surname}`;
  const isAuth = !!user.id;

  console.log("user.id :", user.id);
  console.log("role :", role);

  const onLogout = async () => {
    try {
      const res = await fetch("http://localhost:3000/logout", {
        credentials: "include",
      });
      const result = await res.json();
      console.log(result);

      dispatch(removeUser());
    } catch (err) {
      console.error(err, "Ошибка сервера!!!");
    }
  };

  return (
    <div className={styles["service-panel-container"]}>
      <div className={styles.usersName}>
        {isAuth && (
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

/*
        <div className={styles.buttonsContainer}>
          {ICONS_LIST.map(({ id, title, path, allowedRoles }) => (
            <NavLink
              key={id}
              className={({ isActive }) =>
                isActive ? styles.activeLink : styles.link
              }
              to={path}
            >
              {(!allowedRoles ||
                allowedRoles.length === 0 ||
                allowedRoles.includes(role)) && (
                <Button type="button">{title}</Button>
              )}
            </NavLink>
          ))}
        </div>
*/
