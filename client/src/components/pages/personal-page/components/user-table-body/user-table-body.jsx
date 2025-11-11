import { getImgSrc } from "../../../../../components/utils";
import { PostButton } from "../../../../../elements/post-button/post-button";

import styles from "./user-table-body.module.css";

export const UserTableBody = ({ user, onDeleteService, nextDate }) => {
  return (
    <>
      {user.services.map(({ _id, serId, title, subtitle }) => (
        <tr key={_id} className={styles["tr-container"]}>
          <td>
            <img src={getImgSrc(serId)} alt="service.title" width="200px" />
          </td>
          <td>{title}</td>
          <td>{subtitle}</td>
          <td>{nextDate || "Нет данных"}</td>
          <td>
            <PostButton
              title={"Удалить"}
              onClick={() => onDeleteService(_id)}
              icon={<i className="fa fa-ship fa-lg" aria-hidden="true"></i>}
            />
          </td>
        </tr>
      ))}
    </>
  );
};
