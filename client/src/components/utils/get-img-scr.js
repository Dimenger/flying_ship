import { SERVICES_IMAGES } from "../../constants";

export const getImgSrc = (serId) => {
  const imgSrs = SERVICES_IMAGES.find((img) => serId === img.serId);
  if (!imgSrs) {
    return null;
  }
  return imgSrs.src;
};
