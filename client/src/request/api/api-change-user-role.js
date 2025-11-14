import { request } from "../../components/utils";

export const changeUserRole = async (id, userRole) => {
  try {
    const res = await request(`/users/users/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userRole }),
      // credentials: "include",
    });
    if (!res.ok) {
      throw new Error(`Ошибка: ${res.status}. ${res.statusText}`);
    }
    return await res.json();
  } catch (error) {
    console.error(error);
  }
};
