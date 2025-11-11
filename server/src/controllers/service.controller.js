import { Service } from "../models/service.model.js";

export const getService = async (serId) => {
  const service = await Service.findOne({ serId: serId });

  return service;
};
