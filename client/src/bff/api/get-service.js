export const getService = async (id) => {
  try {
    const res = await fetch("http://localhost:3000/services");
    if (!res.ok) {
      throw new Error(`Ошибка: ${res.status}. ${res.statusText}`);
    }
    const services = await res.json();
    const service = services.find((service) => id === service.id);
    return service;
  } catch (error) {
    console.error(error);
  }
};
