import { changeUserRole } from "../api/api-change-user-role";
import { getSuccessMessage } from "../../actions/get-success-message";
import {
  EDIT_USER_ROLE_SUCCESS,
  USERS_FAILURE,
} from "../../actions/users-actions/users-actions";

export const fetchEditUserRole = (id, userRole) => async (dispatch) => {
  try {
    const result = await changeUserRole(id, userRole);
    const { success, message, editedUser } = result;

    dispatch({ type: EDIT_USER_ROLE_SUCCESS, payload: editedUser });
    dispatch(getSuccessMessage({ success, message }));
  } catch (error) {
    dispatch({ type: USERS_FAILURE, payload: error.message || error });
  }
};
