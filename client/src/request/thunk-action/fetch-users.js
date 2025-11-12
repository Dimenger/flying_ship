import { postUsers } from "../../actions";
import { getUsers } from "../api";

export const fetchUsers = () => async (dispatch) => {
  try {
    const users = await getUsers();
    dispatch(postUsers(users));
  } catch (error) {
    console.error("Ошибка при получении пользователей", error);
  }
};
