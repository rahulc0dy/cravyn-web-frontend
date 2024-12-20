"use client";

import LoadingSpinner from "@components/LoadingSpinner";
import CatalogCard from "@components/restaurant/CatalogCard";
import Toolbar from "@components/restaurant/Toolbar";
import { useAuth } from "@providers/RestaurantAuthProvider";
import { getCatalog } from "@services/restaurantServices";
import { useQuery } from "@tanstack/react-query";

const RestaurantCatalogue = () => {
  const { auth } = useAuth();
  const restaurant = auth.user;

  const {
    data,
    isError,
    isLoading,
    isSuccess,
    error,
    refetch: refetchCatalog,
  } = useQuery({
    queryKey: ["catalog", restaurant, CatalogCard],
    queryFn: () => getCatalog(),
    enabled: !!restaurant,
    retry: 1,
    refetchOnWindowFocus: false,
  });

  const menuItems = isSuccess ? data.data.catalog : [];

  return (
    <div>
      {/* <Toolbar /> */}
      <div className="w-full mb-10 mx-auto space-y-8 max-h-screen overflow-y-scroll p-5">
        {isLoading ? (
          <LoadingSpinner />
        ) : isError ? (
          <h5 className="text-center font-bold text-lg text-red-500">
            {error.message}
          </h5>
        ) : (
          menuItems.map((item, index) => (
            <CatalogCard
              key={index}
              itemId={item.item_id}
              imageUrl={item.food_image_url}
              name={item.food_name}
              description={item.description}
              price={item.price}
              discount={item.discount_percent}
              discountCap={item.discount_cap}
              orders={item.orders}
              rating={item.rating}
              currentAvailabilityStatus={item.is_available}
              onSuccessFn={refetchCatalog}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default RestaurantCatalogue;
