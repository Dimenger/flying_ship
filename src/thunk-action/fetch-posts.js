import { postPosts } from "../actions";
import { getPosts } from "../bff/api";

export const fetchPosts = () => async (dispatch) => {
  const posts = await getPosts();
  dispatch(postPosts(posts));
};
