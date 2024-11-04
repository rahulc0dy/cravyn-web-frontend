"use client";

import Sidebar from "@components/restaurant/Sidebar";
import { AuthProvider } from "@providers/RestaurantAuthProvider";
import { usePathname } from "next/navigation";

export default function RestaurantLayout({ children }) {
  const path = usePathname();

  const resetLayoutRoutes = ["/restaurant/register"];

  return (
    <AuthProvider>
      {resetLayoutRoutes.includes(path) ? (
        <main>{children}</main>
      ) : (
        <main className="wrapper lg:grid grid-cols-[1fr_3fr] relative gap-4">
          <Sidebar
            restaurantName={"Godrick's hollow"}
            restaurantOwnerName={"Albus Severus Potter"}
          />
          {children}
        </main>
      )}
    </AuthProvider>
  );
}
