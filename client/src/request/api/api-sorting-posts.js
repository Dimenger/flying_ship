import { request } from "../../components/utils";

export const apiSortingPosts = async () => {
  try {
    const res = await request("/post/sorting-posts?sort=createdAt&order=desc", {
      credentials: "include",
    });
    if (!res.ok) {
      throw new Error(`Oшибка получения данных! status: ${res.status}`);
    }
    return await res.json();
  } catch (error) {
    console.error("Oшибка получения данных!", error);
  }
};
