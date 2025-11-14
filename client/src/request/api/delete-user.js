import { request } from "../../components/utils";

export const deleteUser = async (id) => {
  try {
    const res = await request(`/users/users/${id}`, {
      method: "DELETE",
      // credentials: "include",
    });
    if (!res.ok) {
      throw new Error(`Ошибка: ${res.status}, ${res.statusText}`);
    }
    const result = await res.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};
