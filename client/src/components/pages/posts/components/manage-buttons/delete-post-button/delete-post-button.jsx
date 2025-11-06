import styles from "./delete-post-button.module.css";

export const DeleteButton = ({ onClick }) => {
  return (
    <>
      <button className={styles.delete} onClick={onClick}>
        <i className="fa fa-trash-o fa-lg" aria-hidden="true"></i>
        <label htmlFor="add-icon" className={styles.lable}>
          Удалить сообщение
        </label>
      </button>
    </>
  );
};
