"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const SignupPage = () => {
  return (
    <div className="flex items-center justify-center min-h-svh bg-gradient-to-br to-red-500 from-accent-yellow-light">
      <div className="bg-white shadow-md rounded-lg flex flex-col xl:flex-row max-w-5xl mx-5 m-10 xl:min-h-[80svh]  min-w-[50svw]">
        <AnimatePresence>
          <motion.div
            initial={{ x: 500 }}
            animate={{ x: 0 }}
            exit={{ x: -500 }}
            transition={{ duration: 0.3 }}
            className="p-8 xl:w-1/2 w-full flex flex-col justify-center"
          >
            <h2 className="text-2xl font-semibold mb-4 text-center">Sign Up</h2>

            <div className="mb-4">
              <label
                htmlFor="name"
                className="block font-medium text-lg text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="border-gray-300 border-2 p-2 rounded-md w-full"
                placeholder="Enter Your Name"
              ></input>
            </div>

            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block font-medium text-lg text-gray-700"
              >
                Email
              </label>
              <div className="flex mt-1">
                <input
                  type="email"
                  id="email"
                  className=" border-2 border-gray-300 bo p-2 rounded-md w-full"
                  placeholder="Enter Email Address"
                ></input>
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block font-medium text-lg text-gray-700"
              >
                Phone Number
              </label>
              <div className="flex mt-1">
                <input
                  type="number"
                  id="phone-number"
                  className=" border-2 border-gray-300 bo p-2 rounded-md w-full"
                  placeholder="Enter phone number"
                ></input>
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="dob"
                className="block font-medium text-lg text-gray-700"
              >
                Date of Birth
              </label>
              <input
                type="date"
                id="dob"
                className=" border-2 border-gray-300 bo p-2 rounded-md w-full"
              ></input>
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block font-medium text-lg text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className=" border-2 border-gray-300 bo p-2 rounded-md w-full"
                placeholder="Enter Password"
              ></input>
            </div>

            <div className="mb-6">
              <label
                htmlFor="confirm-password"
                className="block font-medium text-lg text-gray-700"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                className=" border-2 border-gray-300 bo p-2 rounded-md w-full"
                placeholder="Confirm Password"
              ></input>
            </div>

            <button className="w-full bg-primary-red text-white py-2 rounded-md font-semibold transition duration-300 hover:bg-secondary-red">
              Continue
            </button>
          </motion.div>

          <motion.div
            initial={{ x: -500 }}
            animate={{ x: 0 }}
            exit={{ x: 500 }}
            transition={{ duration: 0.3 }}
            className="bg-login-background bg-cover xl:rounded-r-lg xl:rounded-bl-none rounded-tr-none rounded-b-lg p-8 gap-4 xl:w-1/2 w-full flex flex-col items-center justify-center"
          >
            <h2 className="text-5xl font-bold text-white mb-4 text-center outline-red-950 drop-shadow">
              Already have an account?
            </h2>
            <p className="text-white mb-6 text-2xl text-center drop-shadow">
              Log in to your account and enjoy our services and offers.
            </p>
            <Link
              className="py-2 text-lg text-primary-red border-primary-red border-2 bg-white rounded-full w-max px-6 font-semibold transition duration-300 hover:bg-primary-red hover:text-white"
              href="/login"
            >
              Sign In
            </Link>
            <Link
              href="/"
              className="font-semibold text-white text-lg drop-shadow"
            >
              Go Home
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SignupPage;
