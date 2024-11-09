import api from "@utils/api";

const registerRestaurant = async (restaurant) => {
  const formData = new FormData();

  for (const key in restaurant) {
    if (restaurant.hasOwnProperty(key)) {
      formData.append(key, restaurant[key]);
    }
  }

  try {
    const response = await api.post("/restaurants", formData);
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

const getCatalog = async (limit = null) => {
  try {
    const response = await api.get(`/restaurants/catalog`, {
      params: { limit },
    });
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

const getOrders = async () => {
  try {
    const response = await api.get(`/restaurants/orders`, {});
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("Error getting orders:", error.response.data);
      throw new Error("Orders fetch failed: " + error.response.data.message);
    } else {
      console.error("Unexpected Error:", error);
      throw new Error(error.message);
    }
  }
};

export { registerRestaurant, getCatalog, getOrders };