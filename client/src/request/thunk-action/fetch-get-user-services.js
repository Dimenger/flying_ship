import { getUserServices } from "../api";
import {
  GET_USER_SERVICES_SUCCESS,
  USER_FAILURE,
  USER_REQUEST,
} from "../../actions/user-actions/user-actions";

export const fetchGetUserServices = (userId) => async (dispatch) => {
  try {
    dispatch({ type: USER_REQUEST });
    const result = await getUserServices(userId);
    const userServices = result.services;
    dispatch({ type: GET_USER_SERVICES_SUCCESS, payload: userServices });
  } catch (error) {
    dispatch({ type: USER_FAILURE, payload: error.message || error });
  }
};
