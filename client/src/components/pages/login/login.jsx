import { useState } from "react";
import { Title } from "../../../elements/title/title";

import styles from "./login.module.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userData = { email, password };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const res = fetch("localhost3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
        credentials: "include",
      });
      if (!res.ok) {
        throw new Error("Jib,rf");
      }
      const result = res.json();
      console.log(result);
    } catch (error) {
      console.error(error, "errrorrrr!");
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
