import { request } from "../../components/utils";

export const getPosts = async () => {
  try {
    const res = await request("/post/posts");
    if (!res.ok) {
      throw new Error(`Oшибка получения данных! status: ${res.status}`);
    }
    return await res.json();
  } catch (error) {
    console.error("Oшибка получения данных!", error);
  }
};
