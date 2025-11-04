import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { EnterExit } from "../../elements/enter-exit/enter-exit";
// import { Button } from "../../elements/button/button";
// import { ICONS_LIST } from "../../constants";
import { removeUser, clearUserList } from "../../actions";

import styles from "./service-panel.module.css";
import { ROLES } from "../../constants/roles";

export const ServicePanel = () => {
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const userName = `${user?.name} ${user?.surname}`;
  const role = user?.role;
  const isAuth = !!user.id;

  const onLogout = async () => {
    try {
      const res = await fetch("http://localhost:3000/auth/logout", {
        credentials: "include",
      });
      const result = await res.json();
      console.log(result);

      dispatch(removeUser());
      dispatch(clearUserList());
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


        // Пример thunk-функции
const clearUserData = () => (dispatch) => {
  dispatch(removeUser());
  dispatch(clearUserList());
  // можно добавить дополнительную логику или асинхронные операции
};

// Затем в компоненте вы вызываете
dispatch(clearUserData());

*/
