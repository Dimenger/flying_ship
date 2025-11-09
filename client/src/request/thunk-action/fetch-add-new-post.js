import { addNewPost } from "../api/api-add-new-post";
import { getSuccessMessage } from "../../actions";

export const fetchAddNewPost = (newPostData) => async (dispatch) => {
  try {
    console.log(newPostData);
    const result = await addNewPost(newPostData);
    console.log("Ответ сервера:", result);
    dispatch(getSuccessMessage(result));
  } catch (err) {
    console.error(err);
  }
};
