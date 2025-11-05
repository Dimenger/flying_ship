import { removeUser } from "../../actions";
import { deleteUser } from "../api";

export const fetchDeleteUser = (id) => async (dispatch) => {
  try {
    const result = await deleteUser(id);
    if (!result) {
      throw new Error("Ошибка");
    }
    console.log(result);
    dispatch(removeUser(id));
  } catch (error) {
    console.error(error);
  }
};
