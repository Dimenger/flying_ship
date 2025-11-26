import { getService } from "../api";
import {
  SERVICE_REQUEST,
  POST_SERVICE_SUCCESS,
  SERVICE_FAILURE,
} from "../../actions/service-actions/service-actions";

export const fetchService = (serId) => async (dispatch) => {
  try {
    dispatch({ type: SERVICE_REQUEST });
    const service = await getService(serId);
    if (service) {
      dispatch({ type: POST_SERVICE_SUCCESS, payload: service });
    }
  } catch (error) {
    dispatch({ type: SERVICE_FAILURE, payload: error.message || error });
  }
};
