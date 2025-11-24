import { request } from "../../components/utils";

export const getPosts = async () => {
  try {
    const res = await request("/post/posts", {
      credentials: "include",
    });
    if (!res.ok) {
      throw new Error(`Ошибка загрузки новостей!!! status: ${res.status}`);
    }
    return await res.json();
  } catch (error) {
    console.error("Oшибка получения данных!", error);
    throw error;
  }
};
