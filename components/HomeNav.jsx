import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const HomeNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full shadow-lg lg:shadow-none">
      <div className="w-full max-w-screen-2xl px-5 2xl:px-0 mx-auto py-5 flex flex-wrap flex-col lg:flex-row justify-between items-center gap-8">
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
                  fill="none"
                >
                  <motion.path
                    d="M4 6H20M4 12H20M4 18H20"
                    stroke="#222222"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
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
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.path
                    d="M18.3689 5.64103L5.63548 18.3634M5.63106 5.64103L18.3645 18.3634M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="#000000"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
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
              className={`lg:hidden lg:w-auto lg:flex-row flex-col lg:items-center gap-8`}
            >
              <div className="flex lg:flex-row flex-col gap-10 text-lg font-bold text-grey-dark-2 text-center">
                <Link
                  className="hover:scale-110 transition-all hover:text-primary-grey lg:border-none"
                  href="#"
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
                  href="#"
                >
                  Services
                </Link>
                <Link
                  className="hover:scale-110 transition-all hover:text-primary-grey"
                  href="#"
                >
                  About
                </Link>
              </div>
              <div className="flex gap-10 text-lg font-medium py-5 lg:py-0 justify-around">
                <Link
                  href="#"
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
              <div className="w-50 flex lg:flex-row flex-col gap-7 font-semibold">
                <Link
                  className="w-[8rem] flex items-center justify-center py-2 gap-3 bg-accent-yellow rounded-full text-base hover:scale-110 hover:bg-opacity-65 hover:shadow-lg transition-all"
                  href="/signup"
                >
                  <Image
                    src="/assets/icons/signup.png"
                    width={20}
                    height={20}
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
            </motion.div>
          )}
        </AnimatePresence>
        <div
          className={`hidden lg:w-auto lg:flex lg:flex-row flex-col lg:items-center gap-8`}
        >
          <div className="flex lg:flex-row flex-col gap-10 text-lg font-bold text-grey-dark-2 text-center">
            <Link
              className="hover:scale-110 transition-all hover:text-primary-grey lg:border-none"
              href="#"
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
              href="#"
            >
              Services
            </Link>
            <Link
              className="hover:scale-110 transition-all hover:text-primary-grey"
              href="#"
            >
              About
            </Link>
          </div>
          <div className="flex gap-10 text-lg font-medium py-5 lg:py-0 justify-around">
            <Link
              href="#"
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
          <div className="w-50 flex lg:flex-row flex-col gap-7 font-semibold">
            <Link
              className="w-[8rem] flex items-center justify-center py-2 gap-3 bg-accent-yellow rounded-full text-base hover:scale-110 hover:bg-opacity-65 hover:shadow-lg transition-all"
              href="/signup"
            >
              <Image src="/assets/icons/signup.png" width={20} height={20} />
              <p>Sign Up</p>
            </Link>
            <Link
              href="/login"
              className="w-[8rem] flex items-center justify-center py-2 gap-3 bg-primary-red rounded-full text-base text-white hover:scale-110 hover:bg-opacity-85 hover:shadow-lg transition-all"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HomeNav;
