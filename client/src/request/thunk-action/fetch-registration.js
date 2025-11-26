import { registrationUser } from "../api";
import { getUser, getSuccessMessage, getError } from "../../actions";

export const fetchRegistration = (registeredUserData) => async (dispatch) => {
  try {
    const result = await registrationUser(registeredUserData);
    const { user, success, message } = result;

    dispatch(getUser({ user, success }));
    dispatch(getSuccessMessage({ success, message }));
  } catch (err) {
    console.error(err.message);
    dispatch(getError({ success: false, message: err.message }));
    console.error(err, "Ошибка регистрации!!!");
  }
};
