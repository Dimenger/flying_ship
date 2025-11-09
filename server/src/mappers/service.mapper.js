export const serviceMapper = (service) => ({
  _id: service._id.toHexString(),
  id: service.id,
  title: service.title,
  subtitle: service.subtitle,
  prices: service.prices,
});
