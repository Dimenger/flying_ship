import { getPosts } from "../api";
import {
  POST_POSTS_SUCCESS,
  POSTS_FAILURE,
  POSTS_REQUEST,
} from "../../actions/posts-actions/posts-actions";

export const fetchPosts = () => async (dispatch) => {
  try {
    dispatch({ type: POSTS_REQUEST });
    const posts = await getPosts();
    dispatch({ type: POST_POSTS_SUCCESS, payload: posts });
  } catch (error) {
    dispatch({ type: POSTS_FAILURE, payload: error.message || error });
  }
};
