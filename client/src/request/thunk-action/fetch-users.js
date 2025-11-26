import { getUsers } from "../api";
import {
  USERS_REQUEST,
  POST_USERS_SUCCESS,
  USERS_FAILURE,
} from "../../actions/users-actions/users-actions";

export const fetchUsers = () => async (dispatch) => {
  try {
    dispatch({ type: USERS_REQUEST });
    const users = await getUsers();
    dispatch({ type: POST_USERS_SUCCESS, payload: users });
  } catch (error) {
    dispatch({ type: USERS_FAILURE, payload: error.message || error });
    console.error("Ошибка при получении пользователей!", error);
  }
};
