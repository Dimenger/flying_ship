import { useEffect, useState } from "react";
import styles from "./users.module.css";
import { Spinner } from "../../../elements/spinner/spinner";

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

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
      } finally {
        setLoading(false);
      }
    };
    getUsers();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className={styles["users-container"]}>
      <div>
        <table>
          <caption>Список пользователей</caption>
          <thead>
            <tr>
              <th scope="col">Фамилия</th>
              <th scope="col">Имя</th>
              <th scope="col">Пароль</th>
              <th scope="col">Дата регистрации</th>
              <th scope="col">Телефон</th>
              <th scope="col">email</th>
              <th scope="col">Роль</th>
            </tr>
          </thead>
          <tbody>
            {users.map(
              ({
                id,
                surname,
                name,
                password,
                registered_at,
                phone,
                email,
                role,
              }) => (
                <tr key={id}>
                  <td>{surname}</td>
                  <td>{name}</td>
                  <td>{password}</td>
                  <td>{registered_at}</td>
                  <td>{phone}</td>
                  <td>{email}</td>
                  <td>{role}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
