import { request } from "../../components/utils";

export const authMe = async () => {
  try {
    const res = await request("/auth/me", {
      credentials: "include",
    });
    if (res.status === 401) {
      return null;
    }
    if (!res.ok) {
      throw new Error(`Ошибка ${res.status}, ${res.statusText}`);
    }
    const result = await res.json();
    return result;
  } catch (error) {
    console.error(error, "Ошибка сервера!!!");
    throw error;
  }
};
