import { loginUser } from "../api/login-user";
import { getError, getUser, getSuccessMessage } from "../../actions";

export const fetchGetUser = (userLoginData) => async (dispatch) => {
  try {
    const result = await loginUser(userLoginData);
    const { user, success, message } = result;
    dispatch(getUser({ user, success }));
    dispatch(
      getSuccessMessage({
        success,
        message,
      })
    );
  } catch (err) {
    dispatch(
      getError({
        success: false,
        message: err.message,
      })
    );
    console.error("fetchGetUser: Ошибка авторизации!!!", err);
  }
};
