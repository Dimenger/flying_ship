import { useState } from "react";
import { Title } from "../../../elements/title/title";

import styles from "./registration.module.css";

export const Registration = () => {
  const [surname, setSurname] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(false);

  const date = new Date().toISOString().slice(0, 10);

  const registeredUserData = {
    surname,
    name,
    email,
    phone,
    password,
    registered_at: date,
    role: "2",
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(registeredUserData),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Ошибка: ${res.status}, ${res.statusText}`);
        }
        console.log(registeredUserData);
        return res.json();
      })
      .catch((err) => console.error(err));

    setSurname("");
    setName("");
    setEmail("");
    setPhone("");
    setPassword("");
    setRepeatPassword("");
  };

  const RepeatPasswordChange = (event) => {
    const value = event.target.value;
    setRepeatPassword(value);
    value === password ? setPasswordsMatch(true) : setPasswordsMatch(false);
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>
            <Title lable="ФИО" />
          </legend>
          <p>
            <label htmlFor="surname">Фамилия</label>
            <input
              type="text"
              name="surname"
              id="surname"
              value={surname}
              onChange={(event) => {
                setSurname(event.target.value);
              }}
              autoComplete="username"
              required
            />
          </p>
          <p>
            <label htmlFor="name">Имя</label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
              required
            />
          </p>
        </fieldset>
        <fieldset>
          <legend>
            <Title lable="Контакты" />
          </legend>
          <p>
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
          </p>
          <p>
            <label htmlFor="phone">Телефон</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={phone}
              onChange={(event) => {
                setPhone(event.target.value);
              }}
              placeholder="999 999-99-99"
              pattern="[0-9]{3} [0-9]{3}-[0-9]{2}-[0-9]{2}"
              required
            />
          </p>
        </fieldset>
        <fieldset>
          <legend>
            <Title lable="Пароль" />
          </legend>
          <p>
            <label htmlFor="password">Пароль (6 символов минимум)</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              minLength="6"
              maxLength="12"
              autoComplete="new-password"
              required
            />
          </p>
          <p>
            <label htmlFor="repeat_password">Павтор пароля</label>
            <div className={styles["repeat-password"]}>
              <input
                type="password"
                name="password"
                id="repeat_password"
                value={repeatPassword}
                onChange={RepeatPasswordChange}
                minLength="6"
                maxLength="12"
                autoComplete="new-password"
                required
              />
              <span
                className={
                  passwordsMatch || !repeatPassword
                    ? styles["repeat-password-correct"]
                    : styles["repeat-password-wrong"]
                }
              >
                Пароли не совпадают
              </span>
            </div>
          </p>
        </fieldset>
        <input
          type="submit"
          value="Зарегистрироваться"
          disabled={!passwordsMatch}
        />
      </form>
    </div>
  );
};
