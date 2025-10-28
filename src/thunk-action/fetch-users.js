import { postUsers } from "../actions";
import { getUsers } from "../bff/api";

export const fetchUsers = () => async (dispatch) => {
  const users = await getUsers();
  dispatch(postUsers(users));
};
