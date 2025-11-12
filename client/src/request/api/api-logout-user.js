import { request } from "../../components/utils";

export const apiLogoutUser = async () => {
  try {
    const res = await request("/auth/logout", {
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
