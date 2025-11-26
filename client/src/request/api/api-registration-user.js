import { request } from "../../components/utils";

export const registrationUser = async (registeredUserData) => {
  try {
    const res = await request("/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(registeredUserData),
      credentials: "include",
    });
    const resText = await res.text();

    if (!res.ok) {
      let errorData;
      try {
        errorData = JSON.parse(resText);
      } catch (e) {
        console.error(e);
        throw new Error(`Ошибка: ${res.status} ${res.statusText}`);
      }
      throw new Error(
        errorData.error || `Ошибка: ${res.status}. ${res.statusText}`
      );
    }
    return JSON.parse(resText);
  } catch (error) {
    console.error("loginUser: Ошибка регистрации!!!", error);
    throw error;
  }
};

/*
    const result = await res.json();

    if (!res.ok) {
      const errorMsg = result.error || `Статус: ${res.status}`;
      throw new Error(errorMsg);
    }
    return result;
*/
