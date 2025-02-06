"use client";

import React, { useEffect, useState } from "react";

const DashPage = () => {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    if (ready) {
      document.title = "You are GAY!";
    }
  }, [ready]);
  return (
    <div className="wrapper flex justify-center items-center">
      {ready ? (
        <video id="hue-hue" autoPlay className="video w-full">
          <source src="/assets/animations/hue-hue-hue.mp4" type="video/mp4" />
        </video>
      ) : (
        <div className="p-10 my-5 rounded-2xl text-center text-2xl space-y-5 bg-teal-100">
          <h2 className="text-blue-600 font-black">Ready?</h2>
          <button
            className="py-2 px-4 text-emerald-50 bg-emerald-700 font-bold text-4xl rounded-xl"
            onClick={() => setReady(true)}
          >
            Yes
          </button>
        </div>
      )}
    </div>
  );
};

export default DashPage;
