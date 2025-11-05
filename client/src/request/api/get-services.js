export const getServices = async () => {
  try {
    const res = await fetch("http://localhost:3000/services");
    if (!res.ok) {
      throw new Error(`Ошибка: ${res.status}. ${res.statusText}`);
    }
    return await res.json();
  } catch (error) {
    console.error(error);
  }
};
