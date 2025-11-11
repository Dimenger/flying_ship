import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { Title } from "../../../elements/title/title";
import { Spinner } from "../../../elements/spinner/spinner";
import {
  fetchGetUserServices,
  fetchRemoveUserService,
} from "../../../request/thunk-action";
import { UserTableHeader } from "./components/user-table-header/user-table-header";
import { UserTableBody } from "./components/user-table-body/user-table-body";
import { Notification } from "../../../elements/notification/notification";

import styles from "./personal-page.module.css";

export const PersonalPage = () => {
  const user = useSelector((state) => state.user);

  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    dispatch(fetchGetUserServices(user.id)).then(() => setLoading(false));
  }, [dispatch, user.id]);

  const onDeleteService = (userId, serviceId) => {
    try {
      dispatch(fetchRemoveUserService(userId, serviceId));
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return <Spinner />;
  }

  const nextDate = "Data";

  return (
    <div>
      <Title
        label={`${user.name} добро пожаловать на борт!`}
        fontSize={"30px"}
      />
      <Title
        label={`Здесь находится список выбранных вами занятий.`}
        fontSize={"20px"}
      />
      <table>
        <caption className={styles.caption}>
          Список ваших любимых гаваней!
        </caption>
        <thead>
          <UserTableHeader />
        </thead>
        <tbody>
          <UserTableBody
            user={user}
            onDeleteService={onDeleteService}
            nextDate={nextDate}
          />
        </tbody>
      </table>
      <Notification />
    </div>
  );
};
