export const loginUser = async (userLoginData) => {
  try {
    const res = await fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userLoginData),
      credentials: "include",
    });
    if (!res.ok) {
      throw new Error(`Ошибка ${res.status}, ${res.statusText}`);
    }
    return await res.json();
  } catch (error) {
    console.error("Ошибка сервера!!!", error);
  }
};
