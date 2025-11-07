import { PostButton } from "../../../../../../elements/post-button/post-button";
// import styles from "./sorting-batton.module.css";

export const SortingButton = ({ onClick }) => {
  const icon = (
    <i id="sorting-icon" className="fa fa-sort fa-lg" aria-hidden="true"></i>
  );

  const title = "Сортировка по дате";

  return <PostButton onClick={onClick} icon={icon} title={title} />;
};

{
  /* <button className={styles.sorting} onClick={onClick}>
        <i
          id="sorting-icon"
          className="fa fa-sort fa-2x"
          aria-hidden="true"
        ></i>
        <label htmlFor="sorting-icon" className={styles.lable}>
          Сортировка по дате
        </label>
      </button> */
}
