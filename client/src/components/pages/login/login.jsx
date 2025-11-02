import { useState } from "react";
import { Title } from "../../../elements/title/title";
import { getUser } from "../../../actions";
import { useDispatch, useSelector } from "react-redux";

import styles from "./login.module.css";

export const Login = () => {
  const user = useSelector((state) => state.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userData = { email, password };
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
        credentials: "include",
      });
      if (!res.ok) {
        throw new Error(`Ошибка ${res.status}, ${res.statusText}`);
      }
      const result = await res.json();
      console.log(result);
      setEmail("");
      setPassword("");
      dispatch(getUser(result));
    } catch (error) {
      console.error(error, "Ошибка сервера!!!");
    }
  };

  console.log(user);

  return (
    <div>
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
