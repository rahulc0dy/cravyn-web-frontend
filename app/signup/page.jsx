"use client";

import Popup from "@components/PopUpModal";
import { registerCustomer } from "@services/customerServices";
import { registerRestaurantOwner } from "@services/restaurantOwnerServices";
import { useMutation } from "@tanstack/react-query";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SignupPage = () => {
  const router = useRouter();

  const [userType, setUserType] = useState("customer");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [panNumber, setPanNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { mutate, data, isSuccess, isError, isPending, error } = useMutation({
    mutationFn: ({ user }) =>
      userType === "restaurant-owner"
        ? registerRestaurantOwner(user)
        : registerCustomer(user),
    mutationKey: ["customer", userType],
    onSuccess: () => {
      router.push("/login");
    },
    onError: (error) => {},
  });

  const handleSignup = (e) => {
    e.preventDefault();
    const formattedDob = dateOfBirth
      ? dateOfBirth.split("-").reverse().join("/")
      : "";
    mutate({
      user: {
        name,
        email,
        phoneNumber,
        dateOfBirth: formattedDob,
        panNumber,
        password,
        confirmPassword,
      },
    });
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-svh bg-gradient-to-br to-red-500 from-accent-yellow-light overflow-hidden">
        <div className="bg-white shadow-md rounded-lg flex flex-col xl:flex-row max-w-5xl mx-5 m-10 xl:min-h-[80svh]  min-w-[50svw]">
          <AnimatePresence>
            <motion.form
              key="signupform"
              action="submit"
              onSubmit={handleSignup}
              initial={{ x: 500 }}
              animate={{ x: 0 }}
              exit={{ x: -500 }}
              transition={{ duration: 0.3 }}
              className="p-8 xl:w-1/2 w-full flex flex-col justify-center  bg-white rounded-md"
            >
              <h2 className="text-2xl font-semibold mb-4 text-center">
                Sign Up
              </h2>
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
                  value={name}
                  className="border-gray-300 border-2 p-2 rounded-md w-full placeholder-shown:invalid:border-gray-300  focus:outline-none  invalid:border-red-400 valid:border-green-500"
                  placeholder="Enter Your Name"
                  onChange={(e) => setName(e.target.value)}
                  autoComplete="name"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block font-medium text-lg text-gray-700"
                >
                  Email
                </label>
                <div className="flex mt-1">
                  <input
                    type="email"
                    id="email"
                    className="border-2 border-gray-300 p-2 rounded-md w-full placeholder-shown:invalid:border-gray-300  focus:outline-none  invalid:border-red-400 valid:border-green-500"
                    placeholder="Enter Email Address"
                    pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    autoComplete="current-email"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phone-number"
                  className="block font-medium text-lg text-gray-700"
                >
                  Phone Number
                </label>
                <div className="flex mt-1">
                  <input
                    type="text"
                    id="phone-number"
                    className="border-2 border-gray-300 p-2 rounded-md w-full placeholder-shown:invalid:border-gray-300  focus:outline-none invalid:border-red-400 valid:border-green-500"
                    placeholder="Enter phone number"
                    inputMode="numeric"
                    pattern="[0-9]+"
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    maxLength={10}
                    minLength={10}
                    autoComplete="phone-number"
                  />
                </div>
              </div>
              <div className="mb-4">
                {userType === "customer" ? (
                  <label
                    htmlFor="dob"
                    className="block font-medium text-lg text-gray-700"
                  >
                    Date of Birth
                    <input
                      type="date"
                      id="dob"
                      className=" border-2 border-gray-300 p-2 rounded-md w-full placeholder-shown:invalid:border-gray-300  focus:outline-none valid:border-green-500"
                      required
                      value={dateOfBirth}
                      onChange={(e) => setDateOfBirth(e.target.value)}
                      autoComplete="date-of-birth"
                    />
                  </label>
                ) : (
                  <>
                    <label
                      htmlFor="pan"
                      className="block font-medium text-lg text-gray-700"
                    >
                      Pan Number
                    </label>
                    <input
                      type="text"
                      pattern="^[A-Z]{5}[0-9]{4}[A-Z]{1}$"
                      id="pan"
                      className="border-2 border-gray-300 p-2 rounded-md w-full placeholder-shown:invalid:border-gray-300  focus:outline-none invalid:border-red-400 valid:border-green-500"
                      placeholder="Enter Pan Number"
                      maxLength={10}
                      minLength={10}
                      required
                      value={panNumber}
                      onChange={(e) => setPanNumber(e.target.value)}
                      autoComplete="pan-number"
                    />
                  </>
                )}
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
                  className=" border-2 border-gray-300 p-2 rounded-md w-full placeholder-shown:invalid:border-gray-300 invalid:border-red-400 valid:border-green-500 focus:outline-warning-yellow-light"
                  placeholder="Enter Password"
                  required
                  minLength="6"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="confirm-password"
                  className="block font-medium text-lg text-gray-700"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirm-password"
                  className=" border-2 border-gray-300 p-2 rounded-md w-full placeholder-shown:invalid:border-gray-300 invalid:border-red-400 valid:border-green-500 focus:outline-warning-yellow-light"
                  placeholder="Confirm Password"
                  required
                  minLength="6"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  autoComplete="current-password"
                />
              </div>
              <div className="mb-4">
                <p className="block font-medium text-lg text-gray-700">
                  Login as:
                </p>
                <div className="flex items-center space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="role"
                      value="customer"
                      className="accent-red-500 form-radio text-red-500 h-4 w-4"
                      checked={userType === "customer"}
                      onChange={(e) => setUserType(e.target.value)}
                    />
                    <span className="ml-2 text-gray-700">Customer</span>
                  </label>
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
                value={isPending ? "Signing You Up..." : "Sign Up"}
                className={`w-full ${
                  isPending ? "bg-primary-orange" : "bg-primary-red"
                } text-white py-2 rounded-md font-semibold transition duration-300 hover:${
                  isPending ? "bg-secondary-orange" : "bg-secondary-red"
                }`}
              />
            </motion.form>
            <motion.div
              key="logindivlink"
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
      {isSuccess && (
        <Popup type="success" message={data.message} duration={2000} />
      )}
      {isError && (
        <Popup type="failure" message={error.message} duration={3000} />
      )}
    </>
  );
};

export default SignupPage;
