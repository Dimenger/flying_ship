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
