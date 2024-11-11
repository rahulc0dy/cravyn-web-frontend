"use client";

import React from "react";
import FoodItemForm from "@components/restaurant/FoodItemForm";
import { addFoodItem } from "@services/restaurantServices";

const RestaurantAddCatalogue = () => {
  return <FoodItemForm onSubmit={addFoodItem} />;
};

export default RestaurantAddCatalogue;
