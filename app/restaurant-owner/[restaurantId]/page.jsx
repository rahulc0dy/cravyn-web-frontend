"use client";

import { motion } from "framer-motion";
import { getRestaurantFoodSalesData } from "@services/restaurantOwnerServices";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import Image from "next/image";

const FoodSalesPage = () => {
  const { restaurantId } = useParams();

  const { data, isSuccess, isLoading, isError, error } = useQuery({
    queryKey: ["foodSalesData", restaurantId],
    queryFn: () => getRestaurantFoodSalesData(restaurantId),
    refetchInterval: 100000,
    refetchIntervalInBackground: true,
  });

  return isSuccess ? (
    <main className="wrapper">
      <div className="p-5 mx-auto lg:max-w-4xl border-8 border-accent-yellow-light my-4 mb-8 rounded-lg">
        <h1 className="text-2xl font-bold">
          {isSuccess && data.data.restaurant.name}
        </h1>
        <p>
          {isSuccess &&
            `${data.data.restaurant.street}, ${data.data.restaurant.city}, ${data.data.restaurant.pin_code}`}
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-between lg:max-w-4xl mx-auto gap-8">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="py-5 px-12 bg-accent-yellow-light rounded-lg w-full md:w-96"
        >
          <h4 className="text-3xl font-semibold text-primary-grey">
            Total Sales
          </h4>
          <h5 className="text-lg font-light">
            (For {isSuccess && data.data.restaurant.name})
          </h5>
          <p className="text-3xl font-bold text-secondary-orange tracking-wider py-2  ">
            ₹{" "}
            {isSuccess
              ? data.data.foodSales
                  .reduce(
                    (accumulator, currentValue) =>
                      accumulator + Number.parseFloat(currentValue.sum),
                    0
                  )
                  .toFixed(2)
              : "000"}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="py-5 px-12 bg-accent-yellow-light rounded-lg w-full md:w-96"
        >
          <h4 className="text-3xl font-semibold text-primary-grey">
            Total Orders
          </h4>
          <h5 className="text-lg font-light">
            (For {isSuccess && data.data.restaurant.name})
          </h5>
          <p className="text-3xl font-bold text-secondary-orange tracking-wider py-2  ">
            {isSuccess
              ? data.data.foodSales.reduce(
                  (accumulator, currentValue) =>
                    accumulator + Number.parseFloat(currentValue.count),
                  0
                )
              : "000"}
          </p>
        </motion.div>
      </div>

      <div className="">
        <h2 className="text-center text-xl font-bold mt-5">Top 3 Foods</h2>
        <div className="flex flex-wrap gap-5 lg:max-w-4xl mx-auto p-0 lg:p-5 justify-between">
          {isLoading ? (
            <h2>Loading...</h2>
          ) : (
            isSuccess &&
            data.data.foodSales.slice(0, 3).map((food, index) => (
              <div
                className="relative rounded-lg overflow-clip group"
                key={food.item_id}
              >
                <Image
                  src={food.food_image_url}
                  className="w-full aspect-square object-cover peer bg-red-100"
                  width={200}
                  height={200}
                  alt={`${food.food_name} - Rank ${index + 1}`}
                  onError={(e) => {
                    e.target.src = "/pp-icons/icon4.png";
                  }}
                />
                <h2 className="absolute top-2 left-0 bg-black text-accent-yellow-light font-bold rounded-r-lg backdrop-blur-md bg-opacity-30 pl-5 p-3">
                  {index + 1}
                </h2>
                <div className="hidden group-hover:block absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-black/0 p-2 pt-10 transition-all duration-500">
                  <h3 className="text-lg text-white font-semibold text-center">
                    {food.food_name}
                  </h3>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <h2 className="text-center text-xl font-bold mt-5">Top Sellers</h2>
      <div className="flex flex-wrap gap-5 lg:max-w-4xl mx-auto p-0 lg:p-5">
        {isLoading ? (
          <h1>Loading</h1>
        ) : (
          <table
            className="table-auto w-full my-3 md:text-xl bg-amber-50 bg-opacity-20"
            cellPadding={10}
          >
            <thead className="bg-accent-yellow-light">
              <tr className="">
                <th className="p-5 border-2 md:text-2xl border-yellow-200 hidden md:block">
                  No.
                </th>
                <th className="p-5 border-2 md:text-2xl border-yellow-200">
                  Food Item Name
                </th>
                <th className="p-5 border-2 md:text-2xl border-yellow-200">
                  Order Count
                </th>
                <th className="p-5 border-2 md:text-2xl border-yellow-200">
                  Total Sales
                </th>
              </tr>
            </thead>
            <tbody>
              {data.data.foodSales.map((food, index) => (
                <tr key={food.item_id} className="table-row text-gray-700">
                  <td className="text-right border-2 border-yellow-200 hidden md:block">
                    {index + 1}
                  </td>
                  <td className="text-left border-2 border-yellow-200">
                    {food.food_name}
                  </td>
                  <td className="text-center border-2 border-yellow-200">
                    {food.count}
                  </td>
                  <td className="text-right px-4 border-2 border-yellow-200">
                    {food.sum}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </main>
  ) : (
    <h1 className="text-2xl text-red-500 font-bold min-h-screen text-center">
      {isLoading ? "Loading..." : isError ? error.message : "No data to show!"}
    </h1>
  );
};

export default FoodSalesPage;
