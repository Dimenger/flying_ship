import { useEffect, useState } from "react";
import { Spinner } from "../../../elements/spinner/spinner";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../../thunk-action";
import { fetchDeleteUser } from "../../../thunk-action";
import { UsersTableHeader } from "./components/users-table-header/users-table-header";
import { UsersTableBody } from "./components/users-table-body/users-table-body";

import styles from "./users.module.css";

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
            <UsersTableHeader />
          </thead>
          <tbody>
            {users.map(
              ({ id, surname, name, registered_at, phone, email, role }) => (
                <UsersTableBody
                  key={id}
                  id={id}
                  surname={surname}
                  name={name}
                  registered_at={registered_at}
                  phone={phone}
                  email={email}
                  role={role}
                  onDeleteUser={() => onDeleteUser(id)}
                />
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
