"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@providers/UserAuthProvider";

const ProtectedUserRoute = ({ children, userType }) => {
  const { auth } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (
      (!auth.loading && !auth.isAuthenticated) ||
      auth.userType !== userType
    ) {
      // Redirect to login if not authenticated and not loading
      router.push("/login");
    }
  }, [auth, userType, router]);

  if (auth.loading) return <p>Loading...</p>;

  // If authenticated, render the protected content
  return auth.isAuthenticated && auth.userType === userType ? children : null;
};

export default ProtectedUserRoute;
