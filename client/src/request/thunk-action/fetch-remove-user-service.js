import { getUserServices, apiRemoveServiceFromUser } from "../api";
import { getSuccessMessage } from "../../actions";
import {
  USER_FAILURE,
  GET_USER_SERVICES_SUCCESS,
} from "../../actions/user-actions/user-actions";

export const fetchRemoveUserService =
  (userId, serviceId) => async (dispatch) => {
    try {
      const deleteRes = await apiRemoveServiceFromUser(userId, serviceId);
      dispatch(getSuccessMessage(deleteRes));
      const result = await getUserServices(userId);
      const userServices = result.services;
      dispatch({ type: GET_USER_SERVICES_SUCCESS, payload: userServices });
    } catch (error) {
      dispatch({ type: USER_FAILURE, payload: error.message || error });
    }
  };
