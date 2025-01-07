"use client";

import { useAuth } from "@providers/RestaurantAuthProvider";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const RestaurantLoginPage = () => {
  const { login, auth } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (auth.isAuthenticated) {
      router.push("/restaurant/catalog"); // Redirect if already authenticated
    }
  }, [auth, router]);

  const [registrationNumber, setRegistrationNumber] = useState(null);
  const [password, setPassword] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const { mutate, isPending, isError, error, isSuccess, data } = useMutation({
    mutationFn: (formData) => login(formData),
    onSuccess: async (data) => {},

    onError: (error) => {
      console.error("Login failed:", error);
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const restaurant = {
      registrationNumber,
      password,
    };

    mutate(restaurant);
  };

  return (
    <div className="flex items-center justify-center min-h-svh bg-gradient-to-br to-primary-green from-accent-yellow-light overflow-hidden">
      <div className="bg-white shadow-md rounded-lg flex flex-col xl:flex-row max-w-5xl mx-5 m-10  xl:min-h-[80svh]  min-w-[50svw]">
        <div className="relative  bg-opacity-40 z-50 bg-restaurant-login-bg bg-cover xl:rounded-l-lg xl:rounded-tr-none rounded-br-none rounded-t-lg p-8 gap-4 xl:w-1/2 w-full flex flex-col items-center justify-center">
          <h2 className="text-5xl font-extrabold text-danger-green mb-4 text-center drop-shadow">
            Want to add your Restaurant?
          </h2>
          <p className="font-medium mb-6 text-2xl text-center drop-shadow text-danger-green">
            Grow your restaurant with an online storefront
          </p>
          <Link
            href="/restaurant/register"
            className="py-2 text-lg text-primary-green border-primary-green border-2 bg-white rounded-full w-max px-6 font-semibold transition duration-300 hover:bg-primary-green hover:text-white"
          >
            Register
          </Link>
          <Link
            href="/partner-with-us"
            className="font-semibold text-lg drop-shadow hover:scale-105 hover:font-bold transition-all"
          >
            See Details
          </Link>
        </div>

        <form
          onSubmit={handleSubmit}
          className="p-8 xl:w-1/2 w-full flex flex-col justify-center bg-white rounded-md"
        >
          <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>

          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block font-medium text-lg text-gray-700"
            >
              Registration Number
            </label>
            <div className="flex mt-1">
              <input
                type="text"
                id="registration-number"
                className="border-2 border-gray-300 bo p-2 rounded-md w-full  placeholder-shown:invalid:border-gray-300 focus:outline-none  invalid:border-red-400 valid:border-green-500"
                placeholder="Enter Registration Number"
                autoComplete="registration-number"
                required
                onChange={(e) => setRegistrationNumber(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block font-medium text-lg text-gray-700"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                minLength={6}
                maxLength={20}
                className="border-2 border-gray-300 bo p-2 rounded-md w-full placeholder-shown:invalid:border-gray-300 focus:outline-none  invalid:border-red-400 valid:border-green-500"
                placeholder="Enter Password"
                autoComplete="current-password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="size-6"
                  >
                    <path d="M3.53 2.47a.75.75 0 0 0-1.06 1.06l18 18a.75.75 0 1 0 1.06-1.06l-18-18ZM22.676 12.553a11.249 11.249 0 0 1-2.631 4.31l-3.099-3.099a5.25 5.25 0 0 0-6.71-6.71L7.759 4.577a11.217 11.217 0 0 1 4.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113Z" />
                    <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0 1 15.75 12ZM12.53 15.713l-4.243-4.244a3.75 3.75 0 0 0 4.244 4.243Z" />
                    <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 0 0-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 0 1 6.75 12Z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="size-6"
                  >
                    <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                    <path
                      fill-rule="evenodd"
                      d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <input
            type="submit"
            value={isPending ? "Logging in" : "Login"}
            className={`cursor-pointer w-full ${
              isPending ? "bg-accent-yellow" : "bg-primary-green"
            } text-white py-2 rounded-md font-semibold transition duration-300 hover:${
              isPending ? "bg-primary-orange" : "bg-teal-800"
            }`}
          />
          <div className="text-center text-primary-red py-2 h-5 w-max">
            {isError && error.message}
          </div>
          <Link
            href="#"
            className="w-max py-1 font-bold text-primary-green hover:scale-105 hover:font-extrabold transition-all"
          >
            Forgot Password?
          </Link>
          <Link
            href="#"
            className="w-max py-1 font-bold text-primary-green hover:scale-105 hover:font-extrabold transition-all"
          >
            Need Help?
          </Link>
          <Link
            href="/"
            className="w-max py-1 font-bold text-primary-green hover:scale-105 hover:font-extrabold transition-all"
          >
            Return to Home Page
          </Link>
        </form>
      </div>
    </div>
  );
};

export default RestaurantLoginPage;
