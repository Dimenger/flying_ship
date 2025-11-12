import { request } from "../../components/utils";

export const loginUser = async (userLoginData) => {
  try {
    const res = await request("/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userLoginData),
      credentials: "include",
    });
    const result = await res.json();

    if (!res.ok) {
      const errorMsg = result.error || `Статус: ${res.status}`;
      throw new Error(errorMsg);
    }
    return result;
  } catch (error) {
    console.error("loginUser: Ошибка авторизации!!!", error);
    throw error;
  }
};
