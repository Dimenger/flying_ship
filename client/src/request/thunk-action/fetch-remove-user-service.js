import { apiRemoveServiceFromUser } from "../api";
import { getUserServices } from "../api";
import { getSuccessMessage, getUserServicesList } from "../../actions";

export const fetchRemoveUserService =
  (userId, serviceId) => async (dispatch) => {
    const deleteRes = await apiRemoveServiceFromUser(userId, serviceId);
    dispatch(getSuccessMessage(deleteRes));
    const result = await getUserServices(userId);
    const userServices = result.services;
    dispatch(getUserServicesList(userServices));
  };
