import { Title } from "../../../../../elements/title/title";

import styles from "./registration-form.module.css";

export const RegistrationForm = ({
  surname,
  name,
  email,
  phone,
  password,
  repeatPassword,
  handleSubmit,
  RepeatPasswordChange,
  setSurname,
  setName,
  setEmail,
  setPhone,
  setPassword,
  passwordsMatch,
}) => {
  return (
    <>
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>
              <Title label="ФИО" />
            </legend>
            <div className={styles.inputContainer}>
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
            </div>
            <div className={styles.inputContainer}>
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
            </div>
          </fieldset>
          <fieldset>
            <legend>
              <Title label="Контакты" />
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
            </div>
          </fieldset>
          <fieldset>
            <legend>
              <Title label="Пароль" />
            </legend>
            <div className={styles.inputContainer}>
              <div className={styles.passwordSection}>
                <label htmlFor="password">Пароль </label>
                <span className={styles.tips}>минимум 6 символов</span>
              </div>
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
            </div>
            <div className={styles.inputContainer}>
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
            </div>
          </fieldset>
          <input
            type="submit"
            value="Зарегистрироваться"
            disabled={!passwordsMatch}
          />
        </form>
      </div>
    </>
  );
};
