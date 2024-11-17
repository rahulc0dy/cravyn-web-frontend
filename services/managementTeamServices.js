import api from "@utils/api";

const getQueries = async (limit = null, filter, queryUser = null) => {
  try {
    const response = await api.get(`/management-team/query/${queryUser}`, {
      params: { limit, filter },
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

const getPartnerRequests = async (verifyStatus) => {
  try {
    const response = await api.get(`/management-team/partner-requests`, {
      params: { verifyStatus },
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

const getDashboardData = async () => {
  try {
    const response = await api.get(`/management-team/dashboard`);
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

const addDeliveryPartner = async (deliveryPartner) => {
  try {
    const response = await api.post("/delivery-partner", deliveryPartner);
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

const answerQuery = async (answer, queryId, userType) => {
  try {
    const response = await api.post(`/management-team/query/${userType}`, {
      answer,
      queryId,
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error(error.response.data);
      throw new Error(error.response.data.message);
    } else {
      console.error(error);
      throw new Error("An unexpected error occurred.");
    }
  }
};

const verifyRestaurant = async (restaurantId, approval) => {
  try {
    const response = await api.post(`/management-team/verify-partner`, {
      restaurantId: restaurantId,
      approval: approval,
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error(error.response.data);
      throw new Error(error.response.data.message);
    } else {
      console.error(error);
      throw new Error("An unexpected error occurred.");
    }
  }
};

export {
  getQueries,
  addDeliveryPartner,
  answerQuery,
  getDashboardData,
  getPartnerRequests,
  verifyRestaurant,
};
