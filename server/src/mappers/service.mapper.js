export const serviceMapper = (service) => ({
  _id: service._id.toHexString(),
  serId: service.serId,
  title: service.title,
  subtitle: service.subtitle,
});
