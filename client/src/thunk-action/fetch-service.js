import { postService } from "../actions";
import { getService } from "../bff/api";

export const fetchService = (id) => async (dispatch) => {
  const service = await getService(id);
  dispatch(postService(service));
};
