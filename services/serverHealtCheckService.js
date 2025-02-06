import api from "@utils/api";

const getServerHealth = async () => {
  try {
    const response = await api.get(`/health-check/server`);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error(error.response.data);
      throw new Error(error.response.data.message);
    } else {
      console.error("Unexpected Error:", error);
      throw new Error(error.message);
    }
  }
};

export { getServerHealth };
