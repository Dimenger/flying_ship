import styles from "./add-post-button.module.css";

export const AddButton = ({ onClick }) => {
  return (
    <>
      <button className={styles.sorting} onClick={onClick}>
        <i id="add-icon " className="fa fa-plus fa-lg" aria-hidden="true"></i>
        <label htmlFor="add-icon" className={styles.lable}>
          Добавить статью
        </label>
      </button>
    </>
  );
};
