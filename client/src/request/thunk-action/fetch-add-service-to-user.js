import { addServiceToUser } from "../api";
import { getSuccessMessage } from "../../actions";
import {
  SERVICE_REQUEST,
  ADD_SERVICE_TO_USER_SUCCESS,
  SERVICE_FAILURE,
} from "../../actions/service-actions/service-actions";

export const fetchAddServiceToUser =
  (userId, addedServiceId) => async (dispatch) => {
    try {
      dispatch({ type: SERVICE_REQUEST });
      const result = await addServiceToUser(userId, addedServiceId);
      dispatch({ type: ADD_SERVICE_TO_USER_SUCCESS });
      dispatch(getSuccessMessage(result));
    } catch (error) {
      dispatch({
        type: SERVICE_FAILURE,
        payload: error.message || error,
      });
    }
  };
