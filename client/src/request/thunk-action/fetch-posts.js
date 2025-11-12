import { postPosts } from "../../actions";
import { getPosts } from "../api";

export const fetchPosts = () => async (dispatch) => {
  const posts = await getPosts();
  dispatch(postPosts(posts));
};
