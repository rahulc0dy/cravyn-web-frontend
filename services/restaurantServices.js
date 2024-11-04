const registerRestaurant = async (restaurant) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  const fetchUrl = process.env.NEXT_PUBLIC_CRAVYN_API_BASE_URL + "/restaurants";

  const formData = new FormData();

  for (const key in restaurant) {
    if (restaurant.hasOwnProperty(key)) {
      formData.append(key, restaurant[key]);
    }
  }

  const response = await fetch(fetchUrl, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    const errorData = await response.json(); // Get the error response body
    console.error("Error Response:", errorData);
    throw new Error("Registration failed: " + errorData.message);
  }

  return response.json();
};

export { registerRestaurant };
