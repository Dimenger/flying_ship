import { request } from "../../components/utils";

export const addServiceToUser = async (userId, addedServiceId) => {
  try {
    const res = await request(`/user/add-service/${userId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ addedServiceId }),
      credentials: "include",
    });
    if (!res.ok) {
      throw new Error(`Статус: ${res.status}`);
    }
    const result = await res.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};
