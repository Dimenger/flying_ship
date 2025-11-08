import { loginUser } from "../api/login-user";
import { getUser } from "../../actions";

export const fetchGetUser = (userLoginData) => async (dispatch) => {
  const user = await loginUser(userLoginData);
  dispatch(getUser(user));
};
