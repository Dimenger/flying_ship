export const getService = async (serId) => {
  try {
    const res = await fetch("http://localhost:3000/service/service", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        serId,
      }),
      credentials: "include",
    });
    if (!res.ok) {
      throw new Error(`Ошибка: ${res.status}. ${res.statusText}`);
    }
    // const services = await res.json();
    // const service = services.find((service) => id === service.id);

    return await res.json();
  } catch (error) {
    console.error(error);
  }
};
