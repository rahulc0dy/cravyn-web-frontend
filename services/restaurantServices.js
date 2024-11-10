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

const getPendingOrders = async () => {
  try {
    const response = await api.get(`/restaurants/orders/pending`, {});
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("Error getting orders:", error.response.data);
      throw new Error(error.response.data.message);
    } else {
      console.error("Unexpected Error:", error);
      throw new Error(error.message);
    }
  }
};

const addFoodItem = async (foodItem) => {
  const formData = new FormData();

  for (const key in foodItem) {
    if (foodItem.hasOwnProperty(key)) {
      formData.append(key, foodItem[key]);
    }
  }

  try {
    const response = await api.post("/foods", formData);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("Error Response:", error.response.data);
      throw new Error("Failed: " + error.response.data.message);
    } else {
      console.error("Unexpected Error:", error);
      throw new Error("An unexpected error occurred.");
    }
  }
};

export { registerRestaurant, getCatalog, getPendingOrders, addFoodItem };
