import { request } from "../../components/utils";

export const addNewPost = async (newPostData) => {
  try {
    const res = await request("/post/add-new-post", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPostData),
      credentials: "include",
    });

    if (!res.ok) {
      throw new Error(`Статус: ${res.status}`);
    }
    const result = await res.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};
