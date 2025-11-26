import { apiRemoveServiceFromUser } from "../api";
import {
  USER_FAILURE,
  REMOVE_SERVICE_FROM_USER,
  USER_REQUEST,
} from "../../actions/user-actions/user-actions";

export const fetchRemoveUserService =
  (userId, serviceId) => async (dispatch) => {
    try {
      dispatch({ type: USER_REQUEST });
      await apiRemoveServiceFromUser(userId, serviceId);
      dispatch({ type: REMOVE_SERVICE_FROM_USER, payload: serviceId });
    } catch (error) {
      dispatch({ type: USER_FAILURE, payload: error.message || error });
    }
  };
