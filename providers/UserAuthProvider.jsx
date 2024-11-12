"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import LoadingSpinner from "@components/LoadingSpinner";
import api from "@utils/api";

const UserAuthContext = createContext();

export const UserAuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    isAuthenticated: false,
    loading: true,
    user: null,
    userType: null,
  });

  const router = useRouter();

  // Log in function
  const login = async (credentials, userType) => {
    try {
      const response = await api.post(`/${userType}/login`, credentials, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });

      const { user } = response.data.data;
      setAuth({
        isAuthenticated: true,
        loading: false,
        user: user,
        userType,
      });

      localStorage.setItem(
        "auth",
        JSON.stringify({
          isAuthenticated: true,
          user: user,
          userType,
        })
      );

      console.log(response);

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
      await api.post(`/${auth.userType}/logout`, null, {
        withCredentials: true,
      });
    } catch (error) {
      console.error("Logout failed", error.response?.data || error.message);
    }

    setAuth({ isAuthenticated: false, loading: false, user: null });
    localStorage.removeItem("auth");

    if (shouldRedirect) {
      router.push(
        auth.userType === "management-team" || auth.userType === "business-team"
          ? "/admin-login"
          : `/login`
      );
    }
  };

  // Check login status on initial load
  useEffect(() => {
    const storedAuth = JSON.parse(localStorage.getItem("auth"));

    if (storedAuth?.isAuthenticated) {
      setAuth({ ...storedAuth, loading: false });
    } else {
      // If no auth data in localStorage, set loading to false and redirect to login
      setAuth({ isAuthenticated: false, loading: false, user: null });
    }
  }, [router]);

  return (
    <UserAuthContext.Provider value={{ auth, login, logout }}>
      {auth.loading ? <LoadingSpinner /> : children}
    </UserAuthContext.Provider>
  );
};

export const useAuth = () => useContext(UserAuthContext);
