import { request } from "../../components/utils";

export const loginUser = async (userLoginData) => {
  try {
    const res = await request("/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userLoginData),
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
    console.error("loginUser: Ошибка авторизации!!!", error);
    throw error;
  }
};

/*
    const result = await res.json();

    if (!res.ok) {
      const errorMsg =
        result.error || `Ошибка: ${res.status}. ${res.statusText}`;
      throw new Error(errorMsg);
    }
    return result;
*/
