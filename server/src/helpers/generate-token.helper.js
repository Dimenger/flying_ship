import jwt from "jsonwebtoken";

export const generateToken = (userData) => {
  return jwt.sign(userData, process.env.API_KEY, { expiresIn: "1d" });
};
