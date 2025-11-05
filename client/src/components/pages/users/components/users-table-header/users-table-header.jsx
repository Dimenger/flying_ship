import styles from "./users-table-header.module.css";

export const UsersTableHeader = () => {
  return (
    <tr className={styles["tr-container"]}>
      <th scope="col">Фамилия</th>
      <th scope="col">Имя</th>
      <th scope="col">Регистрации</th>
      <th scope="col">Телефон</th>
      <th scope="col">Email</th>
      <th scope="col">Права</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  );
};
