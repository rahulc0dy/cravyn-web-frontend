"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useAuth } from "@providers/UserAuthProvider";

const HomeNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [isProfileDialogShown, setIsProfileDialogShown] = useState(false);

  const { auth, logout } = useAuth();

  const user = auth?.user;

  const path = usePathname();

  const dialogVariants = {
    hidden: { height: 0, padding: 0 },
    visible: { height: "auto", padding: "1.5rem" },
    exit: { height: 0, padding: 0 },
  };

  useEffect(() => {
    setIsOpen(false);
  }, [path]);

  return (
    <nav
      className={`w-full lg:shadow-none ${path == "/about" && "absolute"} z-50`}
    >
      <div
        className={`wrapper mx-auto py-5 transition-all duration-1000 flex flex-wrap flex-col lg:flex-row justify-between items-center gap-8 lg:border-none ${
          isOpen && "backdrop-blur-xl"
        }`}
      >
        <div className="flex justify-between w-full lg:w-auto items-center">
          <h1 className="font-black text-primary-grey text-2xl">CRAVYN</h1>
          <button
            className="flex lg:hidden focus:outline-none"
            onClick={toggleMenu}
          >
            <AnimatePresence initial={false} mode="wait">
              {!isOpen ? (
                <motion.svg
                  key="open"
                  initial={{ rotate: -180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 180, opacity: 0 }}
                  transition={{ duration: 0.1 }}
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <motion.path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </motion.svg>
              ) : (
                <motion.svg
                  key="close"
                  initial={{ rotate: -180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 180, opacity: 0 }}
                  transition={{ duration: 0.1 }}
                  width="25"
                  height="25"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <motion.path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </motion.svg>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Collapsible Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              layout
              initial={{ y: -500, height: 0 }}
              animate={{ y: 0, height: "auto" }}
              exit={{ y: -500, height: 0 }}
              transition={{ ease: "linear" }}
              className={`lg:hidden lg:w-auto lg:flex-row flex-col lg:items-center gap-8 backdrop-blur-xl`}
            >
              <div className="flex lg:flex-row flex-col gap-10 text-lg font-bold text-grey-dark-2 text-center">
                <Link
                  className="hover:scale-110 transition-all hover:text-primary-grey lg:border-none"
                  href="/"
                >
                  Home
                </Link>
                <Link
                  className="hover:scale-110 transition-all hover:text-primary-grey"
                  href="/"
                >
                  Menu
                </Link>
                <Link
                  className="hover:scale-110 transition-all hover:text-primary-grey"
                  href="/partner-with-us"
                >
                  Partner with us
                </Link>
                <Link
                  className="hover:scale-110 transition-all hover:text-primary-grey"
                  href="/about"
                >
                  About
                </Link>
              </div>
              <div className="flex gap-10 text-lg font-medium py-5 lg:py-0 justify-around">
                <Link
                  href="/about"
                  className="hover:scale-110 transition-all hover:text-primary-grey"
                >
                  <svg viewBox="0 0 50 50" width="20" height="20">
                    <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z" />
                  </svg>
                </Link>
                <Link
                  href="/search"
                  className="hover:scale-110 transition-all hover:text-primary-grey"
                >
                  <svg width="20" height="20" viewBox="0 0 48 48" fill="none">
                    <path
                      d="M2 2H10L15.36 28.78C15.5429 29.7008 16.0438 30.5279 16.7751 31.1166C17.5064 31.7053 18.4214 32.018 19.36 32H38.8C39.7386 32.018 40.6536 31.7053 41.3849 31.1166C42.1162 30.5279 42.6171 29.7008 42.8 28.78L46 12H12M20 42C20 43.1046 19.1046 44 18 44C16.8954 44 16 43.1046 16 42C16 40.8954 16.8954 40 18 40C19.1046 40 20 40.8954 20 42ZM42 42C42 43.1046 41.1046 44 40 44C38.8954 44 38 43.1046 38 42C38 40.8954 38.8954 40 40 40C41.1046 40 42 40.8954 42 42Z"
                      stroke="black"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
              {auth.isAuthenticated ? (
                <>
                  <div className="p-2 text-xl font-bold overflow-clip flex justify-center items-center">
                    {auth.user.name}
                  </div>
                  <button
                    className="font-bold text-red-500 text-lg p-5"
                    onClick={() => logout(path !== "/" && path !== "/about")}
                  >
                    <Image
                      src="/assets/icons/logout.png"
                      width={20}
                      height={20}
                      className="inline-block mr-2"
                      alt="logout"
                    />
                    Logout
                  </button>
                </>
              ) : (
                <div className="w-50 flex lg:flex-row flex-col gap-7 font-semibold">
                  <Link
                    className="w-[8rem] flex items-center justify-center py-2 gap-3 bg-accent-yellow rounded-full text-base hover:scale-110 hover:bg-opacity-65 hover:shadow-lg transition-all"
                    href="/signup"
                  >
                    <Image
                      src="/assets/icons/signup.png"
                      width={20}
                      height={20}
                      alt="Signup icon"
                    />
                    <p>Sign Up</p>
                  </Link>
                  <Link
                    href="/login"
                    className="w-[8rem] flex items-center justify-center py-2 gap-3 bg-primary-red rounded-full text-base text-white hover:scale-110 hover:bg-opacity-85 hover:shadow-lg transition-all"
                  >
                    Login
                  </Link>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <div
          className={`hidden lg:flex lg:flex-row flex-col lg:items-center gap-8 lg:w-4/5 justify-between`}
        >
          <div className="flex lg:flex-row flex-col gap-10 justify-between w-2/5 text-lg font-bold text-grey-dark-2 text-center">
            <Link
              className="hover:scale-110 transition-all hover:text-primary-grey lg:border-none"
              href="/"
            >
              Home
            </Link>
            <Link
              className="hover:scale-110 transition-all hover:text-primary-grey"
              href="#"
            >
              Menu
            </Link>
            <Link
              className="hover:scale-110 transition-all hover:text-primary-grey"
              href="/partner-with-us"
            >
              Partner with us
            </Link>
            <Link
              className="hover:scale-110 transition-all hover:text-primary-grey"
              href="/about"
            >
              About
            </Link>
          </div>
          <div className="flex gap-10 text-lg font-medium py-5 lg:py-0 justify-around">
            <Link
              href="/about"
              className="hover:scale-110 transition-all hover:text-primary-grey"
            >
              <svg viewBox="0 0 50 50" width="20" height="20">
                <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z" />
              </svg>
            </Link>
            <Link
              href="#"
              className="hover:scale-110 transition-all hover:text-primary-grey"
            >
              <svg width="20" height="20" viewBox="0 0 48 48" fill="none">
                <path
                  d="M2 2H10L15.36 28.78C15.5429 29.7008 16.0438 30.5279 16.7751 31.1166C17.5064 31.7053 18.4214 32.018 19.36 32H38.8C39.7386 32.018 40.6536 31.7053 41.3849 31.1166C42.1162 30.5279 42.6171 29.7008 42.8 28.78L46 12H12M20 42C20 43.1046 19.1046 44 18 44C16.8954 44 16 43.1046 16 42C16 40.8954 16.8954 40 18 40C19.1046 40 20 40.8954 20 42ZM42 42C42 43.1046 41.1046 44 40 44C38.8954 44 38 43.1046 38 42C38 40.8954 38.8954 40 40 40C41.1046 40 42 40.8954 42 42Z"
                  stroke="black"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
          {auth.isAuthenticated ? (
            <div className="relative">
              <div
                className="p-2 text-xl font-black bg-rose-400 rounded-full aspect-square h-10 text-white flex justify-center items-center border-grey-dark-3 border-2 cursor-pointer"
                onClick={() => setIsProfileDialogShown(!isProfileDialogShown)}
              >
                {auth.user.name.charAt(0)}
              </div>

              <AnimatePresence>
                {isProfileDialogShown && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={dialogVariants}
                    transition={{ duration: 0.2 }}
                    className="hidden lg:block absolute z-50 bg-white w-max right-0 rounded-lg shadow-lg overflow-hidden"
                  >
                    <p className="py-2 font-bold text-rose-600">{user.name}</p>
                    <hr />
                    <p className="py-2 text-grey-medium">Profile</p>
                    <hr />
                    <p className="py-2 text-grey-medium">Help</p>
                    <hr />
                    <button
                      className="font-bold text-red-500 text-lg py-2"
                      onClick={() => logout(path !== "/" && path !== "/about")}
                    >
                      <Image
                        src="/assets/icons/logout.png"
                        width={20}
                        height={20}
                        className="inline-block mr-2"
                      />
                      Logout
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <div className="w-50 flex lg:flex-row flex-col gap-7 font-semibold">
              <Link
                className="w-[8rem] flex items-center justify-center py-2 gap-3 bg-accent-yellow rounded-full text-base hover:scale-110 hover:bg-opacity-65 hover:shadow-lg transition-all"
                href="/signup"
              >
                <Image
                  src="/assets/icons/signup.png"
                  width={20}
                  height={20}
                  alt="Signup icon"
                />
                <p>Sign Up</p>
              </Link>
              <Link
                href="/login"
                className="w-[8rem] flex items-center justify-center py-2 gap-3 bg-primary-red rounded-full text-base text-white hover:scale-110 hover:bg-opacity-85 hover:shadow-lg transition-all"
              >
                Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default HomeNav;
