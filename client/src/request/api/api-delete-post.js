import { request } from "../../components/utils";

export const deletePost = async (id) => {
  try {
    const res = await request(`/post/delete-post/${id}`, {
      method: "DELETE",
      credentials: "include",
    });
    if (!res.ok) {
      throw new Error("Error");
    }
    return await res.json();
  } catch (error) {
    console.error(error);
  }
};
