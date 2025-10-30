import { Service } from "../models/service.model.js";

export const getService = async (id) => {
  const service = await Service.findOne({ id: id });
  return service;
};

// add
// edit
// delete
