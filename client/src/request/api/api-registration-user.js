import { request } from "../../components/utils";

export const registrationUser = async (registeredUserData) => {
  try {
    const res = await request("/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(registeredUserData),
      // credentials: "include",
    });

    const result = await res.json();

    if (!res.ok) {
      const errorMsg = result.error || `Статус: ${res.status}`;
      throw new Error(errorMsg);
    }
    return result;
  } catch (error) {
    console.error("loginUser: Ошибка регистрации!!!", error);
    throw error;
  }
};
