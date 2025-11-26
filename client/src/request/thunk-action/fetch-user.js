import { authMe } from "../api";
import { getUser, getError } from "../../actions";
import {
  USER_FAILURE,
  USER_REQUEST,
} from "../../actions/user-actions/user-actions";

export const fetchUser = () => async (dispatch) => {
  try {
    // dispatch({ type: USER_REQUEST });
    const result = await authMe();
    if (result) {
      dispatch(getUser({ user: result.user, success: result.success }));
    }
  } catch (error) {
    dispatch({ type: USER_FAILURE });
    dispatch(getError({ success: false, message: error.message }));
    console.error(error.message, "Ошибка регистрации!!!");
  }
};
