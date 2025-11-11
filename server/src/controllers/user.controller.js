import { User } from "../models/user.model.js";
import { serviceMapper } from "../mappers/service.mapper.js";

export const addService = async (id, addedServiceId) => {
  try {
    await User.findByIdAndUpdate(id, {
      $addToSet: { services: addedServiceId },
    });
  } catch (err) {
    throw err;
  }
};

export const getServices = async (userId) => {
  try {
    const fullUser = await User.findById(userId).populate("services");
    const useServices = fullUser.services;
    const result = useServices.map(serviceMapper);
    return result;
  } catch (err) {
    throw err;
  }
};

export const removeService = async (userId, serviceId) => {
  try {
    await User.findByIdAndUpdate(userId, {
      $pull: { services: serviceId },
    });
  } catch (err) {
    throw err;
  }
};
