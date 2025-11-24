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
// import { Modal } from "../../modal/modal";
import { Portal } from "../../portal/portal";
import { Schedule } from "../schedule/schedule";

import styles from "./personal-page.module.css";

export const PersonalPage = () => {
  const user = useSelector((state) => state.user);
  const loading = useSelector((state) => state.user.isLoading);

  const [isOpen, setIsOpen] = useState(false);
  const [serviceToDeletId, setServiceToDeletId] = useState(null);
  const [serIdList, setSerIdList] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGetUserServices(user.id));
  }, [dispatch, user.id]);

  const onDeleteService = (serviceId) => {
    setIsOpen(true);
    setServiceToDeletId(serviceId);
  };

  const onConfirm = async (serviceToDeletId) => {
    try {
      dispatch(fetchRemoveUserService(user.id, serviceToDeletId));
      setIsOpen(false);
      setServiceToDeletId(null);
    } catch (error) {
      console.error(error);
    }
  };

  const onCancel = () => {
    setIsOpen(false);
    setServiceToDeletId(null);
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      <Title
        label={`${user.name} добро пожаловать на борт!`}
        fontSize={"30px"}
      />
      <Title
        label={
          <div className={styles.subheader}>
            <span>Здесь находится список ваших занятий.</span>
            <br />
            <span>Вы можете выбрать нужные вам в разделе «Направления»!</span>
          </div>
        }
        fontSize={"20px"}
      />
      <table className={styles.table}>
        {!serIdList.length ? (
          <caption className={styles.caption}>
            Список ваших любимых гаваней пока пуст!
          </caption>
        ) : (
          <caption className={styles.caption}>
            Список ваших любимых гаваней!
          </caption>
        )}
        <thead>
          <UserTableHeader />
        </thead>
        <tbody>
          <UserTableBody
            user={user}
            onDeleteService={onDeleteService}
            setSerIdList={setSerIdList}
          />
        </tbody>
      </table>
      {!!serIdList.length && <Schedule allowedSerIds={serIdList} />}
      <Notification />
      <Portal
        question={"Удалить направление!"}
        isOpen={isOpen}
        onConfirm={onConfirm}
        onCancel={onCancel}
        itemToDeletId={serviceToDeletId}
      />
      {/* <Modal
        question={"Удалить направление!"}
        isOpen={isOpen}
        onConfirm={onConfirm}
        onCancel={onCancel}
        itemToDeletId={serviceToDeletId}
      /> */}
    </div>
  );
};
