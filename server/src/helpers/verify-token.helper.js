import jwt from "jsonwebtoken";
import { API_KEY } from "../constants/secret.js";

export const verifyToken = (token) => {
  return jwt.verify(token, API_KEY);
};

/*
import jwt from "jsonwebtoken";

export const verifyToken = (token) => {
  return jwt.verify(token, process.env.API_KEY);
};

*/
