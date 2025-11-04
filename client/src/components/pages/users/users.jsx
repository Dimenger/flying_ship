import { useEffect, useState } from "react";
import styles from "./users.module.css";
import { Spinner } from "../../../elements/spinner/spinner";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../../thunk-action";
import { fetchDeleteUser } from "../../../thunk-action";

export const Users = () => {
  const users = useSelector((state) => state.users);

  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    dispatch(fetchUsers()).finally(() => setLoading(false));
  }, [dispatch]);

  const onDeleteUser = async (id) => {
    try {
      console.log("deleteUser:", id);
      dispatch(fetchDeleteUser(id));
    } catch (error) {
      console.error(error);
    }
  };

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
              <th scope="col">Дата регистрации</th>
              <th scope="col">Телефон</th>
              <th scope="col">email</th>
              <th scope="col">Роль</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {users.map(
              ({ id, surname, name, registered_at, phone, email, role }) => (
                <tr key={id}>
                  <td>{surname}</td>
                  <td>{name}</td>
                  <td>{registered_at}</td>
                  <td>{phone}</td>
                  <td>{email}</td>
                  <td>{role}</td>
                  <td onClick={() => onDeleteUser(id)}>
                    {<i className="fa fa-trash-o" aria-hidden="true"></i>}
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
