export const deletePost = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/post/delete-post/${id}`, {
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
