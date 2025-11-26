import { addNewPost } from "../api";
import { getSuccessMessage } from "../../actions";
import {
  ADD_NEW_POST_SUCCESS,
  POSTS_FAILURE,
} from "../../actions/posts-actions/posts-actions";

export const fetchAddNewPost = (newPostData) => async (dispatch) => {
  try {
    const result = await addNewPost(newPostData);
    const { success, message, newPost } = result;

    dispatch({ type: ADD_NEW_POST_SUCCESS, payload: newPost });
    dispatch(getSuccessMessage({ success, message }));
  } catch (error) {
    dispatch({ type: POSTS_FAILURE, payload: error.message || error });
    console.error(error);
  }
};
