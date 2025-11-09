import { editPost } from "../api";
import { getSuccessMessage } from "../../actions";

export const fetchEditPost = (editPostData) => async (dispatch) => {
  try {
    console.log(editPostData);
    const result = await editPost(editPostData);
    console.log("Ответ сервера:", result);
    dispatch(getSuccessMessage(result));
  } catch (err) {
    console.error(err);
  }
};
