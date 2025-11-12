import PropTypes from "prop-types";

import styles from "./title.module.css";

export const Title = ({ label, fontSize, color }) => {
  return (
    <h2 className={styles.title} style={{ fontSize, color }}>
      {label}
    </h2>
  );
};

Title.propTypes = {
  label: PropTypes.string,
  fontSize: PropTypes.string,
  color: PropTypes.string,
};
