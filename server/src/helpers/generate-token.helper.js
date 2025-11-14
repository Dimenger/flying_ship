import jwt from "jsonwebtoken";
import { API_KEY } from "../constants/secret.js";

export const generateToken = (userData) => {
  return jwt.sign(userData, API_KEY, { expiresIn: "1d" });
};

/*

import jwt from "jsonwebtoken";

export const generateToken = (userData) => {
  return jwt.sign(userData, process.env.API_KEY, { expiresIn: "1d" });
};

*/
