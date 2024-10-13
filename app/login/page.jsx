"use client";

import Link from "next/link";
import { useState } from "react";

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(false);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleLogin = () => {};
  const handleSignUp = () => {};

  return (
    <div className="flex items-center justify-center p-40 bg-login-background bg-cover shadow-[0_0_10px_40px_rgba(255,255,255,1)_inset] ">
      <div className="grid grid-flow-row lg:grid-cols-2 xl:flex-row min-h-[40rem]">
        {isLogin && (
          <div className="flex flex-col place-items-center text-center gap-10 bg-gradient-to-br from-primary-red to-accent-yellow-light justify-center px-12 py-20">
            <h1 className="text-7xl font-black text-secondary-red">
              New here?
            </h1>
            <h2 className="text-3xl font-bold text-black text-wrap">
              Sign Up with us and get ordering in seconds.
            </h2>
            <Link
              href="#"
              className="border-secondary-red border-4 text-secondary-red rounded-full block w-full p-3 text-lg font-semibold"
              onClick={toggleForm}
            >
              Sign Up
            </Link>
          </div>
        )}
        <form action="" className="flex flex-col gap-5 px-12 py-20  bg-white ">
          <h2 className="font-bold text-xl text-center">Login</h2>
          <div className="font-medium text-xl w-full">
            <label className="block" htmlFor="phone no.">
              Phone No.
            </label>
            <input
              className="block border-solid border-gray-400 border-2 rounded-md py-3 px-5 w-full"
              type="number"
              placeholder="Enter Phone Number"
            />
          </div>
          <div className="font-medium text-xl w-full">
            <label className="block" htmlFor="password">
              Password
            </label>
            <input
              className="block border-solid border-gray-400 border-2 rounded-md py-3 px-5 w-full"
              type="password"
              placeholder="Enter password"
            />
          </div>
          {!isLogin && (
            <div className="font-medium text-xl w-full">
              <label className="block" htmlFor="password">
                Password
              </label>
              <input
                className="block border-solid border-gray-400 border-2 rounded-md py-3 px-5 w-full"
                type="password"
                placeholder="Enter password"
              />
            </div>
          )}

          <input
            type="submit"
            className="block bg-primary-red p-5 rounded-md text-white font-bold cursor-pointer w-full"
            value="Continue"
            onClick={isLogin ? handleLogin : handleSignUp}
          />
        </form>
        {!isLogin && (
          <div className="flex flex-col place-items-center text-center gap-10 bg-gradient-to-br from-primary-red to-accent-yellow-light justify-center px-12 py-20">
            <h1 className="text-7xl font-black text-secondary-red">
              Already have an account?
            </h1>
            <h2 className="text-3xl font-bold text-black text-wrap">
              Log in to your account and enjoy our services and offers.
            </h2>
            <Link
              href="#"
              className="border-secondary-red border-4 text-secondary-red rounded-full block w-full p-3 text-lg font-semibold"
              onClick={toggleForm}
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
