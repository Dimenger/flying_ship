import { COMMUNICATION } from "../../constants";

import styles from "./social-icon.module.css";

export const SocialIcon = () => {
  return (
    <div>
      {COMMUNICATION.social.map(({ id, vk, icon }) => (
        <a key={id} href={vk} className={styles.icon}>
          <i className={icon}></i>
        </a>
      ))}
    </div>
  );
};
