import { request } from "../../components/utils";

export const apiRemoveServiceFromUser = async (userId, serviceId) => {
  try {
    const res = await request(`/user/remove-service/${userId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ serviceId }),
      // credentials: "include",
    });

    if (!res.ok) {
      throw new Error("Error");
    }
    const result = await res.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};
