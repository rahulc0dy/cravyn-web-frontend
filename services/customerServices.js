import api from "@utils/api";

const registerCustomer = async (customer) => {
  console.log(customer);

  try {
    const response = await api.post("/customer/register", customer);
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

export { registerCustomer };
