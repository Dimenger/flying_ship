import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Title } from "../../../elements/title/title";
import { SERVICES_IMAGES } from "../../../constants/services-images";
import { Failure } from "../../error/error";
import { ERROR } from "../../../constants";
import { Spinner } from "../../../elements/spinner/spinner";
import { fetchService } from "../../../request/thunk-action/";
import { AddServiceButton } from "./components/add-service-button";
import { addServiceToUser } from "../../../request/api/api-add-service-to-user";

import styles from "./services.module.css";

export const Service = () => {
  let param = useParams();
  const id = param.id;

  const service = useSelector((state) => state.service);
  const user = useSelector((state) => state.user);
  const userId = user.id;
  const addedServiceId = service._id;

  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    dispatch(fetchService(id)).finally(() => setLoading(false));
  }, [dispatch, id]);

  const getSRC = (id) => {
    const imgSrs = SERVICES_IMAGES.find((img) => id === img.id);
    if (!imgSrs) {
      return null;
    }
    return imgSrs.src;
  };

  const addService = async () => {
    try {
      const result = await addServiceToUser(userId, addedServiceId);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) return <Spinner />;
  if (!service.id) return <Failure error={ERROR.SERVICE_NOT_EXIST} />;

  return (
    <div className={styles.serviceContainer}>
      <div className={styles.imageWrapper}>
        <img src={getSRC(id)} alt="" />
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
      <AddServiceButton onClick={addService} />
    </div>
  );
};
