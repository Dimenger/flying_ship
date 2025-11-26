import { request } from "../../components/utils";

export const getService = async (serId) => {
  try {
    const res = await request("/service/service", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        serId,
      }),
      credentials: "include",
    });
    const resText = await res.text();

    if (!res.ok) {
      let errorData;
      try {
        errorData = JSON.parse(resText);
      } catch (e) {
        console.error(e);
        throw new Error(`Ошибка: ${res.status} ${res.statusText}`);
      }
      throw new Error(
        errorData.error || `Ошибка: ${res.status}. ${res.statusText}`
      );
    }
    return JSON.parse(resText);
  } catch (error) {
    console.error(error);
    throw error;
  }
};
