import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Title } from "../../../elements/title/title";
import { fetchGetUser } from "../../../request/thunk-action/fetch-get-user";
import { Notification } from "../../../elements/notification/notification";
import { getError } from "../../../actions";

import styles from "./login.module.css";

export const Login = () => {
  const errMessage = useSelector((state) => state.error);
  console.log(errMessage);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSuccess, setIsSuccess] = useState(null);

  const userLoginData = { email, password };
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setEmail("");
      setPassword("");

      await dispatch(fetchGetUser(userLoginData));

      navigate("/user");
      setIsSuccess(true);
    } catch (error) {
      dispatch(getError(error.message));
      setIsSuccess(false);
      console.error("handleSubmit: Ошибка авторизации:", error);
    }
  };

  return (
    <div>
      <Notification message={errMessage.error} success={isSuccess} />
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
