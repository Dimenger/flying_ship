import { authMe } from "../api";
import { getUser, getSuccessMessage, getError } from "../../actions";

export const fetchUser = () => async (dispatch) => {
  try {
    const result = await authMe();
    const { user, success, message } = result;
    if (user) {
      dispatch(getUser({ user, success }));
    }
    dispatch(getSuccessMessage({ success, message }));
  } catch (error) {
    console.error(error.message);
    dispatch(getError({ success: false, message: error.message }));
    console.error(error, "Ошибка регистрации!!!");
  }
};
