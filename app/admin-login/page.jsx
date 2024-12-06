"use client";

import { useAuth } from "@providers/UserAuthProvider";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const RestaurantLoginPage = () => {
  const router = useRouter();
  const { auth, login } = useAuth();

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [userRole, setUserRole] = useState("management-team");

  const { mutate, isPending, isError, error, isSuccess, data } = useMutation({
    mutationFn: ({ credentials, userRole }) => login(credentials, userRole),
    onSuccess: () => {
      router.push(
        userRole === "management-team" ? "/management/dashboard" : "/business"
      );
    },

    onError: (error) => {
      console.error("Login failed:", error);
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userRole);

    mutate({ credentials: { email, password }, userRole: userRole });
  };

  return (
    <div
      className={`flex items-center justify-center min-h-svh bg-gradient-to-b ${
        userRole === "business-team" ? "to-purple-500" : "to-secondary-blue"
      } from-white overflow-hidden`}
    >
      <form
        onSubmit={handleSubmit}
        className="p-8 flex flex-col justify-center bg-white rounded-md lg:min-h-[70svh] lg:min-w-[50svh]"
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>

        <div className="mb-4">
          <label
            htmlFor="phone"
            className={`block font-medium text-lg ${
              userRole === "business-team" ? "text-purple-600" : "text-blue-600"
            }`}
          >
            Email
          </label>
          <div className="flex mt-1">
            <input
              type="text"
              id="email"
              className="border-2 border-gray-300 bo p-2 rounded-md w-full  placeholder-shown:invalid:border-gray-300 focus:outline-none  invalid:border-red-400 valid:border-green-500"
              placeholder="Enter Email"
              autoComplete="email"
              required
              onChange={(e) => setEmail(e.target.value)}
              autoFocus
            />
          </div>
        </div>

        <div className="mb-6">
          <label
            htmlFor="password"
            className={`block font-medium text-lg ${
              userRole === "business-team" ? "text-purple-600" : "text-blue-600"
            }`}
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            minLength={6}
            maxLength={20}
            className="border-2 border-gray-300 bo p-2 rounded-md w-full placeholder-shown:invalid:border-gray-300 focus:outline-none  invalid:border-red-400 valid:border-green-500"
            placeholder="Enter Password"
            autoComplete="current-password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label className="block font-medium text-lg text-gray-700">
            Login as:
          </label>
          <div className="flex items-center space-x-4">
            <label
              className="flex items-center cursor-pointer"
              htmlFor="management"
            >
              <input
                id="management"
                type="radio"
                name="role"
                value="management-team"
                onChange={(e) => setUserRole(e.target.value)}
                className="accent-blue-500 form-radio peer h-4 w-4"
                checked={userRole === "management-team"}
              />
              <span className="ml-2 text-gray-700 peer-checked:text-blue-700">
                Management Team
              </span>
            </label>
            <label
              className="flex items-center cursor-pointer"
              htmlFor="business"
            >
              <input
                id="business"
                type="radio"
                name="role"
                value="business-team"
                onChange={(e) => setUserRole(e.target.value)}
                className="accent-purple-500 form-radio text-red-500 h-4 w-4 peer"
                checked={userRole === "business-team"}
              />
              <span className="ml-2 text-gray-700 peer-checked:text-purple-700">
                Business Team
              </span>
            </label>
          </div>
        </div>

        <input
          type="submit"
          value={isPending ? "Logging in" : "Login"}
          className={`cursor-pointer w-full ${
            isPending
              ? "bg-accent-yellow"
              : userRole === "business-team"
              ? "bg-purple-500"
              : "bg-secondary-blue"
          } text-white py-2 rounded-md font-semibold transition duration-300 hover:${
            isPending ? "bg-primary-orange" : "bg-teal-800"
          }`}
        />

        <div className="text-center text-primary-red py-2 h-5 w-max">
          {isError && error.message}
        </div>

        <Link
          href="/"
          className="text-center font-bold text-blue-400 hover:underline transition-all transform-gpu"
        >
          Go to Home Page
        </Link>
      </form>
    </div>
  );
};

export default RestaurantLoginPage;
