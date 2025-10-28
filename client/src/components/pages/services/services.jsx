import { Title } from "../../../elements/title/title";
import { SERVICES_IMAGES } from "../../../constants";

import styles from "./services.module.css";
import { Link } from "react-router-dom";

export const Services = () => {
  return (
    <div>
      <Title label="Наши программы" fontSize="30px" />
      <div className={styles.servicesContainer}>
        {SERVICES_IMAGES.map(({ id, src, title }) => (
          <Link key={id} to={id} className={styles.link}>
            <figure className={styles.service}>
              <img
                src={src}
                alt={title}
                width="300px"
                height="200px"
                className={styles.image}
              />
              <figcaption>
                <Title label={title} />
              </figcaption>
            </figure>
          </Link>
        ))}
      </div>
    </div>
  );
};
