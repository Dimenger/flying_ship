import { loginUser } from "../api/login-user";
import { getError, getUser, getSuccessMessage } from "../../actions";

export const fetchGetUser = (userLoginData) => async (dispatch) => {
  try {
    const result = await loginUser(userLoginData);
    console.log(result);
    dispatch(getUser(result.user));
    dispatch(
      getSuccessMessage({
        success: result.success,
        message: result.message,
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
