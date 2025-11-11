import styles from "./user-table-header.module.css";

export const UserTableHeader = () => {
  return (
    <tr className={styles["tr-container"]}>
      <th scope="col" colSpan="2">
        Название
      </th>
      <th scope="col">Возраст</th>
      <th scope="col">Дата занятия</th>
      <th scope="col">Покинуть порт!</th>
    </tr>
  );
};
