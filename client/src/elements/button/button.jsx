import PropTypes from "prop-types";
import styles from "./button.module.css";

export const Button = ({ children, width }) => {
  return (
    <button className={styles.customButton} style={{ width: width }}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.string,
};
