import { removePost } from "../../actions";
import { deletePost } from "../api";

export const fetchDeletePost = (id) => async (dispatch) => {
  try {
    const result = await deletePost(id);
    if (!result) {
      throw new Error("Ошибка");
    }
    alert(result.message);
    dispatch(removePost(id));
  } catch (error) {
    console.error(error);
  }
};
