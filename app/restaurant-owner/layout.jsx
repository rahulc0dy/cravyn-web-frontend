import HomeNav from "@components/HomeNav";
import ProtectedUserRoute from "@components/ProtectedUserRoutes";
import { UserAuthProvider } from "@providers/UserAuthProvider";
import React from "react";

const RestaurantOwnerLayoutWrapper = ({ children }) => {
  return (
    <UserAuthProvider>
      <HomeNav />
      <ProtectedUserRoute userType="restaurant-owner">
        {children}
      </ProtectedUserRoute>
    </UserAuthProvider>
  );
};

export default RestaurantOwnerLayoutWrapper;
