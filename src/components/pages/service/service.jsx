import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Title } from "../../../elements/title/title";
import { SERVICES_IMAGES } from "../../../constants/services-images";
import { Error } from "../../error/error";
import { ERROR } from "../../../constants";
import { Spinner } from "../../../elements/spinner/spinner";

import styles from "./services.module.css";

export const Service = () => {
  let param = useParams();
  const id = param.id;

  const [service, setServices] = useState(null);
  const [prices, setPrices] = useState(null);
  const [aims, setAims] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getService = async (id) => {
      try {
        const res = await fetch("http://localhost:3000/services");
        if (!res.ok) {
          throw new Error(`Error, ${res.status}, ${res.statusText}`);
        }
        const services = await res.json();

        const service = services.find((user) => id === user.id);
        if (!service) {
          setLoading(false);
          return;
        }
        const prices = service.prices;
        const aims = service.aims;
        setServices(service);
        setPrices(prices);
        setAims(aims);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    getService(id);
  }, [id]);

  const getSRC = (id) => {
    const imgSrs = SERVICES_IMAGES.find((img) => id === img.id);
    if (!imgSrs) {
      return null;
    }
    return imgSrs.src;
  };

  if (loading) return <Spinner />;
  if (!service) return <Error error={ERROR.SERVICE_NOT_EXIST} />;

  console.log(prices, aims);

  return (
    <div className={styles.serviceContainer}>
      <div className={styles.imageWrapper}>
        <img src={getSRC(id)} alt="" />
      </div>
      <div className={styles.content}>
        <Title label={service.title} fontSize="26px" />
        <Title label={service.subtitle} />

        <div className={styles.prices}>
          {prices.map(({ title, price }, index) => (
            <div key={index} className={styles.priceItem}>
              {title} : {price}
            </div>
          ))}
        </div>

        <p>{service.description}</p>

        <div className={styles.aims}>
          {aims.map(({ title, text }, index) => (
            <div key={index} className={styles.aimItem}>
              <strong>{title}</strong>: {text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
