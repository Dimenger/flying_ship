import { editPost } from "../api";
import { getSuccessMessage } from "../../actions";
import {
  EDIT_POST_SUCCESS,
  POSTS_FAILURE,
} from "../../actions/posts-actions/posts-actions";

export const fetchEditPost = (editPostData) => async (dispatch) => {
  try {
    const result = await editPost(editPostData);
    const { success, message, updatePost } = result;
    dispatch({ type: EDIT_POST_SUCCESS, payload: updatePost });
    dispatch(getSuccessMessage({ success, message }));
  } catch (error) {
    dispatch({ type: POSTS_FAILURE, payload: error.message || error });
    console.error(console.error);
  }
};
