import {
  SERVICE_REQUEST,
  POST_SERVICE_SUCCESS,
  SERVICE_FAILURE,
} from "../../actions/service-actions/service-actions";
import { getService } from "../api";

export const fetchService = (serId) => async (dispatch) => {
  try {
    dispatch({ type: SERVICE_REQUEST });
    const service = await getService(serId);
    dispatch({ type: POST_SERVICE_SUCCESS, payload: service });
  } catch (error) {
    dispatch({ type: SERVICE_FAILURE, payload: error.message || error });
  }
};
