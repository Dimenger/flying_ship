import { useState } from "react";
import { ROLES } from "../../../../../constants";
import { convertRole } from "../../../../utils";

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

  const onSaveChange = async (id) => {
    try {
      const res = await fetch(`http://localhost:3000/users/users/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userRole }),
        credentials: "include",
      });
      if (!res.ok) {
        throw new Error(`Ошибка: ${res.status}. ${res.statusText}`);
      }
      const result = await res.json();
      console.log(result);
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
        <td onClick={() => onSaveChange(id)}>
          <i className="fa fa-floppy-o fa-2x" aria-hidden="true"></i>
        </td>
      ) : (
        <td onClick={() => setIsEdit(true)}>
          <i className="fa fa-pencil-square-o fa-2x" aria-hidden="true"></i>
        </td>
      )}

      <td onClick={() => onDeleteUser(id)}>
        {<i className="fa fa-trash-o fa-2x" aria-hidden="true"></i>}
      </td>
    </tr>
  );
};
