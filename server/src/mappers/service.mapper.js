export const serviceMapper = (service) => ({
  id: service._id.toHexString(),
  serId: service.serId,
  title: service.title,
  subtitle: service.subtitle,
});
