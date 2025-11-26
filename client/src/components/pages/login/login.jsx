import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Title } from "../../../elements/title/title";
import { fetchGetUser } from "../../../request/thunk-action";
import { Notification } from "../../../elements/notification/notification";

import styles from "./login.module.css";

export const Login = () => {
  const success = useSelector((state) => state.user.success);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userLoginData = { email, password };
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (success) {
      setTimeout(() => navigate("/user"), 2000);
    }
  }, [success, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setEmail("");
      setPassword("");

      dispatch(fetchGetUser(userLoginData));
    } catch (error) {
      console.error("handleSubmit: Ошибка авторизации:", error);
    }
  };

  return (
    <div>
      <Notification />
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>
            <Title label="Авторизация" />
          </legend>

          <div className={styles.inputContainer}>
            <label htmlFor="email">email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              autoComplete="username"
              required
            />
          </div>

          <div className={styles.inputContainer}>
            <label htmlFor="password">Пароль </label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              autoComplete="password"
              required
            />
          </div>
        </fieldset>
        <input type="submit" value="Войти в личный кабинет" />
      </form>
    </div>
  );
};
