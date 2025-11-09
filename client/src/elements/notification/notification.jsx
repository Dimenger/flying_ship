import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { eraseMessage } from "../../actions";

import styles from "./notification.module.css";

export const Notification = () => {
  const message = useSelector((state) => state.message);
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (message.message) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        dispatch(eraseMessage());
        setIsVisible(false);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [message, dispatch]);

  const classNames = [
    styles.notification,
    isVisible ? styles.visible : styles.invisible,
    message.success ? styles.success : styles.error,
  ].join(" ");

  return <div className={classNames}>{message.message}</div>;
};
