const registerRestaurant = async (restaurant) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  const fetchUrl = process.env.NEXT_PUBLIC_CRAVYN_API_BASE_URL + "/restaurants";

  const response = await fetch(fetchUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(restaurant),
  });

  if (!response.ok) {
    const errorData = await response.json(); // Get the error response body
    console.error("Error Response:", errorData);
    throw new Error("Registration failed: " + errorData.message);
  }

  return response.json();
};

export { registerRestaurant };
