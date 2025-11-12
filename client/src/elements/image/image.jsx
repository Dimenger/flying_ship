import PropTypes from "prop-types";

import styles from "./image.module.css";

export const Image = ({ image, alt, width, height, className }) => {
  const imageStyles = {
    width,
    height,
  };
  return (
    <div className={styles.logoContainer}>
      <img src={image} alt={alt} style={imageStyles} className={className} />
    </div>
  );
};

Image.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
};
