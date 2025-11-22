import {
  POST_SERVICE_REQUEST,
  POST_SERVICE_SUCCESS,
  POST_SERVICE_FAILURE,
} from "../../actions/service-actions/service-actions";
import { getService } from "../api";

export const fetchService = (serId) => async (dispatch) => {
  try {
    dispatch({ type: POST_SERVICE_REQUEST });
    const service = await getService(serId);
    dispatch({ type: POST_SERVICE_SUCCESS, payload: service });
  } catch (error) {
    console.log(error);
    dispatch({ type: POST_SERVICE_FAILURE, payload: error.message || error });
  }
};
