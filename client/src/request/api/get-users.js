import { request } from "../../components/utils";

export const getUsers = async () => {
  try {
    const res = await request("/users/users", {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      throw new Error(`Ошибка: ${res.status}. Текст: ${res.statusText}`);
    }
    return await res.json();
  } catch (error) {
    console.error("Oшибка получения данных!", error);
    return [];
  }
};
