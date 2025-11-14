import { request } from "../../components/utils";

export const editPost = async (editPostData) => {
  try {
    const res = await request("/post/edit-post", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editPostData),
      // credentials: "include",
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
