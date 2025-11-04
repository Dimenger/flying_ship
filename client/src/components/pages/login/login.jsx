import { useState } from "react";
import { Title } from "../../../elements/title/title";
import { getUser } from "../../../actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import styles from "./login.module.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userData = { email, password };
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
        credentials: "include",
      });
      if (!res.ok) {
        throw new Error(`Ошибка ${res.status}, ${res.statusText}`);
      }
      const result = await res.json();

      setEmail("");
      setPassword("");

      dispatch(getUser(result));
      navigate("/user");
    } catch (error) {
      console.error(error, "Ошибка сервера!!!");
    }
  };

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
