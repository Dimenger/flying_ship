export const apiLogoutUser = async () => {
  try {
    const res = await fetch("http://localhost:3000/auth/logout", {
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
