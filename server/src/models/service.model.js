import mongoose from "mongoose";
import validator from "validator";

const ServiceShema = new mongoose.Schema({
  serId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  prices: {
    type: Array,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  aims: {
    type: Array,
    required: true,
  },
});

export const Service = mongoose.model("Service", ServiceShema);
