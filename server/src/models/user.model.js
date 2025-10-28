import mongoose from "mongoose";
import validator from "validator";

const UserShema = new mongoose.Schema({
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
    required: true,
  },
  registered_at: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
});

export const User = mongoose.model("User", UserShema);
