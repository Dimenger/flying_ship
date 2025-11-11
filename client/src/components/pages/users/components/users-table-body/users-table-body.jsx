import { useState } from "react";
import { useDispatch } from "react-redux";

import { ROLES } from "../../../../../constants";
import { convertRole } from "../../../../utils";
// import { changeUserRole } from "../../../../../request/api/api-change-user-role";
import { fetchEditUserRole } from "../../../../../request/thunk-action/fetch-edit-user-role";

import styles from "./users-table-body.module.css";

export const UsersTableBody = ({
  id,
  surname,
  name,
  registered_at,
  phone,
  email,
  role,
  onDeleteUser,
}) => {
  const [userRole, setUserRole] = useState(role);
  const [isEdit, setIsEdit] = useState(false);

  const dispatch = useDispatch();

  const onSaveChange = async (id) => {
    try {
      await dispatch(fetchEditUserRole(id, userRole));
    } catch (error) {
      console.error(error);
    }
    setIsEdit(false);
  };

  return (
    <tr className={styles["tr-container"]}>
      <td>{surname}</td>
      <td>{name}</td>
      <td>{registered_at}</td>
      <td>{phone}</td>
      <td>{email}</td>
      <td>
        <select
          value={convertRole(userRole)}
          disabled={!isEdit}
          className={styles.select}
          onChange={(e) => {
            setUserRole(e.target.value);
          }}
        >
          {Object.values(ROLES).map((role) => (
            <option key={role} value={convertRole(role)}>
              {convertRole(role)}
            </option>
          ))}
        </select>
      </td>
      {isEdit ? (
        <td onClick={() => onSaveChange(id)} className={styles["control-icon"]}>
          <i className="fa fa-floppy-o fa-lg" aria-hidden="true"></i>
        </td>
      ) : (
        <td onClick={() => setIsEdit(true)} className={styles["control-icon"]}>
          <i className="fa fa-pencil-square-o fa-lg" aria-hidden="true"></i>
        </td>
      )}

      <td onClick={() => onDeleteUser(id)} className={styles["control-icon"]}>
        {<i className="fa fa-trash-o fa-lg" aria-hidden="true"></i>}
      </td>
    </tr>
  );
};
