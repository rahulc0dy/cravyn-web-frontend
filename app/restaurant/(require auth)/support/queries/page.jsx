"use client";

import { getQueries } from "@services/restaurantServices";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const QueriesPage = () => {
  const query = {
    query_id: 234,
    name: "skdfj",
    question: "asdfsdfsdf",
    answer: null,
  };

  const { data, isSuccess, isError, isLoading, error } = useQuery({
    queryKey: ["data"],
    queryFn: getQueries,
    retry: false,
    refetchInterval: 100000,
    refetchIntervalInBackground: true,
  });

  return (
    <main className="py-5 px-4 md:px-10">
      <h2 className="text-2xl font-bold text-tertiary-grey pt-7">
        Here are the list of queries you have raised
      </h2>
      <p className="text-lg font-base text-grey-medium pb-7">
        Perhaps you can find the answers in our selected topics.
      </p>
      <div className="p-5 md:p-10 border-4 border-emerald-300 w-full rounded-md flex flex-col gap-6 max-h-[80svh] bg-gradient-to-br from-white via-slate-100 to-green-100 overflow-y-scroll">
        {isError ? (
          <p>{error.message}</p>
        ) : isLoading ? (
          <div>Loading...</div>
        ) : (
          isSuccess &&
          data.data.restaurantQueries.map((query) => (
            <div className="flex flex-col gap-4">
              <p className="bg-gradient-to-r md:text-xl from-accent-green to-accent-yellow-light p-4 self-start rounded-xl rounded-tl-none">
                <span className="font-bold mr-2 block md:text-lg">You:</span>
                {query.question}
              </p>

              {query.answer ? (
                <p className="bg-gradient-to-r md:text-xl from-primary-grey text-white to-emerald-600 p-4 self-end rounded-xl rounded-tr-none">
                  <span className="font-bold text-emerald-100 mr-2 block md:text-lg">
                    {query.manager_name}:
                  </span>
                  {query.answer}
                </p>
              ) : (
                ""
              )}
            </div>
          ))
        )}
      </div>
    </main>
  );
};

export default QueriesPage;
