"use client";

import Sidebar from "@components/restaurant/Sidebar";
import { usePathname } from "next/navigation";

export default function RestaurantLayout({ children }) {
  const path = usePathname();

  const resetLayoutRoutes = ["/restaurant/register"];

  return resetLayoutRoutes.includes(path) ? (
    <div>{children}</div>
  ) : (
    <div className="wrapper lg:grid grid-cols-[1fr_3fr] relative gap-4">
      <Sidebar
        restaurantName={"Godrick's hollow"}
        restaurantOwnerName={"Albus Severus Potter"}
      />
      {children}
    </div>
  );
}
