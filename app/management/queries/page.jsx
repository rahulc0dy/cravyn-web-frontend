"use client";
import { useState } from "react";

const QueryPage = () => {
  const [activeTab, setActiveTab] = useState("unanswered");

  const unansweredQueries = [
    { name: "Rupesh Paul", question: "Why is my order delayed?" },
    { name: "Amit Kumar", question: "Can I change my delivery address?" },
    { name: "Priya Singh", question: "What payment methods are available?" },
    { name: "Rupesh Paul", question: "Why is my order delayed?" },
    { name: "Amit Kumar", question: "Can I change my delivery address?" },
    { name: "Priya Singh", question: "What payment methods are available?" },
    { name: "Rupesh Paul", question: "Why is my order delayed?" },
    { name: "Amit Kumar", question: "Can I change my delivery address?" },
    { name: "Priya Singh", question: "What payment methods are available?" },
  ];

  const solvedQueries = [
    { name: "Rupesh Paul", question: "How to track my order?" },
    { name: "Amit Kumar", question: "What is the refund policy?" },
    {
      name: "Priya Singh",
      question: "Can I cancel my order after placing it?",
    },
    { name: "Rupesh Paul", question: "Why is my order delayed?" },
    { name: "Amit Kumar", question: "Can I change my delivery address?" },
    { name: "Priya Singh", question: "What payment methods are available?" },
    { name: "Rupesh Paul", question: "Why is my order delayed?" },
    { name: "Amit Kumar", question: "Can I change my delivery address?" },
    { name: "Priya Singh", question: "What payment methods are available?" },
  ];

  const queriesToShow =
    activeTab === "unanswered" ? unansweredQueries : solvedQueries;

  return (
    <div className="p-6 flex justify-center">
      <div className="bg-white w-full rounded-lg shadow-lg">
        {/* Tabs */}
        <div className="flex justify-around border-b border-gray-200">
          <button
            onClick={() => setActiveTab("unanswered")}
            className={`flex-1 py-3 ${
              activeTab === "unanswered"
                ? "border-b-2 border-blue-500 text-blue-500 font-semibold"
                : "text-gray-500"
            }`}
          >
            Unanswered Queries
          </button>
          <button
            onClick={() => setActiveTab("solved")}
            className={`flex-1 py-3 ${
              activeTab === "solved"
                ? "border-b-2 border-blue-500 text-blue-500 font-semibold"
                : "text-gray-500"
            }`}
          >
            Solved Queries
          </button>
        </div>

        {/* Query List with scrollable container */}
        <div className="p-4 space-y-4 w-full lg:overflow-y-scroll bg-accent-blue">
          {queriesToShow.length > 0 ? (
            queriesToShow.map((query, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-white rounded-lg shadow-md"
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
                  {activeTab === "unanswered" ? (
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
                        class="size-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
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
          ) : (
            <p className="text-center text-gray-500">No queries found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default QueryPage;
