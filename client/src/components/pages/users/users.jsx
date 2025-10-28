import { useEffect, useState } from "react";
import styles from "./users.module.css";
import { Spinner } from "../../../elements/spinner/spinner";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../../thunk-action";

export const Users = () => {
  const users = useSelector((state) => state.users);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    dispatch(fetchUsers()).finally(() => setLoading(false));
  }, [dispatch]);

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
