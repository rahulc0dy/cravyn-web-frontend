import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_CRAVYN_API_BASE_URL,
  withCredentials: true,
});

async function refreshToken() {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_CRAVYN_API_BASE_URL}/restaurants/refresh-token`,
      { withCredentials: true }
    );
    return response.data.data.token;
  } catch (error) {
    throw new Error("Token refresh failed");
  }
}

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const { config, response } = error;

    if (response?.status === 401 && !config._retry) {
      console.debug("Intercepted error response");
      config._retry = true;

      try {
        const newToken = await refreshToken();
        config.headers.Authorization = `Bearer ${newToken}`;

        return api(config);
      } catch (refreshError) {
        localStorage.removeItem("auth");
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export default api;
