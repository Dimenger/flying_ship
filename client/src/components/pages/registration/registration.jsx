import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { RegistrationForm } from "./components/registration-form/registration-form";
import { Notification } from "../../../elements/notification/notification";
import { fetchRegistration } from "../../../request/thunk-action";

export const Registration = () => {
  const success = useSelector((state) => state.user.success);

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

  useEffect(() => {
    if (success) {
      setTimeout(() => navigate("/user"), 2000);
    }
  }, [success, navigate]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      dispatch(fetchRegistration(registeredUserData));

      setSurname("");
      setName("");
      setEmail("");
      setPhone("");
      setPassword("");
      setRepeatPassword("");
    } catch (err) {
      console.error(err.message);
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
