import { useEffect, useState } from "react";
import { Spinner } from "../../../elements/spinner/spinner";
import { useDispatch, useSelector } from "react-redux";
import { fetchDeleteUser, fetchUsers } from "../../../request/thunk-action";
import { UsersTableHeader } from "./components/users-table-header/users-table-header";
import { UsersTableBody } from "./components/users-table-body/users-table-body";
import { Modal } from "../../../components/modal/modal";

import styles from "./users.module.css";

export const Users = () => {
  const users = useSelector((state) => state.users);

  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [userToDeletId, setUserToDeletId] = useState(null);

  const question = "Удалить пользователя?";

  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    dispatch(fetchUsers()).finally(() => setLoading(false));
  }, [dispatch]);

  const onDeleteUser = (id) => {
    setIsOpen(true);
    setUserToDeletId(id);
  };

  const onConfirm = async (userToDeletId) => {
    try {
      dispatch(fetchDeleteUser(userToDeletId));
      setIsOpen(false);
      setUserToDeletId(null);
    } catch (error) {
      console.error(error);
    }
  };
  const onCancel = () => {
    setIsOpen(false);
    setUserToDeletId(null);
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
      <Modal
        question={question}
        isOpen={isOpen}
        onConfirm={onConfirm}
        onCancel={onCancel}
        itemToDeletId={userToDeletId}
      />
    </div>
  );
};

// const onDeleteUser = async (id) => {
//   try {
//     dispatch(fetchDeleteUser(id));
//   } catch (error) {
//     console.error(error);
//   }
// };
