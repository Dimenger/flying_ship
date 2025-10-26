import { Title } from "../../../elements/title/title";
import { SERVICES_IMAGES } from "../../../constants";

import styles from "./services.module.css";

export const Services = () => {
  return (
    <div>
      <Title label="Наши программы" fontSize="30px" />
      <div className={styles.servicesContainer}>
        {SERVICES_IMAGES.map(({ id, src, title }) => (
          <figure key={id} className={styles.service}>
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
        ))}
      </div>
    </div>
  );
};
