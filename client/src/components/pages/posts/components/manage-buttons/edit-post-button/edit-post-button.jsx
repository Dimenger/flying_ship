import styles from "./edit-post-button.module.css";

export const EditButton = ({ onClick }) => {
  return (
    <>
      <button className={styles.edit} onClick={onClick}>
        <i className="fa fa-pencil-square-o fa-lg" aria-hidden="true"></i>
        <label htmlFor="add-icon" className={styles.lable}>
          Редактировать сообщение
        </label>
      </button>
    </>
  );
};
