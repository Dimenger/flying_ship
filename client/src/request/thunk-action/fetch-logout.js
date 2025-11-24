import { apiLogoutUser } from "../api";
import { getSuccessMessage } from "../../actions";
import { CLEAR_USERS_LIST_SUCCESS } from "../../actions/users-actions/users-actions";
import {
  LOGOUT_USER_SUCCESS,
  USER_FAILURE,
} from "../../actions/user-actions/user-actions";

export const fetchLogout = () => async (dispatch) => {
  try {
    const result = await apiLogoutUser();
    dispatch({ type: LOGOUT_USER_SUCCESS });
    dispatch({ type: CLEAR_USERS_LIST_SUCCESS });
    dispatch(
      getSuccessMessage({
        success: result.success,
        message: result.message,
      })
    );
  } catch (error) {
    dispatch({ type: USER_FAILURE, payload: error.message || error });
    console.error(error);
  }
};
