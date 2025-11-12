import { getUserServices } from "../api";
import { getUserServicesList } from "../../actions";

export const fetchGetUserServices = (userId) => async (dispatch) => {
  const result = await getUserServices(userId);
  const userServices = result.services;
  dispatch(getUserServicesList(userServices));
};
