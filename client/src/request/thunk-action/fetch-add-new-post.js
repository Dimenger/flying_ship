import { addNewPost } from "../api/api-add-new-post";
import { getSuccessMessage } from "../../actions";
import { addNewPostToList } from "../../actions";

export const fetchAddNewPost = (newPostData) => async (dispatch) => {
  try {
    const result = await addNewPost(newPostData);
    const { success, message, newPost } = result;

    dispatch(getSuccessMessage({ success, message }));
    dispatch(addNewPostToList(newPost));
  } catch (err) {
    console.error(err);
  }
};
