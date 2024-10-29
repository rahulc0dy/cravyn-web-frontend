"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const LoginPage = () => {
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
                  required
                ></input>
              </div>
            </div>

            <div className="mb-6">
              <label
                htmlFor="password"
                className="block font-medium text-lg text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="border-2 border-gray-300 bo p-2 rounded-md w-full placeholder-shown:invalid:border-gray-300 focus:outline-none  invalid:border-red-400 valid:border-green-500"
                placeholder="Enter Password"
                required
              ></input>
            </div>

            <div className="mb-6">
              <label className="block font-medium text-lg text-gray-700">
                Login as:
              </label>
              <div className="flex items-center space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="role"
                    value="customer"
                    className="accent-red-500 form-radio text-red-500 h-4 w-4"
                  />
                  <span className="ml-2 text-gray-700">Customer</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="role"
                    value="admin"
                    className="accent-red-500 form-radio text-red-500 h-4 w-4"
                  />
                  <span className="ml-2 text-gray-700">Restaurant Owner</span>
                </label>
              </div>
            </div>

            <button className="w-full bg-red-500 text-white py-2 rounded-md font-semibold transition duration-300 hover:bg-red-600">
              Login
            </button>
            <Link href="#" className=" py-4 font-bold text-primary-red">
              Forgot Password?
            </Link>
            <Link href="#" className=" py-4 font-bold text-primary-red">
              Need Help?
            </Link>
          </motion.div>
        </div>
      </AnimatePresence>
    </div>
  );
};

export default LoginPage;
