import { postServiceSuccess } from "../../actions";
import { getService } from "../api";

export const fetchService = (serId) => async (dispatch) => {
  try {
    dispatch({ type: "POST_SERVICE_REQUEST" });
    const service = await getService(serId);
    dispatch(postServiceSuccess(service));
  } catch (error) {
    dispatch({ type: "POST_SERVICE_FAILURE", payload: error.message || error });
  }
};
