import { addServiceToUser } from "../api";
import { getSuccessMessage } from "../../actions";
import {
  USER_REQUEST,
  ADD_SERVICE_TO_USER_SUCCESS,
  USER_FAILURE,
} from "../../actions/user-actions/user-actions";

export const fetchAddServiceToUser =
  (userId, addedServiceId) => async (dispatch) => {
    try {
      dispatch({ type: USER_REQUEST });
      const result = await addServiceToUser(userId, addedServiceId);
      dispatch({ type: ADD_SERVICE_TO_USER_SUCCESS, payload: addedServiceId });
      dispatch(getSuccessMessage(result));
    } catch (error) {
      dispatch({
        type: USER_FAILURE,
        payload: error.message || error,
      });
    }
  };
