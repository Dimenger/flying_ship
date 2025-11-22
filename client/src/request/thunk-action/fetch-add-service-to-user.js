import { addServiceToUser } from "../api";
import { getSuccessMessage } from "../../actions";
import {
  ADD_SERVICE_TO_USER_REQUEST,
  ADD_SERVICE_TO_USER_SUCCESS,
  ADD_SERVICE_TO_USER_FAILURE,
} from "../../actions/service-actions/service-actions";

export const fetchAddServiceToUser =
  (userId, addedServiceId) => async (dispatch) => {
    try {
      dispatch({ type: ADD_SERVICE_TO_USER_REQUEST });
      const result = await addServiceToUser(userId, addedServiceId);
      dispatch({ type: ADD_SERVICE_TO_USER_SUCCESS });
      dispatch(getSuccessMessage(result));
    } catch (error) {
      dispatch({
        type: ADD_SERVICE_TO_USER_FAILURE,
        payload: error.message || error,
      });
    }
  };
