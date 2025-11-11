import { changeUserRole } from "../api/api-change-user-role";
import { getSuccessMessage } from "../../actions/get-success-message";
import { getUpdateUser } from "../../actions";

export const fetchEditUserRole = (id, userRole) => async (dispatch) => {
  const result = await changeUserRole(id, userRole);
  const { success, message, editedUser } = result;

  dispatch(getUpdateUser(editedUser));
  dispatch(getSuccessMessage({ success, message }));
};
