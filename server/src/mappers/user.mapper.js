export const userMapper = (user) => ({
  id: user._id.toHexString(),
  surname: user.surname,
  name: user.name,
  phone: user.phone,
  email: user.email,
  role: user.role,
  registered_at: user.createdAt,
});
