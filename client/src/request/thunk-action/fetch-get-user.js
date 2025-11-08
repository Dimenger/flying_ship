import { loginUser } from "../api/login-user";
import { getUser } from "../../actions";

export const fetchGetUser = (userLoginData) => async (dispatch) => {
  try {
    const user = await loginUser(userLoginData);
    dispatch(getUser(user));
  } catch (err) {
    console.error("fetchGetUser: Ошибка авторизации!!!", err);
    throw err;
  }
};
