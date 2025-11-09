import styles from "./add-service-button.module.css";

export const AddServiceButton = ({ onClick }) => {
  const icon = <i className="fa fa-cart-plus fa-2x" aria-hidden="true"></i>;
  const title = "Добавить в личный кабинет";
  return (
    <>
      <button
        id={"add-service"}
        type="button"
        onClick={onClick}
        className={styles.button}
      >
        <span className={styles.icon}>{icon}</span>
        <span className={styles.text}>{title}</span>
      </button>
    </>
  );
};
