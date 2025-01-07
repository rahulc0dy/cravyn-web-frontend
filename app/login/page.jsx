"use client";

import { useAuth } from "@providers/UserAuthProvider";
import { useMutation } from "@tanstack/react-query";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("restaurant-owner");
  const [showPassword, setShowPassword] = useState(false);

  const { auth, login } = useAuth();

  const { mutate, data, isSuccess, isError, isPending } = useMutation({
    mutationFn: ({ credentials, userType }) => login(credentials, userType),
    mutationKey: ["userLogin", auth],
    onSuccess: () => {
      userType === "customer"
        ? router.push("/")
        : router.push("/restaurant-owner");
    },
    retry: false,
  });

  const handleLogin = (e) => {
    e.preventDefault();
    mutate({ credentials: { email, password }, userType: userType });
  };

  return (
    <div className="flex items-center justify-center min-h-svh bg-gradient-to-br to-red-500 from-accent-yellow-light overflow-hidden">
      <AnimatePresence mode="wait">
        <div className="bg-white shadow-md rounded-lg flex flex-col xl:flex-row max-w-5xl mx-5 m-10  xl:min-h-[80svh]  min-w-[50svw]">
          <motion.div
            initial={{ x: 500 }}
            animate={{ x: 0 }}
            exit={{ x: -500 }}
            transition={{ duration: 0.3 }}
            className="z-50 bg-login-background bg-cover xl:rounded-l-lg xl:rounded-tr-none rounded-br-none rounded-t-lg p-8 gap-4 xl:w-1/2 w-full flex flex-col items-center justify-center"
          >
            <h2 className="text-5xl font-black text-white mb-4 text-center drop-shadow">
              New here?
            </h2>
            <p className="text-white font-medium mb-6 text-2xl text-center drop-shadow">
              Sign up with us and get ordering in seconds
            </p>
            <Link
              href="/signup"
              className="py-2 text-lg text-primary-red border-primary-red border-2 bg-white rounded-full w-max px-6 font-semibold transition duration-300 hover:bg-primary-red hover:text-white"
            >
              Register
            </Link>
            <Link
              href="/"
              className="font-semibold text-white text-lg drop-shadow"
            >
              Go Home
            </Link>
          </motion.div>

          <motion.div
            initial={{ x: -500 }}
            animate={{ x: 0 }}
            exit={{ x: 500 }}
            transition={{ duration: 0.3 }}
            className="p-8 xl:w-1/2 w-full flex flex-col justify-center bg-white rounded-md"
          >
            <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>

            <form action="submit" onSubmit={handleLogin}>
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block font-medium text-lg text-gray-700"
                >
                  Email Address
                </label>
                <div className="flex mt-1">
                  <input
                    type="email"
                    id="email"
                    className="border-2 border-gray-300 bo p-2 rounded-md w-full  placeholder-shown:invalid:border-gray-300 focus:outline-none  invalid:border-red-400 valid:border-green-500"
                    placeholder="Enter Email Address"
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="current-email"
                    autoSave="current-email"
                    required
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
                    className="border-2 border-gray-300 bo p-2 rounded-md w-full placeholder-shown:invalid:border-gray-300 focus:outline-none  invalid:border-red-400 valid:border-green-500"
                    placeholder="Enter Password"
                    onChange={(e) => setPassword(e.target.value)}
                    minLength={6}
                    required
                    autoComplete="current-password"
                    autoSave="current-password"
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
                        className="size-6"
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
                        className="size-6"
                      >
                        <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                        <path
                          fillRule="evenodd"
                          d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
              <div className="mb-6">
                <p className="block font-medium text-lg text-gray-700">
                  Login as:
                </p>
                <div className="flex items-center space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="role"
                      value="restaurant-owner"
                      className="accent-red-500 form-radio text-red-500 h-4 w-4"
                      checked={userType === "restaurant-owner"}
                      onChange={(e) => setUserType(e.target.value)}
                    />
                    <span className="ml-2 text-gray-700">Restaurant Owner</span>
                  </label>
                </div>
              </div>
              <input
                type="submit"
                className={`w-full ${
                  isPending ? "bg-yellow-500" : "bg-red-500"
                } text-white py-2 rounded-md font-semibold transition duration-300 hover:bg-red-600`}
                value={isPending ? "Pending..." : "Login"}
              />
            </form>
            <Link href="#" className=" py-2 font-bold text-primary-red">
              Forgot Password?
            </Link>
            <Link href="#" className=" py-2 font-bold text-primary-red">
              Need Help?
            </Link>
            <Link
              href="/restaurant/login"
              className=" py-2 font-bold text-primary-red"
            >
              Restaurant Login?
            </Link>
          </motion.div>
        </div>
      </AnimatePresence>
    </div>
  );
};

export default LoginPage;
