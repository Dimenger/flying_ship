import PropTypes from "prop-types";

import { useEffect } from "react";
import { getImgSrc } from "../../../../../components/utils";
import { PostButton } from "../../../../../elements/post-button/post-button";

import styles from "./user-table-body.module.css";

export const UserTableBody = ({ user, onDeleteService, setSerIdList }) => {
  useEffect(() => {
    const serIdList = user.services.map((service) => service.serId);
    setSerIdList(serIdList);
  }, [user.services, setSerIdList]);

  return (
    <>
      {user.services.map(({ id, serId, title, subtitle }) => (
        <tr key={id} className={styles["tr-container"]}>
          <td>
            <img src={getImgSrc(serId)} alt="service.title" width="200px" />
          </td>
          <td>{title}</td>
          <td>{subtitle}</td>

          <td>
            <PostButton
              title={"Удалить"}
              onClick={() => onDeleteService(id)}
              icon={<i className="fa fa-ship fa-lg" aria-hidden="true"></i>}
            />
          </td>
        </tr>
      ))}
    </>
  );
};

UserTableBody.propTypes = {
  user: PropTypes.string.isRequired,
  onDeleteService: PropTypes.func.isRequired,
  setSerIdList: PropTypes.func.isRequired,
};
