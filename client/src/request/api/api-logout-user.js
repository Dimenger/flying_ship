import { request } from "../../components/utils";

export const apiLogoutUser = async () => {
  try {
    const res = await request("/auth/logout", {
      credentials: "include",
    });
    if (!res.ok) {
      throw new Error(`Статус: ${res.status}`);
    }
    const result = await res.json();
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
