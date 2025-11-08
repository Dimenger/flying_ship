import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { getError } from "../../actions";

import styles from "./notification.module.css";

export const Notification = ({ message, success }) => {
  const [isVisible, setIsVisible] = useState(false);
  // const [prevMessage, setPrevMessage] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    if (message) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        dispatch(getError(""));
        setIsVisible(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [message, dispatch]);

  // useEffect(() => {
  //   if (message) {
  //     // Перед показом нового сообщения скрываем предыдущее
  //     setIsVisible(false);
  //     // После полного исчезновения — ставим новое сообщение и показываем его
  //     const hideTimeout = setTimeout(() => {
  //       setPrevMessage(message); // обновляем сообщение
  //       setIsVisible(true); // показываем
  //     }, 500); // короткая задержка для плавного исчезновения

  //     return () => clearTimeout(hideTimeout);
  //   }
  // }, [message]);

  // // Автоматически скрываем сообщение через 2 секунды после появления
  // useEffect(() => {
  //   if (isVisible) {
  //     const timeout = setTimeout(() => {
  //       setIsVisible(false);
  //     }, 3000); // время отображения
  //     return () => clearTimeout(timeout);
  //   }
  // }, [isVisible]);

  // CSS классы
  const classNames = [
    styles.notification,
    isVisible ? styles.visible : styles.invisible,
    success ? styles.success : styles.error,
  ].join(" ");

  return <div className={classNames}>{message}</div>;
};
