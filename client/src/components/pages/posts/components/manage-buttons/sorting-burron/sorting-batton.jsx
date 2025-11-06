import styles from "./sorting-batton.module.css";

export const SortingButton = ({ onClick }) => {
  return (
    <>
      <button className={styles.sorting} onClick={onClick}>
        <i
          id="sorting-icon"
          className="fa fa-sort fa-2x"
          aria-hidden="true"
        ></i>
        <label htmlFor="sorting-icon" className={styles.lable}>
          Сортировка по дате
        </label>
      </button>
    </>
  );
};
