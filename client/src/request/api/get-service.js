import { request } from "../../components/utils";

export const getService = async (serId) => {
  try {
    const res = await request("/service/service", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        serId,
      }),
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
