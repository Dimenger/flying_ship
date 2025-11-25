import { apiSortingPosts } from "../api";
import {
  POSTS_FAILURE,
  POSTS_REQUEST,
  SORTING_POSTS_SUCCESS,
} from "../../actions/posts-actions/posts-actions";

export const fetchSortingPosts = (orderPosts) => async (dispatch) => {
  try {
    dispatch({ type: POSTS_REQUEST });
    const posts = await apiSortingPosts(orderPosts);
    if (posts) {
      dispatch({ type: SORTING_POSTS_SUCCESS, payload: posts });
    }
  } catch (error) {
    dispatch({ type: POSTS_FAILURE, payload: error.message || error });
  }
};
