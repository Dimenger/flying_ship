import { deletePost } from "../api";
import {
  POSTS_FAILURE,
  REMOVE_POST_SUCCESS,
} from "../../actions/posts-actions/posts-actions";

export const fetchDeletePost = (id) => async (dispatch) => {
  try {
    const result = await deletePost(id);
    alert(result.message);
    dispatch({ type: REMOVE_POST_SUCCESS, payload: id });
  } catch (error) {
    dispatch({ type: POSTS_FAILURE, payload: error.message || error });
    console.error(error);
  }
};
