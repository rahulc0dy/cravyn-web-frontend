import api from "@utils/api";

const registerRestaurantOwner = async (restaurantOwner) => {
  try {
    const response = await api.post("/restaurant-owner", restaurantOwner);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("Error Response:", error.response.data);
      throw new Error("Registration failed: " + error.response.data.message);
    } else {
      console.error("Unexpected Error:", error);
      throw new Error("An unexpected error occurred.");
    }
  }
};

const getRestaurantOwnerDashboardData = async () => {
  try {
    const response = await api.get(`/restaurant-owner/dashboard`);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("Error getting catalog:", error.response.data);
      throw new Error("Catalog fetch failed: " + error.response.data.message);
    } else {
      console.error("Unexpected Error:", error);
      throw new Error(error.message);
    }
  }
};

export { registerRestaurantOwner, getRestaurantOwnerDashboardData };
