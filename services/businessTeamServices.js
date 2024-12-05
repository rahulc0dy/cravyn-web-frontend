import api from "@utils/api";

const getDashboard = async (year, month, day) => {
  try {
    const response = await api.get(`/business-team/dashboard`, {
      params: {
        year: year?.toLowerCase() === "none" ? undefined : year,
        month: month?.toLowerCase() === "none" ? undefined : month,
        day: day?.toLowerCase() === "none" ? undefined : day,
      },
    });
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

export { getDashboard };
