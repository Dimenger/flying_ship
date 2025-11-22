import { Service } from "../models/service.model.js";

export const getService = async (serId) => {
  try {
    const service = await Service.findOne({ serId: serId });
    if (!service) {
      throw new Error("Такого направления не существует!");
    }
    return service;
  } catch (error) {
    throw error;
  }
};
