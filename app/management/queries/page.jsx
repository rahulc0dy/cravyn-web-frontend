"use client";

import QueryModal from "@components/management/QueryModal";
import { getQueries } from "@services/managementTeamServices";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const QueryPage = () => {
  const [activeTab, setActiveTab] = useState("restaurant");
  const [modalVisible, setModalVisible] = useState(false);
  const [queryData, setQueryData] = useState({});

  const handleModal = (data) => {
    setModalVisible(true);
    setQueryData(data);
  };

  const [limit, setLimit] = useState(50);
  const [filter, setFilter] = useState("");

  const {
    data: customerQueriesData,
    isLoading: isCustomerQueriesLoading,
    isSuccess: isCustomerQueriesFetched,
    isError: isCustomerQueriesError,
    error: customerQueriesError,
  } = useQuery({
    queryFn: () => getQueries(limit, filter, "customer"),
    queryKey: ["Queries", "Customer", limit, filter],
    retry: 1,
    refetchOnWindowFocus: false,
    refetchIntervalInBackground: true,
    refetchInterval: 10000,
  });

  const {
    data: restaurantQueriesData,
    isLoading: isRestaurantQueriesLoading,
    isSuccess: isRestaurantQueriesFetched,
    isError: isRestaurantQueriesError,
    error: restaurantQueriesError,
  } = useQuery({
    queryFn: () => getQueries(limit, filter, "restaurant"),
    queryKey: ["Queries", "Restaurant", limit, filter],
    retry: 1,
    refetchOnWindowFocus: false,
    refetchIntervalInBackground: true,
    refetchInterval: 10000,
  });

  const restaurantQueries = isRestaurantQueriesFetched
    ? restaurantQueriesData.data.restaurantQueries
    : [];

  const customerQueries = isCustomerQueriesFetched
    ? customerQueriesData.data.customerQueries
    : [];

  return (
    <div className="p-6 flex justify-center">
      <div className="bg-white w-full rounded-lg shadow-lg">
        {/* Tabs */}
        <div className="flex justify-around border-b border-gray-200">
          <button
            onClick={() => setActiveTab("restaurant")}
            className={`flex-1 py-3 ${
              activeTab === "restaurant"
                ? "border-b-2 border-blue-500 text-blue-500 font-semibold"
                : "text-gray-500"
            }`}
          >
            Restaurant Queries
          </button>
          <button
            onClick={() => setActiveTab("customer")}
            className={`flex-1 py-3 ${
              activeTab === "customer"
                ? "border-b-2 border-blue-500 text-blue-500 font-semibold"
                : "text-gray-500"
            }`}
          >
            Customer Queries
          </button>
        </div>

        <div className="flex justify-end gap-10 items-center p-4">
          <label htmlFor="limit">
            Limit
            <select
              id="limit"
              className="border p-2 rounded ml-4 text-gray-500"
              onChange={(e) => setLimit(e.target.value)} // Update limit on change
            >
              <option value={10}>Show 10</option>
              <option value={20}>Show 20</option>
              <option value={50}>Show 50</option>
              <option value={100}>Show all</option>
            </select>
          </label>
          <label htmlFor="filter">
            Filter
            <select
              id="filter"
              className="border p-2 rounded ml-4 text-gray-500"
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="">None</option>
              <option value="unanswered">Unanswered</option>
              <option value="answered">Answered</option>
            </select>
          </label>
        </div>

        {/* Query List with scrollable container */}
        <div className="p-4 space-y-4 w-full lg:overflow-y-scroll bg-accent-blue">
          {activeTab === "restaurant" ? (
            isRestaurantQueriesError ? (
              <p>{restaurantQueriesError.message}</p>
            ) : isRestaurantQueriesLoading ? (
              <p>Loading...</p>
            ) : (
              restaurantQueries.map((query, index) => (
                <div
                  key={query.query_id}
                  className="flex items-center justify-between p-3 bg-white rounded-lg shadow-md"
                  onClick={() => handleModal(query)}
                >
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <svg
                        className="w-6 h-6 text-gray-600"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semi text-lg text-blue-700">
                        {query.name}
                      </p>
                      <p className="text-grey-medium">{query.question}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {!query.answer ? (
                      <>
                        {/* Pending tag in orange */}
                        <svg
                          className="w-5 h-5 text-orange-500"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <circle cx="12" cy="12" r="10" />
                        </svg>
                        <span className="text-sm font-semibold text-orange-500">
                          Pending
                        </span>
                      </>
                    ) : (
                      <>
                        {/* Tick mark and Answered tag in green */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="#50C878"
                          className="size-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                          />
                        </svg>
                        <span className="text-sm font-semibold text-secondary-green">
                          Answered
                        </span>
                      </>
                    )}
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9.29 16.29L13.59 12 9.29 7.71c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l5 5c.39.39.39 1.02 0 1.41l-5 5c-.39.39-1.02.39-1.41 0-.39-.39-.39-1.02 0-1.41z" />
                    </svg>
                  </div>
                </div>
              ))
            )
          ) : isCustomerQueriesError ? (
            <p>{customerQueriesError.message}</p>
          ) : isCustomerQueriesLoading ? (
            <p>Loading...</p>
          ) : (
            customerQueries.map((query, index) => (
              <div
                key={query.query_id}
                className="flex items-center justify-between p-3 bg-white rounded-lg shadow-md"
                onClick={() => handleModal(query)}
              >
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <svg
                      className="w-6 h-6 text-gray-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semi text-lg text-blue-700">
                      {query.name}
                    </p>
                    <p className="text-grey-medium">{query.question}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {!query.answer ? (
                    <>
                      {/* Pending tag in orange */}
                      <svg
                        className="w-5 h-5 text-orange-500"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <circle cx="12" cy="12" r="10" />
                      </svg>
                      <span className="text-sm font-semibold text-orange-500">
                        Pending
                      </span>
                    </>
                  ) : (
                    <>
                      {/* Tick mark and Answered tag in green */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#50C878"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                      <span className="text-sm font-semibold text-secondary-green">
                        Answered
                      </span>
                    </>
                  )}
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9.29 16.29L13.59 12 9.29 7.71c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l5 5c.39.39.39 1.02 0 1.41l-5 5c-.39.39-1.02.39-1.41 0-.39-.39-.39-1.02 0-1.41z" />
                  </svg>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <QueryModal
        closefunc={() => setModalVisible(false)}
        name={queryData.name}
        visible={modalVisible}
        text={queryData.question}
        key={queryData.query_id}
        queryId={queryData.query_id}
        userType={activeTab}
        answerText={queryData.answer}
      />
    </div>
  );
};

export default QueryPage;
