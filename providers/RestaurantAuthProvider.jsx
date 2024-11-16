import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import LoadingSpinner from "@components/LoadingSpinner";
import api from "@utils/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    isAuthenticated: false,
    loading: true,
    user: null,
    userType: "",
  });

  const router = useRouter();

  // Log in function
  const login = async (credentials) => {
    try {
      const response = await api.post("/restaurants/login", credentials, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });

      const { restaurant } = response.data.data;
      setAuth({
        isAuthenticated: true,
        loading: false,
        user: restaurant,
        userType: "restaurant",
      });

      localStorage.setItem(
        "auth",
        JSON.stringify({
          isAuthenticated: true,
          user: restaurant,
          userType: "restaurant",
        })
      );

      return response.data;
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      throw new Error(
        "Login failed: " + error.response?.data?.message || "Unexpected error"
      );
    }
  };

  // Log out function
  const logout = async (shouldRedirect = true) => {
    try {
      await api.post("/restaurants/logout", null, { withCredentials: true });
    } catch (error) {
      console.error("Logout failed", error.response?.data || error.message);
    }

    setAuth({ isAuthenticated: false, loading: false, user: null });
    localStorage.removeItem("auth");

    if (shouldRedirect) {
      router.push("/restaurant/login");
    }
  };

  // Refresh token function
  const refreshToken = async () => {
    try {
      const response = await api.get("/restaurants/refresh-token", {
        withCredentials: true,
      });

      const { restaurant } = response.data.data;
      setAuth({
        isAuthenticated: true,
        loading: false,
        user: restaurant,
        userType: "restaurant",
      });

      localStorage.setItem(
        "auth",
        JSON.stringify({
          isAuthenticated: true,
          user: restaurant,
        })
      );

      return response;
    } catch (error) {
      console.error(
        "Token refresh failed:",
        error.response?.data || error.message
      );
      await logout(true);
    }
  };

  // Check login status on initial load
  useEffect(() => {
    const storedAuth = JSON.parse(localStorage.getItem("auth"));

    if (storedAuth?.isAuthenticated && storedAuth.userType === "restaurant") {
      setAuth({ ...storedAuth, loading: false });
    } else {
      // If no auth data in localStorage, set loading to false and redirect to login
      setAuth({
        isAuthenticated: false,
        loading: false,
        user: null,
        userType: "",
      });
    }
  }, [router]);

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {auth.loading ? <LoadingSpinner /> : children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
