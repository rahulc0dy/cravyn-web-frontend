import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import LoadingSpinner from "@components/LoadingSpinner";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    isAuthenticated: false,
    loading: true,
    user: null,
  });

  const router = useRouter();

  // Log in function
  const login = async (credentials) => {
    const response = await fetch(
      process.env.NEXT_PUBLIC_CRAVYN_API_BASE_URL + "/restaurants/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
        // credentials: "include", // Include cookies in request
      }
    );

    if (!response.ok) {
      const errorData = await response.json(); // Get the error response body
      console.error("Error Response:", errorData);
      throw new Error("Login failed: " + errorData.message);
    }

    const data = await response.json();
    const { restaurant } = data.data;
    setAuth({ isAuthenticated: true, loading: false, user: restaurant });

    return data;
  };

  // Log out function
  const logout = async (shouldRedirect = true) => {
    try {
      await fetch(
        process.env.NEXT_PUBLIC_CRAVYN_API_BASE_URL + "/restaurants/logout",
        {
          method: "POST",
          credentials: "include", // Ensure cookies are included for logout
        }
      );
    } catch (error) {
      console.error("Logout failed", error);
    }

    // Reset authentication state
    setAuth({ isAuthenticated: false, loading: false, user: null });

    // Redirect only if shouldRedirect is true
    if (shouldRedirect) {
      router.push("/restaurant/protectedError"); // or "/restaurant/login" if that's preferred
    }
  };

  // Check login status on initial load
  useEffect(() => {
    const verifyToken = async () => {
      try {
        const response = await fetch(
          process.env.NEXT_PUBLIC_CRAVYN_API_BASE_URL +
            "/restaurants/verify-token",
          {
            method: "GET",
            credentials: "include", // Ensure cookies are included in verification
          }
        );

        if (!response.ok) throw new Error("Token verification failed");

        const data = await response.json();
        setAuth({ isAuthenticated: true, loading: false, user: data.user });
      } catch (error) {
        logout(false); // Logout without redirect
      }
    };

    verifyToken();
  }, []);

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {auth.loading ? <LoadingSpinner /> : children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
