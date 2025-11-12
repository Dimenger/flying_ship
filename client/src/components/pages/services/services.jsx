import { Link } from "react-router-dom";
import { Title } from "../../../elements/title/title";
import { SERVICES_IMAGES } from "../../../constants";

import styles from "./services.module.css";

export const Services = () => {
  return (
    <div>
      <Title label="Наши программы" fontSize="30px" />
      <div className={styles["services-container"]}>
        {SERVICES_IMAGES.map(({ serId, src, title }) => (
          <Link key={serId} to={serId} className={styles.link}>
            <figure className={styles.service}>
              <img
                src={src}
                alt={title}
                width="240px"
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
