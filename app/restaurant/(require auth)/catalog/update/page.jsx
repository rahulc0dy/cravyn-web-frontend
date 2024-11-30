"use client";

import React, { useEffect } from "react";
import FoodItemForm from "@components/restaurant/FoodItemForm";
import { getFoodItem, updateFooditem } from "@services/restaurantServices";
import { useSearchParams, usePathname } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

const RestaurantUpdateCatalogue = () => {
  const searchParams = useSearchParams();
  const path = usePathname();
  const itemId = searchParams.get("itemId");
  const dependency = searchParams.get("dependency");

  const { data, isSuccess, isError, isLoading, error, refetch } = useQuery({
    queryKey: ["food-item", itemId, path, dependency],

    queryFn: () => getFoodItem(itemId),
    enabled: !!itemId,
    retry: 1,
    refetchOnWindowFocus: false,
  });

  const foodItem = isSuccess ? data.data.foodItem : {};

  return isError ? (
    <h3>Could not fetch</h3>
  ) : isLoading ? (
    <h3>Loading...</h3>
  ) : (
    <FoodItemForm
      onSubmit={updateFooditem}
      foodDescription={foodItem.description}
      foodImage={foodItem.food_image_url}
      foodName={foodItem.food_name}
      foodPrice={foodItem.price}
      foodType={foodItem.type}
      foodItemId={foodItem.item_id}
    />
  );
};

export default RestaurantUpdateCatalogue;
