import styles from "./enter-exit.module.css";

export const EnterExit = () => {
  const flag = true;

  return (
    <div className={styles.EnterExit}>
      {flag ? (
        <i className="fa fa-sign-in fa-2x" aria-hidden="true"></i>
      ) : (
        <i
          className="fa fa-sign-in fa-flip-horizontal fa-2x"
          aria-hidden="true"
        ></i>
      )}
    </div>
  );
};
