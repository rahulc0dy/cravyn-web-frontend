"use client";

import Link from "next/link";
import React from "react";

const Error = ({ error, reset }) => {
  return (
    <div className="wrapper text-center text-wrap py-4 md:py-10 space-y-3 space-x-3">
      <h1 className="text-7xl font-black font-sans">Oops</h1>
      <h2 className="text-3xl md:text-5xl font-bold font-sans">
        Something went wrong,
      </h2>
      <h3 className="text-3xl md:text-5xl font-bold font-sans">
        and that's on us.
      </h3>
      <h4 className="text-rose-500">{error.message}</h4>
      <button
        onClick={reset}
        className="text-blue-800 bg-blue-100 shadow-sm rounded-lg px-5 py-2 font-bold"
      >
        Try again
      </button>
      <Link
        href="/"
        className="text-emerald-800 bg-emerald-100 shadow-sm rounded-lg px-5 py-2 font-bold"
      >
        Return home
      </Link>
    </div>
  );
};

export default Error;
