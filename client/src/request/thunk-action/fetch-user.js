import { authMe } from "../api";
import { getUser, getSuccessMessage, getError } from "../../actions";
import {
  USER_FAILURE,
  USER_REQUEST,
} from "../../actions/user-actions/user-actions";

export const fetchUser = () => async (dispatch) => {
  try {
    dispatch({ type: USER_REQUEST });
    const result = await authMe();
    if (result) {
      const { user, success, message } = result;
      if (user) {
        dispatch(getUser({ user, success }));
        dispatch(getSuccessMessage({ success, message }));
      }
    }
  } catch (error) {
    console.error(error.message);
    dispatch({ type: USER_FAILURE });
    dispatch(getError({ success: false, message: error.message }));
    console.error(error, "Ошибка регистрации!!!");
  }
};
