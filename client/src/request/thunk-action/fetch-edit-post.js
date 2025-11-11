import { editPost } from "../api";
import { getSuccessMessage } from "../../actions";
import { getUpdatePost } from "../../actions";

export const fetchEditPost = (editPostData) => async (dispatch) => {
  try {
    const result = await editPost(editPostData);
    const { success, message, updatePost } = result;

    console.log("editPost:", updatePost);
    console.log("editPost:", updatePost);

    dispatch(getSuccessMessage({ success, message }));
    dispatch(getUpdatePost(updatePost));
  } catch (err) {
    console.error(err);
  }
};
