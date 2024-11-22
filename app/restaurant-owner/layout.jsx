import { UserAuthProvider } from "@providers/UserAuthProvider";
import React from "react";

const RestaurantOwnerLayoutWrapper = ({ children }) => {
  return <UserAuthProvider>{children}</UserAuthProvider>;
};

export default RestaurantOwnerLayoutWrapper;
