import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Title } from "../../../elements/title/title";
import { Failure } from "../../error/error";
import { ERROR } from "../../../constants";
import { Spinner } from "../../../elements/spinner/spinner";
import { fetchService } from "../../../request/thunk-action/";
import { AddServiceButton } from "./components/add-service-button";
import { getImgSrc } from "../../utils/get-img-scr";
import { Notification } from "../../../elements/notification/notification";
import { fetchAddServiceToUser } from "../../../request/thunk-action/";

import styles from "./service.module.css";

export const Service = () => {
  let param = useParams();
  const serId = param.id;

  const service = useSelector((state) => state.service);
  const user = useSelector((state) => state.user);

  const userId = user?.id;
  const addedServiceId = service?.id;
  const isAuth = !!userId;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchService(serId));
  }, [dispatch, serId]);

  if (service.isLoading) return <Spinner />;
  if (!service.serId)
    return <Failure error={service?.failure || ERROR.SERVICE_NOT_EXIST} />;

  return (
    <div className={styles.serviceContainer}>
      <div className={styles.imageWrapper}>
        <img src={getImgSrc(serId)} alt="" />
      </div>
      <div className={styles.content}>
        <Title label={service.title} fontSize="26px" />
        <Title label={service.subtitle} />
        <div className={styles.prices}>
          {service.prices.map(({ title, price }, index) => (
            <div key={index} className={styles.priceItem}>
              {title} : {price}
            </div>
          ))}
        </div>

        <p>{service.description}</p>

        <div className={styles.aims}>
          {service.aims.map(({ title, text }, index) => (
            <div key={index} className={styles.aimItem}>
              <strong>{title}</strong>: {text}
            </div>
          ))}
        </div>
      </div>
      {isAuth && (
        <AddServiceButton
          onClick={() =>
            dispatch(fetchAddServiceToUser(userId, addedServiceId))
          }
        />
      )}
      <Notification />
    </div>
  );
};
