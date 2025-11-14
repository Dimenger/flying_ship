import { API_URL } from "../../constants";

export const request = async (endpoint, options = {}) => {
  return fetch(`${API_URL.SERVER}${endpoint}`, options);
};
