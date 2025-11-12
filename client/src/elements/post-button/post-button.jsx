import PropTypes from "prop-types";

import styles from "./post-button.module.css";

export const PostButton = ({ icon, title, onClick }) => {
  return (
    <button title={title} onClick={onClick} className={styles["post-button"]}>
      {icon}
    </button>
  );
};

PostButton.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
