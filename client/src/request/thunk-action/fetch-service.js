import { postService } from "../../actions";
import { getService } from "../api";

export const fetchService = (serId) => async (dispatch) => {
  const service = await getService(serId);
  dispatch(postService(service));
};
