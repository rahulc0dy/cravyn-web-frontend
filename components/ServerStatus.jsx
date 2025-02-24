"use client";

import { usePathname } from "next/navigation";
import { getServerHealth } from "@services/serverHealthCheckService";
import React, { useEffect, useState } from "react";

const ServerStatus = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const path = usePathname();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await getServerHealth();
        setData(response);
        setIsSuccess(true);
      } catch (error) {
        setIsSuccess(false);
        console.error(error);
        setData({ message: error.message });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [path]);

  return (
    <div className="flex items-center" role="status" aria-live="polite">
      <div
        className={`size-3 rounded-full ${
          loading
            ? "bg-yellow-300"
            : isSuccess
            ? "bg-emerald-500"
            : "bg-rose-500"
        } mr-2 align-middle animate-pulse`}
        aria-hidden="true"
      />
      <p className="font-mono text-grey-light-3 text-lg">
        <span className="">Server: </span>
        {loading ? "Loading" : isSuccess ? data?.message : "Down!"}
      </p>
    </div>
  );
};

export default ServerStatus;
