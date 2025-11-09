import { apiRemoveServiceFromUser } from "../api";
import { getUserServices } from "../api";
import { getUserServicesList } from "../../actions";

export const fetchRemoveUserService =
  (userId, serviceId) => async (dispatch) => {
    await apiRemoveServiceFromUser(userId, serviceId);
    const result = await getUserServices(userId);
    const userServices = result.services;
    dispatch(getUserServicesList(userServices));
  };
