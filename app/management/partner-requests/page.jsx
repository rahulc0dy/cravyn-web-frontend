"use client";
import { useState } from "react";
import Image from "next/image";
import { dataTagSymbol, useQuery } from "@tanstack/react-query";
import { getPartnerRequests } from "@services/managementTeamServices";
import Popup from "@components/PopUpModal";
import ApprovalModal from "@components/management/RestaurantApprovalModal";

const PartnerRequests = () => {
  const [activeTab, setActiveTab] = useState("pending");
  const [verifyStatus, setVerifyStatus] = useState("pending");
  const [showModal, setShowModal] = useState(false);
  const [reqData, setReqData] = useState({});

  const { data, isLoading, isSuccess, isError, error } = useQuery({
    queryKey: ["partner requests", verifyStatus, activeTab],
    queryFn: () => getPartnerRequests(verifyStatus),
    retry: 1,
    refetchOnWindowFocus: false,
    refetchIntervalInBackground: true,
    refetchInterval: 1000,
  });

  const handleModal = (req) => {
    setReqData(req);
    setShowModal(true);
  };

  const requestsToShow = isSuccess ? data.data.restaurantsList : [];

  return (
    <div className="p-6 flex justify-center">
      <div className="bg-white w-full rounded-lg shadow-lg">
        {/* Tabs */}
        <div className="flex justify-around border-b border-gray-200">
          <button
            onClick={() => {
              setActiveTab("pending");
              setVerifyStatus("pending");
            }}
            className={`flex-1 py-3 ${
              activeTab === "pending"
                ? "border-b-2 border-blue-500 text-blue-500 font-semibold"
                : "text-gray-500"
            }`}
          >
            Pending Requests
          </button>
          <button
            onClick={() => {
              setActiveTab("completed");
              setVerifyStatus("");
            }}
            className={`flex-1 py-3 ${
              activeTab === "completed"
                ? "border-b-2 border-blue-500 text-blue-500 font-semibold"
                : "text-gray-500"
            }`}
          >
            All Requests
          </button>
        </div>

        {activeTab === "completed" && (
          <div className="flex justify-end gap-10 items-center p-4">
            <label htmlFor="status">
              Status
              <select
                id="status"
                className="border p-2 rounded ml-4 text-gray-500"
                onChange={(e) => setVerifyStatus(e.target.value)}
              >
                <option value="">None</option>
                <option value="pending">Pending</option>
                <option value="verified">Verified</option>
                <option value="rejected">Rejected</option>
              </select>
            </label>
          </div>
        )}

        {/* Requests List with scrollable container */}
        <div className="p-4 space-y-4 max-h-[80svh] overflow-y-scroll">
          {isLoading ? (
            "Loading..."
          ) : isSuccess ? (
            requestsToShow.map((request, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-white rounded-lg border-2 border-gray-300 cursor-pointer"
                onClick={() => handleModal(request)}
              >
                <div className="flex items-center space-x-3 gap-4 ">
                  <div className=" p-2 rounded-full bg-blue-100">
                    <Image
                      src="/assets/icons/cutlery.png"
                      width={35}
                      height={30}
                      alt="cutlery icon"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-lg text-blue-600">
                      {request.name}
                    </p>
                    <p className=" text-grey-medium">City: {request.city}</p>
                    <p className=" text-grey-medium">Owner: {request.owner}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {/* Status Icon and Label */}
                  {request.verify_status === "verified" ? (
                    <div className="flex items-center space-x-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#50C878"
                        class="size-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                      <span className="text-sm font-semibold text-green-500">
                        Accepted
                      </span>
                    </div>
                  ) : request.verify_status === "pending" ? (
                    <div className="flex items-center space-x-1">
                      {/* Pending Tag */}
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
                    </div>
                  ) : (
                    <div className="flex items-center space-x-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="red"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>

                      <span className="text-sm font-semibold text-red-500">
                        Rejected
                      </span>
                    </div>
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
            <p className="text-center text-gray-500">No requests found.</p>
          )}
        </div>
      </div>

      {isError && (
        <Popup message={error.message} duration={2000} type="failure" />
      )}

      <ApprovalModal
        closeFunc={() => setShowModal(false)}
        visible={showModal}
        reqData={reqData}
      />
    </div>
  );
};

export default PartnerRequests;
