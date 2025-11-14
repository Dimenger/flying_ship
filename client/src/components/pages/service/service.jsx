import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Title } from "../../../elements/title/title";
import { Failure } from "../../error/error";
import { ERROR } from "../../../constants";
import { Spinner } from "../../../elements/spinner/spinner";
import { fetchService } from "../../../request/thunk-action/";
import { AddServiceButton } from "./components/add-service-button";
import { addServiceToUser } from "../../../request/api/api-add-service-to-user";
import { getImgSrc } from "../../utils/get-img-scr";
import { Notification } from "../../../elements/notification/notification";
import { getSuccessMessage } from "../../../actions";

import styles from "./service.module.css";

export const Service = () => {
  let param = useParams();
  const serId = param.id;

  const service = useSelector((state) => state.service);
  const user = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);

  const userId = user.id;
  const addedServiceId = service._id;
  const Auth = !!userId;

  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    dispatch(fetchService(serId)).finally(() => setLoading(false));
  }, [dispatch, serId]);

  const addService = async () => {
    try {
      const result = await addServiceToUser(userId, addedServiceId);
      dispatch(getSuccessMessage(result));
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) return <Spinner />;
  if (!service.serId) return <Failure error={ERROR.SERVICE_NOT_EXIST} />;

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
      {Auth && <AddServiceButton onClick={addService} />}
      <Notification />
    </div>
  );
};
