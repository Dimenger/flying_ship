export const authMe = async () => {
  try {
    const res = await fetch("http://localhost:3000/auth/me", {
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    if (res.status === 401) {
      return null;
    }
    if (!res.ok) {
      throw new Error(`Ошибка ${res.status}, ${res.statusText}`);
    }

    const user = await res.json();
    return user;
  } catch (error) {
    console.error(error, "Ошибка сервера!!!");
    return null;
  }
};
