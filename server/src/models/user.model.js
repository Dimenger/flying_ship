import mongoose from "mongoose";
import validator from "validator";

import { ROLES } from "../constants/roles.constant.js";

const UserShema = new mongoose.Schema(
  {
    surname: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: { validator: validator.isEmail, message: "Invalid email" },
    },
    phone: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      minLength: 6,
      required: true,
    },
    role: {
      type: Number,
      default: ROLES.USER,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", UserShema);
