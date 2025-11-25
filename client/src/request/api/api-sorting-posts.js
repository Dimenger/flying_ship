import { request } from "../../components/utils";

export const apiSortingPosts = async (orderPosts) => {
  try {
    const res = await request(
      `/post/sorting-posts?sort=createdAt&order=${orderPosts}`,
      {
        credentials: "include",
      }
    );
    if (!res.ok) {
      throw new Error(`Ошибка загрузки новостей!!! status: ${res.status}`);
    }
    return await res.json();
  } catch (error) {
    console.error("Oшибка получения данных!", error);
    throw error;
  }
};
