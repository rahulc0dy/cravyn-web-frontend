"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@providers/RestaurantAuthProvider";

const ProtectedRoute = ({ children }) => {
  const { auth } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (
      auth.userType !== "restaurant" ||
      (!auth.loading && !auth.isAuthenticated)
    ) {
      // Redirect to login if not authenticated and not loading
      router.push("/restaurant/login");
    }
  }, [auth, router]);

  if (auth.loading) return <p>Loading...</p>;

  // If authenticated, render the protected content
  return auth.isAuthenticated ? children : null;
};

export default ProtectedRoute;
