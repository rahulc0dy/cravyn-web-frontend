"use client";

import Popup from "@components/PopUpModal";
import RestaurantCard from "@components/restaurantOwner/RestaurantCard";
import { useAuth } from "@providers/UserAuthProvider";
import { getRestaurantOwnerDashboardData } from "@services/restaurantOwnerServices";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const RestaurantOwnerHomepage = () => {
  const { auth, logout } = useAuth();

  const {
    data: dashboardData,
    isSuccess: isDashboardFetchSuccess,
    isLoading: isDashboardFetchLoading,
    isError: isDashboardFetchError,
    error: dashboardFetchError,
  } = useQuery({
    queryKey: ["Dashboard Data"],
    queryFn: getRestaurantOwnerDashboardData,
    retry: 1,
    refetchInterval: 60000,
    refetchIntervalInBackground: true,
  });

  return (
    <main className="w-full">
      <section className="wrapper">
        <h2 className="text-6xl py-5 font-extrabold bg-gradient-to-r from-secondary-orange to-accent-yellow-light bg-clip-text text-transparent">
          Welcome {auth?.user.name}
        </h2>
        <h3 className="text-2xl">Metrics for today</h3>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="flex flex-col lg:flex-row gap-4 lg:gap-10 px-4 lg:px-0 py-5"
        >
          <motion.div
            variants={itemVariant}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="py-5 px-12 bg-accent-yellow-light rounded-lg w-full md:w-96"
          >
            <h4 className="text-3xl font-semibold text-primary-grey">
              Total Sales
            </h4>
            <h5 className="text-lg font-light">(All Restaurants)</h5>
            <p className="text-3xl font-bold text-secondary-orange tracking-wider py-2  ">
              ₹ {isDashboardFetchSuccess ? dashboardData.data.sales : "00000"}
            </p>
          </motion.div>
          <motion.div
            variants={itemVariant}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="py-5 px-12 bg-accent-yellow-light rounded-lg w-full md:w-96"
          >
            <h4 className="text-3xl font-semibold text-primary-grey">Orders</h4>
            <h5 className="text-lg font-light">(All Restaurants)</h5>
            <motion.p className="text-3xl font-bold text-secondary-orange tracking-wider py-2  ">
              {isDashboardFetchSuccess ? dashboardData.data.orders : "0000"}
            </motion.p>
          </motion.div>
        </motion.div>
      </section>

      <section className="wrapper py-5">
        <h3 className="text-2xl">Your Restaurants</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          {isDashboardFetchLoading ? (
            <h2 className="py-5 text-xl">Loading...</h2>
          ) : isDashboardFetchSuccess ? (
            dashboardData.data.restaurants.map((restaurant) => (
              <RestaurantCard
                key={restaurant.restaurant_id}
                image="/assets/images/Banzara.png"
                name={restaurant.name}
                address={`${restaurant.street}, ${restaurant.city}, ${
                  restaurant.landmark ? restaurant.landmark + ", " : ""
                }${restaurant.pin_code} `}
                stars={restaurant.rating}
                sales={Math.ceil(Math.random() * 100000 + 10000)}
                ordersPerDay={Math.ceil(Math.random() * 1000)}
              />
            ))
          ) : (
            "No Restaurants to Show"
          )}
        </div>
      </section>
      {isDashboardFetchError && (
        <Popup
          duration={1000}
          message={dashboardFetchError.message}
          type="failure"
        />
      )}
    </main>
  );
};

export default RestaurantOwnerHomepage;
