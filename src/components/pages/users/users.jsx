import { useEffect, useState } from "react";
import styles from "./users.module.css";

export const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await fetch("http://localhost:3000/users");
        if (!res.ok) {
          throw new Error(`Ошибка: ${res.status}. Текст: ${res.statusText}`);
        }
        const loadedUsers = await res.json();
        setUsers(loadedUsers);
      } catch (error) {
        console.error(error);
      }
    };
    getUsers();
  }, []);

  return (
    <div className={styles["users-container"]}>
      <div>
        <table>
          <caption>Список пользователей</caption>
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Дата регистрации</th>
              <th scope="col">Роль</th>
            </tr>
          </thead>
          <tbody>
            {users.map(({ id, login, registered_at, role }) => (
              <tr key={id}>
                <td>{login}</td>
                <td>{registered_at}</td>
                <td>{role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
