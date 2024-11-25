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

const getFoodItem = async (itemId) => {
  try {
    const response = await api.get(`/foods`, {
      params: { foodItemId: itemId },
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("Error getting foodItem:", error.response.data);
      throw new Error("Food item fetch failed: " + error.response.data.message);
    } else {
      console.error("Unexpected Error:", error);
      throw new Error(error.message);
    }
  }
};

const getOrders = async (status) => {
  try {
    const response = await api.get(`/restaurants/orders/${status}`, {});
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

const updateFooditem = async (foodItem) => {
  const formData = new FormData();

  for (const key in foodItem) {
    if (foodItem.hasOwnProperty(key)) {
      formData.append(key, foodItem[key]);
    }
  }

  try {
    const response = await api.patch("/foods", formData);
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

const raiseQuery = async (question) => {
  try {
    const response = await api.post("/restaurants/query", { question });
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

const getQueries = async () => {
  try {
    const response = await api.get(`/restaurants/query`, {});
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

export {
  registerRestaurant,
  getCatalog,
  getOrders,
  addFoodItem,
  getFoodItem,
  updateFooditem,
  raiseQuery,
  getQueries,
};
