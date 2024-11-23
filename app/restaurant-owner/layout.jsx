import ProtectedUserRoute from "@components/ProtectedUserRoutes";
import { UserAuthProvider } from "@providers/UserAuthProvider";
import React from "react";

const RestaurantOwnerLayoutWrapper = ({ children }) => {
  return (
    <UserAuthProvider>
      <ProtectedUserRoute userType="restaurant-owner">
        {children}
      </ProtectedUserRoute>
    </UserAuthProvider>
  );
};

export default RestaurantOwnerLayoutWrapper;
