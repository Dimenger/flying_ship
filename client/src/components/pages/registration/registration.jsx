import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getSuccessMessage, getUser, getError } from "../../../actions";
import { RegistrationForm } from "./components/registration-form/registration-form";
import { Notification } from "../../../elements/notification/notification";
import { request } from "../../utils";

export const Registration = () => {
  const [surname, setSurname] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const registeredUserData = {
    surname,
    name,
    email,
    phone,
    password,
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await request("/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(registeredUserData),
        credentials: "include",
      });

      const result = await res.json();

      if (!res.ok) {
        const errorMsg = result.error || `Статус: ${res.status}`;
        throw new Error(errorMsg);
      }
      const { user, success, message } = result;

      setSurname("");
      setName("");
      setEmail("");
      setPhone("");
      setPassword("");
      setRepeatPassword("");

      dispatch(getUser(user));
      dispatch(getSuccessMessage({ success, message }));

      if (success) {
        setTimeout(() => navigate("/user"), 2000);
      }
    } catch (err) {
      console.error(err.message);
      dispatch(getError({ success: false, message: err.message }));
      console.error(err, "Ошибка регистрации!!!");
    }
  };

  const RepeatPasswordChange = (event) => {
    const value = event.target.value;
    setRepeatPassword(value);
    value === password ? setPasswordsMatch(true) : setPasswordsMatch(false);
  };

  return (
    <>
      <RegistrationForm
        surname={surname}
        name={name}
        email={email}
        phone={phone}
        password={password}
        repeatPassword={repeatPassword}
        handleSubmit={handleSubmit}
        RepeatPasswordChange={RepeatPasswordChange}
        setSurname={setSurname}
        setName={setName}
        setEmail={setEmail}
        setPhone={setPhone}
        setPassword={setPassword}
        passwordsMatch={passwordsMatch}
      />
      <Notification />
    </>
  );
};
