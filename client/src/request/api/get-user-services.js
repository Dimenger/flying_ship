import { request } from "../../components/utils";

export const getUserServices = async (userId) => {
  try {
    const res = await request(`/user/get-services/${userId}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
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
