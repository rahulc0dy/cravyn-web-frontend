"use client";

import { useAuth } from "@providers/UserAuthProvider";

export default function DashBoard() {
  const { auth } = useAuth();
  return (
    <div className="text-center my-auto lg:py-20 py-5">
      <p className="bg-clip-text text-transparent text-6xl font-black bg-gradient-to-r from-primary-blue to-secondary-blue tracking-widest">
        WELCOME BACK
        <br />
        {auth.user.name?.split(" ")[0].toUpperCase() || "ADMIN"}
      </p>
      <p className="text-4xl font-bold text-tertiary-blue mt-28">
        Here is the current summary of the system :
      </p>
      <div className="grid lg:grid-cols-2 mt-14 gap-16 mx-auto">
        <div className="bg-gradient-to-r from-accent-blue to-white rounded-xl border-2 border-blue-medium flex justify-center items-center gap-4 py-6">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth="0.5"
              stroke="white"
              className="size-20"
            >
              <path
                fill="#0037fb"
                fillOpacity="0.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
              />
            </svg>
          </div>
          <div>
            <p className="text-3xl font-semibold pb-2">Active Queries</p>
            <p className="text-5xl font-bold tracking-widest text-blue-700 text-left">
              67
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-accent-blue to-white rounded-xl border-2 border-blue-medium flex justify-center items-center gap-4 py-6 ">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#0037fb"
              fillOpacity="0.6"
              strokeWidth="0.5"
              stroke="white"
              className="size-20"
            >
              <path d="M5.223 2.25c-.497 0-.974.198-1.325.55l-1.3 1.298A3.75 3.75 0 0 0 7.5 9.75c.627.47 1.406.75 2.25.75.844 0 1.624-.28 2.25-.75.626.47 1.406.75 2.25.75.844 0 1.623-.28 2.25-.75a3.75 3.75 0 0 0 4.902-5.652l-1.3-1.299a1.875 1.875 0 0 0-1.325-.549H5.223Z" />
              <path
                fillRule="evenodd"
                d="M3 20.25v-8.755c1.42.674 3.08.673 4.5 0A5.234 5.234 0 0 0 9.75 12c.804 0 1.568-.182 2.25-.506a5.234 5.234 0 0 0 2.25.506c.804 0 1.567-.182 2.25-.506 1.42.674 3.08.675 4.5.001v8.755h.75a.75.75 0 0 1 0 1.5H2.25a.75.75 0 0 1 0-1.5H3Zm3-6a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75v-3Zm8.25-.75a.75.75 0 0 0-.75.75v5.25c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-5.25a.75.75 0 0 0-.75-.75h-3Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div>
            <p className="text-3xl font-semibold pb-2">Partner Requests</p>
            <p className="text-5xl font-bold tracking-widest text-blue-700  text-left">
              23
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
