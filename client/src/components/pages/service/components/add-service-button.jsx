import PropTypes from "prop-types";

import styles from "./add-service-button.module.css";

export const AddServiceButton = ({ onClick, isFavorite }) => {
  const icon = <i className="fa fa-cart-plus fa-2x" aria-hidden="true"></i>;
  const favoriteIcon = (
    <i className="fa fa-bookmark fa-2x" aria-hidden="true"></i>
  );
  const title = "Добавить в личный кабинет";
  const favoriteTitle = "Направление в личном кабинете";
  return (
    <>
      <button
        id={"add-service"}
        type="button"
        onClick={onClick}
        className={styles.button}
        disabled={isFavorite}
      >
        <span className={styles.icon}>{isFavorite ? favoriteIcon : icon}</span>
        <span className={styles.text}>
          {isFavorite ? favoriteTitle : title}
        </span>
      </button>
    </>
  );
};

AddServiceButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
