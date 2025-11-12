import { request } from "../../components/utils";

export const getServices = async () => {
  try {
    const res = await request("/services");
    if (!res.ok) {
      throw new Error(`Ошибка: ${res.status}. ${res.statusText}`);
    }
    return await res.json();
  } catch (error) {
    console.error(error);
  }
};
