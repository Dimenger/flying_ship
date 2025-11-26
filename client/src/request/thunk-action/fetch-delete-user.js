import { deleteUser } from "../api";
import {
  REMOVE_USER_SUCCESS,
  USERS_FAILURE,
} from "../../actions/users-actions/users-actions";

export const fetchDeleteUser = (id) => async (dispatch) => {
  try {
    const result = await deleteUser(id);
    alert(result.message);
    dispatch({ type: REMOVE_USER_SUCCESS, payload: id });
  } catch (error) {
    dispatch({ type: USERS_FAILURE, payload: error.message || error });
    console.error(error);
  }
};
