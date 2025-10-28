import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Title } from "../../../elements/title/title";
import { SERVICES_IMAGES } from "../../../constants/services-images";
import { Error } from "../../error/error";
import { ERROR } from "../../../constants";
import { Spinner } from "../../../elements/spinner/spinner";
import { fetchService } from "../../../thunk-action";

import styles from "./services.module.css";
import { useDispatch, useSelector } from "react-redux";

export const Service = () => {
  let param = useParams();
  const id = param.id;

  const service = useSelector((state) => state.service);
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

  if (loading) return <Spinner />;
  if (!service) return <Error error={ERROR.SERVICE_NOT_EXIST} />;

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
    </div>
  );
};
